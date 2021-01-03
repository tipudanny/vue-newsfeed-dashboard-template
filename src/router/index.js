import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from "@/views/About";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/post/:id',
    name: 'Post',
    //props: true,
    component: () => import('@/views/Post.vue')
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
  next()
})

export default router
