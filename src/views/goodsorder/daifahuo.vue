<template>
  <div>
    <div v-for="v in list" :key="v.orderId">
      <span style="margin-left: 20px;margin-top:5px; font-size: 14px"> 订单编号：{{v.orderId}} </span>
      <span
        style="margin-right: 20px; color: red; float: right; font-size: 14px"
      >
        {{v.orderState}}
      </span>
      <div>
        <van-card
          v-for="item in v.goods"
          :key="item.id"
          :desc="item.info"
          :thumb="item.smallImg"
            @click="go(v)"
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
        </van-card>
      </div>
      <div>
        <div
          style="padding-left: 20px; font-size: 14px; color: rgb(153, 153, 153);padding-bottom:20px;border-bottom:8px solid #fafafa;margin-bottom:10px"
        >
          已付金额：￥{{v.realPay}}
          
        
        </div>

        
      </div>

    </div>
    <div style="margin-right:0;margin: 20px auto;" v-show="loadmore">
      <van-loading size="24px" vertical>正在加载...</van-loading>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup, Icon, Button, Card, Loading } from "vant";

Vue.use(Loading);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Card);
Vue.use(Icon);
export default {
  data() {
    return {
      list: [],
      loadmore:true,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("/v1/tosendgoodsorders").then((ret) => {
      
        this.list=ret.data;
        this.loadmore=false;
      });
    },
     go(v){
      switch(v.orderState){
        case "等待付款": this.$router.push({name:"dfk",params:v});break;
        case "等待发货": this.$router.push({name:"dfh",params:v});break;
        case "等待收货": this.$router.push({name:"dsh",params:v});break;
        case "交易完成": this.$router.push({name:"ywc",params:v});break;
        case "交易关闭": this.$router.push({name:"ygb",params:v});break;

      }
    },
   
  },
};
</script>