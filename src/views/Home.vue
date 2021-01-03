<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li>
        <router-link :to="{ name:'Post',params:{ id: 1, title:'First Post' } }">
          Fisrt Post
        </router-link>
      </li><li>
        <router-link :to="{ name:'Post',params:{ id: 2, title:'Second Post' } }">
          Second Post
        </router-link>
      </li><li>
        <router-link :to="{ name:'Post',params:{ id: 3, title:'Third Post' } }">
          Third Post
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
<style scoped>
ul{
  list-style: none;
  padding: 0;
}
</style>
