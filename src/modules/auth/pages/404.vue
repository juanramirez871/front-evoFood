<template>
    <div class="body">
      <div class="content">
        <div>
          <div class="box-color"></div>
          <div class="box-color2"></div>
          <div class="box-color3"></div>
          <div class="box-color4"></div>
          <div class="content-img" style="position: relative;">
            <img id="Polygon-4" src="@/assets/logo.png" alt="Logo">
            <img id="Polygon-1" src="@/assets/404/hamburguesa.png" alt="Hamburguesa">
            <img  id="Polygon-2" src="@/assets/404/helado.png" alt="Helado">
            <img id="Polygon-3" src="@/assets/404/pollo.png" alt="pollo">
          </div>
        </div>
        <div class="message-box">
          <img class="logoMovil" src="@/assets/logo.png" alt="Logo">
          <h1>404</h1>
        <p>¡Vaya, has descubierto un plato vacío en nuestro menú digital! 🍽️ Pero no te preocupes, nuestro equipo culinario está trabajando en llenarlo de sabrosos enlaces. Mientras tanto, ¿por qué no vuelves a la página principal y sigues explorando las delicias que ya tenemos listas? ¡Que disfrutes! 😋</p>
        <div class="buttons-con">
          <div class="action-link-wrap">
            <a @click="goBack" class="link-button link-back-button">Regresar</a>
            <a @click="() => router.push('/')" class="link-button">Ir a la pagina de inicio</a>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goBack = () => {
  history.back(-1)
}
</script>

<style scoped>
img {
  width: 100px;
}
.content{
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-color, .box-color2, .box-color3, .box-color4{
  position: absolute;
  background-color: #0032EF;
  filter: blur(70px);
}

.logoMovil{
  display: none;
}

.box-color2{
  left: 0;
  bottom: 0;
  width: 100px;
  height: 130px;
}
.box-color3{
  width: 100px;
  height: 130px;
  right: 0;
  top: 10rem;
}

.box-color4{
  width: 100px;
  height: 130px;
  right: 0;
  top: 0;
  left: 20px;
  bottom: 0;
  margin: auto;
}
.message-box {
  height: 200px;
  padding-left: 50px;
  width: 380px;
  top: 40%;
  left: 50%;
  margin-top: -200px;
  margin-left: 50px;
  color: rgb(30, 26, 26);
  font-family: Roboto;
  font-weight: 300;
  font-size: 1.1rem;
}
.message-box h1 {
  font-size: 4rem;
  line-height: 46px;
  margin-bottom: 40px;
}
.buttons-con .action-link-wrap {
  margin-top: 40px;
}
.buttons-con .action-link-wrap a {
  background: #68c950;
  padding: 8px 25px;
  border-radius: 4px;
  color: #FFF;
  font-weight: bold;
  font-size: 17px;
  transition: all 0.3s linear;
  cursor: pointer;
  text-decoration: none;
  margin-right: 10px
}
.buttons-con .action-link-wrap a:hover {
  background: rgb(11, 163, 11);
  color: #fff;
}

#Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {
  animation: float 2s infinite ease-in-out alternate;
}
#Polygon-2 {
  animation-delay: .5s; 
}
#Polygon-3 {
  animation-delay: .8s; 
}
#Polygon-4 {
  position: absolute !important;
  top: -60px !important;
  width: 15em !important;
  left: 40px !important;
}

@keyframes float {
	100% {
    transform: translateY(20px);
  }
}

@media (max-width: 360px){
.action-link-wrap{
  display: block;
  display: flex;
  flex-wrap: wrap;
}
.action-link-wrap * {
  margin: 10px;
}
}

@media (max-width: 450px) {
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -190px;
  }
  .logoMovil{
    position: inherit;
    text-align: center;
    margin-left: 80px;

  }
}

@media (max-width: 888px) {
    svg{
        display: none;
    }
    .message-box{
      margin: 0;
      padding: 0;
      margin-top: -200px;
      text-align: center;
    }
    .content-img{
      display: none;
    }
    .logoMovil{
      width: 15em;
      display: block;
      margin-left: 80px !important;
      margin: 0;
      margin: auto;
    }
    .box-color3{
      display: none;
    }

}

@media (min-width: 1600px){
  .message-box{
    height: 200px;
    padding-left: 50px;
    width: 600px;
    top: 40%;
    left: 50%;
    margin-top: -370px;
    margin-left: 50px;
    color: rgb(30, 26, 26);
    font-family: Roboto;
    font-weight: 300;
    font-size: 1.7rem;
}
.buttons-con .action-link-wrap a{
    font-size:  none;
}
}
</style>