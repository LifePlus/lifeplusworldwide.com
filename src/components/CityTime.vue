<template>
  <div class="text-xs" :class="classes">
    <div class="font-bold">
      {{ label }}
    </div>
    <div class="whitespace-no-wrap font-mono">{{ time }}</div>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import tz from 'dayjs/plugin/timezone.js'
dayjs.extend(utc)
dayjs.extend(tz)

export default {
  props: {
    timezone: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
    }
  },
  setup ({ timezone }) {
    const getFormattedTime = () => {
      return dayjs().tz(timezone).format('HH:mm:ss')
    }
    const time = ref(getFormattedTime())
    let interval = setInterval(() => {
      time.value = getFormattedTime()
    }, 1000)

    onBeforeUnmount(() => {
      clearInterval(interval)
    })

    return {
      time,
    }
  },
}
</script>