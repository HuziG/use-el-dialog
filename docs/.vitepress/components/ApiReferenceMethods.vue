<template>
  <div class="box-container" :style="{
    alignItems: 'center',
    justifyContent: 'space-around'
  }">
    <el-button size="large" @click="handleOpen">openModal</el-button>

    <el-button size="large" @click="handleClose">closeModal</el-button>

    <el-button size="large" @click="handleSetSubLoading">setSubLoading</el-button>

    <el-button size="large" @click="handleSetProps">setProps</el-button>

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

const handleClose = () => {
  dialogMethods.openModal()

  setTimeout(() => {
    dialogMethods.closeModal()
  }, 1500)
}

const handleSetSubLoading = () => {
  dialogMethods.openModal()

  setTimeout(() => {
    dialogMethods.setSubLoading(true)
  }, 1000)

  setTimeout(() => {
    dialogMethods.setSubLoading(false)
  }, 2000)
}

const handleSetProps = () => {
  dialogMethods.setProps({
    title: 'title changed'
  })

  dialogMethods.openModal()
}
</script>
