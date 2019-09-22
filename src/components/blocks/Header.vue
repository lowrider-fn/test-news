<template>
    <header class="header">
        <nav class="header__inner">
            <ul class="header__list">
                <li v-for="(link,i) in links"
                    :key="i"
                    class="header__item"
                >
                    <router-link v-if="link.isShow"
                                 class="link-nav"
                                 :to="link.url"
                                 @click.native="link.action($event);"
                    >
                        {{ link.text }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>

export default {
    props: {
        isAuth: {
            type: Boolean,
        },
    },
    computed: {
        links() {
            return [
                {
                    url   : '/whats_new',
                    text  : 'Что нового',
                    isShow: true,
                    action: () => {},
                },
                {
                    url   : '/article_editing',
                    text  : 'Редактировать',
                    isShow: this.isAuth,
                    action: () => {},
                },
                {
                    url   : '/login',
                    text  : 'Авторизоваться',
                    isShow: !this.isAuth,
                    action: () => {},
                },
                {
                    url   : '/logout',
                    text  : 'Выйти',
                    isShow: this.isAuth,
                    action: e => this.$emit('logout', e),

                },

            ];
        },
    },
};
</script>
