import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      'use-el-dialog': resolve(__dirname, '../package/index.ts'),
    },
  },
  define: {
    VERSION: JSON.stringify(require('../package.json').version),
  },
})
