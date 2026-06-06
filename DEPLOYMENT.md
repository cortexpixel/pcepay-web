# Next.js Build & Deployment Guide

This document covers everything needed to build, run, and deploy the
**Peace Payroll** Next.js application in `/nextjs`.

---

## 1. Prerequisites

| Tool             | Minimum version | Notes                              |
| ---------------- | --------------- | ---------------------------------- |
| Node.js          | 18.17 (LTS 20+) | Required by Next.js 14             |
| npm / pnpm / bun | latest          | Pick one and stick with it         |
| Git              | latest          | Source control                     |

Verify locally:

```bash
node --version
npm --version
```

---

## 2. Install dependencies

```bash
cd nextjs
npm install
# or: pnpm install
# or: bun install
# or: yarn install
```

---

## 3. Environment variables

The project does not currently require any environment variables, but if you
add integrations (forms, analytics, CMS, etc.) put them in `.env.local`:

```bash
# nextjs/.env.local
NEXT_PUBLIC_SITE_URL=https://www.pcepay.co.uk
# e.g. NEXT_PUBLIC_GA_ID=G-XXXXXXX
```

Rules:
- Variables prefixed `NEXT_PUBLIC_` are exposed to the browser.
- Everything else stays server-side only.
- Never commit `.env.local`.

---

## 4. Local development

```bash
npm run dev
```

The app is served at <http://localhost:3000> with Hot Module Reloading.

---

## 5. Production build

```bash
npm run build      # produces .next/
npm run start      # serves the production build on :3000
```

`npm run build` will:

1. Type-check the project.
2. Statically pre-render every route under `src/app/**/page.tsx` that can be
   rendered without a request (all of them, in this project).
3. Optimise CSS/JS bundles into `.next/static`.

If the build fails, fix the reported file/line and re-run.

---

## 6. Deployment options

### 6.1 Vercel (recommended, zero-config)

1. Push the repository to GitHub / GitLab / Bitbucket.
2. Go to <https://vercel.com/new> and import the repo.
3. **Important**: when prompted for the *Root Directory*, choose `nextjs`.
4. Framework preset: **Next.js** (auto-detected).
5. Build command: `npm run build` (default).
6. Output directory: leave blank (Vercel handles `.next`).
7. Click **Deploy**.

Subsequent commits to the main branch trigger automatic deploys, and pull
requests get preview URLs.

### 6.2 Netlify

1. Install the official Next.js runtime: it ships by default with Netlify.
2. In Netlify → *Add new site → Import from Git*.
3. Base directory: `nextjs`
4. Build command: `npm run build`
5. Publish directory: `nextjs/.next`
6. Deploy.

### 6.3 Docker (self-hosted, any cloud)

Create `nextjs/Dockerfile`:

```dockerfile
# ----- deps -----
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ----- build -----
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ----- run -----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "start"]
```

Build & run:

```bash
docker build -t peace-payroll-next ./nextjs
docker run -p 3000:3000 peace-payroll-next
```

### 6.4 Static export (optional)

If you ever need a 100% static site (no Node server), add this to
`next.config.mjs`:

```js
const nextConfig = { output: 'export', images: { unoptimized: true } };
```

Then:

```bash
npm run build       # writes static files into ./out
```

Deploy the `out/` folder to any static host (GitHub Pages, S3 + CloudFront,
Cloudflare Pages, Nginx, etc.).

> Static export disables features that require a server (middleware, ISR,
> on-demand revalidation, `next/image` optimisation, API routes). The current
> project does not use any of those.

### 6.5 Traditional VPS (PM2 + Nginx)

```bash
# On the server
git clone <repo> && cd <repo>/nextjs
npm ci
npm run build
npm install -g pm2
pm2 start "npm run start" --name peace-payroll
pm2 save && pm2 startup
```

Nginx reverse-proxy snippet:

```nginx
server {
  listen 80;
  server_name www.pcepay.co.uk;

  location / {
    proxy_pass         http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header   Upgrade $http_upgrade;
    proxy_set_header   Connection 'upgrade';
    proxy_set_header   Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Then terminate TLS with Let's Encrypt (`certbot --nginx`).

---

## 7. Custom domain

After the first deploy:

- **Vercel** → Project → Settings → Domains → add `www.pcepay.co.uk`.
- **Netlify** → Site → Domain management → Add custom domain.
- **Self-hosted** → point an `A` / `CNAME` record at your server / load balancer.

Always serve over HTTPS and add a 301 redirect from the apex to the canonical
host (`www`).

---

## 8. Post-deploy checklist

- [ ] `/` and every nav link render with the correct content.
- [ ] Direct deep links (e.g. `/services/payroll-services`) load without 404.
- [ ] Page refreshes work on every route.
- [ ] `robots.txt` and `sitemap.xml` are served at the root.
- [ ] Open Graph + canonical tags appear in the rendered HTML.
- [ ] Lighthouse score: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 95.
- [ ] Contact form submits successfully (once wired to a backend).
- [ ] Cookie consent banner appears on first visit.

---

## 9. Troubleshooting

| Symptom                                            | Fix                                                                 |
| -------------------------------------------------- | ------------------------------------------------------------------- |
| `Module not found: '@/...'`                        | Ensure you run commands from `nextjs/` and `tsconfig.json` paths are intact. |
| `Error: useState/useEffect only works in Client…`  | Add `"use client";` to the top of the offending file.               |
| Fonts render as fallback                           | Check the `<link>` tags in `src/app/layout.tsx` and your CSP rules. |
| Images return 404                                  | Confirm they exist in `public/assets/` and the path starts with `/assets/...`. |
| Slow build                                         | Delete `.next` and `node_modules`, then `npm ci && npm run build`.  |

---

## 10. Updating from the Vite project

When you change a shared page in the Vite project, mirror the change in
`nextjs/src/pages/<SamePage>.tsx`. All other code (components, hooks, lib,
styles) is structurally identical, so most edits drop in as-is.

If you add a new route in the Vite project's `App.tsx`, also add the matching
`src/app/<route>/page.tsx` here using the same one-line template:

```tsx
"use client";
import Page from "@/pages/MyNewPage";
export default function NextPage() { return <Page />; }
```
