export default function NewsletterSignup() {
      const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
      }

      return (
        <section className="newsletter">
          <h2>Stay Updated</h2>
          <p>Get the latest crypto news and market updates delivered to your inbox</p>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      )
    }
