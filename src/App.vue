<template>
  <div id="app">
      <Header />
      <router-view/>
      <Footer />
  </div>
</template>
<script>
import Header from "@/components/HomeLayout/Header";
import Footer from "@/components/HomeLayout/Footer";
export default {
    components: {
        Header: Header,
        Footer: Footer,
    }
}
</script>

<style scoped>
/*@import'~bootstrap/dist/css/bootstrap.css';*/
@import "assets/css/style.css";

</style>
