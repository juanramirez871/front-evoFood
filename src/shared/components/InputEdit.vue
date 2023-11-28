<template>
	<el-input ref="input" v-if="editing" v-model="model" :placeholder="placeholder" @blur="change" class="input-edit w-100" :class="classText, height" @keypress.enter="change" :type="type" :rows="rows" />
	<div v-else :class="`input-edit d-middle rounded-lg px-3 w-fit ${height}`" style="max-width: 100%;" @click="setEdit">
		<p class="tres-puntos" :class="classText">{{ model ? model : placeholder }}</p>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
	modelValue: {
		type: [String],
		required: true
	},
	classText: {
		type: String,
		default: 'text-dark-grey f-bold f-16'
	},
	type: {
		type: String,
		default: 'text'
	},
	height: {
		type: String,
		default: 'h-32px'
	},
	placeholder: {
		type: String,
		default: ''
	},
	rows: {
		type: Number,
		default: 1
	}
})

const editing = ref(true); // false
const input = ref();
const emit = defineEmits(['update:modelValue', 'change']);

const model = computed({
	get() { return props.modelValue },
	set(val) { emit('update:modelValue', val) }
})

function change() {
	if(model.value == "") return
	editing.value = true; // false
	model.value = model.value.trim();
	emit('change', model.value.trim());
};

function setEdit() {
	editing.value = true;
	setTimeout(() => {
		input.value.focus();
	}, 1);
};

</script>

<style>
.input-edit:hover {
	box-shadow: 0 0 0 2px var(--border) inset !important;
}
.input-edit{
	width: auto;
}
</style>