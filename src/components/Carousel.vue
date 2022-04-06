<template>
  <div>
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      ref="carousel"
      @update:modelValue="value => currentSlide = value"
    >
      <template #default="{}">
        <Slide
          v-for="(quote, index) in quotesComputed"
          :key="index"
        >
          <div class="max-w-[34rem] px-16 md:px-0">
            <div
              v-html="quote.quote"
              class="pt-3 pb-6 border-t text-2xl md:text-4xl text-left transition"
              :class="{
                'border-brand-primary text-black': index === currentSlide,
                'border-transparent text-gray-300': index !== currentSlide,
              }"
            />
            <div
              class="text-xl md:text-2xl py-3 border-y text-left transition"
              :class="{
                'border-brand-primary text-black': index === currentSlide,
                'border-transparent text-gray-300': index !== currentSlide,
              }"
            >{{ quote.author }}</div>
          </div>
        </Slide>
      </template>

      <template #addons>
        <div class="absolute max-w-[42rem] px-4 md:px-0 w-full mx-auto flex justify-between items-center inset-0">
          <img class="hidden lg:block absolute left -translate-x-full" :src="illustration.responsiveImage.src" :alt="illustration.alt" />
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
import { ref, computed, onMounted, nextTick } from 'vue'
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
    const currentSlide = ref(0)
    const settings = {
      wrapAround: true,
      itemsToShow: 1,
      snapAlign: 'center',
    }
    const breakpoints = {
      768: {
        itemsToShow: 1.25
      },
      1024: {
        itemsToShow: 1.75
      },
      1280: {
        itemsToShow: 2
      },
      1536: {
        itemsToShow: 2.25
      },
    }

    onMounted(() => {
      nextTick(() => {
        // currentSlide.value = carousel.value?.data?.middleSlide.value + 1
      })
    })

    return {
      carousel,
      currentSlide,
      quotesComputed,
      settings,
      breakpoints,
    }
  },
}
</script>
