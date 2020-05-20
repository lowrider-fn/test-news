<template>
    <div id="app">
        <Header :isAuth="isAuth"
                @logout="logoutHandler()"
        />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>

import Header from '@/components/blocks/Header';
import { mapGetters, mapActions } from 'vuex';

export default {
    name      : 'App',
    components: {
        Header,
    },
    computed: {
        ...mapGetters([
            'isAuth',
        ]),
    },
    methods: {
        ...mapActions([
            'logout',
        ]),
        async logoutHandler() {
            await this.logout();
            this.$router.push({ name: 'Auth' });
        },
    },
};
</script>
