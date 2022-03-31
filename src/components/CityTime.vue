<template>
  <div class="text-xs">
    <div class="font-bold">
      <slot />
    </div>
    <div class="whitespace-no-wrap">10 : 48 : 36</div>
  </div>
</template>

<script>
export default {
  props: {
    timezone: String,
  },
  setup() {

  },
}
</script>