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
import OurService from "@/components/HomeLayout/OurService";
import AreaOfService from "@/components/HomeLayout/AreaOfService";
import CalculateCharge from "@/components/HomeLayout/CalculateCharge";
export default {
    components: {
        name: 'Home',
        Carousel: Carousel,
        Card: Card,
        OurService: OurService,
        AreaOfService: AreaOfService,
        CalculateCharge: CalculateCharge,
    },
    mounted() {
        this.islogged = this.$route.meta.islogged;
    },
    data(){
        return{
            islogged:false,
        }
    },
    methods:{
    }
}
</script>
<style scoped> </style>
