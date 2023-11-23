<template>
  <footer>
    <h4>EvooFood</h4>
    <br>
    <div class="iconos">
        <Iconos/>
    </div>
  </footer>
</template>

<script setup>
import Iconos from '../../modules/plantilla/components/Iconos.vue';
</script>

<style scoped>
h4{
    color: white;
    padding: 20px;
    text-align: center;
}
footer{
    background: #313030;
    width: 100%;
}
*{
  margin: 0;
}
.iconos{
        display: flex;
        justify-content: center;
    }
</style>