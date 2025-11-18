import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use VITE_BASE env var when provided (keeps compatibility with GitHub Pages),
  // otherwise default to '/' which is suitable for Vercel deployments.
  base: process.env.VITE_BASE || '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})