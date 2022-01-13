<template>
  <div>
    {{ test }}
  </div>
</template>
<script setup lang="ts">
const Obj = {
  car: 'test',
  mobile: {
    temp: 10
  }
}
let test = ref(10)

test.value = 'testtest'
</script>
