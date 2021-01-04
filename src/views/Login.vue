<template>
<div class="login">
  <h2>Login</h2>
  <form  @submit.prevent="login()" enctype="multipart/form-data">

    <p>
      <label>Name</label>
      <input type="email" v-model="loginInfo.email" placeholder="email" required>
    </p>

    <p>
      <label>Password</label>
      <input type="password" v-model="loginInfo.password" placeholder="Password" min="0" required>
    </p>

    <p>
      <input type="submit" value="Submit">
    </p>

  </form>
</div>
</template>

<script>
    import router from "@/router";
    export default {
        name: "Login",
        mounted() {

        },
        data(){
            return{
                loginInfo:{
                    email:'tipu@gmail.com',
                    password:'12345678',
                },
            }
        },
        methods:{
            login(){
                axios.post('http://currier.api/api/auth/login',this.loginInfo).then((data)=>{
                    if (data.data.access_token != ''){
                        localStorage.token = data.data.access_token;
                        localStorage.expiration = data.data.expires_in;
                        router.push('/')
                    }
                }).catch(error => {
                    console.log("ERRRR:: ",response.errors);
                });

            },
        }
    }
</script>

<style scoped>

</style>