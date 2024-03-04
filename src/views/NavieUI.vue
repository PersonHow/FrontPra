<template>
  <n-carousel :slides-per-view="3" :space-between="20" :loop="false" draggable>
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
  </n-carousel>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button>Go For a Trip</n-button>
  </n-dropdown>
  <p>{{ this.start }}</p>
</template>
<script>
import { NCarousel, NDropdown, NButton } from 'naive-ui'
export default {
  data() {
    return {
      start:"",
      options: [
        {
          label: "倫敦",
          key: "London",
          // disabled: true
        },
        {
          label: "台北",
          key: "Taipei"
        },
        {
          label: "台南",
          key: "Tainan"
        },
        {
          label: "The Beverly Hills Hotel, Los Angeles",
          key: "the beverly hills hotel, los angeles"
        }
      ],
    }
  },
  methods:{
    handleSelect(key){
      this.start = key;
    }
  },

  components: {
    NCarousel,
    NDropdown,
    NButton
  }
}
</script>
<style lang="scss" scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>