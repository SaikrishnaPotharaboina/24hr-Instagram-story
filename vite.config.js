import { defineConfig } from 'vite'
import tailwandcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwandcss()],
})
