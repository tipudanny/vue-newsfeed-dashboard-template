<template>
  <div id="app">
      <Header />
      <div class="container">

          <router-view/>
      </div>
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
