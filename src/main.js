import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Auth from "../packages/auth/Auth";

Vue.use(Auth);

axios.defaults.headers.common = {'Authorization': `Bearer ${Vue.auth.getToken()}`};
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
