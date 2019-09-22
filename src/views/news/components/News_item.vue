<template>
    <div class="news-item">
        <div class="news-item__inner">
            <h2 class="h2">
                {{ news.title }}
            </h2>
            <p class="text-small">
                {{ formatedDate }}
            </p>
            <div class="news-item__text-box">
                <p class="text">
                    {{ news.description }}
                </p>
                <a :href="news.url"
                   class="link"
                >
                    Читать подробнее {{ news.source.name }}
                </a>
            </div>
            <div class="news-item__img-box">
                <img class="news-item__img"
                     :src="news.urlToImage"
                     :alt="news.source.name"
                >
            </div>
            <div v-if="isAdmin"
                 class="news-item__edit"
            >
                <button type="button"
                        class="btn-link-orange"
                        @click="$emit('edit')"
                >
                    Редактировать
                </button>
                <button type="button"
                        class="btn-link-red"
                        @click="$emit('delete')"
                >
                    Удалить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isAdmin: {
            type   : Boolean,
            default: false,
        },
        news: {
            type    : Object,
            required: true,
        },
    },
    computed: {
        formatedDate() {
            if (this.news.date) {
                const [date, time] = this.news.date.split('T');

                const [yyyy, mm, dd] = date.split('-');
                const [hh, min] = time.split(':');
                return `${dd} ${this.monthToString(mm - 1)} ${yyyy} ${hh}:${min}`;
            }
            return '';
        },

    },
    methods: {
        monthToString(val) {
            const mounths = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
                'Сентября', 'Октября', 'Ноября', 'Декабря'];
            let mounth;
            mounths.forEach((el, i) => {
                if (val === i) mounth = el;
            });
            return mounth;
        },
    },
};
</script>

