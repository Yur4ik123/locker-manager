import 'vue-select/dist/vue-select.css';
import './styles/style.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UIkit from "uikit";
import vSelect from 'vue-select'
import axios from "axios";
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.component('v-select', vSelect)

/* axios config */
axios.defaults.baseURL = 'https://lockers-api.loc/api'; //Api url

Vue.config.productionTip = false

window.App = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
