<template>
  <ul v-if="vacancies.length > 0" class="flex-1 self-start w-full relative z-10 min-h-[12rem] divide-y divide-gray-300">
    <li v-for="vacancy in vacancies" :key="vacancy.id" class="py-5 bg-white">
      <div class="text-sm">{{ vacancy.department?.name }}</div>
      <div>
        <a class="text-2xl font-bold text-brand-primary hover:underline" :href="`${vacancy.page_url}?utm_source=lifeplus&utm_content=vacancy+list`" target="_blank">{{ vacancy.display }}</a>
      </div>
      <div class="text-sm">Added on {{ vacancy.added }}</div>
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  props: {
    id: [String, Number],
  },

  setup (props) {
    const vacancies = ref([])
    axios.get(`https://vacancies.lifepluslearning.com/api/public-vacancies?entity${props.id}`).then(res => {
      vacancies.value = res.data
    })

    return {
      vacancies,
    }
  },
}
</script>