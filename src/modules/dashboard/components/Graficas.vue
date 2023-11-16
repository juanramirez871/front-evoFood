<template>
    <div class="container">
    <el-row :gutter="12">
        <el-col :span="24" :md="12" :lg="8">
        <el-card shadow="always">
            Total Ordenes
            <hr />
            <br />
            <div>
                <img src="https://pymstatic.com/9284/conversions/histograma-default.jpg" alt="" width="450">
            </div>
        </el-card>
        </el-col>
        <el-col :span="24" :md="12" :lg="8">
        <el-card shadow="always">
            VENTAS EVALUADAS
            <hr />
            <br />
            <div>
                <img src="https://pymstatic.com/9284/conversions/histograma-default.jpg" alt="" width="450">
            </div>
        </el-card>
        </el-col>
        <el-col :span="24" :md="12" :lg="8">
        <el-card shadow="always">
            COSOTOS PERSONAL
            <hr />
            <br />
            <div>
                <img src="https://pymstatic.com/9284/conversions/histograma-default.jpg" alt="" width="450">
            </div>
        </el-card>
        </el-col>
        <el-col :span="24" :md="12" :lg="8">
        <el-card shadow="always">
            COSTOS PERSONAL
            <hr />
            <br />
            <div>
                <img src="https://pymstatic.com/9284/conversions/histograma-default.jpg" alt="" width="450">
            </div>
        </el-card>
        </el-col>
    </el-row>
    <br /><br />
    </div>
</template>

<script setup></script>

<style scoped>
.el-row {
    row-gap: 2rem;
}

.el-card {
    white-space: wrap;
}

.el-card__body {
    font-size: clamp(1rem, 2vw, 1.5rem);
}
</style>
