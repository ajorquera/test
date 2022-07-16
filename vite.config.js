import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: isProd ? '/test' : ''
})
