<template>
  <el-dialog id="basic-modal" v-bind="getBindValue" v-model="isModal" @close="onCloseModal">
    <template #header>
      <slot></slot>
      <!-- <div class="w-full cursor-move" id="basic-modal-bar">{{ getBindValue.title }}</div> -->
    </template>
    <template #default>
      <slot name="default"></slot>
    </template>
    <template #action v-if="!$slots.action">
      <span class="dialog-footer">
        <el-button @click="closeModal">Cancel</el-button>
        <el-button type="primary" :loading="subLoading" @click="handleSubmit">
          {{ subBtuText }}
        </el-button>
      </span>
    </template>
    <template v-else #action>
      <slot name="action"></slot>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { getCurrentInstance, ref, unref, computed, useAttrs } from 'vue';
  import { basicProps } from './type/props';
  import { deepMerge } from './utils';
  import { NewDialogProps, ModalMethods } from './type';

  const attrs = useAttrs();
  const props = defineProps({ ...basicProps });
  const emit = defineEmits<{
    (e: 'on-close'): void;
    (e: 'on-ok'): void;
    (e: 'register', modalMethods: ModalMethods): void;
  }>();

  const propsRef = ref<Partial<NewDialogProps> | null>(null);

  const isModal = ref(false);
  const subLoading = ref(false);

  const getProps = computed(() => {
    return { ...props, ...(unref(propsRef) as any) };
  });

  const subBtuText = computed(() => {
    const { subBtuText } = propsRef.value as any;
    return subBtuText || props.subBtuText;
  });

  async function setProps(modalProps: Partial<NewDialogProps>): Promise<void> {
    propsRef.value = deepMerge(unref(propsRef) || ({} as any), modalProps);
  }

  const getBindValue = computed(() => {
    return {
      ...attrs,
      ...unref(getProps),
      ...unref(propsRef),
    };
  });

  function setSubLoading(status: boolean) {
    subLoading.value = status;
  }

  function openModal() {
    isModal.value = true;
  }

  function closeModal() {
    isModal.value = false;
    subLoading.value = false;
    emit('on-close');
  }

  function onCloseModal() {
    isModal.value = false;
    emit('on-close');
  }

  function handleSubmit() {
    subLoading.value = true;
    emit('on-ok');
  }

  const modalMethods: ModalMethods = {
    setProps,
    openModal,
    closeModal,
    setSubLoading,
  };

  const instance = getCurrentInstance();
  if (instance) {
    emit('register', modalMethods);
  }
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
