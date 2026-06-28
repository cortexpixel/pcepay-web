import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const quoteSchema = z.object({
    companyName: z.string().trim().min(1).max(100),
    country: z.string().trim().min(1).max(100),
    contactPerson: z.string().trim().min(1).max(100),
    businessEmail: z.string().trim().email().max(255),
    phone: z.string().trim().min(1).max(40),
    employeeCount: z.string().trim().min(1).max(50),
    ir35Status: z.string().min(1).max(50),
    industry: z.string().trim().min(1).max(100),
    message: z.string().max(2000).optional().or(z.literal("")),
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
        const parsed = quoteSchema.safeParse(body);
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

        const subject = `New Payroll Quote Request: ${data.companyName}`;
        const rows: [string, string][] = [
            ["Company Name", data.companyName],
            ["Country", data.country],
            ["Contact Person", data.contactPerson],
            ["Business Email", data.businessEmail],
            ["Phone", data.phone],
            ["No. of Employees/Contractors", data.employeeCount],
            ["IR35 Status", data.ir35Status],
            ["Industry", data.industry],
        ];

        const textBody = [
            ...rows.map(([k, v]) => `${k}: ${v}`),
            "",
            "Message:",
            data.message || "(none)",
        ].join("\n");

        const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px">
        <h2 style="color:#0f1b3d">New Payroll Quote Request</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          ${rows
            .map(
                ([k, v]) =>
                    `<tr><td><b>${escapeHtml(k)}</b></td><td>${escapeHtml(v)}</td></tr>`
            )
            .join("")}
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap">${escapeHtml(data.message || "(none)")}</p>
      </div>
    `;

        await ses.send(
            new SendEmailCommand({
                Source: fromEmail,
                Destination: { ToAddresses: [toEmail] },
                ReplyToAddresses: [data.businessEmail],
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
        console.error("Payroll Quote API error:", err);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}
