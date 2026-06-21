# PCE Pay — Next.js

This directory contains the Next.js 14 (App Router) port of the original Vite + React project.
The UI, styling, content, and SEO are kept identical — only the framework around it changed.

## What changed vs the Vite project

| Vite project                          | Next.js project                                    |
| ------------------------------------- | -------------------------------------------------- |
| `src/main.tsx` + `src/App.tsx`        | `src/app/layout.tsx` + `src/app/providers.tsx`     |
| `react-router-dom` `<Routes>`         | File-based routes in `src/app/**/page.tsx`         |
| `react-router-dom` `<Link>`, hooks    | Shim at `src/lib/router-shim.tsx` (re-exports Next.js APIs as `Link`, `NavLink`, `useLocation`, `useNavigate`, …) |
| `import logo from '@/assets/x.png'`  | Assets live in `public/assets/` and are referenced as string paths |
| `index.html` + Vite plugins           | `src/app/layout.tsx` head + `next.config.mjs`      |
| `vercel.json` SPA rewrite             | Not needed — Next.js handles routing natively      |

All page components in `src/pages/*.tsx` are reused verbatim from the original project,
so future edits should stay in sync between both versions easily.

## Folder structure

```
nextjs/
├─ src/
│  ├─ app/                # Next.js App Router entries (one folder per route)
│  │  ├─ layout.tsx       # Root layout (fonts, Toaster, providers)
│  │  ├─ providers.tsx    # React Query provider (client component)
│  │  ├─ page.tsx         # /  → renders src/pages/Index.tsx
│  │  ├─ about/page.tsx
│  │  ├─ services/page.tsx
│  │  ├─ services/payroll-services/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ ...              # one folder per route
│  │  ├─ not-found.tsx    # custom 404
│  │  └─ globals.css      # Tailwind + design tokens
│  ├─ components/         # Same as Vite project (marked `"use client"`)
│  ├─ hooks/              # Same as Vite project
│  ├─ lib/
│  │  ├─ utils.ts         # cn(), tailwind-merge
│  │  └─ router-shim.tsx  # react-router-dom → Next.js adapter
│  └─ pages/              # The original page components (Index, About, …)
├─ public/
│  └─ assets/             # Migrated from src/assets/
├─ .ebextensions/
│  └─ node.config         # Elastic Beanstalk Node.js + PORT config
├─ Procfile               # EB start command: web: npm run start:prod
├─ next.config.mjs
├─ tailwind.config.ts
├─ postcss.config.js
├─ tsconfig.json
└─ package.json
```

## Local development

```bash
cp .env.example .env.local   # copy env template and fill in your SES credentials
npm ci                        # clean install
npm run dev                   # http://localhost:3000
```

Useful scripts:

| Script               | What it does                                        |
| -------------------- | --------------------------------------------------- |
| `npm run dev`        | Start the dev server with HMR (port 3000)           |
| `npm run build`      | Production build into `.next/`                      |
| `npm run start:prod` | Serve the production build (reads `$PORT` env var)  |
| `npm run lint`       | ESLint with `next/core-web-vitals`                  |

> `npm run start` uses the default Next.js port. `npm run start:prod` is used in production
> and on Elastic Beanstalk — it reads the `$PORT` environment variable that EB injects.

## Deployment — AWS Elastic Beanstalk (manual)

The app runs as a live Node.js server behind an AWS Application Load Balancer. Deployments
are done manually: build locally, create a ZIP, upload to Elastic Beanstalk.

### Build and package

```bash
# 1. Clean install and build
npm ci
npm run build

# 2. Create the deployment ZIP (includes the .next/ build output)
zip -r eb-deploy.zip \
  .ebextensions \
  .next \
  Procfile \
  package.json \
  package-lock.json \
  next.config.mjs \
  tailwind.config.ts \
  postcss.config.js \
  tsconfig.json \
  components.json \
  src \
  public
```

> **Important:** `.next/` must be included in the ZIP. There is no CI/CD build step on AWS —
> the build happens locally and the output is uploaded directly.

### Upload to Elastic Beanstalk

1. Open the AWS Console → Elastic Beanstalk → `pcepay-web` → `pcepay-web-prod`
2. Click **Upload and deploy**
3. Choose `eb-deploy.zip` and click **Deploy**

EB performs a rolling deploy — no downtime on a load-balanced environment.

### Environment variables

All secrets and config are stored as Elastic Beanstalk environment properties, not in
committed files. To update them:

EB Console → Environment → **Configuration** → **Software** → Environment properties → Apply

Required variables (mirror your `.env.local` for production values):

| Variable                | Description                        |
| ----------------------- | ---------------------------------- |
| `NODE_ENV`              | `production`                       |
| `PORT`                  | `3000` (EB injects this)           |
| `AWS_SES_ACCESS_KEY_ID` | SES IAM user access key            |
| `AWS_SES_SECRET_KEY`    | SES IAM user secret key            |
| `AWS_SES_REGION`        | e.g. `eu-west-1`                   |
| `SES_FROM_EMAIL`        | e.g. `support@pcepay.co.uk`        |

### Infrastructure overview

| Component         | Detail                                              |
| ----------------- | --------------------------------------------------- |
| Platform          | Node.js 22 on Amazon Linux 2023                     |
| Environment type  | Load balanced (required for HTTPS / ACM)            |
| SSL               | ACM certificate on the ALB, port 443                |
| Email             | AWS SES (`@aws-sdk/client-ses`)                     |
| DNS               | GoDaddy — `www` CNAME → EB load balancer DNS name  |
| Domain forwarding | GoDaddy forwards `pcepay.co.uk` → `www.pcepay.co.uk` (301) |

For the full deployment guide including first-time setup of ACM, SES, IAM, DNS cutover,
and rollback procedures, see `DEPLOYMENT.md`.