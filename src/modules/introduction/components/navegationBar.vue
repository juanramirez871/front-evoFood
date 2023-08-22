<template>
    <header class="header">
    <div class="header-container">
    <a class="logo" href="./">
        <img src="../assets/logoevofood.png" alt="EvoFood">
    </a>
    <nav>
        <div class="menu-links">
            <a :class="{ 'active-link': activeLink === 'Inicio' }" href="#" @click="setActiveLink('Inicio')">Inicio</a>
            <a :class="{ 'active-link': activeLink === 'Guia-Res' }" href="#" @click="setActiveLink('Guia-Res')">Guia-Res</a>
            <a :class="{ 'active-link': activeLink === 'Ingresar' }" href="#" @click="setActiveLink('Ingresar')">Ingresar</a>
        </div>
        <div class="menu-toggle">
            <hamburguerMenu />
        </div>
    </nav>
    </div>
</header>
</template>

<script setup>
import { ref } from 'vue';
import hamburguerMenu from './hamburguerMenu.vue';

const activeLink = ref(null);

const setActiveLink = (link) => {
    activeLink.value = link;
};

</script>

<style scoped>
*, *:before, *:after {
box-sizing: inherit;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    background: linear-gradient(180deg, #D7D6E9 0%, rgba(193, 190, 242, 0.21) 100%);
    color: rgb(0, 0, 0);
    transition: background-color 0.3s ease-in-out;
    box-shadow: 4px 4px 12px 3px rgba(0, 0, 0, 0.25);
}
.header-container {
margin-right: auto;
margin-left: auto;
max-width: 80%;
height: 4rem;
display: flex;
justify-content: space-between;
align-items: center;

}
.logo {
display: flex;
align-items: center;
text-decoration: none;
padding-left: 1rem;
}
.logo img {
width: 10rem;
height: auto;
margin-right: 0.4rem;
}
.menu {
display: flex;
align-items: center;
}
.menu-toggle {
background: none;
border: none;
cursor: pointer;
padding: 0;
display: flex;
align-items: center;
}
.menu-icon {
width: 20px;
height: 20px;
border: 2px solid rgb(0, 0, 0);
border-radius: 3px;
position: relative;
transition: transform 0.3s ease-in-out;
}
.menu-open .menu-icon {
transform: rotate(90deg);
}
.menu-links {
    display: flex;
    flex-direction: row;
    color: rgb(0, 0, 0);
    position: absolute;
    top: 84%;
    right: 0;
    width: auto;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
    align-items: center;
    justify-content: flex-end;
    padding-right: 11rem;
    gap : 3.5rem
}
.menu-open .menu-links {
transform: translateY(0);
}
.menu-links a {
    display: flex;
    padding: 0.5rem;
    align-self: center;
    font-family: 'dosis';
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bolder;
    color: #070530;
    transition: transform 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
    border-bottom: 2px solid transparent;
}
.menu-links a:hover {
    border-bottom-color: #05006b;
    transform: translateY(-3px);
    opacity: 0.8;
}
.menu-links a.active-link {
    border-bottom-color: #040233;
    opacity: 0.8;
}
.menu-toggle {
    display: none;
    align-items: center;
}
/* Estilos responsivos */
@media screen and (max-width: 946px) {
.menu-links {
    display: none;
}
.menu-toggle {
    display: flex;
    align-items: center;
    display: flex;
    padding: 5rem;
}
}
</style>
