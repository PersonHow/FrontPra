<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    components: {
        RouterLink
    }
}

</script>

<template>
    <div class="show">
        <RouterLink to="/" class="routerItem">Home</RouterLink>
        <RouterLink to="/Second" class="routerItem">Second</RouterLink>
        <RouterLink to="/cardTest" class="routerItem">cardTest</RouterLink>
    </div>
</template>


<style scoped lang="scss">
.show {
    width: 100%;
    height: 100%;
    font-size: 24pt;
    font-family: 'Kdam Thmor Pro', sans-serif;

    .routerItem {
        margin-right: 0.5%;
        text-decoration: none;
        color: rgb(85, 85, 83);

        &:hover {
                background: #eee;
            }   

    }
}
</style>