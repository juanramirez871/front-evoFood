<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    >
    <el-menu-item index="0">
        <img
        style="width: 10rem"
        src="../../introduction/assets/logoevofood.png"
        alt="Element logo"
        />
    </el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="1" class="subMenu">
        <template #title><span class="item">Páginas</span></template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
    </el-sub-menu>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = () => {
    console.log(".")
}
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

@media (max-width: 767px) {
    .el-menu-item img{
        width: 2rem;
    }
    .subMenu{
        margin-right: 0.5rem;
    }
}
</style>