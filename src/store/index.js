import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
/* modules */
import newRequests from './modules/newRequests'
import internalVariables from "./modules/internalVariables";


Vue.use(Vuex);

export default new Vuex.Store({

    modules: {newRequests, internalVariables},
    plugins: [createPersistedState({
        paths: ['internalVariables'],
    }),
    ],


});


