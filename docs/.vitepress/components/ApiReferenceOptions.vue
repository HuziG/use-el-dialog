<template>
  <div class="box-container">
    <el-button size="large" @click="handleOpen">openModal</el-button>

    <basic-el-dialog @register="registerDialog" @on-ok="onOk">
      <ReloadCmp />
    </basic-el-dialog>
  </div>
</template>

<script setup>
import { useElDialog } from 'use-el-dialog'
import ReloadCmp from './ReloadCmp.vue'

const [registerDialog, dialogMethods] = useElDialog({
  title: 'Custom Title',
  subBtuText: 'Oh Confirm',
  cancelBtuText: 'Oh Cancel',
  reload: true
})

const handleOpen = () => {
  dialogMethods.openModal()
}

const onOk = () => {
  dialogMethods.setSubLoading(false)

  dialogMethods.closeModal()
}
</script>
