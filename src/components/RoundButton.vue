<template>
  <button
    class="w-16 h-16 mx-auto flex items-center justify-center rounded-full border border-brand-primary transition"
    :class="{
      'bg-brand-base hover:bg-brand-primary hover:text-brand-base': !solid,
      'bg-brand-primary text-white': solid,
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    solid: Boolean,
  },
  setup () {}
}
</script>