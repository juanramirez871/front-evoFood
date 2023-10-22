<template>
<div>
    <div class="demo-type">
        <el-avatar :size="200" src="https://empty" @error="errorHandler">
        <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
        </el-avatar>
        <div>
            <h3>Title</h3>
        </div>
    </div>
</div>
</template>

<script setup>

</script>

<style scoped>
    .demo-type{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }
    .demo-type:hover {
    transform: scale(1.01);
    /* box-shadow: 1px 1px 20px  rgba(0, 0, 0, 0.473); */
    }
</style>
