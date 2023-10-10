<template>
  <div class="box-container">
    <el-button size="large" @click="handleOpen">Open Dialog</el-button>

    <basic-el-dialog @register="registerDialog" />
  </div>
</template>

<script setup>
import { useElDialog } from 'use-el-dialog'

const [registerDialog, dialogMethods] = useElDialog({
  title: 'Custom Title'
})

const handleOpen = () => {
  dialogMethods.openModal()
}
</script>
