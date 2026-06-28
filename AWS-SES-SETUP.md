# Contact / Payroll Quote / General Enquiry Forms via Next.js API Routes + AWS SES

All three site forms post to internal Next.js API routes which send email
through **Amazon SES** using the AWS SDK v3:

| Form | Trigger location | API route | Email subject |
| --- | --- | --- | --- |
| Contact form | `/contact` page | `src/app/api/contact/route.ts` | `New Contact Enquiry: <enquiryType>` |
| Request a Payroll Quote | `PayrollQuoteDialog` (CTA on most pages) | `src/app/api/payroll-quote/route.ts` | `New Payroll Quote Request: <companyName>` |
| General Enquiry | `GeneralEnquiryDialog` (CTA on most pages) | `src/app/api/general-enquiry/route.ts` | `New General Enquiry: <subject>` |

All routes send **to** `support@pcepay.co.uk` (override with `SES_TO_EMAIL`),
**from** `SES_FROM_EMAIL`, and set `Reply-To` to the visitor's email so a
single reply goes straight back to them.

---

## 1. Install the AWS SDK

```bash
cd nextjs
npm install @aws-sdk/client-ses
```

---

## 2. Create an SES sender identity

1. Sign in to the [AWS SES console](https://console.aws.amazon.com/ses/).
2. Pick a region (e.g. `eu-west-1`, `eu-west-2`, `us-east-1`). Remember it —
   it must match `AWS_SES_REGION`.
3. **Verified identities → Create identity**:
   - **Domain** (recommended): verify `pcepay.co.uk`. SES gives you DKIM CNAME
     records to add at your DNS provider. After they propagate, you can send
     from any address `@pcepay.co.uk` (e.g. `noreply@pcepay.co.uk`).
   - **Email address** (quickest): verify a single sender like
     `noreply@pcepay.co.uk`. AWS emails a confirmation link.
4. Verify the **recipient** `support@pcepay.co.uk` too while you are in
   **sandbox** mode (see step 4).

---

## 3. Create an IAM user with SES send permission

1. IAM console → **Users → Create user** (e.g. `pcepay-ses-sender`).
   Programmatic access only — no console login needed.
2. Attach this inline policy:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": ["ses:SendEmail", "ses:SendRawEmail"],
         "Resource": "*"
       }
     ]
   }
   ```

3. Create an **access key** for this user and copy the
   `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`. Treat them as secrets.

---

## 4. Move out of the SES sandbox (for production)

New SES accounts are in **sandbox**: you can only send to verified addresses
and are capped at 200 emails / 24h.

To go live: SES console → **Account dashboard → Request production access**.
Approval typically takes a business day.

---

## 5. Environment variables

Create `nextjs/.env.local` (never commit this file):

```bash
AWS_SES_REGION=eu-west-1
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
SES_FROM_EMAIL=noreply@pcepay.co.uk        # must be a verified SES identity
SES_TO_EMAIL=support@pcepay.co.uk          # where enquiries are delivered
```

On Vercel / Netlify / your VPS, add the same variables in the project's
**Environment Variables** section. Redeploy after adding them.

---

## 6. How it works

- `src/pages/Contact.tsx` posts JSON to `/api/contact`.
- `src/app/api/contact/route.ts`:
  - Validates the payload with `zod`.
  - Builds plain-text + HTML email bodies.
  - Sends via `@aws-sdk/client-ses` using `SendEmailCommand`.
  - Sets `Reply-To` to the visitor's email so replies go straight to them.
- On success the user sees a success toast; on failure, a destructive toast
  suggests emailing `support@pcepay.co.uk` directly.

---

## 7. Local testing

```bash
cd nextjs
npm run dev
```

Open <http://localhost:3000/contact> and submit the form. You should see:

- Browser network tab: `POST /api/contact` returns **200**.
- An email arriving at `SES_TO_EMAIL`.

If you get **403 / MessageRejected: Email address is not verified**, you are
still in the sandbox — verify the recipient or request production access.

---

## 8. Troubleshooting

| Error                                       | Cause / Fix                                                 |
| ------------------------------------------- | ----------------------------------------------------------- |
| `Email service is not configured`           | One of the env vars above is missing. Add it and redeploy.  |
| `MessageRejected: Email address is not verified` | Sandbox mode. Verify sender/recipient or request production. |
| `SignatureDoesNotMatch` / `InvalidClientTokenId` | Wrong access key / secret. Recreate and update env vars.   |
| `Could not connect to the endpoint URL`     | Wrong `AWS_SES_REGION`. Match the region of your identity.  |
| Email lands in spam                         | Verify the **domain** (not just an address) so DKIM signs the mail; add an SPF TXT record: `v=spf1 include:amazonses.com ~all`. |

---

## 9. Security notes

- Never expose `AWS_SECRET_ACCESS_KEY` to the browser — variables without the
  `NEXT_PUBLIC_` prefix stay server-side, which is exactly what we want.
- The IAM user is limited to `ses:SendEmail` / `ses:SendRawEmail` — no other
  AWS access.
- Input is validated with `zod` and HTML-escaped before being placed in the
  email body to prevent injection.
- Consider adding a rate-limit (e.g. Upstash Redis or a simple in-memory LRU)
  if the endpoint receives abuse.
