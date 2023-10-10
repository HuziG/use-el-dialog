// filename: packages/index.ts
import Dialog from './src/component/index.vue'

export { useElDialog } from './src/hooks/useElDialog'
export const BasicElDialog = Dialog

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (app: any) {
  app.component(Dialog.name, Dialog)
}

const plugin = {
  install
}

export default plugin
