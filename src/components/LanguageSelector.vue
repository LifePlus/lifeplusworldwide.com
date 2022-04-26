<template>
  <div class="relative z-10">
    <transition
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="show" class="absolute z-20 w-48 mt-4 top-full ltr:right-0 rtl:left-0 text-left text-black shadow-md rounded overflow-hidden bg-white">
        <ul class="divide-y divide-gray-300 language-list"></ul>
      </div>
    </transition>
    <button @click.prevent="show = !show">
      <span class="current-lang"></span>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    url: String,
  },

  setup (props) {
    const show = ref(false)

    return {
      show,
    }
  },
}
</script>