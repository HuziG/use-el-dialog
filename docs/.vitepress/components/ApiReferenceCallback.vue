<template>
  <div class="box-container">
    <el-button size="large" @click="handleOpen">Callback</el-button>

    <basic-el-dialog 
      @register="registerDialog" 
      @on-ok="onOk" 
      @on-close="onClose" 
    />
  </div>
</template>

<script setup>
import { useElDialog } from 'use-el-dialog'
import { ElMessage } from 'element-plus';

const [registerDialog, dialogMethods] = useElDialog({
  title: 'Custom Title'
})

const handleOpen = () => {
  dialogMethods.openModal()
}

const onOk = () => {
  dialogMethods.setSubLoading(false)
  dialogMethods.closeModal()

  ElMessage.success('ok')
}

const onClose = () => {
  ElMessage.error('close')
}
</script>
