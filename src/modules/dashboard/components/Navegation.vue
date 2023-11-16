<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <el-menu-item  class="icon" index="1" @click="() => emit('section','panel')" >
        <el-icon><icon-menu  /></el-icon>
        <template #title>Panel</template>
      </el-menu-item>
      <el-menu-item class="icon" index="3" @click="() => emit('section','perfil')">
        <el-icon><icon-User /></el-icon>
        <template #title>Perfil</template>
      </el-menu-item>
      <el-menu-item class="icon" index="4" @click="() => emit('section','Tablas')">
        <el-icon><document /></el-icon>
        <template #title>Tablas</template>
      </el-menu-item>
      <el-menu-item class="icon" index="5" @click="() => emit('section','Comida')">
        <el-icon><KnifeFork /></el-icon>
        <template #title>Comida</template>
      </el-menu-item>
      <el-menu-item class="icon" index="6" @click="() => emit('section','Suscripcion')">
        <el-icon><Service /></el-icon>
        <template #title>Suscripción</template>
      </el-menu-item>
      <el-sub-menu class="icon" index="2">
        <template #title >
          <div class="icon">
            <el-icon><Histogram /></el-icon>
          </div>
          <span>Administración</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">Pedidos</el-menu-item>
          <el-menu-item index="1-2">Control</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item class="icon" index="7">
        <el-icon><SwitchButton /></el-icon>
        <template #title>Salir</template>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  User as IconUser,
  Location,
  KnifeFork,
  Histogram,
  Service,
  SwitchButton,
  MoreFilled,
  CloseBold,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const emit = defineEmits(["section"])
const handleMouseEnter = () => {
  isCollapse.value = false
}

const handleMouseLeave = () => {
  isCollapse.value = true
}

</script>

  
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    
  }
  .el-menu-vertical-demo{
    background-color: #ffffff;
  }

</style>
  