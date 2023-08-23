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
        <div class="celular">
            <img src="../assets/celular.png" alt="">
        </div>
    </div>
</template>

<script setup>
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
    position: relative; /* Agregamos posición relativa */
    width: 100%;
}
.text {
    max-width: 60%;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    margin-left: 6%;
}

.celular {
    max-width: 30%;
    top: -15%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    animation: floating 3.8s ease-in-out infinite; /* Agregamos la animación */
}

.celular img {
    max-width: 100rem;
    height: auto;
    object-fit: contain;
}

@keyframes floating {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px); /* Altura de la animación */
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
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(137, 43, 226, 0.25), rgba(30, 143, 255, 0.35));
        clip-path: circle(28% at 50% 40%);
        z-index: -1;
        filter: blur(20px);
        opacity: 0.8;
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
        max-width: 100%;
    }
    .celular img {
        max-width: 30em;
        height: auto;
        object-fit: contain;
    }
}
</style>
