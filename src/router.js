import Vue from 'vue';
import Router from 'vue-router';

import Auth from '@/views/auth/Auth';
import News from '@/views/news/News';
import NotFound from '@/views/Not_found';

import store from '@/store';

Vue.use(Router);

const router = new Router({
    mode  : 'hash',
    routes: [
        {
            path     : '/',
            component: News,
            name     : 'News',
            meta     : {
                title: 'Новости',
            },
        },
        {
            path    : '*',
            redirect: '/not_found',
        },
        {
            path     : '/login',
            component: Auth,
            name     : 'Auth',
            meta     : {
                guest: true,
                title: 'Авторизация',
            },
        },
        {
            path     : '/article_editing',
            component: News,
            name     : 'EditNews',
            meta     : {
                auth : true,
                title: 'Редактирование новостей',
            },
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
const isAuth = () => store.getters.isAuth;

const checkAuth = (to, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (isAuth()) {
            next();
        } else {
            next({ name: 'Auth' });
        }
    } else {
        next();
    }
};

const checkGuest = (to, next) => {
    if (to.matched.some(record => record.meta.guest)) {
        if (isAuth()) {
            next({ name: 'EditNews' });
        } else {
            next();
        }
    } else {
        next();
    }
};

router.beforeEach(async (to, from, next) => {
    if (!from.name) {
        await store.dispatch('checkLogin');
    }
    checkAuth(to, next);
    checkGuest(to, next);
});

router.afterEach(to => document.title = to.meta.title);

export default router;

