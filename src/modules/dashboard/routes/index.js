export default [
    {
		path:'/dashboard',
		name: 'dashboard',
		meta: { layout: 'default', title: 'dashboard' },
		component: () => import('../pages/index.vue'),
	},
];