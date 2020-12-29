<template>
  <div>
    <div v-for="(v,k) in list" :key="v.orderId">
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
          应付金额：￥{{v.realPay}}
          <div style="float: right">
          <van-button
            size="small"
            color="#ccc"
            class="button"
            style="margin-right: 20px"
            @click="$router.push('/tail')"
          >
            查看物流
          </van-button>
          <van-button
            size="small"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
            class="button"
          @click="qrsh(k)"
            style="margin-right: 20px"
          >
            确认收货
          </van-button>
        </div>
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
import { Cell, CellGroup, Icon, Button, Card, Loading ,Toast,Dialog} from "vant";
Vue.use(Toast);
Vue.use(Loading);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Card);
Vue.use(Icon);
export default {
   components: {
    [Dialog.Component.name]: Dialog.Component,
  },
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
     go(v){
      switch(v.orderState){
        case "等待付款": this.$router.push({name:"dfk",params:v});break;
        case "等待发货": this.$router.push({name:"dfh",params:v});break;
        case "等待收货": this.$router.push({name:"dsh",params:v});break;
        case "交易完成": this.$router.push({name:"ywc",params:v});break;
        case "交易关闭": this.$router.push({name:"ygb",params:v});break;

      }
    },
    getData() {
      this.$http.get("/v1/receivegoodsorders").then((ret) => {
      
        this.list=ret.data;
        this.loadmore=false;
      });
    },
     qrsh(k) {
      Dialog.confirm({
        message: "是否确认收货？",
      })
        .then(() => {
          // on confirm
          Toast.success('已确认收货');
           this.list.splice(k, 1);
        })
        .catch(() => {
          // on cancel
        });
    },
   
  },
};
</script>