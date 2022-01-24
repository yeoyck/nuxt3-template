<template>
  <div>
    <p>Hi {{ route.params.name }}</p>
    <div v-if="user.otherNames.length">
      <span>Previous Names</span>
      <ul>
        <li v-for="otherName in user.otherNames" :key="otherName">
          <router-link :to="`/hi/${otherName}`" replace>
            {{ otherName }}
          </router-link>
        </li>
      </ul>
    </div>

    <div>
      <button @click="router.back()">Back</button>
      <button @click="doReset">Reset</button>
    </div>
    <p>Refresh this page to see SSR state hydration</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

definePageMeta({
  layout: false
})

const router = useRouter()
const route = useRoute()
const user = useUserStore()

if (import.meta.env.SSR) {
  // SSR initial state
  user.previousNames = ['SSR State']
}

user.setNewName(route.params.name as string)

const doReset = () => {
  user.$patch({
    previousNames: []
  })
  // OR
  // user.previousNames = []
}
</script>

<style lang="scss"></style>
