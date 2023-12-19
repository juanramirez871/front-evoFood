export default [
    {
		path:'/login',
		name: 'iniciar.sesion',
		meta: { layout: 'default', title: 'iniciar sesion' },
		component: () => import('../pages/login.vue'),
	},
    {
		path:'/verification',
		name: 'verificar.correo',
		meta: { layout: 'default', title: 'iniciar sesion' },
		component: () => import('../pages/codeVerify.vue'),
	},
];