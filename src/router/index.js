import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// route components imports
import HelloWorld from '@/pages/HelloWorld'
import AllRecogChartsPage from '@/pages/AllRecogChartsPage'
import RecogLogPage from '@/pages/RecogLogPage'
import RecogErrorsPage from '@/pages/RecogErrorsPage'

const routes = [
    {path: '/', component: AllRecogChartsPage},
    {path: '/all_recog_charts', component: AllRecogChartsPage},
    {path: '/recog_log', component: RecogLogPage},
    {path: '/recog_errors_log', component: RecogErrorsPage}
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router