// src/app/api/sitemap.ts
import { NextResponse } from 'next/server';
import { getCacheControlHeader } from '@/lib/cache';

/**
 * Generate a sitemap for the website
 * This helps search engines discover and index all pages
 */
export async function GET() {
  const baseUrl = 'https://saddam-portfolio.com';
  
  // Define all routes in the application
  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/contact-us',
  ];
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;
  
  // Return the sitemap with appropriate headers
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': getCacheControlHeader('static'),
    },
  });
}
