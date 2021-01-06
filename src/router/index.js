import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Newsfeed/Home";
import About from "@/views/Newsfeed/About";

Vue.use(VueRouter)
window.axios = axios



const routes = [
    // {
    //     path: '/', name: 'Home', component: Home,
    //     meta: {forVisitors: true,}
    // },
    // {
    //     path: '/admin/dashboard', name: 'Dashboard', component: () => import('@/views/AdminPanel/Dashboard.vue')
    // },

    {
        path: '/', name: 'Home', component: Home,
        children: [
            {
                path: '/home',
                component: Home
            },
        ]
    },
    {
        path: '/admin', component: import('@/views/AdminPanel/Dashboard.vue'),
        children: [
            {
                path: '/dasboard',
                component: import('@/views/AdminPanel/Dashboard.vue')
            },
        ]
    },
]

const router = new VueRouter({
    hashbang: false,
    mode: "history",
    linkActiveClass: "active",
    routes
})

router.beforeEach((to, from, next) => {
    let documentTitle = `${ process.env.VUE_APP_TITLE } - ${ to.name }`;
    if (to.params.title){
        documentTitle += ` - ${ to.params.title }`
    }
    document.title = documentTitle;

    if (to.matched.some(record => record.meta.forVisitors)) {
        if (Vue.auth.isAutheticated()) {
            to.meta.islogged = true;
            next()
        } else {
            to.meta.islogged = false;
            next()
        }
    }
    else if (to.matched.some(record => record.meta.forAuth)) {
        if ( !Vue.auth.isAutheticated() ) {
            to.meta.islogged = false;
            next({
                name: 'Login'
            })
        } else {
            to.meta.islogged = true;
            next()
        }
    }
    next()
    //console.log(to)


})

export default router
