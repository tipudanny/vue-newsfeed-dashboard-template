<template>
    <div>
        <ul>
            <li>
                <a @click="$emit('dashboard','deactive'),isDashboardActive()">
                    <router-link class="nav-link" to="/">News Feed</router-link>
                </a>
            </li>
            <li>
                <a>
                    <router-link class="nav-link" to="/admin/dashboard">Home</router-link>
                </a>
            </li>
            <li>
                <a>
                    <router-link class="nav-link" to="/admin/about">About</router-link>
                </a>
            </li>
        </ul>





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