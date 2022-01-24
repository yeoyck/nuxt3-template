import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'My App'
  },
  buildModules: ['@pinia/nuxt'],
  typescript: {
    strict: true
  },
  vite: {}
})
