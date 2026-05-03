import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg', // Inclui todos os SVGs
      svgrOptions: {
        exportType: 'named', // Exporta como named export
        ref: true,
        svgo: true,
        titleProp: true,
      },
    }),
  ],
})