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
            <a
              class="flex w-full px-4 py-1 border-l-4 transition"
              :href="getPrefix(locale) + currentPath"
              :class="{
                'border-black text-brand-primary': locale === currentLocale,
                'border-white hover:border-black hover:text-brand-primary': locale !== currentLocale,
              }"
            >
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
      <svg v-if="currentLocale === 'en'" class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 112h288M192 64v48M272 448l96-224 96 224M301.5 384h133M281.3 112S257 206 199 277 80 384 80 384"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 336s-35-27-72-75-56-85-56-85"/></svg>
      <span v-else>
        {{ getShortLabel(currentLocale) }}
      </span>
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
let currentPath = window.location.pathname.replace(new RegExp(`^\/${props.currentLocale}`), '')

const getPrefix = locale => {
  if (locale === 'en') {
    return ''
  }

  return `/${locale}`
}
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
