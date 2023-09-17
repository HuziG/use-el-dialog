import { dialogProps } from 'element-plus';

export const basicProps = {
  ...dialogProps,
  // 确认按钮文字
  subBtuText: {
    type: String,
    default: '确认',
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
