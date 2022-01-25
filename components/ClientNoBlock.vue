<template>
  <div>
    <h5>Load on Client, Doesn't Block Navigation</h5>
    {{ serverBlock }}
  </div>
</template>

<script lang="ts" setup>
const { testWaiting } = useLoading()
// doesnt load on server and doesnt block navigation
const serverBlock = await useLazyAsyncData('serverNoBlock', () => testWaiting(3000), { server: false })
</script>
