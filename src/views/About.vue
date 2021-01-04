<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>

export default {
  name: 'About',
    mounted() {
        if (localStorage.token) {
            this.token = localStorage.token;
        }
        axios.defaults.headers.common = {'Authorization': `Bearer ${this.token}`};
    },
    data(){
        return{
            token:'',
        }
    },
}
</script>