import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webcrypto } from 'node:crypto'

if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
}

// Replace with your actual repo name
const repoName = 'my-portfolio';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
})
