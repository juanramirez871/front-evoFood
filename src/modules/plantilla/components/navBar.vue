<template>
    <header class="header" :style="{background: valueColor}">
    <div class="header-container">
    <a class="logo">
        <img v-if="!imgLogo" src="../../introduction/assets/2-removebg-preview.png" alt="Logo">
        <img v-else :src="imgLogo" alt="Logo">
        <div style="position: absolute; right: 15px; bottom: 0;">
            <EditImage
                @uploadImage="uploadImageLogo"
                :aspectRatio="[9, 3]"
            />
        </div>
    </a>
    <nav>
        <div class="menu-links">
            <a :class="{ 'active-link': activeLink === 'Inicio' }" href="#" @click="setActiveLink('Inicio')">Inicio</a>
            <a :class="{ 'active-link': activeLink === 'Menus' }" href="#" @click="setActiveLink('Menus')">Menús</a>
            <a :class="{ 'active-link': activeLink === 'Contactos' }" href="#" @click="setActiveLink('Contactos')">Contactos</a>
            <a :class="{ 'active-link': activeLink === 'Panel' }" href="#" @click="setActiveLink('Panel')">Panel</a>
            <buttonSearch  :colorInput="inputColor" />
        </div>
        <div class="menu-toggle">
            <hamburguerButton @click="toggleMenu" />
        </div>
    </nav>
    </div>
</header>
    <div class="bg-div" :class="{ 'active': menuOpen }">
        <div>
            <a><buttonSearch /></a>
            <a :class="{ 'active-link': activeLink === 'Inicio' }" href="#" @click="setActiveLink('Inicio')">Inicio</a>
            <a :class="{ 'active-link': activeLink === 'Menus' }" href="#" @click="setActiveLink('Menus')">Menus</a>
            <a :class="{ 'active-link': activeLink === 'Contactos' }" href="#" @click="setActiveLink('Contactos')">Contactos</a>
        </div>
    </div>

    <div class="contentColor">
        <div class="colorBackground">
            <p>Color Fondo</p><input type="color" :value="valueColorBack" @change="(e) => body.style.backgroundColor = e.target.value">
        </div>
        <div class="colorBackground">
            <p>Color barra navegadora</p><input type="color" :value="valueColor" @change="changeBarInput">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted} from 'vue';
import hamburguerButton from './hamburguerButton.vue'
import buttonSearch from './buttonSearch.vue'
import EditImage from "../../../shared/components/EditImage.vue";

const menuOpen = ref(false);
const activeLink = ref(null);
const imgLogo = ref()
const body = document.body
const valueColor = ref('#1f1f20')
const inputColor = ref('#1f1f30');
const valueColorBack = ref('#000000')
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};
const setActiveLink = (link) => {
    activeLink.value = link;
};

const uploadImageLogo = ({ base64 }) => {
    imgLogo.value = base64;
}

const colorLigth = (color, factor) =>  {
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);
  const nuevoR = Math.min(r + factor, 255);
  const nuevoG = Math.min(g + factor, 255);
  const nuevoB = Math.min(b + factor, 255);
  const nuevoColor =
    "#" +
    Math.round(nuevoR).toString(16).padStart(2, "0") +
    Math.round(nuevoG).toString(16).padStart(2, "0") +
    Math.round(nuevoB).toString(16).padStart(2, "0");
  inputColor.value = nuevoColor;
}

const changeBarInput = (e) => {
    valueColor.value = e.target.value;
    colorLigth(e.target.value, 20)
}

onMounted(() => {
    setTimeout(() => {
        const header = document.querySelector('.header');
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);
});
</script>

<style scoped>
*, *:before, *:after {
box-sizing: inherit;
}
.bg-div {
    background: linear-gradient(180deg, #1f1f20 0%, rgba(26, 25, 25, 0.982) 100%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 7;
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
}
.contentColor{
    position: absolute;
    top: 80px;
    z-index: 1;
}
.colorBackground{
    display: flex;
    background-color: rgba(0, 0, 0, 0.862);
    border-radius: 3px;
    margin-bottom: 5px;
    align-items: center;
    padding-right: 5px;
    padding-left: 5px;
    color: whitesmoke;
}
.colorBackground p{
    margin-right: 10px;
}
.bg-div.active {
    opacity: 1;
    pointer-events: auto;
}
.bg-div a {
    color: #ffffff;
    font-size: 1.7rem;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 7rem;
    text-decoration: unset;
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100 !important;
    width: 100%;
    transition: opacity 1s ease-in-out;
    background: linear-gradient(180deg, #1f1f20 0%, rgba(26, 25, 25, 0.982) 100%);
    color: rgb(245, 236, 236);
    transform: translateY(-20px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    border-bottom-right-radius: 219px;
    border-bottom-left-radius: 219px;
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
    position: relative;
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
    color: rgb(255, 255, 255);
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
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bolder;
    color: #ffffff;
    transition: transform 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
    border-bottom: 2px solid transparent;
}
.menu-links a:hover {
    border-bottom-color: #ffffff;
    transform: translateY(-3px);
    opacity: 0.8;
}
.menu-links a.active-link {
    border-bottom-color: #ffffff;
    opacity: 0.8;
}
.menu-toggle {
    display: none;
    align-items: center;
}
/* Estilos responsivos */
@media screen and (max-width: 1200px) {
.menu-links {
    display: none;
}
.menu-toggle {
    display: flex;
    align-items: center;
    display: flex;
    max-width: 100%;
}
}
@media (max-width: 600px) {
    .colorBackground p{
        font-size: 10px;
    }
}
</style>
