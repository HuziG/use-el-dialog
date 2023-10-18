// env.d.ts
import BasicElDialog from './package/src/component/dialog.vue';

declare module 'vue' {
  export interface GlobalComponents {
    BasicElDialog: typeof BasicElDialog;
  }
}

// 2. Declare a module use-el-dialog
declare module 'use-el-dialog' {
  export function useElDialog(): any;
}
