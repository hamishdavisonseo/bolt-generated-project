import { Helmet } from 'react-helmet'

    export default function NotFound() {
      return (
        <>
          <Helmet>
            <meta name="monetag" content="7cc06f6bd41e6826be23c098b813acf4" />
            <title>Page Not Found - Crypto Pricing</title>
            <meta name="robots" content="noindex" />
          </Helmet>
          <div className="container">
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
          </div>
        </>
      )
    }
