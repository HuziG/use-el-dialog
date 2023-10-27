<template>
  <div class="box-container">
    <el-button size="large" @click="handleOpen">Open Dialog</el-button>

    <basic-el-dialog @register="registerDialog" />
  </div>
</template>

<script setup lang="ts">
import { useElDialog } from 'use-el-dialog'

defineProps<{
  msg: string
}>()

const [registerDialog, dialogMethods] = useElDialog({
  title: 'Custom Title',
})

const handleOpen = () => {
  dialogMethods.openModal()
}
</script>
