<template>
  <div>
    <h5>Load on Server, Block Navigation</h5>
    {{ serverBlock }}
  </div>
</template>

<script lang="ts" setup>
const { testWaiting } = useLoading()
// Will load on server and will block navigation
// On Initial page refresh/load, this data will be loaded before rendering
// On Transition between page, it will load before loading the new page
const serverBlock = await useAsyncData('serverBlock', () => testWaiting(1000))
</script>
