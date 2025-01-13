import { useEffect, useState } from 'react'
    import { Helmet } from 'react-helmet'

    export default function Sitemap() {
      const [cryptoList, setCryptoList] = useState([])

      useEffect(() => {
        fetch('https://api.coincap.io/v2/assets?limit=200')
          .then(response => response.json())
          .then(data => setCryptoList(data.data))
      }, [])

      const generateSitemap = () => {
        const baseUrl = 'https://crypto-pricing.com'
        const pages = [
          { loc: `${baseUrl}/`, lastmod: new Date().toISOString() },
          ...cryptoList.map(crypto => ({
            loc: `${baseUrl}/crypto/${crypto.id}`,
            lastmod: new Date().toISOString()
          }))
        ]

        return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages.map(page => `
            <url>
              <loc>${page.loc}</loc>
              <lastmod>${page.lastmod}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.8</priority>
            </url>
          `).join('')}
        </urlset>`
      }

      return (
        <>
          <Helmet>
            <meta name="monetag" content="7cc06f6bd41e6826be23c098b813acf4" />
            <title>Sitemap - Crypto Pricing</title>
            <meta name="robots" content="noindex" />
          </Helmet>
          <pre>{generateSitemap()}</pre>
        </>
      )
    }
