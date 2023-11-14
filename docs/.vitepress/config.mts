import { defineConfig } from 'vitepress'
import { resolve } from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "use-el-dialog",
  description: "use <el-dialog> by hook type",
  vite: {
    resolve: {
      alias: {
        'use-el-dialog': resolve(__dirname, '../../package/index.ts'),
      }
    }
  },
  head: [
    ['link', { href: '/logo.webp', rel: 'icon', type: 'image/webp' }],
  ],
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
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HuziG/use-el-dialog' }
    ],

    footer: {
			message: 'Released under the MIT License. thanks for naive-ui-admin.',
		},
  }
})
