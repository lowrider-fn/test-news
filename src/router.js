import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/views/Not_found';

Vue.use(Router);

const router = new Router({
    mode  : 'hash',
    routes: [
        {
            path: '/',
        },
        {
            path    : '*',
            redirect: '/not_found',
        },
        {
            path     : '/not_found',
            name     : 'NotFound',
            component: NotFound,
            meta     : {
                title: 'Страница не найдена',
            },
        },
    ],

});

router.afterEach(to => document.title = to.meta.title);

export default router;

