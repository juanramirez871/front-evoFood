<template>
    <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect" 
    >
    <div index="0" class="logo">
        <img
        style="width: 7rem"
        src="../../introduction/assets/2-removebg-preview.png"
        alt="Element logo"
        />
    </div>
    <div class="flex-grow" />
    <el-sub-menu index="1" class="subMenu">
        <template #title><span class="item">Páginas</span></template>
        <el-menu-item index="2-1">Inicio</el-menu-item>
        <el-menu-item index="2-2">Plantilla</el-menu-item>
    </el-sub-menu>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue'


</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}
.el-menu-demo{
    background-color: #333333;
    color: aliceblue;
}
.item{
    color: aliceblue;
    font-size: 1rem;
}
.item:hover{
    color: #333333;
}
.subMenu{
    display: flex;
    margin-right: 2rem;
    font-weight: 600;
    color: aliceblue;
}
.logo{
    display: flex;
    margin-left: 5%;
    justify-content: center;
    align-content: center;
}
@media (max-width: 767px) {
    .el-menu-item img{
        width: 2rem;
    }
    .subMenu{
        margin-right: 0.5rem;
    }
}
</style>