
const state = {
    isAuth: false,
};

const actions = {
    login: ({ commit }, data) => {
        localStorage.setItem('auth', true);
        commit('LOGIN');
    },
    checkLogin({ commit }) {
        if (JSON.parse(localStorage.getItem('auth'))) {
            commit('LOGIN');
        }
    },
    logout: ({ commit }) => {
        localStorage.removeItem('auth');
        commit('LOGOUT');
    },
};

const mutations = {
    LOGIN : state => state.isAuth = true,
    LOGOUT: state => state.isAuth = false,
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
