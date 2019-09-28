import Vue from 'vue';
import Router from 'vue-router';

import Auth from '@/views/auth/Auth';
import News from '@/views/news/News';
import NotFound from '@/views/Not_found';

Vue.use(Router);

const isAuth = () => JSON.parse(localStorage.getItem('auth'));

const checkAuth = (to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (isAuth()) {
            next();
        } else {
            next({ path: '/login' });
        }
    }
};

const checkGuest = (to, from, next) => {
    if (to.matched.some(record => record.meta.guest)) {
        if (isAuth()) {
            next({ path: '/article_editing' });
        } else {
            next();
        }
    }
};

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
            path       : '/login',
            component  : Auth,
            name       : 'Auth',
            beforeEnter: checkGuest,
            meta       : {
                guest: true,
                title: 'Авторизация',
            },
        },
        {
            path       : '/article_editing',
            component  : News,
            name       : 'EditNews',
            beforeEnter: checkAuth,
            meta       : {
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
router.afterEach(to => document.title = to.meta.title);

export default router;

