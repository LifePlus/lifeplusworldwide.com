<template>
  <div class="relative z-10">
    <transition
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="show" class="absolute w-48 top-8 right-0 text-left text-black shadow-md rounded bg-white">
        <ul class="divide-y divide-gray-300">
          <li
            v-for="locale in locales"
            :key="locale"
          >
            <a class="flex w-full px-4 py-1 border-l-4 transition border-white hover:border-black hover:text-brand-primary" :href="`/${locale}`">
              {{ getLabel(locale) }}
            </a>
          </li>
        </ul>
        <teleport to="#wrapper">
          <div class="fixed h-screen w-screen inset-0 bg-transparent" @click="show = false"></div>
        </teleport>
      </div>
    </transition>
    <button class="uppercase" @click.prevent="show = !show">
      {{ getShortLabel(currentLocale) }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  locales: Array,
  currentLocale: String,
})
const show = ref(false)
const getLabel = locale => {
  switch (locale) {
    case 'en':
      return 'English'
    case 'zh':
      return '中文'
    case 'ko':
      return '한국어'
    case 'ar':
      return 'العربية'
    default:
      return locale
  }
}
const getShortLabel = locale => {
  switch (locale) {
    case 'en':
      return 'EN'
    case 'zh':
      return '中'
    case 'ko':
      return '한'
    case 'ar':
      return 'ع'
    default:
      return locale
  }
}
</script>
