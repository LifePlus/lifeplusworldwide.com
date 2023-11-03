<template>
  <component
    :is="is"
    class="w-16 h-16 mx-auto flex items-center justify-center rounded-full border border-brand-primary transition"
    :class="{
      'bg-transparent hover:bg-brand-primary hover:text-white': !solid,
      'bg-brand-primary text-white': solid,
    }"
    :id="id"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  solid: Boolean,
  id: String,
  is: {
    type: String,
    default: 'button',
  },
})
</script>