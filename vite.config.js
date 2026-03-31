import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // TAMBAHKAN BARIS INI (Sesuai nama repo GitHub kamu)
  base: '/droid-toolbox/', 
  
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script', 
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'Droid Toolbox',
        short_name: 'Toolbox',
        description: 'Gudang perintah sakti Android',
        theme_color: '#111827',
        background_color: '#111827',
        display: 'standalone',
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/732/732179.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})