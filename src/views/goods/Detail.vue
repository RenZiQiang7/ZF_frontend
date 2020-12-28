<template>
  <div class="main">
    <div id="banner">
        <van-swipe :autoplay="3000">
         <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
             </van-swipe
      >
            
    </div>
    <div>
      <span class="price"> ￥{{ res.price }} </span>
      <span class="myid">{{ res.id }}</span>
    </div>
    <div class="resname">
      {{ res.name }}
    </div>
    <div class="section3">    
      <h5>详情介绍</h5>
      <div class="txt">
               {{ res.info }}    
      </div>
    </div>
    <div>
      <img :src="res.smallImg" />
    </div>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" @click="succes()" />
        <van-goods-action-button type="danger" text="立即购买" @click="goFillOrder()"/>
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Swipe,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
Toast
} from "vant";

Vue.use(Toast);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  data() {
    return {
      images: [
        "http://cloud.axureshop.com/gsc/TIQ0AB/69/6f/10/696f1013c84347a5b631f42f4f41f1a6/images/酒店首页/u10350.jpg?token=082d45239c143b84582ad4376b6a7f2f08c6ab0a3940cc27785c1c24f508d9cf",
        "http://cloud.axureshop.com/gsc/TIQ0AB/69/6f/10/696f1013c84347a5b631f42f4f41f1a6/images/酒店首页/u10351.jpg?token=67409a0e30503e69c3ed0d08a0eadbfc461fca792ac8187c31f11a9b66ec4450",
        "http://cloud.axureshop.com/gsc/TIQ0AB/69/6f/10/696f1013c84347a5b631f42f4f41f1a6/images/酒店首页/u10352.jpg?token=8e7d8dbb88a6f2ec70d53dbc4f2b98122486264ab025c04576aa3fb0f9d72252",
        "http://cloud.axureshop.com/gsc/TIQ0AB/69/6f/10/696f1013c84347a5b631f42f4f41f1a6/images/酒店首页/u10353.jpg?token=6d6ad411af1103972addef54989f9deff4e7c216499dfabebc1a85120cc07808",
      ],
      res: [],
    };
  },
  created() {
    this.$store.commit('setTitle',"商品详情")
    this.$store.commit('showFooter',false);
    let res = this.$route.params;
    this.res = res;
    console.log(res);
  },
  methods:{
    succes(){
      Toast.success('已加入购物车');
    },
   goFillOrder(){
     this.$router.push({name:'fillorder',params:this.res})
   }
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
.main {
  margin-top: 50px;
  margin-bottom: 50px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 200px;
}
#banner  {
  height: 221px;
  width: 100%;
}
.price {
  font-size: 24px;
  color: #ff5918;
  font-family: "PingFangSC-Regular", "PingFang SC";
  font-weight: 400;
  font-style: normal;
  margin-left: 20px;
}
.myid {
  font-family: "PingFangSC-Regular", "PingFang SC";
  font-weight: 400;
  font-style: normal;
  color: #a1a1a1;
  text-align: right;
  float: right;
  margin-right: 30px;
}
.resname {
  font-family: "PingFangSC-Regular", "PingFang SC";
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  color: #515151;
  margin-left: 20px;
}
.txt {
  font-family: "ArialMT",   "Arial";
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #333333;
  text-align: left;
  line-height: normal;
  padding: 10px;
  margin-left: 10px;
  margin-right: 30px;
  border-top: 1px solid rgb(196, 192, 192);
  border-bottom: 1px solid rgb(196, 192, 192);
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