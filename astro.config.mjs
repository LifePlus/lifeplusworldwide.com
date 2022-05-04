import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://www.lifeplusworldwide.com',
  trailingSlash: 'ignore',
  integrations: [
    vue(),
    sitemap({
      filter: page => !page.includes('academy-raising-boys')
    }),
  ],
})
