<template>
<div>
    <div class="nav">
        <navegationBarVue />
    </div>
        <div class="imagen">
            <img src="../assets/rating.png" alt="">
        </div>
    <div class="content">
        <descripcionInicioVue />
    </div>
    <br>
    <div class="center-button">
        <botonRegistrarse />
    </div>
</div>
</template>

<script setup>
import navegationBarVue from '../components/navegationBar.vue';
import botonRegistrarse from '../components/botonRegistrarse.vue';
import descripcionInicioVue from '../components/descripcionInicio.vue';
</script>

<style scoped>
.nav {
    margin-bottom: 3rem;
}
.imagen{
    display: flex;
    position: relative;
    margin-left: 20%;
}
.content {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: -6%;
}
.center-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}
</style>