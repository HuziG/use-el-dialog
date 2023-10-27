import Dialog from './src/component/index.vue'
import { NewDialogProps } from './src/type'
import { assign } from './src/utils'

export { useElDialog } from './src/hooks/useElDialog'

const config = {}

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
export function install(app: any, options?: Partial<NewDialogProps>) {
  if (app.$_vUseElDialogInstalled) return
  app.$_vUseElDialogInstalled = true

  assign(config, options || {})

  app.component(Dialog.name, Dialog)
}

const plugin = {
  install,
  options: config
}

export default plugin
