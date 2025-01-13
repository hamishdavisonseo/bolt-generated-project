import { Link } from 'react-router-dom'

    export default function TrendingCryptos({ data }) {
      return (
        <div className="trending-cryptos">
          <h2>Trending Cryptocurrencies</h2>
          <div className="trending-grid">
            {data.map((crypto, index) => (
              <Link to={`/crypto/${crypto.id}`} key={crypto.id} className="trending-card">
                <span className="rank">{index + 1}</span>
                <h3>{crypto.name}</h3>
                <p>${parseFloat(crypto.priceUsd).toFixed(2)}</p>
                <div className="trending-info">
                  <span>24h Change: {parseFloat(crypto.changePercent24Hr).toFixed(2)}%</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )
    }
