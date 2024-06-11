import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['part:@sanity/base/schema-creator', 'all:part:@sanity/base/schema-type'],
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
})