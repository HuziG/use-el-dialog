import { defineConfig } from 'vitepress'
import { resolve } from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Use-El-Dialog",
  description: "use <el-dialog> by hook type",
  vite: {
    resolve: {
      alias: {
        'use-el-dialog': resolve(__dirname, '../../package/index.ts'),
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/' },
      // { text: 'API', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting started', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Configuration', link: '/guide/configuration' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Api Reference', link: '/reference/' },
        ]
      },
      {
        text: 'Example',
        items: [
          { text: 'Form', link: '/example/form' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
