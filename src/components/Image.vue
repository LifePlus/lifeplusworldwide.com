<template>
  <Image :data="data" />
</template>

<script>
import { Image } from './DatocmsImage'

export default {
  components: {
    Image,
  },
  props: {
    data: Object,
  }
}
</script>
