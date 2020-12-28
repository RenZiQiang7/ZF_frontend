<template>
  <div>
    <Header style="position:fixed;top:0;width:100%">
      <div>{{this.$store.state.title}}</div>
    </Header>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  data:function(){
    
  },
  components: {
    Header,
    Footer,
  },
  
};
</script>
<style lang="scss">

</style>
