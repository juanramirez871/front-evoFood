<template>
    <footer>
    <h4>ViibeQ</h4>
    <br>
    <h4>Redes Sociales</h4>
    <div class="iconos">
        <Iconos/>
    </div>
    </footer>
</template>

<script setup>
import Iconos from './Iconos.vue';
</script>

<style scoped>
    h4{
        color: white;
        padding: 20px;
        text-align: center;
    }
    footer{
        background: #1f1f20;
        width: 100%;
    }
    *{
        margin: 0;
    }
    .iconos{
        display: flex;
        justify-content: center;
    }
</style>