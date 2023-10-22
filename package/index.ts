import Dialog from './src/component/index.vue'
import { basicProps } from './src/type/props'
import { assign } from './src/utils'

export { useElDialog } from './src/hooks/useElDialog'

const config = {}

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (app: any, options: typeof basicProps) {
  app.component(Dialog.name, Dialog)

  assign(config, options || {})
}

const plugin = {
  install,
  options: config
}

export default plugin
