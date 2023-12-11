<template >
    
    <slot :text="greetingMessage" :count="1"></slot>
    <slot name="coo"></slot>
</template>
<script>
export default {
    data(){
        return{
            greetingMessage:"GGGGGGGGGG"
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>