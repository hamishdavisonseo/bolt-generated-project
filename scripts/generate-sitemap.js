const fs = require('fs');
    const path = require('path');
    const fetch = require('node-fetch');

    const BASE_URL = 'https://www.crypto-pricing-index.com';

    async function generateSitemap() {
      try {
        const response = await fetch('https://api.coincap.io/v2/assets?limit=200');
        const data = await response.json();
        const cryptoList = data.data;

        const pages = [
          { loc: `${BASE_URL}/`, lastmod: new Date().toISOString() },
          ...cryptoList.map(crypto => ({
            loc: `${BASE_URL}/crypto/${crypto.id}`,
            lastmod: new Date().toISOString()
          }))
        ];

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages.map(page => `
            <url>
              <loc>${page.loc}</loc>
              <lastmod>${page.lastmod}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.8</priority>
            </url>
          `).join('')}
        </urlset>`;

        fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
        console.log('Sitemap generated successfully.');
      } catch (error) {
        console.error('Error generating sitemap:', error);
      }
    }

    generateSitemap();
