<template>
    <div class="top">
       <div class="top1" @click="gotoip">
      <van-icon name="checked" size="30px" color="#ffffff" class="top1-1"/>
         <span class="top1-2">交易完成</span>
         
       </div>
          
       <div class="ip">
           <div class="ip1">
          <span>感谢您在xxx购物，欢迎再次光临</span>
          </div>
       </div>

   <div class="ip">
      <div class="ip1">
        <span>{{ list.address.name }}</span
        ><span>{{ list.address.tel }}</span>
        <br />
        <span>{{ list.address.address }} </span>
      </div>
    </div>

      <div>
          <div class="top6">
      <div class="fenlei">
        <span class="f1">商品信息</span>
      </div>
    </div>
    <div>
      <van-card
        v-for="item in list.goods"
        :key="item.id"
        :desc="item.info"
        :thumb="item.smallImg"
      >
        <template #title>
          <span style="color: black; font-size: 16px">
            {{ item.name }}
          </span>
           <span style="color: green; font-size: 16px; float: right"
              >×{{ item.num }}</span
            >
        </template>
        <template #price>
          <div>
            <div style="color: red; font-size: 18px">￥{{ item.price }}</div>

           
          </div>
        </template>
        <template> </template>
      </van-card>
    </div>
      </div>

      <div class="b1">
         <div class="b1-1">
             <span>订单信息</span>
         </div>
         <div class="b2">
         <span style="font-size:16px">商品合计:</span><span style="font-size:14px">￥{{ list.totalPay }}</span>
         </div>
         <div class="b2">
         <span style="font-size:16px">优惠券:</span><span style="font-size:14px">-￥{{ list.ticket }}</span>
         </div>
         <div class="b2">
         <span style="font-size:16px">优惠抵扣:</span><span style="font-size:14px">￥{{ list.score }}</span>
         </div>

      </div>
      <div class="b1">
         
         <div class="b2">
         <span style="font-size:16px">订单编号:</span><span style="font-size:14px">{{ list.orderId }}</span>
         </div>
         <div class="b2">
         <span style="font-size:16px">提交时间:</span><span style="font-size:14px">{{ list.commitTime }}</span>
         </div>
         <div class="b2">
         <span style="font-size:16px">支付方式:</span><span style="font-size:14px">{{ list.payType }}</span>
         </div>
         <div class="b2">
         <span style="font-size:16px">实付金额:</span><span style="font-size:14px">{{list.realPay}}</span>
         </div>
         <div class="b2">
         <span style="font-size:16px">付款时间:</span><span style="font-size:14px">{{list.payTime}}</span>
         </div>
      </div>
          <div class="bo">
           <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="gogm">
 再次购买
</van-button>
<van-button color="#ccc" @click="goto">
 删除订单
</van-button>
          </div>

    </div>
</template>

<script>
import Vue from 'vue';
import { Icon,CountDown,SubmitBar ,Search, Card, Button} from 'vant';

Vue.use(Icon);
Vue.use(CountDown);
Vue.use(SubmitBar);


Vue.use(Button);
Vue.use(Card);
Vue.use(Search);
export default {
    data() {
    return {
      time: 30 * 60 * 60 * 1000,
       value: "",
      list: [],
    };
  },
  methods: {
   
  
         gogm(){
            this.$router.push("/goodslist");
        },
        goto(){
            this.$router.go(-1)
        },
         gotoip(){
        this.$router.push("/Tail");
   }
        
  },
  created() {
   this.list = this.$route.params;
    this.$store.commit('setTitle',"订单详情-已完成")
    this.$store.commit("showFooter",false)
  },
   
  

}
</script>

<style lang="scss" scoped>
.top{
    margin-top: 50px;
    margin-bottom: 50px;
}
.top1{
    width: 100%;
    height: 60px;
    background: rgb(26, 188, 156);
    margin-top: 20px;
    position: relative;
}
.top1-1{
    margin-top: 15px;
    margin-left: 15px;
    
}
.top1-2{
    margin-left: 5px;
position: absolute;
top: 33%;
color: #ffffff;
font-size: 15px;
}
.top3{
    position: absolute;
    top: 0;
    color: white;
    font-size: 15px;
}


  .colon {
    display: inline-block;
    margin: 0 4px;
    color:#ffffff;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
  }

  .top3{
      position: absolute;
      top: 33%;
      right: 15px;
  }
  .ip{
      margin-top: 10px;
      width: 100%;
      height: 80px;
      background: rgb(245, 245,245);
      span{
          font-size: 14px;
      }
  }
  .ip1{
      margin-top: 20px;
      margin-left: 20px;
    
  }

  .top6 {
  height: 38px;
}

.inputSearch {
  width: 250px;
  padding: 0;
  float: left;
  margin-top: 2px;
}
.button {
  width: 90px;
  height: 26px;
  float: right;
}
.f1{
    float: left;
    margin-top: 10px;
    margin-left: 10px;
}
.b1{
    width: 100%;
    height: 160px;
    background: rgb(245, 245,245);
}
.b1-1{
    width: 100%;
    height: 30px;
    background: white;
}
.b2{
    margin-top: 10px;
    margin-left: 10px;
}
.bo{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom:0;
    z-index: 100;
    background: #ffffff;
}
button{
    float: right;
    margin-top: 10px;
    margin-right: 10px;
  
}
</style>