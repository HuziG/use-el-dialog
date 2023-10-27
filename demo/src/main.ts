import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import BasicElDialog from 'use-el-dialog'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(BasicElDialog, {
  subBtuText: '确认',
  cancelBtuText: '取消',
}).use(ElementPlus).mount('#app')
