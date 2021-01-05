<template>
    <div>
        <Carousel />
        <Card />
        <OurService />
        <AreaOfService />
        <CalculateCharge />
    </div>

</template>

<script>
import Carousel from "@/components/HomeLayout/Carousel";
import Card from "@/components/HomeLayout/Card";
import Jumbotron from "@/components/HomeLayout/Jumbotron";
import MediaList from "@/components/HomeLayout/MediaList";
import OurService from "@/components/HomeLayout/OurService";
import AreaOfService from "@/components/HomeLayout/AreaOfService";
import CalculateCharge from "@/components/HomeLayout/CalculateCharge";
export default {
    components: {
        name: 'Home',
        Carousel: Carousel,
        Card: Card,
        Jumbotron: Jumbotron,
        MediaList: MediaList,
        OurService: OurService,
        AreaOfService: AreaOfService,
        CalculateCharge: CalculateCharge,
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
