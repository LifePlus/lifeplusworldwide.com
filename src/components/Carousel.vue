<template>
  <div>
    <pre>{{ carousel?.data }}</pre>
    <Carousel
      :items-to-show="1.75"
      wrap-around
      ref="carousel"
    >
      <template #default="{}">
        <Slide
          v-for="(quote, index) in quotesComputed"
          :key="quote.id"
        >
          <div class="max-w-[34rem]">
            <div
              v-html="quote.quote"
              class="pt-3 pb-6 border-t text-4xl text-left transition"
              :class="{
                'border-brand-primary text-black': index === carousel?.data?.currentSlide,
                'border-transparent text-gray-300': index !== carousel?.data?.currentSlide,
              }"
            />
            <div
              class="text-2xl py-3 border-y text-left transition"
              :class="{
                'border-brand-primary text-black': index === carousel?.data?.currentSlide,
                'border-transparent text-gray-300': index !== carousel?.data?.currentSlide,
              }"
            >{{ quote.author }}</div>
          </div>
        </Slide>
      </template>

      <template #addons>
        <div class="absolute max-w-[42rem] w-full mx-auto flex justify-between items-center inset-0">
          <img class="absolute left -translate-x-full" :src="illustration.responsiveImage.src" :alt="illustration.alt" />
          <button @click="carousel.prev()" class="w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-white">
            <ArrowLeftIcon class="w-4 h-4" />
          </button>
          <button @click="carousel.next()" class="w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-white">
            <ArrowRightIcon class="w-4 h-4" />
          </button>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
import ArrowLeftIcon from './icons/ArrowLeftIcon.vue'

export default {
  components: {
    Carousel,
    Slide,
    ArrowRightIcon,
    ArrowLeftIcon,
  },
  props: {
    quotes: Array,
    illustration: Object,
  },

  setup (props) {
    const carousel = ref()
    const quotesComputed = computed(() => {
      return [
        ...props.quotes,
        ...props.quotes,
      ]
    })
    const currentSlide = ref()

    return {
      carousel,
      currentSlide,
      quotesComputed,
    }
  },
}
</script>
