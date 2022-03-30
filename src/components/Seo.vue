<template>
  <component
    :is="seoTag.tag"
    v-bind="seoTag.attributes || {}"
  >
    {{ seoTag.content }}
  </component>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    seoTag: Object,
  },
  setup () {

  },
})
</script>
