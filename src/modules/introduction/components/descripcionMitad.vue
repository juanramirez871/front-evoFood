<template>
<div>
    <div class="demo">
    <!-- Primer bloque de contenido -->
        <div class="text">
            <div class="imagen">
                <img src="../assets/verifieduser.png" width="270" alt="">
            </div>
            <div class="content">
                <h4>Personalización a tu medida: Adapta los platos según tus preferencias y necesidades dietéticas para una experiencia gastronómica única.</h4>
            </div>
        </div>

        <!-- Segundo bloque de contenido -->
        <div class="text">
            <div class="imagen">
                <img src="../assets/gift.png" width="270" alt="">
            </div>
            <div class="content" style="margin-left: -33px;">
                <h4>Experimenta la combinación perfecta de tecnología y gastronomía que te llevará a nuevas alturas culinarias.</h4>
            </div>
        </div>
    </div>

    <!-- Primer bloque de colapsos -->
    <div class="espacio">
        <div class="demo-collapse">
            <div class="collapse-title cta">
                <img src="../assets/verifieduser.png" class="collapse-image" alt="">
                <span class="collapse-text" >Tu Menú </span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
            </div>
            <Transition name="bounce">
                <h4 v-if="show" style="margin-top: 20px; text-align: center;">
                    Personalización a tu medida: Adapta los platos según tus preferencias y necesidades dietéticas para una experiencia gastronómica única.
                </h4>
            </Transition>
        </div>
        <!-- segundo bloque de colapsos -->
        <div class="demo-collapse">
            <div class="collapse-title cta">
                <img src="../assets/gift.png" class="collapse-image" alt="">
                <span class="collapse-text"  >Tecnología</span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
            </div>
            <Transition name="bounce">
                <h4 v-if="show" style="margin-top: 20px; text-align: center;">
                    Experimenta la combinación perfecta de tecnología y gastronomía que te llevará a nuevas alturas culinarias.
                </h4>
            </Transition>
        </div>
    </div>
</div>
</template>
<script  setup>
    import { ref } from 'vue'

    const show = ref(true)
    
</script>
    <style scoped>
    h4 {
        color: #000000;
        font-size: clamp(1.1rem, 2vw, 2.3rem);
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin: 0;
    }
    .text {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-top: 50px !important;
    }
    .imagen img {
        max-width: 100%;
    }
    .demo-collapse{
        display: none;
        margin-top: 50px;
    }
    @media (max-width: 768px) {
        .espacio{
            margin-top: 10%;
            margin-bottom: 20%;
        }
        .text {
            flex-direction: column;
        }
        .imagen img {
            max-width:35%;
        }
        .demo-collapse{
            display: flex;
            flex-direction: column;
            align-items: star;
        }
        .demo{
            display: none;
        }
        .collapse-title {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .esp{
            margin-top: 20%;
        }
        .collapse-image {
            width: 20vw;
            margin-right: 1rem; 
        }
        
        .collapse-text {
            font-weight: bold;
            font-size: 1.4rem;
            margin-right: 2rem; 
            color: #6969d3;
            cursor: pointer;
            position: relative;
            border: none;
            background: none;
            text-transform: uppercase;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
            transition-duration: 400ms;
            transition-property: color;
        }
        .collapse-text:focus,
        .collapse-text:hover {
            color: #5353b8;
            cursor:default;
        }
        
        .collapse-text:focus:after,
        .collapse-text:hover:after {
            width: 100%;
            left: 0%;
        }
        
        .collapse-text:after {
            content: "";
            pointer-events: none;
            bottom: -2px;
            left: 50%;
            position: absolute;
            width: 0%;
            height: 2px;
            background-color: #94a3f4;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
            transition-duration: 400ms;
            transition-property: width, left;
        }
    h4 {
        margin-top: 10%;
    }
    .bounce-enter-active {
        animation: bounce-in 0.5s;
        }
        .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
        }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }
    .cta svg {
        transform: translateX(-8px);
        transition: all 0.3s ease;
    }
    
    .cta:hover svg {
        transform: translateX(0);
    }
    
    .cta:active svg {
        transform: scale(0.9);
    }
}
    </style>
    