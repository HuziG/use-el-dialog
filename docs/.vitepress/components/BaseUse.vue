<template>
  <div>
    <el-button @click="handleOpen">Open Dialog</el-button>

    <basic-dialog @register="registerDialog" />
  </div>
</template>

<script setup>
import { useElDialog } from 'use-el-dialog'

const [registerDialog, dialogMethods] = useElDialog({
  title: 'Title'
})

const handleOpen = () => {
  dialogMethods.openModal()
}
</script>
