<template>
  <van-nav-bar
    left-text="返回"
    left-arrow
    right-text="..."
    @click-left="onClickLeft"
  >
    <template #title>
      <slot></slot>
    </template>
  </van-nav-bar>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  //   updated(){
  //  console.log(this.$route.path);
  //   },
  methods: {
    onClickLeft() {
      // this.$store.state.headerBack
    
      if (this.$route.path == "/bookroom") {
        this.$router.push("/reserve");
      } else if (this.$route.path == "/pay") {
        this.$router.push("/home");
      } else if(this.$route.path == "/personal"){
        this.$router.push("/vipmenber")
      }else if(this.$route.path.indexOf('goodsorder')!=-1){
        this.$router.push("/vipmenber")
      }else if(this.$route.path == "/tail"){
        this.$router.push("/goodsorder")
      }
      else {
        this.$router.go(-1);
      }
    },
  },
};
</script>