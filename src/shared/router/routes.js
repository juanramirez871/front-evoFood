import homeVue from "../../modules/home/routes";

export default [
    {
        path: '/:catchAll(.*)',
        component: () => import('../../modules/auth/pages/404.vue'),
        meta: { name: 'Not Found', title: "404 No Encontrado" },
    },
    //{
        // path: '/',
        // name: 'home',
        // component: () => import('../pages/home.vue'),
        // meta: { name: 'Home', title: 'Proyectos' },
		// // redirect: { name: 'login' }
    //},
    ...homeVue
];
