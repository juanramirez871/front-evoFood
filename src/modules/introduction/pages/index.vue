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
    <div class="contentCenter">
        <descripcionMitad />
    </div>
    <div class="contentForm">
        <div class="formImg">
            <div class="tarjeta">
                <img src="../assets/tarjeta.png" alt="">
            </div>
        </div>
        <div class="formRegistrer">
            <registrerForm />
        </div>
    </div>
    <div class="cartas">
        <cartaContainerVue cardText="Recibe toda la data 
        de consumo de tus clientes" />
        <cartaContainerVue cardText="¡Recomendaciones
        personalizadas
        para una experiencia
        única!" />
        <cartaContainerVue cardText="Disminuye los
        tiempos de pedido" />
    </div>
</div>
<br><br><br><br><br><br><br><br><br><br>
</template>

<script setup>
import { ref } from 'vue';

import navegationBarVue from '../components/navegationBar.vue';
import botonRegistrarse from '../components/botonRegistrarse.vue';
import descripcionInicioVue from '../components/descripcionInicio.vue';
import descripcionMitad from '../components/descripcionMitad.vue';
import registrerForm from '../components/registrerForm.vue';
import cartaContainerVue from '../components/cartaContainer.vue';
</script>

<style scoped>
/*body::-webkit-scrollbar{
width: 10px;
}
body::-webkit-scrollbar-thumb{
background-color: #0b4a75;
border-radius: 100px;
}
body::-webkit-scrollbar-button{
background-color: #C3D730;
}
body::-webkit-scrollbar-track-piece{
background-color: transparent;
}
*/
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
.contentCenter{
    display: flex;
    justify-content: center;
    margin: 7%;
}
.contentForm{
    display: flex;
    justify-content: center;
    margin-right: 10%;
    margin-left: 10%;
    height: 70vh;
    margin-bottom: 7%;
}
.formImg {
    flex: 20%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.formImg, .tarjeta{
    display: flex;
    justify-content: center;
}
.formImg .tarjeta img{
    width : 20rem;
}
.formRegistrer {
    flex: 80%;
    background-color: #D9D9D9;
    border-radius: 25px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding : 2%;
}
.cartas{
    display: flex;
    flex-wrap: wrap;
    margin-left : 5%;
    margin-right : 5%;
    gap: 10rem;
    justify-items: center;
    justify-content: center;
    margin-top : 10%
}
@media (max-width: 767px) {
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
    .contentCenter{
        margin-bottom : 35% !important;
    }
    .contentForm{
        margin-bottom: 60% !important;
    }
    .cartas{
        margin-top : 35vh !important;
    }

}
@media (max-width:1000px) {
    .contentForm{
        flex-direction: column;
        margin-bottom: 30%;
    }
    .contentCenter{
        margin-bottom : 20%;
    }
    .formImg {
        flex: 10%;
        display: flex;
        z-index: 1;
    }
    .formRegistrer {
        padding: 11%;
        margin: -5%;
    }
    .formImg .tarjeta img{
        width : 8rem;
    }
    .cartas{
        margin-left : 5%;
        margin-right : 5%;
        gap: 7rem;
        margin-top : 45vh;
    }
}
</style>