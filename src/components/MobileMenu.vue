<template>
  <div class="flex items-center px-4 lg:hidden">
    <button class="text-black" @click.prevent="open = true">
      <span class="sr-only">Open menu</span>
      <MenuIcon class="w-6 h-6" />
    </button>

    <teleport to="#menu-container">
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-1"
      >
        <div v-if="open" class="fixed lg:hidden z-50 inset-0 w-full p-3 bg-transparent" @click="open = false">
          <div class="rounded bg-white shadow-lg overflow-hidden">
            <ul class="border-b border-gray-300 divide-y divide-gray-300">
              <li
                v-for="item in items"
                :key="item.label"
              >
                <a
                  :href="slugBuilder(item.externalUrl || item.page?.slug)"
                  class="border-l-8 px-4 py-2 flex items-center justify-start space-x-2"
                  :class="{
                    'border-black': item?.page?.id === currentId,
                    'border-transparent': item?.page?.id !== currentId,
                  }"
                >
                  <span>{{ item.label }}</span>
                  <ExternalLinkIcon v-if="item.externalUrl" class="h-3 w-3 text-gray-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
import MenuIcon from './icons/MenuIcon.vue'
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue'

export default {
  components: {
    MenuIcon,
    ExternalLinkIcon,
  },
  props: {
    items: Array,
    currentId: String,
  },
  setup() {
    const open = ref(false)
    const slugBuilder = (slug) => {
      if (slug.startsWith('http')) {
        return slug
      }

      return '/' + (slug === 'home' ? '' : slug)
    }

    return {
      open,
      slugBuilder,
    }
  },
}
</script>