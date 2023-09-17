// import type { DialogOptions } from 'naive-ui/lib/dialog';
import type { DialogProps } from 'element-plus';

export type Nullable<T> = T | null;

/**
 * @description: 弹窗对外暴露的方法
 */
export interface ModalMethods {
  setProps: (props: NewDialogProps) => void;
  openModal: () => void;
  closeModal: () => void;
  setSubLoading: (status: boolean) => void;
}

/**
 * 支持修改，DialogOptions 參數
 */
// export type ModalProps = DialogOptions;

export type RegisterFn = (ModalInstance: ModalMethods) => void;

export type UseModalReturnType = [RegisterFn, ModalMethods];

export type NewDialogProps = DialogProps & {
  subBtuText?: string;
  width?: number;
  title?: string;
}
