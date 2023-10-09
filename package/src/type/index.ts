// import type { DialogOptions } from 'naive-ui/lib/dialog';
import type { DialogProps } from 'element-plus';
export { basicProps } from './props';

export type Nullable<T> = T | null;

/**
 * @description: 弹窗对外暴露的方法
 */
export interface ModalMethods {
  setProps: (props: Partial<NewDialogProps>) => void;
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

type CustomDialogProps = {
  subBtuText: string;
  cancelBtuText: string;
  width: number;
  title: string;
  reload: boolean;
}

export type NewDialogProps = DialogProps & CustomDialogProps;
