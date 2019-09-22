<template>
    <transition name="modal">
        <div class="modal__mask">
            <div class="modal__wrapper">
                <div v-on-clickaway="away"
                     class="modal__container"
                >
                    <div class="modal__inner">
                        <slot>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { directive as onClickaway } from 'vue-clickaway';

export default {
    directives: {
        onClickaway,
    },
    methods: {
        away() {
            this.$emit('close');
        },
    },
};
</script>
