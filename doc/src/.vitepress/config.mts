import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Use-El-Dialog",
  description: "use <el-dialog> by hook type",
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
          { text: 'Getting started', link: '/sidebar/guide/' },
          { text: 'Configuration', link: '/sidebar/guide/configuration' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Api Reference', link: '/sidebar/reference/' },
        ]
      },
      {
        text: 'Example',
        items: [
          { text: 'Form', link: '/sidebar/example/form' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
