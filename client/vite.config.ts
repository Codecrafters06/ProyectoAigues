import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),

    VitePWA({
      manifest:{
        display:"standalone",
        display_override:['window-controls-overlay',"minimal-ui"],
        lang: 'es-ES',
        name: 'Museo Aigues de Barcelona',
        short_name:'Museo de las Aigues',
        description:'Aplicacion web',
        theme_color:'#85A7C6',
        background_color:'#06B9D3',
        icons:[
          {
            src:'pwa-64x64.png',
            sizes:'64x64',
            type:'image/png'
          },
          {
            src:'pwa-192x192.png',
            sizes:'192x192',
            type:'image/png',
            purpose:'any',

          },
          {
            src:'pwa-512x512.png',
            sizes:'512x512',
            type:'image/png',
            purpose:'maskable'
          }


        ]




      }
     })
  
  ],
})
