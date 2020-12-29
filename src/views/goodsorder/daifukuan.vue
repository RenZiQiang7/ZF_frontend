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
        >
          <template #title>
            <span style="color: black; fontsize: 16px">
              {{ item.name }}
            </span>
          </template>
          <template #price>
            <div>
              <div style="color: red; fontsize: 18px">￥{{ item.price }}</div>
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
            @click="removeOrder(k,'是否确认取消订单')"
          >
            取消订单
          </van-button>
          <van-button
            size="small"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
            class="button"
            @click="gotoPay(v.realPay)"
            style="margin-right: 20px"
          >
            立即支付
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
      this.$http.get("/v1/needpaygoodsorders").then((ret) => {
        console.log(ret);
        this.list=ret.data;
        this.loadmore=false;
      });
    },
    gotoPay(money) {
      this.$router.push({ name: "pay", params: {money:money} });
    },
     removeOrder(k,str) {
      Dialog.confirm({
        message:str,
      })
        .then(() => {
          // on confirm
          this.list.splice(k, 1);
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>