<template>
  <textarea
    v-model="localValue"
    @input="resize"
    ref="textarea"
    :style="{ height }"
    class="block text-lg lg:text-2xl px-3 py-1.5 w-full shadow-sm focus:ring-2 focus:ring-brand-turquoise focus:border-brand-turquoise focus:outline-none border border-gray-300 rounded-md"
  ></textarea>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  }
})
const emit = defineEmits(['update:modelValue'])
const localValue = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})
const textarea = ref(null)
const baseHeight = 66
const height = ref(`auto`)
const resize = () => {
  height.value = `auto`

  nextTick(() => {
    const scrollHeight = textarea.value.scrollHeight

    if (scrollHeight > baseHeight) {
      height.value = `${scrollHeight}px`
    }
  })
}
onMounted(resize)
</script>
