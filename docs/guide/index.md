# Getting started

use-el-dialog is library, help you to use el-dialog from element-plus, easy and simple to use el-dialog by hook type.

## Quick start

1. Install the package:

::: code-group

```bash [npm]
npm i use-el-dialog
```

```bash [yarn]
yarn add use-el-dialog
```

```bash [pnpm]
pnpm add use-el-dialog
```

:::

2. Installed & Use Element Plus:

```js
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)
```

::: info
The above is just one way to reference element plus, you can import element plus according to your preferences, but it should be noted that element plus must be imported in advance, otherwise the plugin will be invalid. Please refer to the [element plus document](https://element-plus.org/en-US/guide/installation.html) for details.
:::

3. Add the plugin into your app:

```js
import BasicElDialog from 'use-el-dialog'

app.use(BasicElDialog)
```

4. Use the `use-el-dialog` directive:

```vue
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
```

<BaseUse />
