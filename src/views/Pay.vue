<template>
  <div class="main">
    <div style="height: 240px; text-align: center">
      <van-icon name="balance-list" size="140" color="#999999" />
      <div>订单提交成功</div>

      <van-count-down :time="time" format="请在 HH 时 mm 分 ss 秒内完成支付" />

      <div>
        支付金额<span style="color: red">￥{{ money }}</span>
      </div>
    </div>

    <div
      class="box"
      style="
        background: #fff;
        border-bottom: 1px solid #ccc;
        padding-left: 15px;
        padding-right: 10px;
        height: 25px;
        margin-top: 20px;
      "
    >
      <span
        class="tit"
        style="font-size: 14px; line-height: 24px; color: #323233"
        >支付方式</span
      >
    </div>

    <div
      class="box"
      style="
        background: #fff;
        border-bottom: 1px solid #ccc;
        padding-left: 15px;
        padding-right: 10px;
        height: 25px;
      "
    >
      <van-icon
        name="wechat"
        style="vertical-align: middle; margin-right: 10px"
      />
      <span
        class="tit"
        style="font-size: 14px; line-height: 24px; color: #323233"
        >微信支付</span
      >
    </div>

    <div
      class="box"
      style="
        background: #fff;
        border-bottom: 1px solid #ccc;
        padding-left: 15px;
        padding-right: 10px;
        height: 25px;
      "
    >
      <van-icon
        name="wechat"
        style="vertical-align: middle; margin-right: 10px"
      />
      <span
        class="tit"
        style="font-size: 14px; line-height: 24px; color: #323233"
        >微信支付</span
      >
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon, CountDown } from "vant";

Vue.use(Icon);
Vue.use(CountDown);
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      money: 0,
    };
  },
  created() {
    this.$store.commit("setTitle", "支付订单");
    this.$store.commit('showFooter',false);

    let money = this.$route.params.money;
    if (money) {
      this.money = money;
    }
  },
  destroyed(){
     this.$store.commit('showFooter',true);
  
  }
};
</script>
<style lang="scss" scoped>
.main {
  margin-top: 50px;
}
</style>
