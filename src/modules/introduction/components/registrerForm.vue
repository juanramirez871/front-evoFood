<template>
    <div class="form-container">
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
  
        <el-form-item label="PAIS">
          <el-select v-model="form.region" placeholder="COLOMBIA +57">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="TELEFONO">
          <el-input v-model="form.phone" placeholder="TELEFONO" clearable />
        </el-form-item>
        <el-form-item label="Activity type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="Online activities" name="type" />
            <el-checkbox label="Promotion activities" name="type" />
            <el-checkbox label="Offline activities" name="type" />
            <el-checkbox label="Simple brand exposure" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources">
          <el-radio-group v-model="form.resource">
            <el-radio label="Sponsor" />
            <el-radio label="Venue" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input v-model="form.desc" type="textarea" />
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
  
  const form = reactive({
    name: '',
    surname: '',
    region: '',
    phone: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
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
  
  @media (min-width: 768px) {
    .el-col.md-12 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  </style>
  