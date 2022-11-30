import {SampleRequests} from '@/data/sampleData'

export default {
    namespaced: true,
    state: {
        new_requests: []

    },
    mutations: {
        updateRequests(state, data) {
            state.new_requests = data;
        },


    },
    actions: {
        getNewRequests(ctx) {
            ctx.commit("updateRequests", SampleRequests)
        }
        // getMenu(ctx) {
        //
        //     axios.get(laroute.route('api.categories', {locale:window.variables.locale})).then(res => {
        //         ctx.commit('updateUpdatedAt', Math.floor(Date.now() / 1000))
        //         ctx.commit('updateMenuItems',res.data)
        //     }).catch(err => {
        //         console.log('err', err)
        //     })
        // }
    },
    getters: {
        GET_NEW_REQUESTS(state){
            return state.new_requests;
        }

    }
}
