<template>
    <div>
        <DashboardHeader v-on:dashboard="$emit('dashboard','deactive')"/>
        <router-view></router-view>
        <DashboardFooter />
    </div>
</template>

<script>
import DashboardHeader from "@/components/AdminPanel/DashboardHeader";
import DashboardFooter from "@/components/AdminPanel/DashboardFooter";
export default {
    components: {
        name: "Dashboard",
        DashboardHeader: DashboardHeader,
        DashboardFooter: DashboardFooter,
    },
    mounted() {
        if (localStorage.isDashboard) {
            this.isDashboard = localStorage.isDashboard;
        }
    },
    data() {
        return {
            isDashboard:'',
        }
    },
    methods:{

    }
}
</script>

<style scoped>

</style>