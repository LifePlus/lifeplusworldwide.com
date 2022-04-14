<template>
  <div class="max-w-6xl w-full mx-auto" :class="{ 'px-4': padding }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    padding: {
      type: Boolean,
      default: true,
    }
  },

  setup() {

  },
}
</script>