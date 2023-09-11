export default [
    {
		path:'/iniciar-seccion',
		name: 'iniciar.seccion',
		meta: { layout: 'default', title: 'iniciar seccion' },
		component: () => import('../pages/login.vue'),
	},
];