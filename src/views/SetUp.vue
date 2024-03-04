<template>
    <div>
        <button @click="xxx(1)">XxX</button>
        {{ option }}
    </div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {
    setup() {
        let option =  reactive("")
        const xxx = (key)=>{    
            option += key;
        }
        return {
            option,
            xxx,
        }
    }
}
</script>
<style lang="">
    
</style>