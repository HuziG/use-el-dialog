<template>
  <div>
    <el-button @click="dialogMethods.openModal()">Open Dialog</el-button>

    <basic-dialog @register="registerDialog">
      <Form />
    </basic-dialog>
  </div>
</template>

<script setup>
import { useElDialog } from 'use-el-dialog'

const [registerDialog, dialogMethods] = useElDialog({
  title: 'Title'
})
</script>
