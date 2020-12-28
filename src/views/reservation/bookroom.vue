<template>
  <div class="main">
    <div class="section3">
          
      <h5>
        登别石水亭温泉酒店<span style="margin-left: 40px"
          >{{res.name}}</span
        >
      </h5>
    </div>
    <div class="leavedata">
      <div>
        入住时间
        <div style="float: right">离店时间</div>
      </div>
      <div style="margin-top: 20px">
        <span>{{res.dateStart}}</span>
        <span style="float: right">{{res.dateEnd}}</span>
      </div>
      <div class="iconposi">
        <van-icon name="minus" size="30" />
      </div>
      <div class="icontou">
        <van-icon name="arrow" size="20" />
      </div>
    </div>
    <!-- 通知栏 -->
    <div>
      <van-notice-bar
        left-icon="volume-o"
        wrapable
        :scrollable="false"
        text="您支付成功后，我们会处理您的订单，若不能确认订单，将全额退款之您的付款账户。"
      />
    </div>
    <!-- 可爱的条条框框 -->
    <div>
      预定间数<van-stepper v-model="value" style="display: inline-block" />
    </div>
    <div>
      <van-field
        v-model="value2"
        label="入住人"
        placeholder="请输入姓名"
        input-align="right"
      />
      <van-field
        v-model="value2"
        label="手机号"
        placeholder="请输入手机号"
        input-align="right"
      />
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="留言"
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
        input-align="right"
        style="border-bottom:1px solid #ccc"
      />
    </div>
   
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
  style="height: 90%; padding-top: 4px;"
>
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
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
        >￥{{ jifen }}</span
      >
    </div>

    <van-submit-bar
      :price="pay * 100"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
import Vue from "vue";
import { NoticeBar, Icon, Field, Stepper, CouponCell, CouponList ,SubmitBar ,Popup } from "vant";

Vue.use(Stepper);
Vue.use(Field);
Vue.use(Icon);
Vue.use(NoticeBar);
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Popup);
Vue.use(SubmitBar)
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
      value: 1,
      value2: "",
      ticket: 0.0,
      jifen: 0.0,
      checked: false,
      message: "",
      pay:0,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:false,
      res:{}
    };
  },
  watch:{
      value:function(newVal){
          this.pay=this.res.item.price*this.value
      }
  },
  created() {
      let res=this.$route.params;
      console.log(res);
      this.res=res;
      this.$store.commit('setTitle',"预定客房")
    
      this.pay=this.res.item.price*this.value
  },

  methods:{
      onSubmit(){
          this.$router.push({name:"pay",params:{money:this.pay}})
      },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  }
};
</script>
<style lang="scss" scoped>
.main {
  margin-top: 50px;
  margin-bottom: 50px;
}

h5 {
  font-size: 16px;
  font-family: "PingFangSC-Regular",   "PingFang SC";
  font-weight: 400;
  font-style: normal;
  color: #515151;
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  margin: 0;
  border-top: 10px solid rgb(236, 226, 226);
  border-bottom: 1px solid rgb(196, 192, 192);
}
.leavedata {
  height: 80px;
  //   background: pink;
  padding: 20px 50px;
  position: relative;
  border-bottom: 1px solid rgb(196, 192, 192);
}
.iconposi {
  position: absolute;
  top: 20%;
  left: 45%;
}
.icontou {
  position: absolute;
  top: 25%;
  left: 50%;
}
</style>