import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'

export default defineConfig({
  buildOptions: {
    site: 'https://www.lifeplusworldwide.com',
    sitemap: true,
  },
  integrations: [
    vue(),
  ],
})
