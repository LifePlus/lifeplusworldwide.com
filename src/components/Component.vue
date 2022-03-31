<template>
  <component
    :is="config.tag"
    v-bind="config.attributes || {}"
  >
    {{ config.content }}
  </component>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    config: Object,
  },
})
</script>
