<template>
  <div>
    Child Component
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { onMounted } from 'vue';

onMounted(() => {
  ElMessage.success('mounted!')
})
</script>

<style scoped>

</style>
