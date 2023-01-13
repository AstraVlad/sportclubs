import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
  build: {
    outDir,
    emptyOutDir: true, //to override dist folder
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        guest: resolve(root, 'guest.html'),
      }
    }
  }
})

