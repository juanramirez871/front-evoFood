export default [
    {
		path:'/plantilla',
		name: 'plantilla',
		meta: { layout: 'default', title: 'Plantilla' },
		component: () => import('../pages/index.vue'),
	},
];