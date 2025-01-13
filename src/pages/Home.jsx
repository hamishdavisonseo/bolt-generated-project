import { useEffect, useState } from 'react'
    import { Helmet } from 'react-helmet'
    import HeroSection from '../components/HeroSection'
    import TopCryptos from '../components/TopCryptos'
    import TrendingCryptos from '../components/TrendingCryptos'
    import MarketOverview from '../components/MarketOverview'
    import NewsSection from '../components/NewsSection'
    import NewsletterSignup from '../components/NewsletterSignup'

    export default function Home() {
      const [topCryptos, setTopCryptos] = useState([])
      const [trendingCryptos, setTrendingCryptos] = useState([])
      const [marketData, setMarketData] = useState(null)

      useEffect(() => {
        Promise.all([
          fetch('https://api.coincap.io/v2/assets?limit=10'),
          fetch('https://api.coincap.io/v2/markets')
        ])
        .then(([assetsRes, marketsRes]) => 
          Promise.all([assetsRes.json(), marketsRes.json()])
        )
        .then(([assetsData, marketsData]) => {
          setTopCryptos(assetsData.data)
          setTrendingCryptos(assetsData.data.slice(0, 4))
          setMarketData({
            totalVolume: marketsData.data.reduce((sum, m) => sum + parseFloat(m.volumeUsd24Hr), 0),
            totalMarkets: marketsData.data.length
          })
        })

        const interval = setInterval(() => {
          setTrendingCryptos(prev => {
            const newTrending = [...prev]
            newTrending.push(newTrending.shift())
            return newTrending
          })
        }, 10000)

        return () => clearInterval(interval)
      }, [])

      return (
        <>
          <Helmet>
            <meta name="monetag" content="7cc06f6bd41e6826be23c098b813acf4" />
            <title>Real-time Cryptocurrency Prices & Market Data | Crypto Pricing</title>
            <meta name="description" content="Track real-time cryptocurrency prices, market caps, and trading volumes. Get the latest crypto market data, trends, and news." />
            <meta property="og:title" content="Real-time Cryptocurrency Prices & Market Data" />
            <meta property="og:description" content="Track real-time cryptocurrency prices, market caps, and trading volumes. Get the latest crypto market data, trends, and news." />
            <link rel="canonical" href="https://crypto-pricing.com/" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Crypto Pricing",
                "url": "https://crypto-pricing.com/",
                "description": "Real-time cryptocurrency prices and market data",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://crypto-pricing.com/crypto/{search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              })}
            </script>
          </Helmet>
          
          <div className="container">
            <HeroSection />
            <MarketOverview data={marketData} />
            <TopCryptos data={topCryptos} />
            <TrendingCryptos data={trendingCryptos} />
            <NewsSection />
            <NewsletterSignup />
          </div>
        </>
      )
    }
