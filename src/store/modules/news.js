
import news from '../jsons/news.json';

const methods = {
    findById: (arr, call, id) => {
        arr.forEach((el, i) => {
            if (el.source.id === id) call(i);
        });
    },
};
const state = {
    news: [],
};

const actions = {
    getNews: ({ commit }) => {
        const data = localStorage.getItem('news');
        if (data && data.length > 0) {
            commit('SAVE_NEWS', JSON.parse(data));
        } else {
            commit('SAVE_NEWS', news);
            localStorage.setItem('news', JSON.stringify(news));
        }
    },

    deleteNews: (store, form) => {
        const { news } = store.state;
        const call = i => store.commit('DELETE_NEWS', i);

        methods.findById(news, call, form.source.id);
        localStorage.setItem('news', JSON.stringify(news));
    },

    addNews: (store, form) => {
        const { news } = store.state;
        store.commit('ADD_NEWS', form);
        localStorage.setItem('news', JSON.stringify(news));
    },

    updateNews: (store, form) => {
        const { news } = store.state;
        const call = (i) => {
            const arr = news;
            arr.splice(i, 1, form);
            store.commit('SAVE_NEWS', arr);
        };

        methods.findById(news, call, form.source.id);
        localStorage.setItem('news', JSON.stringify(news));
    },
};

const mutations = {
    SAVE_NEWS  : (state, news) => state.news = news,
    ADD_NEWS   : (state, form) => state.news.push(form),
    DELETE_NEWS: (state, i) => state.news.splice(i, 1),

};

const getters = {
    news(state) {
        const toTimeStamp = date => Date.parse(new Date(date));
        return state.news.sort((a, b) => toTimeStamp(b.date) - toTimeStamp(a.date));
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
