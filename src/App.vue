<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'

</script>

<template>
  <div class="headerShow">
    <Header />
  </div>
  <div class="content">

    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.headerShow{
  width: 100vw;
  height: 15vh;
}
.content{
  width: 100vw;
  height: 85vh;
}

</style>
