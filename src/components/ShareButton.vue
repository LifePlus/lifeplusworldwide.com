<template>
  <div class="relative z-10">
    <transition
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="show" class="absolute w-48 -top-8 right-0 -translate-y-full text-left text-black shadow-md rounded bg-white">
        <ul class="divide-y divide-gray-300">
          <li
            v-for="platform in platforms"
            :key="platform.label"
          >
            <a class="flex w-full px-4 py-1 border-l-4 transition border-white hover:border-black hover:text-brand-primary" :href="platform.url" rel="noopener noreferrer" target="_blank">{{ platform.label }}</a>
          </li>
        </ul>
        <teleport to="#wrapper">
          <div class="fixed h-screen w-screen inset-0 bg-transparent" @click="show = false"></div>
        </teleport>
      </div>
    </transition>
    <RoundButton @click.prevent="show = !show" :solid="show">
      <ShareIcon class="w-6 h-6 fill-current" />
    </RoundButton>
  </div>
</template>

<script>
import { ref } from 'vue'
import RoundButton from './RoundButton.vue'
import ShareIcon from './icons/ShareIcon.vue'

const platforms = [
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/sharer.php?u={url}'
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/sharing/share-offsite/?url={url}'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/intent/tweet?url={url}&hashtags=#LifePlus'
  },
  {
    label: 'Reddit',
    url: 'https://reddit.com/submit?url={url}'
  },
  {
    label: 'Email',
    url: 'mailto:?subject=Check%20out%20LifePlus!&body=Read%20about%20LifePlus%20-%20{url}'
  },
]

export default {
  components: {
    RoundButton,
    ShareIcon,
  },
  props: {
    url: String,
  },

  setup (props) {
    const show = ref(false)

    return {
      platforms: platforms.map(platform => ({
        ...platform,
        url: platform.url.replace('{url}', encodeURIComponent(props.url))
      })),
      show,
    }
  },
}
</script>