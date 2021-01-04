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
        <br>
        <div v-if="isLogin == false">
            <router-link :to="{ name:'Login' }">
                <input type="button" value="Login">
            </router-link>
        </div>
        <div v-else>
            <input @click="logout()" type="button" value="Logout">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
    mounted() {
        if (this.$route.meta.islogged == true){
            this.isLogin = true
        }
    },
    data(){
        return{
            isLogin:false,
        }
    },
    methods:{
        logout(){
            axios.post('http://currier.api/api/auth/logout').then((data)=>{
                if (data.data.code == 'logout') {
                    localStorage.token = '';
                    localStorage.expiration = '';
                    this.token = '';
                    this.isLogin = false;
                }
            }).catch(error => {});
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
