<template>
    <div class="top">
        
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
  style="height: 100%; padding-top: 4px;"
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
</template>
<script>
import Vue from 'vue';
import { CouponCell, CouponList } from 'vant';

Vue.use(CouponCell);
Vue.use(CouponList);

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
  showList:true
};


export default {
     data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:true
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
  created(){
  this.$store.commit("setTitle","优惠券")
  },
}

</script>
<style lang="scss" scoped>
.top{
    margin-top: 50px;
}
</style>