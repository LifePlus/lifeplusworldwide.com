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
              <LanguageIcon class="w-6 h-6 text-gray-500" />
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
import { ref } from 'vue'
import LanguageIcon from './icons/LanguageIcon.vue'

export default {
  components: {
    LanguageIcon,
  },
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