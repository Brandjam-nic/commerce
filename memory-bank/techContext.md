# Tech Context

Stack Summary:
- Framework: Next.js (App Router), React, TypeScript
- Styling: Tailwind CSS (via PostCSS), global styles in app/globals.css
- Data: Shopify Storefront GraphQL API (lib/shopify)
- Build/Deploy: Vercel (assumed), Node.js LTS
- Package Manager: npm/pnpm (lockfiles present for both; choose one and standardize)
- Fonts: Local font assets (fonts/Inter-Bold.ttf)

Project Structure (key paths):
- app/: Next.js routes, layouts, metadata (sitemap.ts, robots.ts), error.tsx
- app/[page]/: dynamic CMS-like pages
- app/product/[handle]/: product detail page
- app/search/: search and collection pages
- app/api/revalidate/route.ts: on-demand ISR revalidation
- components/: UI, cart, layout, product, grid, icons
- lib/: constants, utils, type-guards, Shopify GraphQL (fragments/queries/mutations)
- lib/shopify/types.ts: Type definitions
- postcss.config.mjs, tailwind via globals.css

Node and Scripts:
- Node: Use active LTS (v18+ recommended for Next 14+; v20 supported)
- Scripts (see package.json; confirm exact entries):
  - dev: Next dev server
  - build: next build
  - start: next start
  - lint: eslint (if configured)
  - postcss/tailwind are handled by Next/Tailwind integration

Environment Variables (from .env.example; fill with actual values):
- SHOPIFY_STORE_DOMAIN="your-store.myshopify.com"
- SHOPIFY_STOREFRONT_ACCESS_TOKEN="..."
- SHOPIFY_GRAPHQL_API_VERSION="2023-10" (example; align with lib configs)
- NEXT_PUBLIC_SITE_URL="https://your-site.vercel.app" (for OG, sitemap)
- VERCEL_ENV / NODE_ENV as set by platform
- Any additional Vercel Commerce toggles if present (feature flags)

Environment Setup:
1) Create .env.local at repo root and copy keys from .env.example.
2) Ensure Shopify Storefront API is enabled and token has read permissions for products, collections, and write for cart if required by mutations.
3) If webhooks are used for revalidation, configure secret and Vercel environment variable and point Shopify admin webhook to /api/revalidate.

Local Development:
- Install deps (choose one):
  - npm ci (if using npm with package-lock.json)
  - pnpm install (if standardizing on pnpm with pnpm-lock.yaml)
- Run:
  - npm run dev (or pnpm dev)
- Open http://localhost:3000
- Verify product page loading with a valid handle and search routes.

TypeScript & Linting:
- tsconfig.json present; paths/types should align with lib/shopify types
- ESLint/Prettier: if configured via Next defaults; confirm rules and add project-specific ones if needed.

Performance Considerations:
- Use server components for data fetching where possible to minimize client JS.
- Leverage Next.js Image for Shopify images.
- Cache and ISR settings per route; document revalidate times.
- Lighthouse budgets TBD.

Testing:
- Not yet configured; consider:
  - Unit: Vitest/Jest
  - E2E: Playwright/Cypress
  - Accessibility: axe-core checks in CI

Deployment:
- Vercel project connected to GitHub repository (origin currently points to vercel/commerce, adjust to this repo’s remote when forked).
- Set environment variables in Vercel dashboard.
- Configure Preview/Production environments with respective Shopify stores if needed.

Constraints & Decisions:
- Follow Vercel Commerce architectural patterns to reduce maintenance.
- Avoid server mutations that conflict with Shopify checkout flow.
- Document any cross-cutting changes in systemPatterns.md.

Open Items / TODO:
- Decide on package manager (npm vs pnpm) and remove the other lockfile.
- Add CI workflow (lint/typecheck/build) via GitHub Actions.
- Document exact Shopify API version and update cadence.
- Add analytics and consent management (if required).
