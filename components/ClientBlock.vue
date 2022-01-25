<template>
  <div>
    <h5>Load on Client, Block Navigation</h5>
    {{ serverBlock }}
  </div>
</template>

<script lang="ts" setup>
const { testWaiting } = useLoading()
// doesnt load on server and will block navigation
// On Transition between page, it will load before loading the new page
const serverBlock = await useAsyncData('serverBlock', () => testWaiting(1000), { server: false })
</script>
