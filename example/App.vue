<template>
  <div>
    <el-button @click="handleOpenDialog">Open</el-button>

    <basic-modal @register="useRegister"></basic-modal>
  </div>
</template>

<script lang="ts" setup>
import { useElDialog } from '../package/src/hooks/useElDialog'

const [useRegister, useMethods] = useElDialog({
  title: 'new Use El Dialog',
})

const handleOpenDialog = () => {
  useMethods.openModal()
}
</script>
