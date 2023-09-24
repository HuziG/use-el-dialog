// env.d.ts
import BasicDialog from './package/src/dialog.vue';

declare module 'vue' {
  export interface GlobalComponents  {
    BasicDialog: typeof BasicDialog;
  }
}
