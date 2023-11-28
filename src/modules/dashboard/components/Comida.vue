<template>
    <div>
        <h1>Agregar</h1>
    </div>
    <div class="container">
    <el-form :model="form" >
    <el-form-item label="Titulo Producto" class="flow">
        <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Categoría" class="flow">
        <el-select v-model="form.region" placeholder="seleccione categoría">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
        </el-select>
    </el-form-item>
    <el-form-item label="Descripción" class="flow">
        <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
            <el-form-item  label="Precio" class="flow">
                <el-input v-model="input" placeholder="Precio" clearable />
            </el-form-item>
    <el-form-item  label="Comparación" class="flow">
        <el-input v-model="input" placeholder="Precio de comparación" clearable />
    </el-form-item>
    <el-form-item  label="costo" class="flow">
        <el-input v-model="input" placeholder="Precio unitario" clearable />
    </el-form-item>
    <el-form-item label="Ganancia" class="flow">
        <el-input v-model="input"  clearable disabled />
    </el-form-item>
    <el-form-item label="Imágen"  v-model="form.images">
        <Upload />
    </el-form-item>
    <el-form-item label="Ingredientes" class="flow">
        <div v-for="(ingrediente, i) in ingredientes" :key="i" style="width: min-content">
            <div style="width: max-content;display: flex;">
                <input type="checkbox" :id="ingrediente?.label" :value="ingrediente?.label" :checked="ingrediente?.checkBox" />
                <InputEdit v-model="ingrediente.label" class-text="f-14" />
            </div>
        </div>
            <div @click="newIngrediente">
                <i class="fa-solid fa-plus" style="color: black; cursor: pointer; margin-left: 10px; margin-top: 20px;"></i>
            </div>
    </el-form-item>
    <el-form-item label="Destacar">
        <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item >
        <el-button type="primary" @click="onSubmit">Crear</el-button>
        <el-button type="danger" @click="resetForm">Cancelar</el-button>
    </el-form-item>
    </el-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { reactive } from 'vue'
import Upload from '../utils/Upload.vue';
import InputEdit from '../../../shared/components/InputEdit.vue'

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
    input : '',
    images : []
})
const ingredientes = ref([
    {
        label: "opcion 1",
        checkBox: true
    }
])
const newIngrediente = () => {
    ingredientes.value.push({ label: "Nuevo Ingrediente", checkBox: false })
}
const resetForm = () => {
    form.name = '';
    form.region = '';
    form.date1 = '';
    form.date2 = '';
    form.delivery = false;
    form.type = [];
    form.resource = '';
    form.desc = '';
    form.input = '';
    form.images = [];
};
const onSubmit = () => {
    console.log('submit!')
}
</script>
<style scoped>
.container{
    margin: 3rem;
    background-color: #ffffff;
    padding: 3rem;
    border-radius: 2rem;
}
h1{
    display: flex;
    justify-content: center;
    color: #727477;
}
@media (max-width: 767px) {
    .container{
        padding: 0.5rem;
        margin: 0.5%;
        background-color: transparent;
    }
    .flow{
        display: flow;
    }
}
</style>