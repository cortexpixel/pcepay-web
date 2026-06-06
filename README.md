# Peace Payroll — Next.js

This directory contains the Next.js 14 (App Router) port of the original Vite + React project.
The UI, styling, content, and SEO are kept identical — only the framework around it changed.

## What changed vs the Vite project

| Vite project                          | Next.js project                                    |
| ------------------------------------- | -------------------------------------------------- |
| `src/main.tsx` + `src/App.tsx`        | `src/app/layout.tsx` + `src/app/providers.tsx`     |
| `react-router-dom` `<Routes>`         | File-based routes in `src/app/**/page.tsx`         |
| `react-router-dom` `<Link>`, hooks    | Shim at `src/lib/router-shim.tsx` (re-exports Next.js APIs as `Link`, `NavLink`, `useLocation`, `useNavigate`, …) |
| `import logo from '@/assets/x.png'`   | Assets live in `public/assets/` and are referenced as string paths |
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
├─ next.config.mjs
├─ tailwind.config.ts
├─ postcss.config.js
├─ tsconfig.json
└─ package.json
```

## Local development

```bash
cd nextjs
npm install          # or pnpm install / bun install / yarn
npm run dev          # http://localhost:3000
```

Useful scripts:

| Script             | What it does                       |
| ------------------ | ---------------------------------- |
| `npm run dev`      | Start the dev server (HMR)         |
| `npm run build`    | Production build into `.next/`     |
| `npm run start`    | Serve the production build         |
| `npm run lint`     | ESLint with `next/core-web-vitals` |

See `DEPLOYMENT.md` for full deployment instructions (Vercel, Netlify, Docker, self-hosted).
