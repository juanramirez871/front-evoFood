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
            <div class="content">
                <h4>Experimenta la combinación perfecta de tecnología y gastronomía que te llevará a nuevas alturas culinarias.</h4>
            </div>
        </div>
    </div>

    <!-- Primer bloque de colapsos -->
    <div class="demo-collapse">
        <el-collapse @click="activeName = !activeName" accordion>
            <el-collapse-item name="4">
                <template #title>
                    <div class="collapse-title">
                        <img src="../assets/verifieduser.png" class="collapse-image" alt="">
                        <span class="collapse-text">Tu Menú </span>
                    </div>
                </template>
                    <h4>Personalización a tu medida: Adapta los platos según tus preferencias y necesidades dietéticas para una experiencia gastronómica única.</h4>
            </el-collapse-item>
        </el-collapse>
    </div>

    <!-- Segundo bloque de colapsos -->
    <div class="demo-collapse esp">
        <el-collapse @click="activeName = !activeName" accordion>
            <el-collapse-item name="4">
                <template #title>
                    <div class="collapse-title">
                        <img src="../assets/gift.png" class="collapse-image" alt="">
                        <span class="collapse-text">Tecnología</span>
                    </div>
                </template>
                    <h4>Experimenta la combinación perfecta de tecnología y gastronomía que te llevará a nuevas alturas culinarias.</h4>
            </el-collapse-item>
        </el-collapse>
    </div>
</div>
</template>
    <script  setup>
            import { ref } from 'vue'

            const activeName = ref(true)
    </script>
    <style scoped>
    h4 {
        color: #000000;
        font-family: Dosis;
        font-size: clamp(1.1rem, 2vw, 2.3rem);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0;
    }
    .text {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .imagen img {
        max-width: 100%;
    }
    .demo-collapse{
        display: none;
    }
    @media (max-width: 768px) {
        .text {
            flex-direction: column;
        }
        .imagen img {
            max-width:35%;
        }
        .demo-collapse{
            display: flex;
            flex-direction: row;
        }
        .demo{
            display: none;
        }
        .collapse-title {
            display: flex;
            align-items: center;
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
            font-size: 2rem;
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
        font-weight: 500;
        margin-top: 10%;
    }

    }
    </style>
    