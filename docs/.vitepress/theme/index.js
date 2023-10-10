import DefaultTheme from 'vitepress/theme'
import 'element-plus/dist/index.css'
import './public.css'

import { ElButton, ElDialog } from 'element-plus'
import BasicElDialog from 'use-el-dialog'

import { useComponents } from './useComponents'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    useComponents(app)

    app.use(ElButton)
    app.use(ElDialog)
    app.use(BasicElDialog)
  },
}
