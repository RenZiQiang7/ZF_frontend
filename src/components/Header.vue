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
      console.log(this.$route.path);
      if (this.$route.path == "/bookroom") {
        this.$router.push("/reserve");
      } else if (this.$route.path == "/pay") {
        this.$router.push("/reserve");
      } else if(this.$route.path == "/personal"){
        this.$router.push("/vipmenber")
      }else {
        this.$router.go(-1);
      }
    },
  },
};
</script>