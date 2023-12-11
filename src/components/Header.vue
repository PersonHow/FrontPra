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
        <span class="title">Tung's Blog</span>
        <RouterLink to="/" class="routerItem"><i class="fa-solid fa-house"></i><span>Home</span></RouterLink>
        <RouterLink to="/Second" class="routerItem"><i class="fa-solid fa-bars"></i><span>Second</span></RouterLink>
        <RouterLink to="/cardTest" class="routerItem"><i class="fa-solid fa-hippo"></i><span>cardTest</span></RouterLink>
        <RouterLink to="/NavieUI" class="routerItem"><i class="fa-solid fa-n"></i><span>NavieUI</span> </RouterLink>
    </div>
</template>


<style scoped lang="scss">
.show {
    margin-left: 1%;
    width: 99%;
    height: 100%;
    font-size: 24pt;
    font-family: 'Kdam Thmor Pro', sans-serif;
    display: flex;
    flex-direction: column;

    .title {
        font-size: 36pt;
    }

    .routerItem {
        height: 10%;
        margin-right: 0.5%;
        text-decoration: none;
        color: rgb(85, 85, 83);
        display: table;
        position: relative;

        i {
            position: relative;
            width: 70px;
            height: 40px;
            top: 10px;
            left: 30%;
            text-align: center;
            opacity: 1;
        }

        span {
            opacity: 0;
        }

        &:hover {
            background: #eee;
            // transition: 1s;

            i {
                animation: slide-up-out 500ms ease-out;
                opacity: 0;
            }

            span {
                opacity: 1;
                width: 100%;
                display: block;
                position: absolute;
                top: 10px;
                left: 25%;
                animation: slide-up 1200ms ease-out ;
            }
        }

    }

    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translate(0, 5px);
        }

        100% {
            opacity: 1;
            transform: translate(0, 0);
        }
    }

    @keyframes slide-up-out {
        from{
            opacity: 1;
            transform: translate(0, 0);
        }

        to{
            opacity: 0;
            transform: translate(0, 5px);
        }
    }
}
</style>