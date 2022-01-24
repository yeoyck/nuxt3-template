<template>
  <div class="layout">
    <div class="layout__title">Default Layout!</div>
    <div class="layout__navigation">[<NuxtLink to="/">Page1</NuxtLink> | <NuxtLink to="/page2">Page2</NuxtLink>]</div>
    <div><slot /></div>
  </div>
</template>
<style lang="scss">
.layout {
  .layout__title {
    display: flex;
    justify-content: center;
    color: red;
  }
  .layout__navigation {
    display: flex;
    justify-content: center;
  }
}
</style>
