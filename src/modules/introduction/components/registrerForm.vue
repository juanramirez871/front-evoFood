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
        <div class="btns">
          <div class="btn">
            <myButton initial-text="REGISTRO"  />
          </div>
          <div class="btn">
            <myButton initial-text="INICIA SESIÓN" @click="() => router.push({ name: 'iniciar.seccion' })" />
          </div>
        </div>
      
    </div>
  </template>
  
<script setup>
  import { ref, reactive } from 'vue'
  import myButton from './myButton.vue'
  import { useRouter } from 'vue-router';


  const router = useRouter()
  console.log(router)

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
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .btns{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .btn{
    display: flex;
    margin: 3%;
  }
  .modal {
    position: fixed;
    z-index: 999;
    top: 15%;
    width: 100%;
    height: 65vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    color: white;
    align-items: center;
    z-index: 999;
}
.close-button {
  position: absolute;
  top: 2.1rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.7rem;
  cursor: pointer;
}
.close-button:hover{
  font-size: 1.9rem;
}
.backdrop {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.296);
  backdrop-filter: blur(3px); 
}
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.5s;
}

.modal-fade-enter, .modal-fade-leave-to {
  opacity: 0;
}
@media (min-width: 768px) {
    .el-col.md-12 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
</style>
  