import type { Metadata, Viewport } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/marketing';
import { site, pageMetadata } from '@/lib/site';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata(
    'Equipt — Discipleship starts with a conversation',
    'Helping churches make disciples through intentional conversations. A simpler way to grow in faith together.',
  ),
  applicationName: 'Equipt',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Equipt',
              url: site.url,
              email: site.email,
              description:
                'Helping churches make disciples through intentional conversations.',
            }).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
