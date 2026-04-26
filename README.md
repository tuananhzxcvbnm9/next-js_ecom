# Asteria Storefront (Next.js E-commerce Demo)

Production-ready e-commerce storefront UI built with:

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui-style component architecture
- Zustand cart state

## Features

- Home page: premium hero, featured categories, best sellers
- Product listing: search, filter by category, sort by price
- Product detail: gallery, variants, add to cart
- Cart: quantity update, subtotal, empty cart UX
- Checkout UI: customer info, shipping, mock payment form
- Loading skeletons for products/cart routes
- Mock product data modeled to be backend-ready

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Architecture notes

- `lib/data/products.ts`: mock domain data, categories, featured groups
- `store/cart-store.ts`: Zustand persisted cart state and totals helper
- `components/storefront/*`: reusable storefront components
- `components/ui/*`: foundation UI primitives (button/input/badge/skeleton)

## Next steps for production

- Connect to backend catalog API and CMS
- Add real checkout payment provider (Stripe/Adyen)
- Add auth/profile and order history
- Add server-side analytics and A/B testing
