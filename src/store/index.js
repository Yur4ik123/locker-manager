import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
/* modules */
import newRequests from './modules/newRequests'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {newRequests},
    plugins: [createPersistedState({
        paths: [],
    }),
    ]
});


