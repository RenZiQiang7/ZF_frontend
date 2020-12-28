<template>
  <div>
    <van-tabbar v-model="active" route inactive-color="#999999" active-color="#1ABC9C">
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>

      <van-tabbar-item icon="shop" to="/reserve">客房预订</van-tabbar-item>
      <van-tabbar-item icon="bag" to="/goodslist">商品购买</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/vipmenber">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>