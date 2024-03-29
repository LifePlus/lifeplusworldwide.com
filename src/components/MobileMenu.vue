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
            <div class="px-4 mb-1">
              <button @click="open = false" class="text-gray-500 font-medium text-sm">Close menu</button>
            </div>
            <ul class="border-b border-gray-300 divide-y divide-gray-300">
              <li
                v-for="item in mappedItems"
                :key="item.label"
              >
                <a
                  :href="item.href"
                  class="border-l-8 px-4 py-2 flex items-center justify-start space-x-2"
                  :class="{
                    'border-black': item?.page?.id === currentId,
                    'border-transparent': item?.page?.id !== currentId && !(item?.children && item.children.some(i => i?.page?.id === currentId)),
                    'border-gray-300': item?.children && item.children.some(i => i?.page?.id === currentId),
                    'text-gray-500': item.inactive,
                  }"
                >
                  <span>{{ item.label }}</span>
                  <ExternalLinkIcon v-if="item.externalUrl" class="h-3 w-3 text-gray-500" />
                </a>

                <ul v-if="item.children.length > 0" class="border-t border-gray-300 divide-y divide-gray-300">
                  <li
                    v-for="child in item.children"
                    :key="child.label"
                  >
                    <a
                      :href="child.href"
                      class="border-l-8 pl-8 pr-4 py-2 flex items-center justify-start space-x-2"
                      :class="{
                        'border-black': child?.page?.id === currentId,
                        'border-transparent': child?.page?.id !== currentId,
                        'text-gray-500': item.inactive,
                      }"
                    >
                      <span>{{ child.label }}</span>
                      <ExternalLinkIcon v-if="child.externalUrl" class="h-3 w-3 text-gray-500" />
                    </a>
                  </li>
                </ul>
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
  setup (props) {
    const open = ref(false)
    const slugBuilder = (item) => {
      if (item.inactive) {
        return '#'
      }

      const slug = item.externalUrl || item.page?.slug
      if (slug?.startsWith('http')) {
        return slug
      }

      return '/' + (slug === 'home' ? '' : slug)
    }
    const mappedItems = props.items.map(item => ({
      ...item,
      href: slugBuilder(item),
      children: item.children.map(child => ({
        ...child,
        href: slugBuilder(child),
      }))
    }))

    return {
      open,
      mappedItems,
    }
  },
}
</script>