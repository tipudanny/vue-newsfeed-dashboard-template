<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li>
        <router-link :to="{ name:'Post',params:{ id: 1, title:'First Post' } }">
          Fisrt Post
        </router-link>
      </li><li>
        <router-link :to="{ name:'Post',params:{ id: 2, title:'Second Post' } }">
          Second Post
        </router-link>
      </li><li>
        <router-link :to="{ name:'Post',params:{ id: 3, title:'Third Post' } }">
          Third Post
        </router-link>
        <br>
        <p @click="logout()">
          logout
        </p>
      </li>
    </ul>
  </div>
</template>

<script>

import router from "@/router";

export default {
  name: 'Home',
    mounted() {
        if (localStorage.token) {
            this.token = localStorage.token;
        }
        axios.defaults.headers.common = {'Authorization': `Bearer ${this.token}`};
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    },
    data(){
        return{
          token:'',
        }
    },
    methods:{
        logout(){
            axios.post('http://currier.api/api/auth/logout',this.loginInfo).then((data)=>{
                console.log(data.data.access_token);
                if (data.data.access_token){
                    localStorage.token = data.data.access_token;
                }else {
                    localStorage.token = '';
                    router.push('/login');
                }
            }).catch(error => {
                console.log("ERRRR:: ",response.errors);
            });
        }
    }
}
</script>
<style scoped>
ul{
  list-style: none;
  padding: 0;
}
</style>
