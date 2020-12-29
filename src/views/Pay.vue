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
      @click="$router.push('/pysuccess')"
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
      @click="$router.push('/pysuccess')"
    >
      <van-icon
        name="alipay"
        style="vertical-align: middle; margin-right: 10px"
      />
      <span
        class="tit"
        style="font-size: 14px; line-height: 24px; color: #323233"
        >支付宝支付</span
      >
    </div>
   
  </div>
</template>
<script>
import Vue from "vue";
import { Icon, CountDown, Popup } from "vant";

Vue.use(Popup);
Vue.use(Icon);
Vue.use(CountDown);
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      money: 0,
      show: false,
      trade_no:"",
    };
  },
  created() {
    this.$store.commit("setTitle", "支付订单");
    this.$store.commit("showFooter", false);

    let money = this.$route.params.money;

    if (money) {
      this.money = parseInt(money);
    };

  },
  destroyed() {
    this.$store.commit("showFooter", true);
  },
  methods: {
    // showAlipay() {
    //   // 跳转至支付宝页面付款
    //   this.$http.get('https://m.28sjw.com/alipay_wap/alipayapi.php',{
    //     params:{WIDout_trade_no:this.randomTradeNo(),WIDsubject:"buy",WIDsubject:0.01}
    //   });
    // },


    randomTradeNo(){
      var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

      var vc = '';

      for (var i = 1; i <= 12; i++) {
          // 从 0 - str.length-1 的所有索引下标的随机数
          var num = parseInt(Math.random() * str.length);

          if (vc.indexOf(str[num]) === -1) {
              vc += str[num];
          } else {
              i--;
          }
      }
      this.trade_no=vc;
      return vc;
    }
  },
};
</script>
<style lang="scss" scoped>
.main {
  margin-top: 50px;
}
</style>
