import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Auth from "../packages/auth/Auth";

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap';
import'bootstrap/dist/css/bootstrap.css';

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// import '@fortawesome/fortawesome/fontawesome'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'

// import 'font-awesome/css/font-awesome.min.css'
// import 'font-awesome/fonts/fontawesome-webfont.svg'
// import 'font-awesome/fonts/fontawesome-webfont.eot'
// import 'font-awesome/fonts/fontawesome-webfont.ttf'
// import 'font-awesome/fonts/fontawesome-webfont.woff'
// import 'font-awesome/fonts/fontawesome-webfont.woff2'





Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(Auth);

axios.defaults.headers.common = {'Authorization': `Bearer ${Vue.auth.getToken()}`};
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
