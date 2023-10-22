<template>
    <div class="demo-image__error">
        <div class="block">
        <el-image>
            <template #error>
            <div class="image-slot">
                <el-icon><icon-picture /></el-icon>
            </div>
            </template>
        </el-image>
        </div>
    </div>
    <div class="demo-type">
        <el-avatar :size="200" src="https://empty" @error="errorHandler">
        <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
        </el-avatar>
    </div>
</template>
<script setup>
    import { Picture as IconPicture } from '@element-plus/icons-vue'
    const errorHandler = () => true
</script>
<style scoped>
    .demo-type{
        display: flex;
        justify-content: center;
        z-index: 2;
        position: relative;
        bottom: 6rem;
    }
    .demo-image__error .el-image {
        max-width: 100%;
        max-height: 55vh;
        width: 100%;
        height: 100vh;
    }

    .demo-image__error .image-slot {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: var(--el-fill-color-light);
        color: var(--el-text-color-secondary);
        font-size: 30px;
    }
    .demo-image__error .image-slot .el-icon {
        font-size: 30px;
    }
</style>