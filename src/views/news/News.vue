<template>
    <div class="news">
        <div class="news__inner">
            <h1 class="h1">
                {{ setTitle }}
            </h1>
            <div v-if="isAdmin"
                 class="news__control"
            >
                <button type="button"
                        class="btn-link-green"
                        @click="openForm()"
                >
                    Добавить
                </button>
            </div>
            <div class="news__item-wrap"></div>
            <NewsItem v-for="(item,i) in news"
                      :key="i"
                      :news="item"
                      :isAdmin="isAdmin"
                      @delete="confirmDelete(item)"
                      @edit="openForm(item)"
            />
            <div v-if="isAdmin">
                <NewsConfirm :isShow="isDelete"
                             :isHide.sync="isDelete"
                             @delete="deleteNews(currentForm)"
                />
                <NewsForm v-bind={isForm,isEdit,currentForm}
                          :isHide.sync="isForm"
                          @save="save($event)"
                />
            </div>
        </div>
    </div>
</template>

<script>

import NewsItem from './components/News_item';
import { mapGetters, mapActions } from 'vuex';

export default {
    name      : 'News',
    components: {
        NewsItem,
        NewsConfirm: () => import('./components/News_confirm'),
        NewsForm   : () => import('./components/News_form'),
    },
    props: {
        isAuth: {
            type   : Boolean,
            default: false,
        },
    },
    data() {
        return {
            isDelete   : false,
            isForm     : false,
            isAdmin    : false,
            isEdit     : false,
            defaultForm: {
                source: {
                    name: '',
                    id  : '',
                },
                title      : '',
                description: '',
                url        : '',
                urlToImage : '',
            },
            currentForm: null,
        };
    },
    computed: {
        ...mapGetters([
            'news',
        ]),
        setTitle() {
            if (this.isAdmin) {
                return 'Редактирование новостей';
            }
            return 'Новости';
        },
    },
    mounted() {
        this.getNews();
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            if (to.meta.auth) {
                vm.isAdmin = true;
            } else {
                vm.isAdmin = false;
            }
        });
    },
    methods: {
        ...mapActions([
            'getNews',
            'updateNews',
            'deleteNews',
            'addNews',
        ]),
        openForm(news) {
            if (news) {
                this.isEdit = true;
                this.currentForm = news;
            } else {
                this.isEdit = false;
                this.currentForm = this.defaultForm;
            }
            this.isForm = true;
        },
        confirmDelete(news) {
            this.currentForm = news;
            this.isDelete = true;
        },
        save(form) {
            if (this.isEdit) {
                this.updateNews(form);
            } else {
                this.addNews(form);
            }
        },
    },
};
</script>
