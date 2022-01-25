<template>
  <div>
    <h5>Load on Server, Doesn't Block Navigation</h5>
    {{ serverNoBlock }}
  </div>
</template>

<script lang="ts" setup>
const { testWaiting } = useLoading()
// Will load on server but doesnt block navigation
// On Initial page refresh/load, this data will be loaded before rendering
const serverNoBlock = await useLazyAsyncData('serverNoBlock', () => testWaiting(3000))
</script>
