<template>
    <div class="top">
       <div class="top1" >
      <van-icon name="clear" size="30px" color="#ffffff" class="top1-1"/>
         <span class="top1-2">交易关闭</span>
        
       </div>
          
       <div class="ip">
           <div class="ip1">
        <span>张三</span><span>187****7605</span>
        <br>
        <span>广东省深圳市南山区科兴科学园
</span>
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
        v-for="item in list"
        :key="item.id"
        :desc="item.info"
        :thumb="item.smallImg"
      >
        <template #title>
          <span style="color: black; fontSize: 16px">
            {{ item.name }}
          </span>
        </template>
        <template #price>
          <div>
            <div style="color: red; fontSize: 18px">￥{{ item.price }}</div>

            <van-button
              size="small"
              color="linear-gradient(to right, #ff6034, #ee0a24)"
              class="button"
              @click="gotoDetail(item)"
            >
              查看详情
            </van-button>
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
         <span style="font-size:16px">商品合计:</span><span style="font-size:14px">￥99</span>
         </div>
         <div class="b2">
         <span style="font-size:16px">优惠券:</span><span style="font-size:14px">-￥10</span>
         </div>
         <div class="b2">
         <span style="font-size:16px">优惠抵扣:</span><span style="font-size:14px">￥0.00</span>
         </div>

      </div>
      <div class="b1">
         
         <div class="b2">
         <span style="font-size:16px">订单编号:</span><span style="font-size:14px">11977240</span>
         </div>
         <div class="b2">
         <span style="font-size:16px">提交时间:</span><span style="font-size:14px">2020-12-29 11:11</span>
         </div>
         <div class="b2">
         <span style="font-size:16px">支付方式:</span><span style="font-size:14px">微信支付</span>
         </div>
      </div>
          <div class="bo">
            <!-- <button class="bo1" @click="goto">删除订单</button>
            <button class="bo2" @click="gogm">再次购买</button> -->
           <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="gogm">
 重新购买
</van-button>
<van-button color="#ccc" @click="goto">
 删除订单
</van-button>
          </div>

    </div>
</template>

<script>
import Vue from 'vue';
import { Icon,CountDown,SubmitBar,} from 'vant';

Vue.use(Icon);
Vue.use(CountDown);
Vue.use(SubmitBar);
import { Search, Card, Button } from "vant";

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
    getData() {
      this.$http.get("/v1/goodslist").then((ret) => {
        console.log(ret);
        this.list = ret;
      });
    },
    gotoDetail(item) {
        this.$router.push({name:"detail",params:item});
        },
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
    this.getData();
    this.$store.commit('setTitle',"订单详情-已取消")
    this.$store.commit("showFooter",false)
  },
   destroyed(){
        this.$store.commit("showFooter",true)
   }
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
    z-index: 100;
    bottom:0;
    background: #ffffff;
}
button{
    float: right;
    margin-top: 10px;
    margin-right: 10px;
}
</style>