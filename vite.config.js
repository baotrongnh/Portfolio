import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern"
      }
    }
  }
})
