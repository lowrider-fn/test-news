<template>
    <div id="app">
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name      : 'App',
    components: {
    },

};
</script>
