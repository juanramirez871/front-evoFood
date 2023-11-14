<template>
    <div>
        <h1>Agregar</h1>
    </div>
    <div class="container">
    <el-form :model="form" label-width="120px">
    <el-form-item label="Titulo Producto">
        <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Categoría">
        <el-select v-model="form.region" placeholder="seleccione categoría">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
        </el-select>
    </el-form-item>
    <el-form-item label="Descripción">
        <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item  label="Precio">
        <el-input
            v-model="form.input"
            placeholder="Please input"
            :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
        />
    </el-form-item>
    <el-form-item label="Imágenes">
        <Upload />
    </el-form-item>
    <el-form-item label="Ingredientes">
        <el-checkbox-group v-model="form.type">
        <el-checkbox label="Online activities" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
    </el-form-item>
    </el-form>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import Upload from '../utils/Upload.vue';
import {
    Goods,
} from '@element-plus/icons-vue'

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
})

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
    .el-form-item{
        display: flow;
    }
}
</style>