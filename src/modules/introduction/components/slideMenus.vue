<template>
<figure class="tarjetas">
    <div class="tarjetas__contenido">
    <div class="tarjetas__elemento"><h1>Elemento 1</h1></div>
    <div class="tarjetas__elemento"><h1>Elemento 2</h1></div>
    <div class="tarjetas__elemento"><h1>Elemento 3</h1></div>
    </div>
</figure>
</template>

<style scoped>
.tarjetas {
    position: absolute;
    left: 50%;
    width: 600px; /* Ajusta el ancho de las tarjetas */
    height: 400px; /* Ajusta la altura de las tarjetas */
    margin: 0;
    perspective: 800px;
    transform: translate(-50%, -50%);
}

.tarjetas__contenido {
position: absolute;
width: 100%;
height: 100%;
transform-style: preserve-3d;
transform: translateZ(-250px) rotateY(0);
animation: carrusel 15s infinite cubic-bezier(1, 0.020, 0.295, 1.225) forwards;
}

.tarjetas__elemento {
position: absolute;
top: 0;
left: 0;
width: 600px; /* Ajusta el ancho de las tarjetas */
height: 400px; /* Ajusta la altura de las tarjetas */
border-radius: 6px;
}

.tarjetas__elemento:nth-child(1) {
background: #394fd5;
transform: rotateY(0) translateZ(250px);
}

.tarjetas__elemento:nth-child(2) {
background: #39d570;
transform: rotateY(120deg) translateZ(250px);
}

.tarjetas__elemento:nth-child(3) {
background: #f0091f;
transform: rotateY(240deg) translateZ(250px);
}

body {
background: #6c4949;
}

@keyframes carrusel {
0%, 17.5% {
    transform: translateZ(-150px) rotateY(0);
}
27.5%, 45% {
    transform: translateZ(-150px) rotateY(-120deg);
}
55%, 72.5% {
    transform: translateZ(-150px) rotateY(-240deg);
}
82.5%, 100% {
    transform: translateZ(-150px) rotateY(-360deg);
}
}

@media (max-width: 800px) {
    .tarjetas {
        position: absolute;
        left: 50%;
        width: 190px;
        height: 210px;
        margin: 0;
        -webkit-perspective: 800px;
                perspective: 800px;
        -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
    }
    .tarjetas__contenido {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
        -webkit-transform: translateZ(-182px) rotateY(0);
                transform: translateZ(-182px) rotateY(0);
        -webkit-animation: carrusel 15s infinite cubic-bezier(1, 0.020, 0.295, 1.225) forwards;
                animation: carrusel 15s infinite cubic-bezier(1, 0.020, 0.295, 1.225) forwards;
    }
    .tarjetas__elemento {
        position: absolute;
        top: 0;
        left: 0;
        width: 190px;
        height: 210px;
        border-radius: 6px;
    }.tarjetas__elemento:nth-child(1) {
        background: #394fd5;
        -webkit-transform: rotateY(0) translateZ(182px);
                transform: rotateY(0) translateZ(182px);
    }
    .tarjetas__elemento:nth-child(2) {
        background: #39d570;
        -webkit-transform: rotateY(120deg) translateZ(182px);
                transform: rotateY(120deg) translateZ(182px);
    }
    .tarjetas__elemento:nth-child(3) {
        background: #f0091f;
        -webkit-transform: rotateY(240deg) translateZ(182px);
                transform: rotateY(240deg) translateZ(182px);
    }
    @-webkit-keyframes carrusel {
    0%,  17.5% {
        -webkit-transform: translateZ(-182px) rotateY(0);
                transform: translateZ(-182px) rotateY(0);
    }
    27.5%, 45% {
        -webkit-transform: translateZ(-182px) rotateY(-120deg);
                transform: translateZ(-182px) rotateY(-120deg);
    }
    55%, 72.5% {
        -webkit-transform: translateZ(-182px) rotateY(-240deg);
                transform: translateZ(-182px) rotateY(-240deg);
    }
    82.5%, 100% {
        -webkit-transform: translateZ(-182px) rotateY(-360deg);
                transform: translateZ(-182px) rotateY(-360deg);
    }
    }
    @keyframes carrusel {
    0%,  17.5% {
        -webkit-transform: translateZ(-182px) rotateY(0);
                transform: translateZ(-182px) rotateY(0);
    }
    27.5%, 45% {
        -webkit-transform: translateZ(-182px) rotateY(-120deg);
                transform: translateZ(-182px) rotateY(-120deg);
    }
    55%, 72.5% {
        -webkit-transform: translateZ(-182px) rotateY(-240deg);
                transform: translateZ(-182px) rotateY(-240deg);
    }
    82.5%, 100% {
        -webkit-transform: translateZ(-182px) rotateY(-360deg);
                transform: translateZ(-182px) rotateY(-360deg);
    }
}
}
</style>
