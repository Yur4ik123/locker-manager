import {SampleRequests} from '@/data/sampleData'
import axios from "axios";

export default {
    namespaced: true,
    state: {
        new_requests: [],


    },
    mutations: {
        updateRequests(state) {

            //state.new_requests = data;
        },


    },
    actions: {

        getNewRequests(ctx) {
            ctx.commit("updateRequests")
        }
    },
    getters: {
        get_request_page: (state) => page => {
            return state.new_requests[page];
        },
        get_all_requests: (state) => () => {
            return state.new_requests;
        }


    }
}
