<template>
    <div>
        <li @click="$emit('dashboard','deactive'),isDashboardActive()">
            <router-link class="nav-link" to="/">Go Back to News Feed</router-link>
        </li>

    </div>
</template>

<script>

export default {
    components: {
        name: "DashboardHeader",
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
        isDashboardActive(){
            this.isDashboard = 'deactive';
            localStorage.isDashboard = 'deactive';
        }
    }
}
</script>

<style scoped>

</style>