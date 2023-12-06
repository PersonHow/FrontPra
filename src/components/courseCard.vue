<script>
export default {
    data(){
        return{
        }
    },
    props: [
        "idName",
        "iclass",
        "h3Text",
        "pText",
        "btnText"
    ]
}
</script>

<template>
    <div class="card" name="cool" :id="idName">
        <i :class="iclass"></i>
        <h3>{{ h3Text }}</h3>
        <p>{{ pText }}</p>
        <button type="button">{{ btnText }}</button>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: 25%;
    margin: 10px;
    padding: 10px;
    background-color: #fff;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0 20px 35px rgb(0, 0, 0, 0.1);

    h3 {
        margin: 10px;
        text-transform: capitalize;
    }

    button {
        background: orangered;
        color: #fff;
        padding: 7px 15px;
        border-radius: 10px;
        margin-top: 15px;
        cursor: pointer;

        &:hover {
            background: rgb(233, 70, 15, 0.8);

        }
    }

    i {
        font-size: 22px;
        padding: 10px;
    }
}
</style>