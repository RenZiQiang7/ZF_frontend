<template>
    <div class="top">
        <div class="top1">
           <div class="top1-1">
               <img src="https://th.bing.com/th/id/Ra44faad4dc3ade3df2463c299834132e?rik=uapwi7EPLVTHTw&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190726%2f132317d37710497b991652e486987f43.jpeg&ehk=bfQ%2bzJqlpS%2f5%2f3pqtRD%2fyWZcbplwJdf0GdXniz3YVFk%3d&risl=&pid=ImgRaw" >
           </div>
           <div class="top2">
           <span class="k1">企业配送:</span><span class="k2">顺丰快递</span>
           </div>
           <div class="top3">
           <span class="k1">快递单号:</span><span class="k2">2765302256</span>
           </div>
           <div class="top4">
           <span class="k1">联系电话:</span><span class="k2">95338</span>
           </div>
        </div>
        <div class="ip">
           <van-steps :active="active">
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>
  <span class="c1">北京市</span>
  <span class="c2">深圳市</span>
        </div>

        <div class="ip2">
            <span style="font-size:14px">物流详情</span>
          <van-steps direction="vertical" :active="8">
  <van-step>
    <h3>
      订单已签收，期待再次为您服务</h3>
    <p>2017-04-01 12:00:00 </p>
  </van-step>
  <van-step>
    <h3>到达目的地网点广东深圳公司，快件将很快进行派送</h3>
    <p>2017-04-01 12:00:00 </p>
  </van-step>
  <van-step>
    <h3>在广东深圳公司进行发出扫描</h3>
    <p>2016-07-11 10:00</p>
  </van-step>
  <van-step>
    <h3>在分拨中心广东深圳公司进行卸车扫描</h3>
    <p>2016-07-11 10:00</p>
  </van-step>
  
  <van-step>
    <h3>快件已发货</h3>
    <p>2016-07-10 09:30</p>
  </van-step>
  <van-step>
    <h3>在北京市进行下级地点扫描</h3>
    <p>2016-07-11 10:00</p>
  </van-step>
  <van-step>
    <h3>订单付款成功</h3>
    <p>2016-07-11 10:00</p>
  </van-step>
  <van-step>
    <h3>订单已提交，等待付款</h3>
    <p>2016-07-11 10:00</p>
  </van-step>
</van-steps>
        </div>
        
    </div>
</template>

<script>
import Vue from 'vue';
import { Step, Steps } from 'vant';

Vue.use(Step);
Vue.use(Steps);
export default {
     data() {
    return {
      active: 3,
    };
  },
  created() {
    this.$store.commit("showFooter",false)
    this.$store.commit("setTitle","订单跟踪")
   
  },
   destroyed(){
        this.$store.commit("showFooter",true)
   }
}
</script>

<style lang="scss" scoped>
.top{
    margin-top: 50px;
}
.top1{
    margin-top: 10px;
    width: 100%;
    height: 100px;
    background: rgb(26, 188,156);
    position: relative;
}
.top1-1{
    width: 60px;
    height: 60px;
    
    margin-left: 50px;
    position: absolute;
    top:20px;
    img{
        width: 100%;
        height: 100%;
    }
    
}
.top2{
    position: absolute;
    top: 25px;
    left: 120px;
}
.k1{
    color: white;
    font-size: 15px;
}
.k2{
    color: white;
    font-size: 14px;
}
.top3{
    position: absolute;
    top: 43px;
    left: 120px;
}
.top4{
    position: absolute;
    top: 60px;
    left: 120px;
}
.ip{
    width: 100%;
    height: 100px;
    
}
.c1{
    float: left;
    font-size: 14px;
    margin-left: 5px;
}
.c2{
    float: right;
    font-size: 14px;
    margin-right: 5px;
}
</style>