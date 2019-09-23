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
                                 :to="{ name:link.name}"
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
                    name  : 'News',
                    text  : 'Что нового',
                    isShow: true,
                    action: () => {},
                },
                {
                    name  : 'EditNews',
                    text  : 'Редактировать',
                    isShow: this.isAuth,
                    action: () => {},
                },
                {
                    name  : 'Auth',
                    text  : 'Авторизоваться',
                    isShow: !this.isAuth,
                    action: () => {},
                },
                {
                    name  : 'Logout',
                    text  : 'Выйти',
                    isShow: this.isAuth,
                    action: e => this.$emit('logout', e),

                },

            ];
        },
    },
};
</script>
