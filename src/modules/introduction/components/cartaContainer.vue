<template>
<div>
    <div class="card">
    <div class="circle-fondo">
        <div class="circle-img">
        <img :src="imSrc" alt="">
        </div>
    </div>
    <div class="circle"></div>
        <h2>{{ cardTitle}}</h2>
    <div class="card-inner">
        <p>{{ cardText }}</p>
    </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    cardTitle : String,
    cardText: String,
    imSrc: String
});

</script>

<style scoped>
.card {
    width: 200px;
    height: auto;
    transition: all 0.2s;
    position: relative;
}
.card-inner {
    width: 100%;
    height: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    color: black;
}
h2 {
    text-align: center;
    align-items: center;
    color: #0C0A36;
}
p{
    margin-top : -2%;
    font-size: 1.2em;
    font-weight: 400;
}
.circle-fondo {
    width: 25vh;
    height: 25vh;
    background-color: #fcfaed;
    border-radius: 50%;
    display: flex;
    margin-bottom: 1em;
    padding : 2%;
}
.circle-img {
    display: flex;
    width: inherit;
    align-items: center;
    justify-content: center;
}
.circle-img img {
    width: 70%;
    height: 70%;
}

</style>
