<template>
    <transition
        name="modal"
    >
        <Modal v-if="isShow"
               class="confirm"
               @close="close()"
        >
            <slot>
                <h3 class="h3">
                    Вы уверенны в удалении?
                </h3>
                <div class="row-end">
                    <button class="btn-red"
                            type="button"
                            @click="confirm()"
                    >
                        Удалить
                    </button>
                    <button class="btn-green"
                            type="button"
                            @click="close()"
                    >
                        Отмена
                    </button>
                </div>
            </slot>
        </Modal>
    </transition>
</template>

<script>

import Modal from '@/components/blocks/Modal';

export default {
    name      : 'NewsConfirm',
    components: {
        Modal,
    },
    props: {
        isShow: {
            type   : Boolean,
            default: false,
        },
    },
    methods: {
        confirm() {
            this.$emit('delete');
            this.close();
        },
        close() {
            this.$emit('update:isHide', false);
        },
    },
};
</script>

