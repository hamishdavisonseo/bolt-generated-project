import { Link } from 'react-router-dom'

    export default function CryptoList({ data }) {
      return (
        <div className="crypto-grid">
          {data.map(({ id, price }) => (
            <Link to={`/${id}`} key={id} className="crypto-card">
              <h2>{id.toUpperCase()}</h2>
              <p>${parseFloat(price).toFixed(2)}</p>
            </Link>
          ))}
        </div>
      )
    }
