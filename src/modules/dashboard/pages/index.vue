<template>
<div>
    <NavBar />
</div>
<div class="container">
    <div class="navegation">
        <Navegation @section="changeSection" />
    </div>
    <el-backtop :right="20" :bottom="10" class="subir"/>
    <div class="panel">
        <Panel v-if="currentSection == 'panel'" />
        <Suscripcion v-if="currentSection == 'Suscripcion'" />
        <Comida v-if="currentSection == 'Comida'" />
        <Tablas v-if="currentSection == 'Tablas'" />
        <Pedidos v-if="currentSection == 'pedidos'" />
    </div>
</div>
</template>

<script setup>
import Navegation from  '../components/Navegation.vue'
import NavBar from  '../components/NavBar.vue'
import Panel from '../components/Panel.vue'
import Suscripcion from '../components/Suscripcion.vue'
import Comida from '../components/Comida.vue'
import Tablas from '../components/Tablas.vue'
import { ref } from 'vue'
import Pedidos from '../components/Pedidos.vue'
const currentSection = ref("panel")

function changeSection(section){
    currentSection.value = section
}

</script>

<style scoped>
.container{
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #f0f0f0;
}
.navegation{
    display: flex;
    margin-right: 0.5rem;
    height: 100vh;

}
.panel{
    width: 100%;
    margin-top: 2rem;
    margin-right: 1rem;
}
.subir{
    background-color: #727477;
}
</style>
