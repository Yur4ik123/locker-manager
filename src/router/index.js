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
    },
    {
        path: '/request',
        name: 'request',
        component: () => import('../views/RequestView')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../views/DetailView')
    },
    {
        path: '/detailed-full',
        name: 'detailed-full',
        component: () => import('../views/DetailedFullView')
    },
    {
        path: '/detailed-history',
        name: 'detailed-history',
        component: () => import('../views/DetailedHistoryView')
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
