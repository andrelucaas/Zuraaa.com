import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '../views/Index.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Index',
        component: Index 
    }
]

const router = new VueRouter({
    routes
})

export default router
