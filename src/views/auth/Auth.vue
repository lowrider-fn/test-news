<template>
    <div class="auth">
        <div class="auth__inner">
            <h1 class="h1">
                Авторизация
            </h1>
            <form class="auth__form">
                <Field v-model="form.login"
                       :label="'Логин'"
                       :value="form.login"
                       :placeholder="'Введите логин'"
                />
                <Field v-model="form.pwd"
                       :label="'Пароль'"
                       :type="'password'"
                       :value="form.pwd"
                       :placeholder="'Введите пароль'"
                />
                <div class="auth__btn">
                    <button class="btn-blue"
                            type="button"
                            @click="login()"
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex';
import Field from '@/components/ui/Field';

export default {
    name      : 'Auth',
    components: {
        Field,
    },
    data() {
        return {
            form: {
                login: '',
                pwd  : '',
            },
        };
    },
    methods: {
        ...mapActions([
            'checkLogin',
        ]),
        login() {
            this.checkLogin();
            this.$router.push({ path: '/article_editing' });
        },
    },
};
</script>
