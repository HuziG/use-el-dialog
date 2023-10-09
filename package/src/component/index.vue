<script lang="ts">
import Dialog from './dialog.vue'

const Component = ({
  ...Dialog,
  name: 'BasicDialog',
}) as unknown as typeof Dialog

export default Component
</script>
