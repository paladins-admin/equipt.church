# Equipt marketing website

A responsive Next.js App Router website for Equipt: intentional conversations, lifelong discipleship.

## Stack

Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui (Base UI), Framer Motion, Lucide icons. The requested Next.js runtime replaces the scaffold's default Vinext build scripts. The superseded Vinext/Cloudflare runtime was removed; Sites serves the static export.

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
- `lib/legal.ts`: draft legal sections
- `app/globals.css`: design tokens and responsive styles
- `public/`: icons
- `.openai/hosting.json`: Sites project and static export settings

## Before launch

1. Review feature descriptions against the actual released iOS app.
2. Replace the explicitly labelled illustrative app screens with verified screenshots. Use locally optimised WebP/AVIF files, meaningful alt text, fixed dimensions, and lazy loading below the fold.
3. Set real App Store and TestFlight links in `lib/site.ts`; buttons remain disabled until supplied.
4. Set social URLs when available. No invented social profiles are linked.
5. Confirm pricing and plan inclusions; no payment flow is included.
6. Complete bracketed legal placeholders and obtain appropriate review. Confirm the operator, jurisdiction, app data collection/sharing, providers, retention, children's privacy, subscription terms, and deletion timeframes. These drafts are not final app compliance documents.
7. Confirm the app's in-app account-deletion flow and update the web instructions.
8. Replace planned release notes with actual shipped versions, dates, and changes.
9. Add testimonials only with permission; no fabricated endorsements are displayed.
10. Run browser/device/accessibility and Lighthouse checks before public launch. A 95+ Lighthouse score is a target, not a measured result.

## Contact forms

Contact and support forms prepare a `mailto:` email addressed to **hello@core25.com.au**. The user must open their email app and send it. A copy-message fallback is provided. This website does not claim to submit, store, or deliver messages on its own. No backend or external form service is configured.

## SEO

Every page has a title, description, canonical URL, Open Graph and Twitter summary metadata. Organisation structured data, sitemap, robots file, favicon, Apple touch icon, and web manifest are included. No fabricated reviews or app ratings are emitted. Canonicals target https://www.equipt.church.

## Hosting

Sites hosts the validated static export. Source is also kept in the private GitHub repository. GitHub CI checks changes but does not automatically publish to Sites. Publish a new validated Sites version after source updates.
