<template>
  <ul class="divide-y divide-gray-300">
    <li v-for="vacancy in vacancies" :key="vacancy.id" class="py-5">
      <div class="text-sm">{{ vacancy.category }}</div>
      <div>
        <a class="text-2xl font-bold text-brand-primary hover:underline" :href="`https://careers.ldi.global/jobs/${vacancy.id}`" target="_blank">{{ vacancy.name.replace(' -', ',') }}</a>
      </div>
      <div class="text-sm">Added on {{ vacancy.published_at }}</div>
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
    axios.get(`https://apply.ldi.global/api/vacancies?entities[0]=${props.id}&only[0]=name&only[1]=id&only[2]=published_at&only[3]=category`).then(res => {
      vacancies.value = res.data
    })

    return {
      vacancies,
    }
  },
}
</script>