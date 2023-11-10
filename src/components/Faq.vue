<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="border-t border-gray-300">
      <div
        v-for="(question, index) in allQuestions"
        :key="question.id"
        class="group cursor-pointer py-4 border-b border-gray-300"
        @click="currentIndex = index"
      >
        <div
          :class="['flex justify-between items-center', isActive(index) ? activeColor : inactiveColor]"
        >
          <h4 class="text-lg flex-1 pe-4">{{ question.question }}</h4>
          <div class="w-5">
            <svg xmlns="http://www.w3.org/2000/svg" :class="`w-5 h-5 ${isActive(index) ? 'hidden ltr:lg:block' : 'hidden ltr:lg:group-hover:block'}`" viewBox="0 0 512 512" fill="currentColor"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" :class="`w-5 h-5 ${isActive(index) ? 'hidden rtl:lg:block' : 'hidden rtl:lg:group-hover:block'}`" viewBox="0 0 512 512" fill="currentColor"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" :class="`w-5 h-5 ${isActive(index) ? 'lg:hidden' : 'hidden'}`" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"/></svg>
          </div>
        </div>

        <div v-if="isActive(index)" :class="`mt-6 lg:hidden prose ${invert ? 'prose-white' : ''} prose-lg`" v-html="question.answer"></div>
      </div>
    </div>
    <div class="hidden lg:block ps-8 relative">
      <div v-for="(question, index) in allQuestions" :key="question.id">
        <Transition
          enter-active-class="transition duration-150 ease-in-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-150 ease-in-out"
          mode="out-in"
        >
          <div
            :class="`prose ${invert ? 'prose-white' : ''} prose-lg`"
            v-show="isActive(index)"
            v-html="question.answer"
          />
        </Transition>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  questions: Array,
  invert: {
    type: Boolean,
    default: () => false,
  }
})
const currentIndex = ref(0)
const isActive = index => currentIndex.value === index
const allQuestions = props.questions?.map((q, i) => ({
  ...q,
  active: i === currentIndex.value,
}))
const activeColor = props.invert
  ? 'text-white'
  : 'text-black'
const inactiveColor = props.invert
  ? 'text-brand-base group-hover:text-white'
  :  'text-brand-primary group-hover:text-black'
</script>
