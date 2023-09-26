import { dialogProps } from 'element-plus';

export const basicProps = {
  ...dialogProps,
  // 按钮文字
  subBtuText: {
    type: String,
    default: 'Confirm',
  },
  width: {
    type: Number,
    default: 446,
  },
  title: {
    type: String,
    default: '',
  },
};