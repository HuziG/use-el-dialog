---
outline: deep
---

# API Reference

## Methods

### `openModal`
open dialog
```js
const [registerDialog, dialogMethods] = useElDialog({
  title: 'Custom Title'
})

const handleOpen = () => {
  dialogMethods.openModal()
}
```

### `closeModal`
close dialog
```js
const [registerDialog, dialogMethods] = useElDialog({
  title: 'Custom Title'
})

const handleClose = () => {
  dialogMethods.openModal()

  setTimeout(() => {
    dialogMethods.closeModal()
  }, 1500)
}
```

### `setSubLoading`
change confirm button loading state
```js
const [registerDialog, dialogMethods] = useElDialog({
  title: 'Custom Title'
})

const handleSetSubLoading = () => {
  dialogMethods.openModal()

  setTimeout(() => {
    dialogMethods.setSubLoading(true)
  }, 1000)

  setTimeout(() => {
    dialogMethods.setSubLoading(false)
  }, 2000)
}
```

### `setProps`
async use methods to change dialog props value
```js
const [registerDialog, dialogMethods] = useElDialog({
  title: 'Custom Title'
})

const handleSetProps = () => {
  dialogMethods.setProps({
    title: 'title changed'
  })

  dialogMethods.openModal()
}
```

<ApiReferenceMethods />

## Component Callback

### `on-ok`
confirm button callback

### `on-close`
when the dialog close trigger
```vue
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
```

<ApiReferenceCallback />

## Extra Options

### `subBtuText`
confirm button text

### `cancelBtuText`
cancel button text

### `reload`
decide the child component mounted

```vue
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
  cancelBtuText: 'On Cancel',
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
```

ReloadCmp.vue
```vue
<template>
  <div>
    Child Component
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { onMounted } from 'vue';

onMounted(() => {
  ElMessage.success('mounted!')
})
</script>
```

<ApiReferenceOptions />

## Slots

### `header`
header slot

### `default`
main content slot

### `footer`
footer content slot

```vue
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
```

<ApiReferenceSlots />

