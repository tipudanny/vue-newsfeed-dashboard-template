import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
window.axios = axios


const routes = [
    { path: '/',name:'Home', component: require('../views/Newsfeed/Home').default,
        meta: {forVisitors: true}},

    { path: '/home',name:'Home ', component: require('../views/Newsfeed/Home').default,
        meta: {forVisitors: true} },

    { path: '/contuct-us',name:'Contact Us', component: require('../views/Newsfeed/ContactUs').default,
        meta: {forVisitors: true} },

    { path: '/pricing',name:'Pricing', component: require('../views/Newsfeed/Pricing').default,
        meta: {forVisitors: true} },

    { path: '/service-area',name:'Service Area', component: require('../views/Newsfeed/ServiceArea').default,
        meta: {forVisitors: true} },

    { path: '/registration',name:'Registration', component: require('../views/Newsfeed/Registration').default,
        meta: {forVisitors: true} },

    { path: '/login',name:'Login', component: require('../views/Newsfeed/Login').default,
        meta: {forVisitors: true} },

    //Admin Dashboard
    { path: '/admin',name:'Admin', component: require('../views/AdminPanel/Home').default},
    { path: '/admin/dashboard',name:'Admin - Dashboard', component: require('../views/AdminPanel/Home').default},
    { path: '/admin/about',name:'Admin - About', component: require('../views/AdminPanel/About').default},

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
