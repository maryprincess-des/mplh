import { defineConfig  } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@js': path.resolve(__dirname, 'src/js'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
})
