<template>
    <div>
        <section class="login-form-section pt-4 clearfix">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-12">
                        <div class="login-form" >
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 d-none d-md-block">
                                    <div class="login-form-left ">
                                        <div class="login-form-left-title">
                                            <h6>Welcome to<br> SupperDelivery</h6>
                                        </div>
                                        <div class="login-form-left-image">
                                            <img src="../../assets/images/login/rl-img.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="login-form-right px-lg-5 px-xl-5">
                                        <div class="login-form-right-title">
                                            <h6>Log in to acess</h6>
                                        </div>
                                        <form @submit.prevent="login()" enctype="multipart/form-data">
                                            <div class="form-group">
<!--                                                <input  type="email" placeholder="Email" class="form-control form-control-lg">-->
                                                <input type="email" v-model="loginInfo.email" placeholder="email" class="form-control form-control-lg" required>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" v-model="loginInfo.password" placeholder="Password" min="0" class="form-control form-control-lg" required>
                                            </div>
                                            <div class="from-group d-flex mb-24">
                                                <div class="custom-control custom-control-checkbox">
                                                    <input class="custom-control-input" type="checkbox" id="check">
                                                    <label class="custom-control-label  custom-control-line-height remember-me mr-5" for="check">Remember me</label>
                                                </div>
                                                <div class="forgot-password">
                                                    <a class="" href="#">Forgot Password</a>
                                                </div>
                                            </div>
                                            <div class="mb-24">
                                                <button type="submit" @click="$emit('loginStatus','notlogin')" class="btn btn-info btn-block btn-lg text-uppercase">Login</button>
                                            </div>
                                            <div class="dont-have-account d-flex">
                                                <p class="mr-2">Don't have an account?</p>
                                                <a href="#">Register</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import router from "@/router";
export default {
    name: "Login",
    mounted() {
        this.islogged = this.$route.meta.islogged;
    },
    data(){
        return{
            loginInfo:{
                islogged : false,
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
                    this.islogged = true;
                    router.push('/');

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