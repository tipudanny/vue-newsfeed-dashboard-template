<template>
  <div class="post">
    <h1>{{ title }}</h1>
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
