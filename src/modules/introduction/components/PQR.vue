<template>
    <div class="demo-collapse">
    <el-collapse accordion>
        <el-collapse-item name="1" class="titulo">
            <template #title>
                <div></div>
                <h1>Consistente </h1><el-icon class="header-icon">
                <info-filled />
                </el-icon>
            </template>
            <div class="texto">
                Consistent with real life: in line with the process and logic of real
                life, and comply with languages and habits that the users are used to;
            </div>
            <div class="texto">
                Consistent within interface: all elements should be consistent, such
                as: design style, icons and texts, position of elements, etc.
            </div>
        </el-collapse-item>
        <el-collapse-item name="2" class="titulo">
            <template #title>
                <div></div>
                <h1>Consistente dos     </h1><el-icon class="header-icon">
                <info-filled />
                </el-icon>
            </template>
            <div class="texto">
                Consistent with real life: in line with the process and logic of real
                life, and comply with languages and habits that the users are used to;
            </div>
            <div class="texto">
                Consistent within interface: all elements should be consistent, such
                as: design style, icons and texts, position of elements, etc.
            </div>
        </el-collapse-item>
        
    </el-collapse>
    </div>
</template>

<script setup>
import { InfoFilled } from '@element-plus/icons-vue'
</script>

<style scoped>
.demo-collapse{
    display: flex;
    flex-direction: column;
    margin: 3rem;
}
.titulo{
    font-size: 1.5rem;
}
.texto{
    font-size: 0.9rem;
}
</style>