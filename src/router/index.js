import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/NewRequestsView')
    },
    {
        path: '/free',
        name: 'free',
        component: () => import('../views/FreeLockersView')
    },
    {
        path: '/reserved',
        name: 'reserved',
        component: () => import('../views/ReservedLockersView')
    },
    {
        path: '/all',
        name: 'all',
        component: () => import('../views/AllLockersView')
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
