import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles.scss';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    // uncomment before build for github page
    created() {
        if (sessionStorage.redirect) {
            const { redirect } = sessionStorage;
            delete sessionStorage.redirect;
            this.$router.push(redirect);
        }
    },
    render: h => h(App),
}).$mount('#app');
