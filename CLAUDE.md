# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 e-commerce storefront application using the App Router, React 19, TypeScript, and Tailwind CSS 4. It integrates with Shopify's Storefront API for product management and checkout. Based on Vercel Commerce, customized for Military Resilience Co.

## Key Commands

### Development
```bash
# Start development server with Turbopack (recommended for faster builds)
pnpm dev --turbopack

# Standard development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Format code
pnpm prettier

# Check code formatting (used as test)
pnpm prettier:check

# Run "tests" (only runs prettier:check - no test framework configured)
pnpm test
```

### Important Notes
- **Package Manager**: Use `pnpm` exclusively (not npm or yarn)
- **No Test Framework**: `pnpm test` only runs Prettier checks
- **Turbopack**: Use `--turbopack` flag for faster development builds
- **Experimental Features**: PPR, inline CSS, and useCache are enabled

## Architecture Overview

### Core Technologies
- **Framework**: Next.js 15.3.0-canary with App Router
- **UI**: React 19.0.0 with Server Components
- **Styling**: Tailwind CSS 4.0.14 with container queries and typography plugins
- **Backend**: Shopify Storefront API integration
- **State Management**: React Context API for cart, server-side state with Shopify
- **Icons**: Heroicons and Lucide React
- **Font**: Geist Sans

### Directory Structure

- `/app` - Next.js App Router pages and API routes
  - `(catalog)/` - Product catalog routes
  - `(info)/` - Static information pages  
  - `product/[handle]/` - Product detail pages
  - `search/` - Search and collection filtering
  - `api/revalidate/` - Webhook endpoint for cache invalidation
  - Uses React Server Components by default
  
- `/components` - Reusable React components
  - `cart/` - Shopping cart with optimistic updates using `useOptimistic`
  - `layout/` - Navigation, footer, and layout components
  - `product/` - Product display components with variant selection
  - `theme/` - Theme provider and toggle for dark mode
  
- `/lib` - Core business logic
  - `shopify/` - Complete Shopify integration
    - `fragments/` - GraphQL fragments (cart, image, product, seo)
    - `queries/` - GraphQL queries organized by domain
    - `mutations/` - Cart operation mutations
    - `types.ts` - TypeScript type definitions
    - `index.ts` - Central API wrapper with placeholder mode support
  - `placeholder/` - Placeholder catalog for development without Shopify
  - `constants.ts` - Application constants and cache tags
  - `utils.ts` - Utility functions
  - `type-guards.ts` - TypeScript type guard functions

### Key Patterns

1. **Server Components First**: Use Server Components by default, client components only when needed (interactivity, browser APIs)

2. **Data Fetching**: All Shopify data fetching happens server-side in `/lib/shopify/index.ts` using GraphQL

3. **Caching Strategy**: 
   - Uses Next.js cache with experimental `'use cache'` directive
   - Cache tags for selective invalidation (`TAGS.products`, `TAGS.collections`)
   - Webhook-based revalidation via `/api/revalidate`

4. **Cart Management**:
   - Server-side cart operations with Shopify API
   - Client-side optimistic updates for immediate feedback
   - Promise-based context API in `/components/cart/cart-context.tsx`
   - Server Actions in `/components/cart/actions.ts`

5. **Styling Convention**:
   - Tailwind CSS classes directly in components
   - Dark mode support with `dark:` prefix and theme toggle
   - Container queries for responsive components
   - Custom focus styles for accessibility

6. **Error Handling**:
   - Type guards in `/lib/type-guards.ts` for Shopify responses
   - Try-catch blocks in data fetching with graceful fallbacks
   - Placeholder mode for development without Shopify

## Environment Configuration

### Placeholder Mode (Development without Shopify)

The site can run in "Placeholder Mode" for frontend development without Shopify credentials:

When `SHOPIFY_PLACEHOLDER_MODE="true"`:
- All Shopify GraphQL calls are disabled
- Cart and checkout actions return safe no-ops
- Site renders normally without requiring Shopify credentials
- Perfect for UI/component development
- Uses placeholder catalog from `/lib/placeholder/catalog.ts`

### Full Shopify Integration

To enable full Shopify integration, set these environment variables in `.env.local`:
```
SHOPIFY_PLACEHOLDER_MODE="false"
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
SITE_NAME="Your Site Name"
COMPANY_NAME="Your Company Name"
SHOPIFY_REVALIDATION_SECRET=your-secret
```

**Files affected by placeholder mode:**
- `/app/layout.tsx` - Conditionally fetches cart
- `/components/cart/actions.ts` - Server actions return placeholder messages
- `/lib/shopify/index.ts` - Short-circuits all Shopify API calls

See `/shopify.md` for complete details on switching between modes.

## Next.js Configuration

### Experimental Features Enabled
- **PPR (Partial Prerendering)**: Progressive page rendering
- **Inline CSS**: CSS inlining for faster first paint
- **useCache**: Experimental caching directive

### Image Optimization
- Formats: AVIF and WebP
- Remote patterns configured for:
  - Shopify CDN (`cdn.shopify.com`)
  - Unsplash (`images.unsplash.com`)

## Performance Considerations

- Experimental Partial Prerendering (PPR) enabled
- Optimistic UI updates for cart operations
- Image optimization with Next.js Image component
- Suspense boundaries for progressive loading
- Server Components reduce client bundle size
- Turbopack for faster development builds

## Development Guidelines

1. **TypeScript**: Strict mode enabled with `noUncheckedIndexedAccess` - ensure all new code is properly typed
2. **Components**: Follow existing patterns in `/components` - server components by default
3. **Shopify Integration**: All API calls through `/lib/shopify/index.ts` functions
4. **Error Handling**: Use type guards from `/lib/type-guards.ts` for Shopify responses
5. **Caching**: Tag pages appropriately for cache invalidation using constants from `/lib/constants.ts`
6. **Accessibility**: Maintain focus management and semantic HTML patterns
7. **Dark Mode**: Use `dark:` prefix for dark mode styles, components should support both themes
8. **Server Actions**: Place in separate files with 'use server' directive

## Brand Customization

### Military Resilience Co Branding
- Logos in `/public/logos/` (black/white variants)
- Custom navigation with military-themed links
- Brand-specific content pages (About, FAQ, shipping policies)
- Placeholder catalog includes military-themed products

### Theme System
- Theme provider at `/components/theme/theme-provider.tsx`
- Theme toggle component with sun/moon icons
- No-flash theme script prevents hydration flicker
- Dark mode class applied to html element

## Additional Documentation

- `/shopify.md` - Detailed Shopify integration and placeholder mode guide
- `/memory-bank/` - Project context and documentation:
  - `projectbrief.md` - Project overview and goals
  - `techContext.md` - Technical stack details
  - `systemPatterns.md` - Architecture patterns
  - `productContext.md` - Product information