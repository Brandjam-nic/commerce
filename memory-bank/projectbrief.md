# Project Brief

Title: Military Resilience E‑commerce (Next.js + Shopify via Vercel Commerce base)

Overview:
This project is a Next.js 14+ app using the App Router, TypeScript, and the Vercel Commerce (Shopify) integration. The repository currently mirrors the Vercel Commerce codebase structure with Shopify GraphQL fragments, queries, and mutations. The objective is to adapt this foundation for the "Military Resilience" product context.

Goals:
- Establish a Memory Bank to persist project knowledge between sessions.
- Clarify product vision, scope, and target audience for Military Resilience.
- Map current technical architecture and constraints to guide implementation.
- Track progress and next steps efficiently.

Scope:
- Frontend storefront with product pages, search, cart, and checkout integrations.
- Shopify backend for product/catalog data and cart/checkout flows.
- Brand customization (theme, content, images, copy) for Military Resilience.
- SEO, performance, and accessibility as ongoing priorities.

Non‑Goals (initially):
- Custom backend beyond Shopify GraphQL.
- Headless CMS integration (unless later requested).
- Complex multi‑store internationalization beyond what Shopify/Vercel provides out of the box.

Key Stakeholders:
- Product owner: Military Resilience brand.
- Development: This repository and contributors.
- Customers: Military personnel, families, and supporters.

Assumptions:
- Shopify storefront API credentials will be provided via environment variables (see .env.example).
- We will evolve structure and features based on brand requirements.
- The codebase follows Vercel Commerce patterns with minimal deviations unless documented.

Risks:
- Misalignment between brand needs and Vercel Commerce assumptions.
- Shopify API rate limits or model constraints.
- SEO/content requirements requiring CMS or custom data sources.

Success Criteria:
- Branded storefront deployable on Vercel.
- Accurate product data rendering from Shopify.
- Stable add-to-cart and cart operations.
- Clear documentation in Memory Bank.
