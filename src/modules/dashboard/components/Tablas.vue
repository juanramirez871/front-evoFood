<template>
    <div>
        <h1>Empleados</h1>
    </div>
    <el-table :data="filterTableData" style="width: 100%">
    <el-table-column label="Name" prop="name" />
    <el-table-column label="Email" prop="email" />
    <el-table-column label="Telefono" prop="phone" />
    <el-table-column label="Cargo" prop="position" />
    <el-table-column label="Dirección" prop="address" />
    <el-table-column label="Salario" prop="salary" />
    <el-table-column align="right">
        <template #header>
        <el-input v-model="search" size="small" placeholder="Buscar" />
        </template>
        <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
        >
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
        >
        </template>
    </el-table-column>
    </el-table>
</template>

<script setup>
import { ref, computed } from 'vue';

const search = ref('');
const tableData = [
    {
        name: 'Tom',
        email: 'tom@example.com',
        phone: '123-456-7890',
        position: 'Desarrollador',
        salary: '$60,000',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        name: 'Alice',
        email: 'alice@example.com',
        phone: '987-654-3210',
        position: 'Diseñador UX',
        salary: '$55,000',
        address: 'No. 42, Elm St, New York',
    },
    {
        name: 'Bob',
        email: 'bob@example.com',
        phone: '555-123-4567',
        position: 'Analista de Datos',
        salary: '$65,000',
        address: 'No. 77, Oak St, Chicago',
    },
    {
        name: 'Eva',
        email: 'eva@example.com',
        phone: '888-777-6666',
        position: 'Gerente de Proyecto',
        salary: '$75,000',
        address: 'No. 5, Maple St, San Francisco',
    },
    {
        name: 'Chris',
        email: 'chris@example.com',
        phone: '111-222-3333',
        position: 'Ingeniero de Software',
        salary: '$70,000',
        address: 'No. 21, Pine St, Seattle',
    },
    {
        name: 'Grace',
        email: 'grace@example.com',
        phone: '444-555-6666',
        position: 'Diseñador Gráfico',
        salary: '$58,000',
        address: 'No. 3, Birch St, Boston',
    },
    {
        name: 'Michael',
        email: 'michael@example.com',
        phone: '999-888-7777',
        position: 'Analista Financiero',
        salary: '$80,000',
        address: 'No. 56, Cedar St, Houston',
    },
    {
        name: 'Olivia',
        email: 'olivia@example.com',
        phone: '777-888-9999',
        position: 'Especialista en Marketing',
        salary: '$62,000',
        address: 'No. 11, Walnut St, Denver',
    },
    {
        name: 'Daniel',
        email: 'daniel@example.com',
        phone: '333-444-5555',
        position: 'Ingeniero de Redes',
        salary: '$68,000',
        address: 'No. 31, Spruce St, Miami',
    },
    {
        name: 'Sophia',
        email: 'sophia@example.com',
        phone: '666-555-4444',
        position: 'Analista de Recursos Humanos',
        salary: '$72,000',
        address: 'No. 8, Ash St, Los Angeles',
    },
];

const filterTableData = computed(() =>
    tableData.filter(
    (data) =>
        !search.value ||
        data.name.toLowerCase().includes(search.value.toLowerCase())
    )
);

const handleEdit = (index, row) => {
    console.log(index, row);
};

const handleDelete = (index, row) => {
    console.log(index, row);
};
</script>


<style scoped>
h1{
    display: flex;
    justify-content: center;
    color: #727477;
}
</style>