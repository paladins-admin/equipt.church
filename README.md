# Equipt marketing website

A responsive Next.js App Router website for Equipt: intentional conversations, lifelong discipleship.

## Stack

Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui (Base UI), Framer Motion, Lucide icons. The requested Next.js runtime replaces the scaffold's default Vinext build scripts. The superseded Vinext/Cloudflare runtime was removed; GitHub Pages serves the static export.

## Development

Use Node.js 22.13 or newer. Run `npm ci`, then `npm run dev`.
Run `npm run build` to generate the complete static site in `out/`.
Run `node scripts/check-export.mjs` to check routes, local links, metadata, and assets.
CI runs the build and export checks on pushes and pull requests.

## Structure

- `app/page.tsx`: homepage
- `app/[slug]/page.tsx`: all other marketing, support, and policy pages
- `components/`: shared navigation, footer, cards, motion, FAQ, email form, carousel, and interface previews
- `components/ui/`: installed shadcn primitives
- `lib/site.ts`: canonical domain, contact email, App Store/TestFlight/social URLs, feature and FAQ copy
- `lib/legal.ts`: published policy text supplied by CORE25 PTY LTD
- `app/globals.css`: design tokens and responsive styles
- `public/`: icons
- `DNS-SETUP.md`: GitHub Pages setup and GoDaddy records

## Before launch

1. Review feature descriptions against the actual released iOS app.
2. Replace the explicitly labelled illustrative app screens with verified screenshots. Use locally optimised WebP/AVIF files, meaningful alt text, fixed dimensions, and lazy loading below the fold.
3. Set real App Store and TestFlight links in `lib/site.ts`; buttons remain disabled until supplied.
4. Set social URLs when available. No invented social profiles are linked.
5. Confirm pricing and plan inclusions; no payment flow is included.
6. Privacy Policy, Terms of Use, and Acceptable Use Policy contain the operator-supplied text dated 13 September 2026.
7. Data-deletion guidance reflects local device storage; Core25 cannot remotely recover or delete that data.
8. Replace planned release notes with actual shipped versions, dates, and changes.
9. Add testimonials only with permission; no fabricated endorsements are displayed.
10. Run browser/device/accessibility and Lighthouse checks before public launch. A 95+ Lighthouse score is a target, not a measured result.

## Contact forms

The contact form prepares a `mailto:` email addressed to **hello@core25.com.au**. The user must open their email app and send it. A copy-message fallback is provided. This website does not claim to submit, store, or deliver messages on its own. No backend or external form service is configured.

Support enquiries go to **hello@core25.com.au** and privacy enquiries to **hello@core25.com.au**.

## SEO

Every page has a title, description, canonical URL, Open Graph and Twitter summary metadata. Organisation structured data, sitemap, robots file, favicon, Apple touch icon, and web manifest are included. No fabricated reviews or app ratings are emitted. Canonicals target https://www.equipt.church.

## Hosting

GitHub Pages hosts the static export. GitHub Actions builds and checks pull requests, and automatically publishes pushes to main. Set the custom domain to www.equipt.church in repository Settings → Pages. See DNS-SETUP.md for the exact GoDaddy records. Contact forms use email composition and need no server.
