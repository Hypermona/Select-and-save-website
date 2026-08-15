import type { APIRoute } from 'astro';
import { getAllPosts } from '../lib/blogs';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://select-and-save.bunnycal.com';
  const posts = getAllPosts();

  const staticPages = [
    '',
    '/privacy',
    '/blog',
    '/compare',
    '/compare/raindrop',
    '/compare/omnivore',
    '/compare/anybox',
    '/compare/webbites'
  ];

  const staticUrls = staticPages.map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('');

  const blogUrls = posts.map(post => `
    <url>
      <loc>${baseUrl}/blog/${post.slug}</loc>
      <lastmod>${post.publishedDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${blogUrls}
</urlset>`;

  return new Response(sitemapXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
