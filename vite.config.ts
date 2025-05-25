import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-slot', 'lucide-react'],
          motion: ['framer-motion']
        }
      }
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    // Enable minification
    minify: 'esbuild',
    // Generate source maps for production debugging
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
    // Set target for modern browsers
    target: 'esnext'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap', 'framer-motion']
  },
  server: {
    // Enable HMR
    hmr: true,
    // Optimize dev server
    fs: {
      strict: false
    }
  },
  // Enable gzip compression
  preview: {
    port: 3000,
    host: true
  }
})
