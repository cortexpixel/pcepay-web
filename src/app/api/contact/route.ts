import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { z } from "zod";

// Next.js App Router metadata for API route execution
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Validation schema for incoming contact form payloads.
// This ensures only valid data reaches the email sending logic.
const contactSchema = z.object({
  title: z.string().min(1).max(20),
  fullName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().max(40).optional().or(z.literal("")),
  enquiryType: z.string().min(1).max(80),
  message: z.string().trim().min(1).max(2000),
});

/**
 * escapeHtml
 * Safely encodes user-provided text for HTML output to prevent injection.
 */
function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * POST
 * API route handler for POST /api/contact.
 * Parses and validates the JSON body, then sends an email via AWS SES.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate incoming payload against schema
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Read required AWS SES configuration from environment variables
    const region = process.env.AWS_SES_REGION;
    const fromEmail = process.env.SES_FROM_EMAIL;
    const toEmail = process.env.SES_TO_EMAIL || "support@pcepay.co.uk";
    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

    if (!region || !fromEmail || !accessKeyId || !secretAccessKey) {
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    // Initialize AWS SES client with explicit credentials
    const ses = new SESClient({
      region,
      credentials: { accessKeyId, secretAccessKey },
    });

    const subject = `New Contact Enquiry: ${data.enquiryType}`;

    // Construct plain text body for the email
    const textBody = [
      `Title: ${data.title}`,
      `Full Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Enquiry Type: ${data.enquiryType}`,
      "",
      "Message:",
      data.message,
    ].join("\n");

    // Construct HTML body with escaped values for safe display
    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px">
        <h2 style="color:#0f1b3d">New Contact Enquiry</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><b>Title</b></td><td>${escapeHtml(data.title)}</td></tr>
          <tr><td><b>Full Name</b></td><td>${escapeHtml(data.fullName)}</td></tr>
          <tr><td><b>Email</b></td><td>${escapeHtml(data.email)}</td></tr>
          <tr><td><b>Phone</b></td><td>${escapeHtml(data.phone || "Not provided")}</td></tr>
          <tr><td><b>Enquiry Type</b></td><td>${escapeHtml(data.enquiryType)}</td></tr>
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      </div>
    `;

    // Send email through AWS SES
    await ses.send(
      new SendEmailCommand({
        Source: fromEmail,
        Destination: { ToAddresses: [toEmail] },
        ReplyToAddresses: [data.email],
        Message: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body: {
            Text: { Data: textBody, Charset: "UTF-8" },
            Html: { Data: htmlBody, Charset: "UTF-8" },
          },
        },
      })
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
