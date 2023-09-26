import homeVue from "../../modules/home/routes";
import introductionVue from "../../modules/introduction/routes"
import auth from "../../modules/auth/routes/index";

export default [
    {
        path: '/:catchAll(.*)',
        component: () => import('../../modules/auth/pages/404.vue'),
        meta: { name: 'Not Found', title: "404 No Encontrado" },
    },
    ...homeVue,
    ...introductionVue,
    ...auth
];
