import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

import Auth from '@/views/auth/Auth';
import News from '@/views/news/News';
import NotFound from '@/views/Not_found';

Vue.use(Router);

const isAuth = async () => store.getters.asyncIsAuth;

const checkAuth = (to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        isAuth()
            .then((isAuth) => {
                if (isAuth) {
                    next();
                } else {
                    next({ path: '/login' });
                }
            });
    }
};

const checkGuest = (to, from, next) => {
    if (to.matched.some(record => record.meta.guest)) {
        isAuth()
            .then((isAuth) => {
                if (isAuth) {
                    next({ path: '/article_editing' });
                } else {
                    next();
                }
            });
    }
};

const router = new Router({
    mode  : 'history',
    routes: [
        {
            path    : '/',
            redirect: '/whats_new',
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
            },
        },
        {
            path       : '/logout',
            component  : Auth,
            beforeEnter: checkAuth,
            meta       : {
                auth: true,
            },
        },
        {
            path     : '/whats_new',
            component: News,
            name     : 'News',
        },
        {
            path       : '/article_editing',
            component  : News,
            name       : 'EditNews',
            beforeEnter: checkAuth,
            meta       : {
                auth: true,
            },
        },
        {
            path     : '/not_found',
            name     : 'NotFound',
            component: NotFound,
        },
    ],

});
export default router;

