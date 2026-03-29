import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
    const siteUrl = site ? site.toString() : '';
    const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap-index.xml\n`;
    return new Response(robotsTxt);
};
