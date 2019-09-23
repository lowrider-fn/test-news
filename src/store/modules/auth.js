
const state = {
    isAuth: false,
};

const actions = {
    checkLogin: (store) => {
        localStorage.setItem('auth', true);
        store.commit('SET_IS_AUTH');
    },

    confirmExit: (store) => {
        localStorage.removeItem('auth');
        store.commit('SET_IS_AUTH');
    },
};

const mutations = {
    SET_IS_AUTH: state => state.isAuth = !state.isAuth,
};

const getters = {
    isAuth: state => state.isAuth,
};

export default {
    state,
    mutations,
    actions,
    getters,
};
