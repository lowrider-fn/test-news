<template>
    <transition
        name="modal"
    >
        <Modal v-if="isShow"
               class="form"
               @close="cancel()"
        >
            <slot>
                <h3 class="h3">
                    {{ setTitle }}
                </h3>
                <div class="form__row">
                    <Field v-model="form.source.name"
                           :label="'Введите источник'"
                           :value="form.source.name"
                           :placeholder="'Введите источник'"
                    />
                    <Textarea v-model="form.title"
                              :label="'Введите заголовок'"
                              :value="form.title"
                              :placeholder="'Введите заголовок'"
                    />
                    <Textarea v-model="form.description"
                              :label="'Описание'"
                              :value="form.description"
                              :placeholder="'Введите описание'"
                    />
                    <Field v-model="form.url"
                           :label="'Ссылка на новость'"
                           :value="form.url"
                           :placeholder="'Ввыедите ссылку '"
                    />
                    <Field v-model="form.urlToImage"
                           :label="'Путь до картинки'"
                           :value="form.urlToImage"
                           :placeholder="'Введите путь'"
                    />
                    <div class="row-end">
                        <button class="btn-blue"
                                type="button"
                                @click="save()"
                        >
                            Сохранить
                        </button>
                        <button class="btn-red"
                                type="button"
                                @click="cancel()"
                        >
                            Отмена
                        </button>
                    </div>
                </div>
            </slot>
        </Modal>
    </transition>
</template>

<script>

import Modal from '@/components/blocks/Modal';
import Field from '@/components/ui/Field';
import Textarea from '@/components/ui/Textarea';

export default {
    name      : 'NewsForm',
    components: {
        Modal,
        Field,
        Textarea,
    },
    props: {
        isShow: {
            type   : Boolean,
            default: false,
        },
        isEdit: {
            type   : Boolean,
            default: false,
        },
        currentForm: {
            type: Object,
        },
    },
    data() {
        return {
            form: null,
        };
    },
    computed: {
        setTitle() {
            if (this.isEdit) {
                return 'Редактирование новости';
            }
            return 'Создание новости';
        },
    },
    watch: {
        currentForm: {
            deep: true,
            handler(val) {
                if (val) {
                    this.form = val;
                }
            },
        },
    },
    methods: {
        save() {
            this.setDate();
            this.setId();
            this.$emit('save', this.form);
        },
        setId() {
            if (!this.form.source.id) {
                const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
                this.form.source.id = id;
            }
        },
        setDate() {
            const d = new Date();
            const timezone = d.getTime() - d.getTimezoneOffset() * 60000;
            const [date] = new Date(timezone).toISOString().split('.');
            this.form.date = date;
        },
        cancel() {
            this.$emit('close');
        },
    },
};
</script>

