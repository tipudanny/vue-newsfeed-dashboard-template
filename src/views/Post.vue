<template>
  <div class="post">
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{
      title: this.$route.params.title,
    }
  },
  methods: {},
}
</script>
