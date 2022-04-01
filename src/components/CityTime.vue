<template>
  <div class="text-xs">
    <div class="font-bold">
      {{ label }}
    </div>
    <div class="whitespace-no-wrap font-mono">{{ time }}</div>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue'
import dateFromTz from 'date-from-timezone'
import leftPad from 'just-left-pad'

export default {
  props: {
    timezone: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    }
  },
  setup ({ timezone }) {
    const dateFn = dateFromTz(timezone)
    const formatTime = date => {
      return `${leftPad(date.getHours().toString(), 2, '0')}:${leftPad(date.getMinutes().toString(), 2, '0')}:${leftPad(date.getSeconds().toString(), 2, '0')}`
    }
    const getFormattedTime = () => {
      return formatTime(dateFn(Date.now()))
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