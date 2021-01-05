<template>
  <div class="about">
      <Jumbotron />
      <MediaList />
  </div>
</template>
<script>

import Jumbotron from "@/components/HomeLayout/Jumbotron";
import MediaList from "@/components/HomeLayout/MediaList";

export default {
    components: {
        name: 'About',
        Jumbotron: Jumbotron,
        MediaList: MediaList,
    },
    mounted() {
        if (localStorage.token) {
            this.token = localStorage.token;
        }
    },
    data(){
        return{
            token:'',
        }
    },
}
</script>