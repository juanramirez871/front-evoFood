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
    }
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