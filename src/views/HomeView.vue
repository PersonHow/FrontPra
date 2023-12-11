<script>
import childSlot from '../components/childSlot.vue'
export default {
  data(){
    return{
      test:"coo"
    }
  },
  components:{
    childSlot
  }
}

</script>

<template>
  <div class="main">
    <h1>我的名字是董卓</h1>
    <h2>我有一隻臘腸狗</h2>
    <h3>它很笨，但很可愛</h3>
    
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 70%;
  height: 80%;
  border: 1px solid black;

  
}
</style>
