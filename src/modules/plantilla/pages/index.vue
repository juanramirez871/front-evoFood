<template>
<div>
    <navBar />
</div>
<sectionTop />
<h1>Más vendidos</h1>
<br>
<div class="scroll-container">
    <div class="recomendados">
        <recommended />
        <recommended />
        <recommended />
        <recommended />
        <recommended />
    </div>
</div>
<br><br><br><br><br>
<h1>Menús</h1>
<br>
<div class="menus">
    <sectionMenus />
    <sectionMenus />
    <sectionMenus />
    <sectionMenus />
    <sectionMenus />
</div>
<br><br><br><br><br>
<footerR />
</template>

<script setup>
import {ref} from "vue"
import navBar from '../components/navBar.vue'
import sectionTop from '../components/sectionTop.vue'
import recommended from '../components/recommended.vue'
import footerR from '../components/footerR.vue'
import sectionMenus from '../components/sectionMenus.vue'

</script>

<style scoped>
    h1{
        display: flex;
        justify-content: center;
    }
    .recomendados{
        display: flex;
        gap: 2rem;
        justify-content: center;
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .scroll-container {
    overflow-x: auto;
    overflow-Y: hidden;
    }
    .menus{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 2rem;
        column-gap: 2rem;
    }
</style>
