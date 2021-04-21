import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// route components imports
import HelloWorld from '@/pages/HelloWorld'
import RecogLogPage from '@/pages/RecogLogPage'

const routes = [
    {path: '/', component: HelloWorld},
    {path: '/recog_log', component: RecogLogPage},
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router