// env.d.ts
import BasicDialog from './package/src/dialog.vue';

declare module 'vue' {
  export interface GlobalComponents {
    BasicDialog: typeof BasicDialog;
  }
}

// 2. Declare a module use-el-dialog
declare module 'use-el-dialog' {
  export function useElDialog(): any;
}
