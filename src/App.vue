<template>
	<component :is="layout" />
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import defaultLayout from './shared/layouts/default.vue';

const layouts = {
	'default': defaultLayout,
};

const route = useRoute();

const layout = computed(() => {
	if (route?.name && route?.meta?.layout) return layouts[route.meta.layout];
	else return layouts.default;
});

watch(route, () => {
	if (route.meta) {
		document.title = 'EvoFood - ' + (route.meta.title || 'EvoFood');
	} else {
		document.title = 'EvoFood';
	}
}, {
	immediate: true,
	deep: true,
});

</script>

<style>
*{
	font-family: 'Open Sans';
}
body{
	margin: 0;
	overflow-x: hidden;
}
</style>

