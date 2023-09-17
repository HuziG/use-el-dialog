import { ref, unref, getCurrentInstance, watch } from 'vue';
import { ModalMethods, UseModalReturnType } from '../type';
import { NewDialogProps, Nullable } from '../type'

type PartialProps = {
  [key in keyof NewDialogProps]?: any;
};

export function useElDialog(props: PartialProps): UseModalReturnType {
  const modalRef = ref<Nullable<ModalMethods>>(null);
  const currentInstance = getCurrentInstance();

  const getInstance = () => {
    const instance = unref(modalRef.value);
    if (!instance) {
      console.error('useModal instance is undefined!');
    }
    return instance;
  };

  const register = (modalInstance: ModalMethods) => {
    modalRef.value = modalInstance;
    currentInstance?.emit('register', modalInstance);

    const newProps: {
      [key: string]: any
    } = {}

    Object.keys(props).map((key) => {
      newProps[key] = unref(props[key as keyof NewDialogProps])
    })

    watch(
      () => props,
      () => {
        props && modalInstance.setProps(newProps as NewDialogProps);
      },
      {
        immediate: true,
        deep: true,
      }
    );
  };

  const methods: ModalMethods = {
    setProps: (props): void => {
      getInstance()?.setProps(props);
    },
    openModal: () => {
      getInstance()?.openModal();
    },
    closeModal: () => {
      getInstance()?.closeModal();
    },
    setSubLoading: (status) => {
      getInstance()?.setSubLoading(status);
    },
  };

  return [register, methods];
}
