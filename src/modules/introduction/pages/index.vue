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
    <div class="linea">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="146" viewBox="0 0 1594 146" fill="none">
            <g filter="url(#filter0_d_86_27)">
                <path d="M710 98.9993L709.832 99.9851L710 98.9993ZM1589.69 1.72212C1590.09 1.34006 1590.1 0.707043 1589.72 0.308229C1589.34 -0.0905851 1588.71 -0.104172 1588.31 0.277883L1589.69 1.72212ZM5.40305 134.414C129.168 79.9081 195.758 52.7385 286.11 48.436C376.537 44.13 490.783 62.727 709.832 99.9851L710.168 98.0134C491.217 60.7721 376.713 42.1194 286.015 46.4383C195.242 50.7608 128.332 78.0908 4.59695 132.584L5.40305 134.414ZM709.832 99.9851C1210.97 185.224 1470.32 116.073 1589.69 1.72212L1588.31 0.277883C1469.68 113.925 1211.2 183.234 710.168 98.0134L709.832 99.9851Z" fill="black"/>
            </g>
            <defs>
                <filter id="filter0_d_86_27" x="0.596954" y="0" width="1593.4" height="146" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_86_27"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_86_27" result="shape"/>
                </filter>
            </defs>
            </svg>
    </div>
    <div class="menusdigitales">
        <br>
        Menús digitales atractivos
    </div>
    <div class="carrusel">
        <slideMenu />
    </div>
</div>
<br><br><br><br><br><br><br><br><br><br>
</template>

<script setup>
import navegationBarVue from '../components/navegationBar.vue';
import botonRegistrarse from '../components/botonRegistrarse.vue';
import descripcionInicioVue from '../components/descripcionInicio.vue';
import slideMenu from '../components/slideMenus.vue';
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
.linea {
    width: 100%;
    margin-top: -1%;
    position: absolute;
    bottom: -100px; 
    left: 0;
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
    margin-top: 8%;
    margin-bottom: 20%;
}
.carrusel {
    display: flex;
    justify-content: center;
    width: 100%;
}

@media (max-width: 800px) {
    .linea {
        width: 100%;
        margin-top: -1%;
        position: absolute;
        bottom: -10rem; 
        left: 0;
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
        margin-top: 8%;
        margin-bottom: 18%;
    }
    .carrusel {
        margin-top: 40%;
}
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
        font-size: 1.7rem;
        font-style: normal;
        display: flex;
        font-weight: 700;
        line-height: normal;
        justify-content: center;
        margin-top: 20%;
    }
    .carrusel {
        margin-top: 40%;
    }
}
</style>