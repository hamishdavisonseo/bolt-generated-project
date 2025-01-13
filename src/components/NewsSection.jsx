export default function NewsSection() {
      const newsItems = [
        {
          title: "Bitcoin ETF Approval Expected Soon",
          excerpt: "Industry experts predict SEC approval of Bitcoin ETFs could happen as early as next month...",
          image: "https://via.placeholder.com/300x200",
          url: "#"
        },
        {
          title: "Ethereum 2.0 Staking Reaches New High",
          excerpt: "The amount of ETH staked in Ethereum 2.0 has surpassed 25 million...",
          image: "https://via.placeholder.com/300x200",
          url: "#"
        }
      ]

      return (
        <section className="news-section">
          <h2>Latest Crypto News</h2>
          <div className="news-grid">
            {newsItems.map((item, index) => (
              <a key={index} href={item.url} className="news-card">
                <img src={item.image} alt={item.title} />
                <div className="news-content">
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )
    }
