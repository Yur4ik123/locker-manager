export default {
    namespaced: true,
    state: {
        per_page: 10,
        current_page: 1,
        total_count: 1
    },
    mutations: {
        updatePerPage(state, data) {
            state.per_page = data;
        }
    },
    actions: {
        changePerPage(ctx, data) {
            ctx.commit('updatePerPage', data)
        }
    },
    getters: {
        getPerPage(state) {
            return state.per_page;
        },
        getCurrentPage(state){
            return state.current_page;
        }
    },
}