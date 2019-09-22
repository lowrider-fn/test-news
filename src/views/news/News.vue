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
                      @delete="deleteNews(i)"
                      @edit="openForm(item,i)"
            />
            <div v-if="isAdmin">
                <NewsConfirm :isShow="isDelete"
                             :isHide.sync="isDelete"
                             @confirm="confirmDelete()"
                />
                <NewsForm :isShow="isForm"
                          :currentForm="currentForm"
                          :isEdit="isEdit"
                          @close="closeForm()"
                          @save="save($event)"
                />
            </div>
        </div>
    </div>
</template>
<script>
import NewsItem from './components/News_item';
import { mapGetters, mapActions } from 'vuex';
import cloneDeep from 'lodash.clonedeep';

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
            isDelete: false,
            isForm  : false,
            isAdmin : false,
            isEdit  : false,

            currentIndex: null,

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
        ]),
        setIsDelete() {
            this.isDelete = !this.isDelete;
        },
        setIsForm() {
            this.isForm = !this.isForm;
        },
        closeForm() {
            this.setIsForm();
            if (this.isEdit) {
                this.isEdit = !this.isEdit;
                this.currentIndex = null;
            }
        },
        openForm(news, i) {
            if (news) {
                this.currentIndex = i;
                this.isEdit = true;
                this.currentForm = cloneDeep(news);
            } else {
                this.isEdit = false;
                this.currentForm = cloneDeep(this.defaultForm);
            }
            this.setIsForm();
        },
        deleteNews(i) {
            this.setIsDelete();
            this.currentIndex = i;
        },
        confirmDelete() {
            const { news } = this;
            news.splice(this.currentIndex, 1);
            this.updateNews(news);
        },
        save(form) {
            console.log(form);

            const news = cloneDeep(this.news);

            if (this.isEdit) {
                news.splice(this.currentIndex, 1, form);
            } else {
                news.push(form);
            }
            this.closeForm();
            this.updateNews(news);
        },
    },

};
</script>
