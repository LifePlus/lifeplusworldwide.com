<template>
  <div class="relative z-10">
    <transition
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="show" class="absolute z-20 w-48 mt-4 top-full ltr:right-0 rtl:left-0 text-left text-black shadow-md rounded overflow-hidden bg-white">
        <ul class="divide-y divide-gray-300 language-list">
          <li v-for="lang in languages" :key="lang.code">
            <button @click.prevent="changeLang(lang.code)" class="flex w-full px-4 py-1 ltr:border-l-4 rtl:border-r-4 transition border-white hover:border-black hover:text-brand-primary">
              {{ lang.label }}
            </button>
          </li>
        </ul>
      </div>
    </transition>
    <button @click.prevent="show = !show">
      <span>
        {{ currentLang.toUpperCase() }}
      </span>
    </button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  props: {
    url: String,
  },

  setup (props) {
    const show = ref(false)
    const languages = ref([])
    const currentLang = ref('en')
    const changeLang = (code) => {
      show.value = false
      currentLang.value = code

      if (!import.meta.env.SSR) {
        Weglot.switchTo(code)
      }
    }

    if (!import.meta.env.SSR) {
      onMounted(() => {
        const interval = setInterval(() => {
          if (!Weglot.options.languages) {
            return
          }

          clearInterval(interval)
          currentLang.value = Weglot.getCurrentLang()
          languages.value = Weglot.options.languages
            .map(lang => lang.language_to)
            .concat(Weglot.options.language_from)
            .sort()
            .map(code => ({
              code,
              label: Weglot.getLanguageName(code),
            }))
        }, 100)
      })
    }

    return {
      show,
      languages,
      currentLang,
      changeLang,
    }
  },
}
</script>