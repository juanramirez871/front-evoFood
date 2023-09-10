<template>
<div>
    <div class="card">
    <div class="circle-fondo">
        <div class="circle-img">
        <img :src="imSrc" alt="">
        </div>
    </div>
    <div class="circle"></div>
    <div class="card-inner">
        <p>{{ cardText }}</p>
    </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
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
    cursor: pointer;
}
.card-inner {
    width: 100%;
    height: 50%;

    backdrop-filter: blur(10px);
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
    color: black;
}

.circle-fondo {
    width: 25vh;
    height: 25vh;
    background-color: beige;
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
