<template>
    <div class="form-container">
      <div class="titulo">
        <h1>REGISTRA TU RESTAURANTE</h1>
      </div>
      <el-form :model="form" class="demo-form-inline">
        <el-row :gutter="20">
          <el-col :span="24" :md="12">
            <el-form-item label="TU NOMBRE">
              <el-input v-model="form.name" placeholder="TU NOMBRE" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="24" :md="12">
            <el-form-item label="TUS APELLIDOS">
              <el-input v-model="form.surname" placeholder="TUS APELLIDOS" clearable />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :md="12">
            <el-form-item label="PAIS">
              <el-select v-model="form.region" placeholder="COLOMBIA +57">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24" :md="12">
            <el-form-item label="TELEFONO">
              <el-input v-model="form.surname" placeholder="TELEFONO" clearable />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :md="12">
            <el-form-item label="E-MAIL">
              <el-input v-model="form.phone" placeholder="example@gmail.com" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="24" :md="12">
            <el-form-item label="CONFIRMAR">
              <el-input v-model="form.surname" placeholder="example@gmail.com" clearable />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24" :md="12">
            <el-form-item label="CONTRASEÑA">
              <el-input v-model="form.phone" placeholder="CREAR CONTRASEÑA" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="24" :md="12">
            <el-form-item label="CONFIRMAR">
              <el-input v-model="form.surname" placeholder="CONFIRMAR CONTRASEÑA" clearable />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
        <el-form-item >
          <div class="btn">
            <myButton initial-text="REGISTRO"  />
          </div>
          <div class="btn">
            <myButton initial-text="INICIA SESIÓN" @click="toggleModal" />
          </div>
          <teleport to='body'>
            <div v-if="showModal" class="modal">
              <button @click="toggleModal">cerrar</button>
              <modalForm />
            </div>
        </Teleport>
        </el-form-item>
      
    </div>
  </template>
  
<script setup>
  import { ref, reactive } from 'vue'
  import myButton from './myButton.vue'
  import modalForm from './modalForm.vue'

  const showModal = ref(false);

  const toggleModal = () => {
  showModal.value = !showModal.value;
};
  const form = reactive({
    name: '',

  })
  
  const onSubmit = () => {
    console.log('submit!')
  }


</script>
  
  <style scoped>
  .form-container {
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
  }
  .titulo{
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
  }
  h1{
    color: #0C0A36;
    font-family: Dosis;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .contenedorBtn{
    display: flex;
    align-items: center;
  }
  .btn{
    display: flex;
    margin: 3%;
  }
  .modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    color: white;
    padding: 4rem;
}
@media (min-width: 768px) {
    .el-col.md-12 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
</style>
  