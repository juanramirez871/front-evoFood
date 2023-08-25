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
    <div class="menusdigitales">
        <br>
        Menús digitales atractivos
    </div>
</div>
<br><br><br><br><br><br><br><br><br><br>
</template>

<script setup>
import navegationBarVue from '../components/navegationBar.vue';
import botonRegistrarse from '../components/botonRegistrarse.vue';
import descripcionInicioVue from '../components/descripcionInicio.vue';
</script>

<style scoped>
.template{
    width: 100%;
}
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
.menusdigitales{
    color: #0C0A36;
    font-family: Dosis;
    font-size: 3rem;
    font-style: normal;
    display: flex;
    font-weight: 700;
    line-height: normal;
    justify-content: center;
    margin-top: 2%;
}
.carrusel {
    display: flex;
    justify-content: center;
    width: 100%;
}
@media (max-width: 768px) {
    .imagen{
        display: flex;
        position: relative;
        margin-left: 0;
    }
    .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        margin-top: -8%;
    }
    .imagen img {
        max-width: 50%;
    }
    .menusdigitales{
        color: #0e0b4f;
        font-family: Dosis;
        font-size: 1.9rem;
        font-style: normal;
        display: flex;
        font-weight: 700;
        line-height: normal;
        justify-content: center;
        margin-top: 2%;
    }
}
</style>