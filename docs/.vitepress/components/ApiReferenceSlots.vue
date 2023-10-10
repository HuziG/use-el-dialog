<template>
  <div class="box-container">
    <el-button size="large" @click="handleOpen">openModal</el-button>

    <basic-el-dialog @register="registerDialog" @on-ok="onOk">
      <template #header>
        this is header slot
      </template>
      <template #default>
        this is default slot
      </template>
      <template #footer>
        this is footer slot
      </template>
    </basic-el-dialog>
  </div>
</template>

<script setup>
import { useElDialog } from 'use-el-dialog'

const [registerDialog, dialogMethods] = useElDialog({
  title: 'Custom Title',
})

const handleOpen = () => {
  dialogMethods.openModal()
}
</script>
