import { useEffect, useState } from 'react'
    import { useParams } from 'react-router-dom'
    import { Helmet } from 'react-helmet'
    import CryptoChart from '../components/CryptoChart'
    import TimeRangeSelector from '../components/TimeRangeSelector'

    export default function CryptoPage() {
      const { id } = useParams()
      const [priceData, setPriceData] = useState([])
      const [cryptoInfo, setCryptoInfo] = useState(null)
      const [timeRange, setTimeRange] = useState('24h')

      useEffect(() => {
        fetch(`https://api.coincap.io/v2/assets/${id}`)
          .then(response => response.json())
          .then(data => setCryptoInfo(data.data))
          .catch(error => console.error('Error fetching crypto info:', error))

        fetchHistoricalData(timeRange)
      }, [id, timeRange])

      const fetchHistoricalData = async (range) => {
        const intervals = {
          '24h': 'm5',
          '1d': 'm30',
          '1w': 'h2',
          '1m': 'h6',
          '6m': 'd1',
          'ytd': 'd1'
        }

        const end = Date.now()
        let start = end - (24 * 60 * 60 * 1000)

        switch (range) {
          case '1d': start = end - (24 * 60 * 60 * 1000); break
          case '1w': start = end - (7 * 24 * 60 * 60 * 1000); break
          case '1m': start = end - (30 * 24 * 60 * 60 * 1000); break
          case '6m': start = end - (6 * 30 * 24 * 60 * 60 * 1000); break
          case 'ytd': start = new Date(new Date().getFullYear(), 0, 1).getTime(); break
          default: break
        }

        try {
          const response = await fetch(
            `https://api.coincap.io/v2/assets/${id}/history?interval=${intervals[range]}&start=${start}&end=${end}`
          )
          const data = await response.json()
          setPriceData(data.data.map(d => ({
            time: d.time,
            price: parseFloat(d.priceUsd)
          })))
        } catch (error) {
          console.error('Error fetching historical data:', error)
        }
      }

      if (!cryptoInfo) return <div>Loading...</div>

      return (
        <>
          <Helmet>
            <meta name="monetag" content="7cc06f6bd41e6826be23c098b813acf4" />
            <title>{cryptoInfo.name} ({cryptoInfo.symbol}) Price, Chart & Market Data</title>
            <meta name="description" content={`Track ${cryptoInfo.name} (${cryptoInfo.symbol}) price, market cap, volume, and historical data. Get the latest ${cryptoInfo.name} cryptocurrency information.`} />
            <meta property="og:title" content={`${cryptoInfo.name} (${cryptoInfo.symbol}) Price & Market Data`} />
            <meta property="og:description" content={`Real-time ${cryptoInfo.name} price, market cap, and trading volume. Get the latest ${cryptoInfo.name} cryptocurrency information.`} />
            <link rel="canonical" href={`https://crypto-pricing.com/crypto/${id}`} />
          </Helmet>

          <div className="container">
            <h1>{cryptoInfo.name} ({cryptoInfo.symbol})</h1>
            <div className="crypto-info">
              <div className="info-card">
                <h3>Price</h3>
                <p>${parseFloat(cryptoInfo.priceUsd).toFixed(2)}</p>
              </div>
              <div className="info-card">
                <h3>Market Cap</h3>
                <p>${parseFloat(cryptoInfo.marketCapUsd).toLocaleString()}</p>
              </div>
              <div className="info-card">
                <h3>24h Volume</h3>
                <p>${parseFloat(cryptoInfo.volumeUsd24Hr).toLocaleString()}</p>
              </div>
            </div>

            <TimeRangeSelector currentRange={timeRange} onChange={setTimeRange} />
            <CryptoChart data={priceData} />

            <div className="crypto-details">
              <h2>About {cryptoInfo.name}</h2>
              <p>{cryptoInfo.name} is ranked #{cryptoInfo.rank} with a market cap of ${parseFloat(cryptoInfo.marketCapUsd).toLocaleString()}.</p>
              <p>Current supply: {parseFloat(cryptoInfo.supply).toLocaleString()} {cryptoInfo.symbol}</p>
              {cryptoInfo.maxSupply && <p>Max supply: {parseFloat(cryptoInfo.maxSupply).toLocaleString()} {cryptoInfo.symbol}</p>}
            </div>
          </div>
        </>
      )
    }
