
import news from '../jsons/news.json';

const state = {
    news: [],
};

const actions = {
    getNews: ({ commit }) => {
        const data = localStorage.getItem('news');
        if (data) {
            commit('SAVE_NEWS_TO_STORE', JSON.parse(data));
        } else {
            commit('SAVE_NEWS_TO_STORE', news);
            localStorage.setItem('news', JSON.stringify(news));
        }
    },

    updateNews: ({ commit }, news) => {
        localStorage.setItem('news', JSON.stringify(news));
        commit('SAVE_NEWS_TO_STORE', news);
    },
};

const mutations = {
    SAVE_NEWS_TO_STORE: (state, news) => state.news = news,
};

const getters = {
    news(state) {
        const toTimeStamp = date => Date.parse(new Date(date));
        return state.news.sort((a, b) => toTimeStamp(a.date) - toTimeStamp(b.date)).reverse();
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
