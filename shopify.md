# Shopify Integration: Placeholder Mode vs. Full Integration

This project is based on Vercel Commerce (Next.js + Shopify). Because Shopify credentials are not yet configured, a non-Shopify “Placeholder Mode” has been implemented so the site can render and be developed without runtime 500 errors. This document explains what was changed, how the placeholder behaves, and exactly how to switch back to the proper Shopify-powered version when ready.

---

## What Placeholder Mode Does

When `SHOPIFY_PLACEHOLDER_MODE="true"`:
- All server-side Shopify GraphQL calls are disabled.
- The layout skips calling `getCart()` on each request.
- Cart and checkout server actions become safe no-ops with clear messages.
- The site renders normally (home, layout, UI) without requiring Shopify credentials.

This allows frontend development (navigation, layout, theming, components) to proceed without a live Shopify store.

---

## Changes Implemented

1) app/layout.tsx
- Added a placeholder flag and guarded `getCart()`:
  - If placeholder mode is on, do not fetch cart; use `Promise.resolve(undefined)` to avoid network calls and hydrate a safe cart context.

Excerpt:
- Introduced:
  - `const PLACEHOLDER_MODE = process.env.SHOPIFY_PLACEHOLDER_MODE === 'true';`
- Behavior:
  - `const cart = PLACEHOLDER_MODE ? Promise.resolve(undefined) : getCart();`

2) components/cart/actions.ts
- All server actions no-op in placeholder mode (instead of throwing or hitting Shopify):
  - addItem, removeItem, updateItemQuantity, redirectToCheckout return friendly messages (e.g., “Cart disabled in placeholder mode”).
  - createCartAndSetCookie sets a dummy `cartId` cookie when in placeholder mode to avoid incidental references from breaking.

Excerpt:
- Introduced:
  - `const PLACEHOLDER_MODE = process.env.SHOPIFY_PLACEHOLDER_MODE === 'true';`
- Each action starts with a guard:
  - `if (PLACEHOLDER_MODE) { return 'Cart disabled in placeholder mode'; }`
- Dummy cart cookie in placeholder:
  - `(await cookies()).set('cartId', 'placeholder-cart');`

3) lib/shopify/index.ts
- Central guard and safe behavior for all Shopify calls:
  - Introduced `PLACEHOLDER_MODE` and used it to short-circuit `shopifyFetch` so it returns a benign `{ status: 200, body: { data: {} } }` structure without network calls.
  - `getCart()` now returns `undefined` immediately in placeholder mode and also swallows errors from misconfigurations to keep SSR stable.

Excerpts:
- `const PLACEHOLDER_MODE = process.env.SHOPIFY_PLACEHOLDER_MODE === 'true';`
- In `shopifyFetch`:
  - If placeholder, return early with empty data instead of performing `fetch()`.
- In `getCart`:
  - If placeholder, return `undefined`.
  - Try/catch around fetch to return `undefined` on errors.

4) .env.example
- Added the new flag:
  - `SHOPIFY_PLACEHOLDER_MODE="true"`
- Existing keys remain to document correct Shopify setup:
  - `SHOPIFY_STORE_DOMAIN`, `SHOPIFY_STOREFRONT_ACCESS_TOKEN`, `SHOPIFY_REVALIDATION_SECRET`, etc.

---

## How to Use Placeholder Mode

1) Create `.env.local` at the repository root (if not present).
2) Ensure the following is set:
   - `SHOPIFY_PLACEHOLDER_MODE="true"`
   - You can leave the Shopify keys empty for now.

3) Start the dev server:
   - `npm run dev`
4) Navigate to:
   - `http://localhost:3000`

The site should render without 500 errors. Cart and checkout functionality will be disabled.

---

## Switching to the Proper Shopify Integration

When you are ready to run the full Shopify integration:

1) Configure Shopify Storefront API
   - In your Shopify admin, create or find a Storefront API token with required scopes (read products, collections; write cart if required).
   - Identify your store domain:
     - e.g., `your-store.myshopify.com`

2) Populate `.env.local`
   - Set your Shopify variables (secrets masked below):
     - `SHOPIFY_STORE_DOMAIN="your-store.myshopify.com"`
     - `SHOPIFY_STOREFRONT_ACCESS_TOKEN="shpat_xxx...xxx"`
     - `SHOPIFY_REVALIDATION_SECRET="some-random-secret"` (optional, only if you configure revalidation webhooks)
     - Optionally set `NEXT_PUBLIC_SITE_URL` (used for OG metadata and sitemap), otherwise local fallback applies.
   - Disable placeholder mode:
     - `SHOPIFY_PLACEHOLDER_MODE="false"`

3) Restart the dev server
   - Stop and re-run:
     - `npm run dev`

4) Verify
   - Home page should load.
   - Product pages should render with real Shopify data.
   - Cart operations should add, remove, and update line items as expected.
   - Optional: Wire webhooks to `app/api/revalidate/route.ts` and set `SHOPIFY_REVALIDATION_SECRET` on both Shopify and Vercel for on-demand ISR.

5) Deployment (Vercel)
   - Add the same environment variables in the Vercel project settings.
   - Ensure `SHOPIFY_PLACEHOLDER_MODE` is “false” in production.
   - Optionally use separate Shopify credentials for Preview vs Production environments.

---

## Common Pitfalls and Debugging

- 500 errors with messages like `{cause: ..., status: 500, message: ..., query: ...}` typically indicate:
  - Missing or invalid `SHOPIFY_STORE_DOMAIN` or `SHOPIFY_STOREFRONT_ACCESS_TOKEN`.
  - Domain must be a valid Shopify shop domain (the code ensures `https://` is prefixed).
  - Token must be a Storefront Access Token (not Admin token).

- Environment variables not picked up:
  - Ensure `.env.local` exists at the repo root and restart the dev server after changes.
  - For Vercel, set vars in the dashboard and redeploy.

- Revalidation:
  - If you plan to use Shopify webhooks for cache invalidation, configure Shopify to call:
    - `POST https://your-deployed-domain/api/revalidate?secret=YOUR_SECRET`
  - Set `SHOPIFY_REVALIDATION_SECRET` in both Shopify and the app environment.

---

## Code Locations Touched

- app/layout.tsx
  - PLACEHOLDER_MODE flag and conditional `getCart()` usage.

- components/cart/actions.ts
  - Guards in all server actions and dummy cart cookie in placeholder mode.

- lib/shopify/index.ts
  - Global placeholder guard for `shopifyFetch` and resilient `getCart`.

- .env.example
  - Added `SHOPIFY_PLACEHOLDER_MODE`.

No irreversible changes were made; all changes are controlled by a single environment flag.

---

## Reverting Placeholder Mode

To fully revert to the “proper” Shopify-powered version:
- Set `SHOPIFY_PLACEHOLDER_MODE="false"` in `.env.local` (and in Vercel for production).
- Ensure `SHOPIFY_STORE_DOMAIN` and `SHOPIFY_STOREFRONT_ACCESS_TOKEN` are valid.
- Restart the dev server.

The code will automatically resume normal Shopify GraphQL behavior.

---

## Optional: Early Validation

You can optionally enforce early validation to fail fast with a helpful message (rather than silent placeholder rendering) by calling the helper in `lib/utils.ts`:

- In a server-only file loaded at boot (e.g., `app/layout.tsx` top-level):
  - `import { validateEnvironmentVariables } from 'lib/utils';`
  - Guarded by placeholder mode, e.g.:
    - `if (process.env.SHOPIFY_PLACEHOLDER_MODE !== 'true') validateEnvironmentVariables();`

This is not applied by default in placeholder mode to keep the site rendering without credentials.

---

## Checklist to Go Live

- Set `SHOPIFY_PLACEHOLDER_MODE="false"`.
- Provide valid `SHOPIFY_STORE_DOMAIN`.
- Provide valid `SHOPIFY_STOREFRONT_ACCESS_TOKEN`.
- Optional: Configure `SHOPIFY_REVALIDATION_SECRET` and Shopify webhooks.
- Verify product page routing, search, cart actions, and checkout.
- Set env vars in Vercel for production and preview environments.
- Remove any temporary/dummy data if added during placeholder development.

---

If you want, we can also add a small banner in development when placeholder mode is active to make the mode visible to developers. Let me know and I’ll add it behind a dev-only check.

---

# Changelog of App-side Changes (Placeholder Mode)

This section tracks all non-Shopify edits for visibility and easy rollback when switching to the proper Shopify integration.

Date: 2025-06-08

1) Environment and guards
- Added `SHOPIFY_PLACEHOLDER_MODE` flag to `.env.example`.
- app/layout.tsx:
  - Wrapped app with ThemeProvider.
  - Added no-flash theme inline script to apply theme before hydration.
  - In placeholder mode, skipped calling `getCart()` (passes `undefined` to CartProvider).
- lib/shopify/index.ts:
  - Introduced `PLACEHOLDER_MODE` guard.
  - `shopifyFetch` short-circuits and returns empty `data` in placeholder mode.
  - `getCart` returns `undefined` in placeholder mode and swallows network errors.

2) Cart/server actions
- components/cart/actions.ts:
  - All actions (add/remove/update/checkout/create) no-op in placeholder mode with friendly messages.
  - `createCartAndSetCookie` sets a dummy `cartId` when in placeholder mode.

3) Branding
- Navbar: components/layout/navbar/index.tsx
  - Replaced brand with:
    - Mobile: `/logos/IconBlack.png` at 32px. Dark mode uses inverted icon styling.
    - Desktop: `/logos/LogoBlack.png` with auto switch to `/logos/LogoWhite.png` in dark mode.
  - Inserted ThemeToggle beside Cart.
  - Added static links: Collections, About, FAQ.
- Footer: components/layout/footer.tsx
  - Replaced mark with wordmark that adapts to dark mode.
  - Added a brand strip with `/logos/PushForward.png` and `/logos/PushForwardSide.png`.

4) Theme switching
- Added lucide-react dependency for icons (installed with `--legacy-peer-deps`).
- Created:
  - components/theme/theme-provider.tsx (applies/removes `dark` class, persists to localStorage).
  - components/theme/theme-toggle.tsx (Sun/Moon toggle).

5) Placeholder catalog and pages
- lib/placeholder/catalog.ts:
  - Collections: Caps, T‑Shirts, Hoodies, Accessories.
  - Products per client email (caps; tees S–3XL with variants; hoodies S–3XL; towel).
  - AUD currency, “TBD” prices, placeholder image path.
  - Helpers: `getProductsByCollection`, `getProductByHandle`.
- Catalog routes:
  - app/(catalog)/collections/page.tsx — collections overview.
  - app/(catalog)/collections/[collection]/page.tsx — collection listing grid.
  - app/product/[handle]/page.tsx — product detail with specs and variants, Add to Cart disabled.
- Homepage:
  - components/home/placeholder-home.tsx — features 4 items per collection.
  - app/page.tsx — now renders PlaceholderHome + Footer, removing Shopify-dependent homepage logs.

6) Content pages (top-level)
- app/about/page.tsx — brand vision and Vietnam rationale.
- app/(info)/faq/page.tsx — not a charity; light proceeds messaging; Vietnam rationale; sizes note.
- app/shipping/page.tsx — Australia Post, $10 standard (TBC), timeframes, caveats.
- app/returns/page.tsx — 30-day faulty-only; no change-of-mind/incorrect size returns.
- app/terms/page.tsx — generic terms.
- app/privacy/page.tsx — YD/AS Colour-style hybrid.
- app/size-guide/page.tsx — placeholder until size chart is finalized.

7) Known differences vs. Shopify mode
- Search, hidden homepage feature collections, and real pricing/inventory are inactive in placeholder mode.
- Cart/checkout flows are disabled and display “placeholder” messaging.
- Once Shopify is configured and placeholder mode is disabled, product data and homepage features should be re-wired to live collections/products.

# Steps to Switch to Shopify (when ready)

1) Shopify data setup
- Create products and variants in Shopify for:
  - Caps, T‑Shirts (S–3XL), Hoodies (S–3XL), Accessories (towel).
- Create collections in Shopify:
  - Caps, T‑Shirts, Hoodies, Accessories.
- Optional: Create hidden collections to power homepage features:
  - `hidden-homepage-featured-items`
  - `hidden-homepage-carousel`

2) Environment variables
- In `.env.local` (and Vercel):
  - `SHOPIFY_PLACEHOLDER_MODE="false"`
  - `SHOPIFY_STORE_DOMAIN="your-store.myshopify.com"`
  - `SHOPIFY_STOREFRONT_ACCESS_TOKEN="shpat_xxx"`
  - Optional: `SHOPIFY_REVALIDATION_SECRET="..."`

3) Re-enable live data
- app/page.tsx:
  - Optionally restore previous homepage sections (carousel, featured grid) tied to Shopify collections.
- Ensure search and product grids use `lib/shopify` queries.

4) Verify
- Product pages render live data and variants.
- Homepage “hidden” collections populate correctly (no console logs).
- Cart/checkout works (server actions use `lib/shopify`).
- Policies/pages align with Shopify policy pages if you decide to link to them.

# Open Items

- Replace placeholder images with production assets.
- Set final prices in AUD.
- Add the size chart when available and update `/size-guide`.
- Decide if homepage should use hidden Shopify collections or dynamic picks.
