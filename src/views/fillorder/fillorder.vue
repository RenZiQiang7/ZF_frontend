<template>
  <div class="main">
    <div>
      <van-contact-card
        type="edit"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="onEdit"
      />
    </div>
    <h5 style="background:#fff">商品信息</h5>
    <van-card :key="res.id" :desc="res.info" :thumb="res.smallImg">
      <template #title>
        <span style="color: black; font-size: 16px">
          {{ res.name }}
        </span>
      </template>
      <template #price>
        <div>
          <div style="color: red; font-size: 18px">￥{{ res.price }}</div>
        </div>
      </template>
      <template> </template>
    </van-card>
    <div>
      <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />
      <!-- 优惠券列表 -->
      <van-popup
        v-model="showList"
        round
        position="bottom"
        style="height: 90%; padding-top: 4px"
      >
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
    <div
      class="box"
      style="border-bottom: 1px solid #ccc; padding-left: 15px; height: 25px;background:#fff;"
    >
      <span
        class="tit"
        style="font-size: 14px; line-height: 24px; color: #323233"
        >积分抵扣</span
      >

      <van-switch
        v-model="checked"
        style="float: right; margin-right: 10px"
        size="20px"
        @change="incre(checked)"
      />
      <span
        style="
          font-size: 12px;
          color: #999999;
          float: right;
          line-height: 20px;
          margin-right: 5px;
        "
        >使用200积分可抵扣¥2.00现金</span
      >
    </div>

    <div
      class="box"
      style="background:#fff;border-bottom: 1px solid #ccc; padding-left: 15px; padding-right:10px;height: 25px;"
    >
      <span
        class="tit"
        style="font-size: 14px; line-height: 24px; color: #323233"
        >商品合计</span
      >

     
      <span
        style="
          font-size: 12px;
          color: #999999;
          float: right;
          line-height: 20px;
          margin-right: 5px;
        "
        >￥{{res.price}}</span
      >
    </div>

      <div
      class="box"
      style="background:#fff;border-bottom: 1px solid #ccc; padding-left: 15px; padding-right:10px;height: 25px;margin-top:15px;"
    >
      <span
        class="tit"
        style="font-size: 14px; line-height: 24px; color: #323233"
        >优惠券</span
      >

     
      <span
        style="
          font-size: 12px;
          color: #999999;
          float: right;
          line-height: 20px;
          margin-right: 5px;
        "
        >￥{{ticket}}</span
      >
    </div>



  <div
      class="box"
      style="background:#fff;border-bottom: 1px solid #ccc; padding-left: 15px; padding-right:10px;height: 25px;"
    >
      <span
        class="tit"
        style="font-size: 14px; line-height: 24px; color: #323233"
        >积分抵扣</span
      >

     
      <span
        style="
          font-size: 12px;
          color: #999999;
          float: right;
          line-height: 20px;
          margin-right: 5px;
        "
        >￥{{jifen}}</span
      >
    </div>

    <van-submit-bar :price="pay*100" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import Vue from "vue";
import {
  ContactCard,
  ActionSheet,
  CouponCell,
  CouponList,
  Popup,
  Switch,
  SubmitBar ,
} from "vant";

Vue.use(ContactCard);
Vue.use(ActionSheet);
Vue.use(Switch);
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Popup);
Vue.use(SubmitBar);
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};
export default {
  data: function () {
    return {
      res: {},
      currentContact: {
        name: "张三",
        tel: "13000000000",
      },
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
      checked: false,
      ticket:0.00,
      jifen:0.00,
    pay:0,
    };
  },
 
  methods: {
    onEdit() {},
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    onSubmit(){

    },
    incre(){
        if(this.checked){
            this.pay=this.res.price-2;
        }else{
             this.pay=this.res.price;
        }
    }
  },
  created() {
    this.$store.commit('setTitle',"支付订单")
    this.res = this.$route.params;
    this.pay=this.res.price;
    console.log(this.res);
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 50px;
  margin-bottom: 50px;
  background: #f2f2f2;
}
h5 {
  font-size: 18px;
  font-family: "PingFangSC-Regular",   "PingFang SC";
  font-weight: 400;
  font-style: normal;
  color: #515151;
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  margin: 0;
  border-top: 10px solid rgb(236, 226, 226);
}
</style>