<template>
  <div>
    <div>
      <h3>Page Props and Pinia Test</h3>
      <input id="input" v-model="name" :placeholder="`What's your name?`" type="text" autocomplete="false" text="center" @keydown.enter="go" />
    </div>
    <div>
      <h3>Vue 3 Composition API Test ({{ componentEmit }})</h3>
      <TestComposition test="tester" @change="handleChange"></TestComposition>
    </div>
    <!-- <div>
      <h3>Vue 3 Suspense</h3>
      <div v-if="error">{{ error }}</div>
      <Suspense v-else>
        <template #default> <TestSuspense></TestSuspense> </template>
        <template #fallback>
          <h1>Loading...</h1>
        </template>
      </Suspense>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '~/stores/user'

// Pinia Store and Page Props Test
const user = useUserStore()
const name = ref(user.savedName)
const router = useRouter()
const go = () => {
  if (name.value) router.push({ name: 'hi-name', params: { name: name.value } })
}

// Test Composition / Props / Emit
const componentEmit = ref(0)
const handleChange = (val: number) => {
  componentEmit.value = val
}

// Suspense testing
// const error = ref<string | null>(null)
// onErrorCaptured(() => {
//   error.value = 'Something went wrong'
// })
</script>
