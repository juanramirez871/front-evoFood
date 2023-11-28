<template>
<div>
    <div class="nav">
        <Header />
    </div>
    <el-backtop :right="20" :bottom="40" />
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
        <br>
    <div class="titulo">
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
    <div class="subtitulo2">
        <div class="titulo">
            <br>
            Ventajas de estar con nosotros
            <div class="imagen-chulo">
                <img src="../assets/listo.png" alt="" width="150">
            </div>
        </div>
    </div>
    <div class="waver">
        <wavesStyle />
    </div>
    <div class="cartas">
        <cartaContainerVue
        v-for="(carta) in cartas"
        :key="carta.id"
        :cardTitle="carta.cardTitle"
        :cardText="carta.cardText"
        :imSrc=carta.imSrc
        />
    </div>
    <div class="titulo">
        PQR
    </div>
    <div>
        <PQR/>
    </div>
    <br>
</div>
<Footer />
</template>

<script setup>
import { ref } from 'vue';

import Footer from '../../../shared/components/footer.vue';
import Header from "../components/navegationBar.vue"
import botonRegistrarse from '../components/botonRegistrarse.vue';
import descripcionInicioVue from '../components/descripcionInicio.vue';
import descripcionMitad from '../components/descripcionMitad.vue';
import registrerForm from '../components/registrerForm.vue';
import cartaContainerVue from '../components/cartaContainer.vue';
import wavesStyle from '../components/waverStyle.vue';
import img1 from '../assets/estadistica.png'
import img2 from '../assets/bell.png'
import img3 from '../assets/tiempo.png/'
import PQR from '../components/PQR.vue'
// import footers from '../../../shared/components/footers.vue'

const cartas = ref([
    {
        id: 1,
        cardTitle : "Toma el Control",
        cardText: "Recibe toda la data de consumo de tus clientes",
        imSrc: img1
    },
    {
        id: 2,
        cardTitle : "Experiencias Únicas",
        cardText: "¡Recomendaciones personalizadas para una experiencia única!",
        imSrc: img2
    },
    {
        id: 3,
        cardTitle : "Optimiza la Experiencia",
        cardText: "Disminuye los tiempos de pedido",
        imSrc: img3
    }
]);
</script>

<style scoped>


.nav {
    margin-bottom: 3vh;
}
.imagen{
    display: flex;
    position: relative;
    margin-left: 20%;
}
.imagen-chulo{
    position: relative;
}
.imagen-chulo img{
    max-width: 100%;
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
.titulo{
    color: #0C0A36;
    font-size: 3rem;
    font-style: normal;
    display: flex;
    font-weight: 700;
    line-height: normal;
    justify-content: center;
    margin-top: 4%;
    margin-bottom: 2%;
    text-align: center;

}
.carrusel {
    display: flex;
    justify-content: center;
    width: 100%;
}
.contentCenter{
    display: flex;
    justify-content: center;
    margin: 3%;
}
.contentForm{
    display: flex;
    justify-content: center;
    margin-right: 10%;
    margin-left: 10%;
    height: auto;
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
    position: relative;
    right: -1rem;
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
.waver{
    height: auto;
    margin-bottom : -4%;
}
.cartas{
    display: flex;
    flex-wrap: wrap;
    gap: 10rem;
    justify-items: center;
    justify-content: center;
    align-items: center;
    background-color:#95B3FF;
    height:auto;
    padding : 5rem;
    box-shadow: 0px 5px 20px 19px #95B3FF;
}
@media (max-width: 767px) {
    .imagen{
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
    .titulo{
        font-size: 1.8rem;
        margin-top : 10vh;
    }
}
@media (max-width:1000px) {
    .contentForm{
        flex-direction: column;
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
    .waver{
        margin-top : 10vh;
    }
    .subtitulo2{
        margin-right: 5%;
        margin-left: 5%;
    }
    .cartas{
        gap: 2rem;
    }
    .imagen-chulo img{
        width: 22vw;
    }
    .content, .formRegistrer, .cartas {
        max-width: 100%;
    }
}
</style>