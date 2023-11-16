<template>
<div>
    <h1>Panel</h1>
    <br>
    <div class="widgets">
        <Witgets/>
    </div>
    <br>
    <br>
    <Graficas/>
</div>
</template>

<script setup>
import Witgets from './Witgets.vue';
import Graficas from './Graficas.vue';

</script>

<style scoped>
h1{
    display: flex;
    justify-content: center;
    color: #727477;
}
.widgets{
    display: flex;
    justify-content: center;
    column-gap: 3rem;
    row-gap: 1rem;
    flex-wrap: wrap;
}

</style>
