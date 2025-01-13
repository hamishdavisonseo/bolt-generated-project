import { Link } from 'react-router-dom'

    export default function TopCryptos({ data }) {
      return (
        <div className="top-cryptos">
          <h2>Top Cryptocurrencies</h2>
          <div className="scroll-container">
            {data.map((crypto, index) => (
              <Link to={`/crypto/${crypto.id}`} key={crypto.id} className="crypto-card">
                <span className="rank">{index + 1}</span>
                <h3>{crypto.name}</h3>
                <p>${parseFloat(crypto.priceUsd).toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      )
    }
