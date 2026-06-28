import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const enquirySchema = z.object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(255),
    phone: z.string().max(40).optional().or(z.literal("")),
    subject: z.string().min(1).max(100),
    message: z.string().trim().min(1).max(2000),
});

function escapeHtml(s: string) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parsed = enquirySchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid input", details: parsed.error.flatten().fieldErrors },
                { status: 400 }
            );
        }
        const data = parsed.data;

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

        const ses = new SESClient({
            region,
            credentials: { accessKeyId, secretAccessKey },
        });

        const subject = `New General Enquiry: ${data.subject}`;
        const textBody = [
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Phone: ${data.phone || "Not provided"}`,
            `Subject: ${data.subject}`,
            "",
            "Message:",
            data.message,
        ].join("\n");

        const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px">
        <h2 style="color:#0f1b3d">New General Enquiry</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><b>Name</b></td><td>${escapeHtml(data.name)}</td></tr>
          <tr><td><b>Email</b></td><td>${escapeHtml(data.email)}</td></tr>
          <tr><td><b>Phone</b></td><td>${escapeHtml(data.phone || "Not provided")}</td></tr>
          <tr><td><b>Subject</b></td><td>${escapeHtml(data.subject)}</td></tr>
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      </div>
    `;

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
        console.error("General Enquiry API error:", err);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}
