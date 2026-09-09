import type { MetadataRoute } from 'next';
import { site, pageInfo } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', ...Object.keys(pageInfo).map((s) => '/' + s + '/')].map(
    (path) => ({
      url: site.url + path,
      changeFrequency: 'monthly',
      priority: path === '/' ? 1 : 0.6,
    }),
  );
}
