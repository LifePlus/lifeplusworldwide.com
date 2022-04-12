<template>
  <Image :data="data" :explicit-width="false" />
</template>

<script>
import { Image } from 'vue-datocms'

export default {
  components: {
    Image,
  },
  props: {
    data: Object,
  }
}
</script>
