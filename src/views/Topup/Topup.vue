<template>
    <div class="top">
      <van-cell is-link @click="showPopup('100','100','￥1000')">套餐1：售价100元</van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
<div class="top1">
    <span>套餐详情</span>
</div>
<div class="top1-1">
    <span class="k1">套餐名称</span><span class="k2">套餐1</span>
</div>
<hr>
<div class="top1-1">
    <span class="k1">赠送积分</span><span class="k2" style="color:orange">{{jf}}</span>
</div>
<hr>
<div class="top1-1">
    <span class="k1">赠送优惠券</span><span class="k2" style="color:orange">10元优惠券x1,20元优惠券x2</span>
</div>
<hr>
<div class="top1-1">
    <span class="k1">赠送金额</span><span class="k2" style="color:orange">{{js}}</span>
</div>
<hr>
<div class="top1-1">
    <span class="k1">支付金额</span><span class="k2">{{cc}}</span>
</div>
<hr>

</van-popup>

 <van-cell is-link @click="showPopup('200','200','￥2000')">套餐2：售价200元</van-cell>

    </div>
</template>

<script>
import Vue from 'vue';
import { Popup } from 'vant';

Vue.use(Popup);
export default {
     data() {
    return {
      show: false,
      content:"",
      jf:"",
      js:"",
      cc:"",
      
    };
  },
  created() {
    this.$store.commit('setTitle',"会员充值")
    this.$store.commit("showFooter",false)
  },
   destroyed(){
        this.$store.commit("showFooter",true)
   },

  methods: {
    showPopup(int,b,c) {
      this.show = true;
      this.jf=int;
      this.js=b;
      this.cc=c;
    },
  },
}
</script>

<style lang="scss" scoped>
.top{
    margin-top: 50px;
}
.top1{
    width: 100%;
    height: 20px;
    background: rgb(245, 245,245);
    span{
        width: 100%;
       float: left;
       text-align: center;
    }
}
.top1-1{
    width: 100%;
    height: 20px;
}
.k1{
    float: left;
    font-size: 14px;
}
.k2{
    float: right;
    font-size: 14px;
}
</style>