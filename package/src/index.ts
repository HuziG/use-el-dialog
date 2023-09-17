// filename: packages/slider/index.ts
import Dialog from './dialog.vue'

Dialog.name = 'BasicModal'

Dialog.install = function (Vue: any) {
  Vue.component(Dialog.name, Dialog)
}

export default Dialog
