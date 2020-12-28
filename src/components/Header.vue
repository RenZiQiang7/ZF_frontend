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
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>