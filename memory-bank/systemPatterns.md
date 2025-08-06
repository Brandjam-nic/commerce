# System Patterns

Architecture Overview:
- Framework: Next.js App Router (server components by default, client components where interactivity is required).
- Language: TypeScript.
- Styling: Tailwind CSS via PostCSS config (postcss.config.mjs) and globals.css.
- Data Layer: Shopify Storefront GraphQL API (lib/shopify with fragments, queries, mutations).
- Deployment Target: Vercel (assumed, inherited from Vercel Commerce).
- Rendering Strategy: ISR/SSG with on-demand revalidation endpoint at app/api/revalidate/route.ts; dynamic routes for product and CMS-like pages.
- Media: Next.js Image + Shopify image data.

Key Directories:
- app/: Route handlers, layouts, error boundaries, and dynamic segments ([page], product/[handle], search, api/revalidate).
- components/: Reusable UI and domain components (cart, product, layout, grid, icons).
- lib/: Utilities, constants, type guards, and Shopify SDK wrapper with GraphQL documents.
- fonts/: Local font assets (Inter-Bold.ttf).

Important Routes:
- app/page.tsx: Home page.
- app/product/[handle]/page.tsx: Product detail.
- app/search/(index + [collection]): Search and collection listing.
- app/api/revalidate/route.ts: Revalidation hook (likely POST).

Design Patterns in Use:
- Server/Client Component Split: Heavy data fetching in server components; interactive UI (cart, variant selectors) as client components with "use client".
- Context Providers: Cart and Product contexts for scoped state and actions.
- GraphQL Document Collocation: Fragments under lib/shopify/fragments; queries/mutations under queries/mutations directories.
- UI Composition: Small, focused components (grid, tile, price, label) composed into pages.
- ISR + On-demand Revalidation: Stale-while-revalidate for product pages and content.

Data Flow:
- Components call lib/shopify functions that compose GraphQL queries with fragments.
- Responses are mapped to typed models (lib/shopify/types.ts) and rendered in server components.
- Cart operations performed via mutations and persisted via cookies/local storage (implementation detail in components/cart).

Error Handling:
- app/error.tsx: Global error boundary page.
- Loading states: app/search/loading.tsx and components/loading-dots.ts.

SEO:
- Route-specific Open Graph images via opengraph-image.tsx files.
- sitemap.ts and robots.ts at app root.

Caching & Revalidation:
- Static generation for product and collection pages with dynamic rendering where needed based on params.
- Revalidation endpoint to purge ISR caches on updates.

Accessibility Patterns:
- Semantic components (label, price, prose).
- Keyboard and screen-reader friendly interactions expected; verify during implementation.

Customizations for Military Resilience (Planned):
- Theme colors, typography, and logo via layout and globals.css.
- Footer and Navbar menus adapted to brand.
- Home page content sections for mission, best sellers, and collections.
- Size guides and policy pages as [page] dynamic routes or static pages.

Deviation Policy:
Any change diverging from Vercel Commerce defaults must be documented here with rationale, impacted files, and migration notes.

Open Items:
- Confirm exact cart persistence and checkout flow customizations.
- Define revalidation events from Shopify (webhook) to app/api/revalidate.
