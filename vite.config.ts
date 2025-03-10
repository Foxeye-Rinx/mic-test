import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Allow local development with ngrok, localcan.
  server: {
    allowedHosts: ['localhost', '127.0.0.1', '.localcan.dev', '.ngrok-free.app'],
  },
  plugins: [react(), tailwindcss()],
})
