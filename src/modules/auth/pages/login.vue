<template>
<div class="contenedor">
    <div class="form">
    <modalForm class="modalForm"/>
    </div>
    <div class="relleno">
        <div class="img1">
            <img src="../../introduction/assets/bolsa.png" alt="" srcset="">
        </div>
        <div class="img3">
            <img src="../../introduction/assets/bola.png" alt="" srcset="">
        </div>
        <div class="img2">
            <img src="../../introduction/assets/humano2.png" alt="" srcset="">
        </div>

    </div>
</div>
</template>

<script setup>
import modalForm from '../../introduction/components/modalForm.vue'
</script>

<style scoped>
.contenedor {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
}
.form {
    max-width: 100%;
    background-color: #e0dddd;
    display: flex;
    justify-content: center;
}
.relleno {
    width: 100%;
    height: auto;
    max-width: 100%;
    background-image: url('../../introduction/assets/Frame14.png');
    background-size: cover;
    background-color: #afc2f4;
    position: relative;
}
.img1{
    animation: floating 4.5s ease-in-out infinite;
}
.img2 {
    left: 281px;
    position: relative;
    bottom: 245px;
}
.img3 {
    left: 900px;
    position: relative;
    bottom: 400px;
    animation: floating 5.5s ease-in-out infinite;
}
@keyframes floating {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px); /* Altura de la animación */
    }
}
@media (min-width: 768px) {
.contenedor {
    flex-direction: row;
}
.form{
    width: 22rem;
}
}
</style>
