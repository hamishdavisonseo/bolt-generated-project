export default function MarketOverview({ data }) {
      if (!data) return null

      return (
        <div className="market-overview">
          <div className="market-card">
            <h3>Total Market Volume</h3>
            <p>${(data.totalVolume / 1000000000).toFixed(2)}B</p>
          </div>
          <div className="market-card">
            <h3>Total Markets</h3>
            <p>{data.totalMarkets.toLocaleString()}</p>
          </div>
          <div className="market-card">
            <h3>24h Change</h3>
            <p className="positive">+2.34%</p>
          </div>
        </div>
      )
    }
