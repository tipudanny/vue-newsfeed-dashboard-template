<template>
    <div id="app">

        <div  v-if="isDashboard != 'active' ">
            <Newsfeed @dashboard="dashboard" />
        </div>

        <div  v-if="isDashboard == 'active' ">
            <Dashboard @dashboard="dashboard"/>
        </div>

    </div>
</template>
<script>
import Newsfeed from "@/views/Newsfeed/Newsfeed";
import Dashboard from "@/views/AdminPanel/Dashboard";


export default {
    components: {
        Newsfeed: Newsfeed,
        Dashboard: Dashboard,
    },
    mounted() {
        if (localStorage.isDashboard) {
            this.isDashboard = localStorage.isDashboard;
        }
    },
    data(){
        return{
            isDashboard:'',
        }
    },
    methods:{
        dashboard(e){
            console.log(e);
            this.isDashboard = e;
        }
    }
}
</script>

<style scoped>
/*@import'~bootstrap/dist/css/bootstrap.css';*/
@import "assets/css/style.css";

</style>
