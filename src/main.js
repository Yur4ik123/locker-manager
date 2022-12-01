import 'vue-select/dist/vue-select.css';
import './styles/style.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UIkit from "uikit";
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

window.App = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
