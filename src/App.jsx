import { Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import CryptoPage from './pages/CryptoPage'
    import NotFound from './pages/NotFound'
    import Sitemap from './pages/Sitemap'

    function App() {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto/:id" element={<CryptoPage />} />
          <Route path="/sitemap.xml" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )
    }

    export default App
