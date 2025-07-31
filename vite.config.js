import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Polyfill for crypto.getRandomValues in Node environments (especially for CI/CD)
if (typeof globalThis.crypto === 'undefined') {
  const { webcrypto } = require('node:crypto')
  globalThis.crypto = webcrypto
}

// Replace with your actual repo name (for GitHub Pages)
const repoName = 'my-portfolio'

export default defineConfig({
  base: `/`,
  plugins: [react()],
})
