export default [
    {
		path:'/introduccion',
		name: 'introduccion',
		meta: { layout: 'default', title: 'Introduccion' },
		component: () => import('../pages/index.vue'),
	},
];