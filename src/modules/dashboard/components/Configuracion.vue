<template>
    <div>
        <h1>Configuración</h1>
    </div>
    <br><br>
    <div class="container">
        <h2>Seleccione su horario:</h2>
        <div class="demo-time-range">
            <el-time-select
            v-model="startTime"
            :max-time="endTime"
            class="mr-4"
            placeholder="Hora de inicio"
            start="08:30"
            step="00:15"
            end="18:30"
            />
            <el-time-select
            v-model="endTime"
            :min-time="startTime"
            placeholder="Hora de fin"
            start="08:30"
            step="00:15"
            end="18:30"
            />
        </div>
        </div>
    <br>
    <div class="container">
        <h2>Redes sociales:</h2>
        <div>
            <h3>Facebook:</h3>
            <el-input v-model="input" placeholder="Link"  />
        </div>
        <div>
            <h3>Instagram:</h3>
            <el-input v-model="input" placeholder="Link"  />
        </div>
        <div>
            <h3>tik-Tok:</h3>
            <el-input v-model="input" placeholder="Link"/>
        </div>
        <div>
            <h3>X:</h3>
            <el-input v-model="input" placeholder="Link"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const startTime = ref('')
const endTime = ref('')

const input = ref('')
</script>

<style scoped>
h1{
    display: flex;
    justify-content: center;
    color: #727477;
}
.container{
    margin-left: 3%;
}
.red{
    width: 26%;
}
</style>
