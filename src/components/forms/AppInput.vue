<template>
  <input v-model="localValue" :type="type" class="block text-lg lg:text-2xl px-3 py-1.5 w-full shadow-sm focus:ring-2 focus:ring-brand-purple focus:border-brand-purple focus:outline-none border border-gray-300 rounded-md" />
</template>

<script setup>
import { computed } from 'vue'

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
</script>
