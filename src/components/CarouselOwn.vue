<template>
  <div>
    <div class="flex">
      <div
        v-for="(quote, index) in quotes"
        :key="quote.id"
      >
        <div class="flex flex-col w-full max-w-[35rem] mx-auto">
          <div
            v-html="quote.quote"
            class="pt-3 pb-6 border-t border-brand-primary text-4xl text-left"
          />
          <div class="text-2xl py-3 border-y border-brand-primary text-left">{{ quote.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    quotes: Array,
  },

  setup () {
    const currentSlide = ref(0)

    return {
      currentSlide,
    }
  },
}
</script>