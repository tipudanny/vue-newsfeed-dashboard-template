<template>
    <div>
        <Carousel />
        <Card />
        <Jumbotron />
        <MediaList />
    </div>

</template>

<script>
import Carousel from "@/components/HomeLayout/Carousel";
import Card from "@/components/HomeLayout/Card";
import Jumbotron from "@/components/HomeLayout/Jumbotron";
import MediaList from "@/components/HomeLayout/MediaList";
export default {
    components: {
        name: 'Home',
        Carousel: Carousel,
        Card: Card,
        Jumbotron: Jumbotron,
        MediaList: MediaList,
    },
    mounted() {
        if (this.$route.meta.islogged == true && localStorage.token !=''){
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
