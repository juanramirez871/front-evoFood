<template>
    <div class="container">
        <div class="background"></div>
        <div class="text">
            <h1>
                Bienvenido/a a la revolución gastronómica.
                Transformamos por completo la experiencia de nuestros clientes.
                Queremos que cada visita sea única y memorable.
            </h1>
        </div>
        <div class="background2"></div>
        <div class="celular">
            <Phone/>
            <!-- <img src="../assets/celularEvo2.0.png" alt=""> -->
        </div>
    </div>
</template>

<script setup>
import Phone from './Phone.vue';
</script>

<style scoped>
*{
    margin : 0;
    box-sizing : border-box;
    padding: 0;
}
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 100%;
}
.text {
    max-width: 60%;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    margin-left: 6%;
}
.text h1 {
    font-size: clamp(1.5rem, 2.7vw, 3rem);
    font-weight: inherit;
}
    .background {
        position: absolute;
        top: 5;
        border-radius: 50%;
        width: 40vw;
        height: 50vh;
        display: flex;
        justify-content: center;
        filter: blur(90px);
        background-image: linear-gradient( -45deg, #fc73037a 50%, #fc73033b 50% );
        z-index : -1;
    }
    .background2 {
        position: absolute;
        top: 10%;
        left : 65%;
        border-radius: 50%;
        width: 33vw;
        height: 50vh;
        filter: blur(40px);
        background-image: linear-gradient( -45deg, #ffe6a0c2 50%,#f7e6b9 50% );
        z-index : -1;
    }
.celular {
    max-width: 30%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    animation: floating 3.5s ease-in-out infinite;
    margin-right: 10%
}

/* .celular img {
    max-width: 100rem;
    height: auto;
    object-fit: contain;
} */

@keyframes floating {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px); /* Altura de la animación */
    }
}

@media (max-width: 768px) {
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .background {
        position: absolute;
        top: 30%;
        border-radius: 40%;
        width: 60vw;
        height: 30vh;
        filter: blur(60px);
        background-image: linear-gradient( -45deg, #ffef96c0 50%, #fc730394 50% );
    }
    .background2 {
        display : none;
    }
    .text {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
        margin-left: 0;
    }   
    h1{
        font-size: 1.5rem;
    }

    .celular {
        margin-top: 10%;
        max-width: 100%;
        margin-right: 0%
    }
    /* .celular img {
        max-width: 30em;
        height: auto;
        object-fit: contain;
    } */
}
</style>
