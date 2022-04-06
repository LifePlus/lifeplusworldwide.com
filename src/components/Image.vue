<template>
  <Image :data="data" :explicit-width="false" />
</template>

<script>
import * as pkg from 'vue-datocms'

export default {
  components: {
    Image: pkg.Image,
  },
  props: {
    data: Object,
  }
}
</script>
