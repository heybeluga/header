import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/test.tsx'),
      name: 'header',
      fileName: 'header'
    }
  }
})
