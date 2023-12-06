<script>
import cards from "../components/praCard.vue"
export default {
    data() {
        return {
            arr: [
                {
                    name: "Canyons",
                    img: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
                }, {
                    name: "Beaches",
                    img: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
                }, {
                    name: "Trees",
                    img: "https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
                }, {
                    name: "Lakes",
                    img: "https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop="
                }
            ]
        }
    },
    methods: {
        test() {
            let arr = []
            const cc = document.querySelector("#ccc")
            console.log(cc.value)
            arr.push(cc.value)
            console.log(arr)
        }
    },
    components: {
        cards
    },
    mounted() {

    },
    updated() {

    }
}

</script>

<template>
    <div class="cardArea">
        <h1 class="title">Hover over the cards</h1>
        <div class="container">
            <cards v-for="item in arr" :dataImage="item.img">
                <template v-slot:header>
                    <!-- <h1 slot="header">{{ item.name }}</h1>  -->
                    <h1>{{ item.name }}</h1>
                </template>
                <template v-slot:content>

                    <p slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit.fuga placeat!</p>
                </template>
            </cards>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cardArea {
    width: 100vw;
    height: 100%;
    font-size: 14px;
    font-weight: 500;
    background-color: #BCAAA4;
    -webkit-font-smoothing: antialiased;

    p {
        line-height: 1.5em;
    }

    h1+p,
    p+p {
        margin-top: 10px;
    }

    .title {
        font-size: 24px;
        font-weight: 700;
        color: #5D4037;
        text-align: center;
    }

    .container {
        padding: 40px 80px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>