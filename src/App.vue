<template>
    <div id="app">
        <Header :isAuth="isAuth"
                @logout="confirmExit();"
        />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>

import Header from '@/components/blocks/Header';
import { mapGetters, mapMutations, mapActions } from 'vuex';

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
    mounted() {
        this.checkAuth();
    },
    methods: {
        ...mapMutations([
            'SET_IS_AUTH',
        ]),
        ...mapActions([
            'confirmExit',
        ]),
        checkAuth() {
            if (JSON.parse(localStorage.getItem('auth'))) {
                this.SET_IS_AUTH();
            }
        },
    },
};
</script>
