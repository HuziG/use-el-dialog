<script lang="ts">
import Dialog from './dialog.vue'

const Component = ({
  ...Dialog,
  name: 'BasicElDialog',
}) as unknown as typeof Dialog

export default Component
</script>
