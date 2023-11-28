<template>
    <div class="container">
        <el-row style="display:contents">
        <el-col :lg="9" >
            <div class="principal">
            <el-card shadow="always">
                TOTAL RENTABILIDAD
            <hr />
            <br />
            <div>
                <img src="https://pymstatic.com/9284/conversions/histograma-default.jpg" alt="" >
            </div>
            </el-card>

            </div>
        </el-col>
        </el-row>
        <br />
        <br>
        <el-row :gutter="12">
        <el-col :span="24" :md="12" :lg="8">
            <el-card shadow="always">
            TOTAL ORDENES
            <hr />
            <br />
            <div>
                <img src="https://pymstatic.com/9284/conversions/histograma-default.jpg" alt="">
            </div>
            </el-card>
        </el-col>
        <el-col :span="24" :md="12" :lg="8">
            <el-card shadow="always">
            VENTAS EVALUADAS
            <hr />
            <br />
            <div>
                <img src="https://pymstatic.com/9284/conversions/histograma-default.jpg" alt="">
            </div>
            </el-card>
        </el-col>
        <el-col :span="24" :md="12" :lg="8">
            <el-card shadow="always">
            COSTOS PERSONAL
            <hr />
            <br />
            <div>
                <img src="https://pymstatic.com/9284/conversions/histograma-default.jpg" alt="">
            </div>
            </el-card>
        </el-col>
        </el-row>
        <br /><br />
    </div>
</template>

<style scoped>
.el-row {
    row-gap: 2rem;
}
.container{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.principal{
    display: flex;
    justify-content: center;

}
.el-card {
        white-space: wrap;
}

.el-card__body {
    font-size: clamp(1rem, 2vw, 1.5rem);
}
img{
    width: 100%;
}
/* Responsive adjustments */
@media screen and (max-width: 767px) {
    .el-col {
        width: 100% !important;
    }
}
</style>
