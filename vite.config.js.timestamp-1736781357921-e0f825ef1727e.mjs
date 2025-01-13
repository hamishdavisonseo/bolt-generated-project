// vite.config.js
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { createHtmlPlugin } from "file:///home/project/node_modules/vite-plugin-html/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "Crypto Pricing - Real-time Cryptocurrency Prices",
          description: "Track real-time cryptocurrency prices with interactive charts and detailed market data."
        }
      }
    })
  ],
  server: {
    host: true,
    port: 3e3,
    historyApiFallback: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuICAgIGltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbiAgICBpbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4taHRtbCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIHJlYWN0KCksXG4gICAgICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xuICAgICAgICAgIG1pbmlmeTogdHJ1ZSxcbiAgICAgICAgICBpbmplY3Q6IHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdDcnlwdG8gUHJpY2luZyAtIFJlYWwtdGltZSBDcnlwdG9jdXJyZW5jeSBQcmljZXMnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RyYWNrIHJlYWwtdGltZSBjcnlwdG9jdXJyZW5jeSBwcmljZXMgd2l0aCBpbnRlcmFjdGl2ZSBjaGFydHMgYW5kIGRldGFpbGVkIG1hcmtldCBkYXRhLidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgc2VydmVyOiB7XG4gICAgICAgIGhvc3Q6IHRydWUsXG4gICAgICAgIHBvcnQ6IDMwMDAsXG4gICAgICAgIGhpc3RvcnlBcGlGYWxsYmFjazogdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ2xQLE9BQU8sV0FBVztBQUNsQixTQUFTLHdCQUF3QjtBQUVqQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixpQkFBaUI7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLG9CQUFvQjtBQUFBLEVBQ3RCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
