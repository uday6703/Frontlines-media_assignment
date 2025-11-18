import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Default to a relative base so built assets are referenced from the
  // current directory (produces `./assets/...`). This avoids 404s when the
  // site is served from a subpath. Override with `VITE_BASE` if needed.
  base: process.env.VITE_BASE || './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})