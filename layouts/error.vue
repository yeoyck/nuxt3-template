<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main>
    <div>[Error Layout]</div>
    <div><slot /></div>
    <div>
      <button @click="router.back()">Back</button>
    </div>
  </main>
</template>
