<template>
<div>
    <button class="button">
        REGISTRARSE
        <div class="hoverEffect">
        <div>
        </div>
        </div>
    </button>
</div>
</template>

<script setup>

</script>

<style scoped>
.button {
    display: inline-flex;
    padding: 1.4rem 1.4rem;
    font-size: 1.0rem;

    border: 0;
    position: relative;
    overflow: hidden;
    border-radius: 10rem;
    transition: all 0.02s;
    font-weight: bolder;
    color: rgb(0, 0, 0);
}

.button:hover {
    background: #95B3FF;
    color: rgb(255, 255, 255);
    font-family: 'dosis';
    font-weight: bold;
    font-size: 0.9rem;
}
.button:active {
    Transform: scale(0.97);
}

.hoverEffect {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hoverEffect div {
    background: rgb(0, 0, 0);
    background: linear-gradient(90deg, #FFD800 0%, #95B3FF 49%, #1AC7FF 100%);
    border-radius: 40rem;
    width: 10rem;
    height: 10rem;
    transition: 0.4s;
    filter: blur(20px);
    animation: effect infinite 3s linear;
    opacity: 0.45;
    z-index: 1;
}

.button:hover .hoverEffect div {
    width: 8rem;
    height: 8rem;
}

@keyframes effect {

0% {
    transform: rotate(0deg);
}

100% {
    transform: rotate(360deg);
}
}
@media (max-width: 768px) {
    .button {
        display: inline-flex;
        padding: 1.2rem 1.2rem;
        border: 0;
        position: relative;
        overflow: hidden;
        border-radius: 10rem;
        font-size: 1.0rem;
        transition: all 0.02s;
        font-weight: bolder;
        color: rgb(0, 0, 0);
        bottom: 1.8em; 
    }
}
</style>
