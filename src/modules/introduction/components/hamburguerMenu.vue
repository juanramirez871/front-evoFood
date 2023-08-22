<template>
  <div>
    <div :class="['menu-button', { 'menu-button-open': isOpen }]" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <transition name="slide-fade">
      <div v-if="isOpen" class="menu" @click.stop>
        <div class="menu-button" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Guia-Res</a></li>
          <li><a href="#">Ingresar</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenuOnClickOutside = (event) => {
  if (isOpen.value && !event.target.closest('.menu-button')) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', closeMenuOnClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', closeMenuOnClickOutside);
});

</script>
<style scoped>
/* Estilos para el botón hamburguesa */
.menu-button {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1.875rem; /* 30px en rem */
  height: 1.25rem; /* 20px en rem */
  margin: 1rem; /* 16px en rem */
  z-index: 1; /* Coloca el botón por encima de otros elementos */
}

.bar {
  width: 1.875rem; /* 30px en rem */
  height: 0.1875rem; /* 3px en rem */
  background-color: #333;
}

/* Estilos para el menú */
.menu {
  position: fixed; /* Cambia a posición fija */
  top: 0;
  right: 0;
  width: 70%; /* Puedes ajustar este valor según tus necesidades */
  max-width: 15.625rem; /* 250px en rem */
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2); /* 10px en rem */
  overflow-x: hidden; /* Evita el desplazamiento horizontal */
  z-index: 1000; /* Coloca el menú por encima de otros elementos */
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(1rem);
}
</style>
