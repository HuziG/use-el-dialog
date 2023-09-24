<template>
  <div>
    <el-button @click="handleOpenDialog">Open</el-button>

    <basic-dialog @register="useRegister">
      <Form />
    </basic-dialog>
  </div>
</template>

<script lang="ts" setup>
import { useElDialog } from '../package/src/hooks/useElDialog'

import Form from './components/Form.vue'

const [useRegister, useMethods] = useElDialog({
  title: 'Title can custom',
  reload: true,
  subBtuText: 'Submit',
})

const handleOpenDialog = () => {
  useMethods.openModal()
}
</script>
