<template>
  <div>
    <div v-for="(v, k) in list" :key="v.orderId">
      <span style="margin-left: 20px; margin-top: 5px; font-size: 14px">
        订单编号：{{ v.orderId }}
      </span>
      <span
        style="margin-right: 20px; color: red; float: right; font-size: 14px"
      >
        {{ v.orderState }}
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
          style="
            padding-left: 20px;
            font-size: 14px;
            color: rgb(153, 153, 153);
            padding-bottom: 20px;
            border-bottom: 8px solid #fafafa;
            margin-bottom: 10px;
          "
        >
          应付金额：￥{{ v.realPay }}
          <div style="float: right">
            <van-button
              size="small"
              color="#ccc"
              class="button"
              style="margin-right: 20px"
              v-if="showCancel(v.orderState)"
              @click="removeOrder(k,'是否确认取消订单')"
            >
              取消订单
            </van-button>
            <van-button
              size="small"
              color="#ccc"
              class="button"
              style="margin-right: 20px"
              v-if="showLogistics(v.orderState)"
            >
              查看物流
            </van-button>

            <van-button
              size="small"
              color="#ccc"
              class="button"
              style="margin-right: 20px"
              v-if="showDel(v.orderState)"
               @click="removeOrder(k,'是否删除该订单')"
            >
              删除订单
            </van-button>

            <van-button
              size="small"
              color="linear-gradient(to right, #ff6034, #ee0a24)"
              class="button"
              @click="gotoPay(v.realPay)"
              style="margin-right: 20px"
              v-if="showPay(v.orderState)"
            >
              立即支付
            </van-button>

            <van-button
              size="small"
              color="linear-gradient(to right, #ff6034, #ee0a24)"
              class="button"
              style="margin-right: 20px"
              v-if="showOK(v.orderState)"
              @click="qrsh(k)"
            >
              确认收货
            </van-button>

            <van-button
              size="small"
              color="linear-gradient(to right, #ff6034, #ee0a24)"
              class="button"
              style="margin-right: 20px"
              v-if="showAgain(v.orderState)"
              @click="toGoodsList()"
            >
              再次购买
            </van-button>

            <van-button
              size="small"
              color="linear-gradient(to right, #ff6034, #ee0a24)"
              class="button"
              style="margin-right: 20px"
              v-if="showNew(v.orderState)"
              @click="toGoodsList()"
            >
              重新购买
            </van-button>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-right: 0; margin: 20px auto" v-show="loadmore">
      <van-loading size="24px" vertical>正在加载...</van-loading>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup, Icon, Button, Card, Loading, Dialog ,Toast } from "vant";

Vue.use(Loading);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Card);
Vue.use(Icon);
Vue.use(Toast);
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      list: [],
      loadmore: true,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    qrsh(k) {
      Dialog.confirm({
        message: "是否确认收货？",
      })
        .then(() => {
          // on confirm
          Toast.success('已确认收货');
        })
        .catch(() => {
          // on cancel
        });
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
    getData() {
      this.$http.get("/v1/allgoodsorders").then((ret) => {
        console.log(ret);
        this.list = ret.data;
        this.loadmore = false;
      });
    },
    gotoPay(money) {
      this.$router.push({ name: "pay", params: { money: money } });
    },
    toGoodsList(){
        this.$router.push('/goodslist');
    },
    showCancel(orderState) {
      return orderState == "等待付款" ? true : false;
    },
    showLogistics(orderState) {
      return orderState == "等待收货" ? true : false;
    },
    showDel(orderState) {
      return orderState == "交易关闭" ? true : false;
    },
    showPay(orderState) {
      return orderState == "等待付款" ? true : false;
    },
    showOK(orderState) {
      return orderState == "等待收货" ? true : false;
    },
    showAgain(orderState) {
      return orderState == "交易完成" ? true : false;
    },
    showNew(orderState) {
      return orderState == "交易关闭" ? true : false;
    },
  },
};
</script>