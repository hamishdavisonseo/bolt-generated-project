import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import { createHtmlPlugin } from 'vite-plugin-html'

    export default defineConfig({
      plugins: [
        react(),
        createHtmlPlugin({
          minify: true,
          inject: {
            data: {
              title: 'Crypto Pricing - Real-time Cryptocurrency Prices',
              description: 'Track real-time cryptocurrency prices with interactive charts and detailed market data.'
            }
          }
        })
      ],
      server: {
        host: true,
        port: 3000,
        historyApiFallback: true
      },
      build: {
        rollupOptions: {
          input: '/index.html'
        }
      }
    })
