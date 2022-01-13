import { defineNuxtConfig } from 'nuxt3'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'My App'
  },
  vite: {
    logLevel: 'info',
    plugins: [eslintPlugin()]
  }
})
