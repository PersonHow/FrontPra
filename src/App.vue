<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'

</script>

<template>
  <div class="appArea">

    <div class="headerShow">
      <Header />
    </div>
    <div class="content">

      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.appArea {
  width: 100vw;
  height: 100vh;
  display: flex;

  .headerShow {
    width: 18vw;
    height: 100vh;

  }

  .content {
    width: 82vw;
    height: 100vh;
  }
}
</style>
