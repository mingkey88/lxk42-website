import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    svelte(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 85 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false }
        ]
      }
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['svelte']
        }
      }
    }
  }
})