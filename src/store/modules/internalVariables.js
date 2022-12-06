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
        },
        updateCount(state, data) {
            state.total_count = data;
        }
    },
    actions: {
        changePerPage(ctx, data) {
            ctx.commit('updatePerPage', data)
        },
        changeCount(ctx, data){
            ctx.commit('updateCount', data)
        }
    },
    getters: {
        getPerPage(state) {
            return state.per_page;
        },
        getCurrentPage(state){
            return state.current_page;
        },
        getCount(state){
            return state.total_count
        }
    },
}