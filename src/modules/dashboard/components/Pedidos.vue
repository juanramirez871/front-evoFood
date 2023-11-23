<template>
<div>
    <div>
        <h1>Gestión de pedidos</h1>
    </div>
    <br><br>
    <div>
        <el-row class="container2">
        <el-col v-for="(item, index) in data" :key="index" :span="6" :offset="index > 0 ? 1 : 1" class="col">
            <el-card :body-style="{ padding: '0.1rem', margin: '20px' }" class="carta">
                <img
                :src="item.imageUrl"
                class="image"
                />
                <div style="padding: 14px">
                <span class="titulo">{{ item.titulo }}</span>
                <div class="bottom">
                    <time class="time">{{ currentTime }}</time>
                </div>
                <br>
                <el-button class="button" text @click="openDialog(index)">
                    OPERACIONES
                </el-button>
                </div>
            </el-card>

        </el-col>
            <el-dialog v-model="centerDialogVisible" title="PROCESAR" width="80%" center>
                <div>
                    <el-steps :active="active" finish-status="success">
                        <el-step title="recibido" />
                        <el-step title="En proceso" />
                        <el-step title="Finalizado" />
                    </el-steps>
                    <div class="siguiente">
                        <el-button style="margin-top: 12px" @click="next(index)">Siguiente</el-button>
                    </div>
                </div>
                <br>
                <span>
                    Cliente:  {{ selectedCliente }}
                </span>
                <br>
                <span>
                    Ingredientes:  {{ selectedIngrediente }}
                </span>
                <br>
                <span>
                    Adicionales:  {{ selecteAdicionales }}
                </span>
                <br>
                <span>
                    Cantidad:  {{ selectedCantidades }}
                </span>
                <br>
                <span>
                    Mesa:  {{ selectedMesa }}
                </span>
                <br>
                <span>
                    Precio Total:  {{ selectedPrecios }}
                </span>
                <br>
                <span>
                    Medio de Pago:  {{ selectedPago }}
                </span>
                <br>
                <span>
                    Dirección:  {{ selecteDireccion }}
                </span>
                <br>
                <span>
                    Telefono:  {{ selectedTelefono }}
                </span>
                <template #footer>
                <span class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false">
                        Confirm
                    </el-button>
                </span>
                </template>
            </el-dialog>
    </el-row>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
const selectedCliente = ref(null);
const selectedIngrediente = ref(null);
const selectedPrecios = ref(null);
const selecteAdicionales = ref(null);
const selectedCantidades = ref(null);
const selectedMesa = ref(null);
const selectedPago = ref(null);
const selecteDireccion = ref(null);
const selectedTelefono = ref(null);
const centerDialogVisible = ref(false)

let currentDateAndTime = new Date();

let currentTime = currentDateAndTime.toLocaleString('en-US', {
    hour12: true,
});

const data = [
    {
        titulo : "hamgurguesa de la calle",
        imageUrl :"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        cliente : "jose david",
        ingredientes : "pan, carne",
        adicionales : "cocacola pequeña",
        totalPrecio : 20.000,
        cantidad: 1,
        medioPago : "efectivo",
        mesa : 2
    },
    {
        titulo : "pizza de carnes",
        imageUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvr9uTUCMEU4v9wHfFV9rPJ81dnaZRjWcGg&usqp=CAU",
        cliente : "olga lucia",
        ingredientes : "salchicha, carne",
        adicionales : "papas fritas",
        totalPrecio : 10.000,
        cantidad: 2,
        medioPago : "nequi",
        direccion : "calle 1A San Carlos",
        telefono : "3177289785"
    }
]
const openDialog = (index) => {
    centerDialogVisible.value = true;
    selectedCliente.value = data[index].cliente;
    selectedIngrediente.value = data[index].ingredientes;
    selectedPrecios.value = data[index].totalPrecio;
    selecteAdicionales.value = data[index].adicionales;
    selectedCantidades.value = data[index].cantidad;
    selectedMesa.value = data[index].mesa;
    selectedPago.value = data[index].medioPago;
    selecteDireccion.value = data[index].direccion;
    selectedTelefono.value = data[index].telefono;
};

const active = ref(0)

const next = (index) => {
    if (active.value++ > 2) active.value = 0
}
</script>

<style scope>
.contenedor{
    display: flex;
    width: 100%;
}
h1{
    display: flex;
    justify-content: center;
    color: #727477;
}
.time {
    font-size: 0.9rem;
    color: #6f6b6b;
}
.titulo{
    font-size: 1.7rem;
}
.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
    color: gold !important;
}

.image {
    width: 100%;
    display: block;
}
.container2{
    row-gap: 2rem;
    display: flex;
    justify-content: center;
}
.carta{
    width: 25vw;
    margin-bottom: 2rem;
    border-radius: 7px;
}
.carta img{
    border-radius: 7px;
    height: 40vh;
}
.dialog-footer button:first-child {
    margin-right: 10px;
}
.siguiente{
    display: flex;
    justify-content: center;
}
@media (max-width:768px) {
    .col{
        max-width: none;
        width: 95%;
    }
    .container2{
        display: block;
    }
    .carta{
        width: 100%;
    }
}
</style>