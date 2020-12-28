<template>
    <div class="main">
       <div class="top1">
         <div class="top2"> 
             <img src="./logo.png" alt="">
         </div>
         <p class="top3">{{$store.state.personalInfo.nickName}}</p>
         <p class="top4" @click="goPersonal()">修改资料 ></p>
       </div>

       <div class="x1">
         <div class="x1-1">
          余额:0
         </div>
         <div class="x1-2">
          积分:0
         </div>
         <div class="x1-3">
           优惠卷:0
         </div>
       </div>
       <div class="k">
           <button>会员充值</button>
       </div>
       
       <div>
           <van-cell is-link @click="showPopup">客房订单</van-cell>
       </div>
       <div>
           <van-cell is-link @click="showPopup">商品订单</van-cell>
       </div>
       <div>
           <van-cell is-link @click="goBill()">账单</van-cell>
       </div>
       <div>
           <van-cell is-link @click="showPopup">积分查询</van-cell>
       </div>
       <div>
           <van-cell is-link @click="showPopup">优惠卷</van-cell>
       </div>
       <div>
           <van-cell is-link @click="$router.push('/address')">地址管理</van-cell>
       </div>
       
       
       
       

    </div>
</template>

<script>
import Vue from 'vue';
import { Popup,Cell } from 'vant';

Vue.use(Popup);
Vue.use(Cell);

export default {
    data() {
    return {
      show: false,
    };
  },

  methods: {
    showPopup() {
    },
    goPersonal(){
        this.$router.push('/personal')
    },
    goBill(){
        this.$router.push('/bill')
    }
  },
  created(){
      this.$store.commit("setTitle","我的")
  }
}
</script>

<style lang="scss" scoped>
.top1{
    width: 100%;
    height: 80px;
}
.top2{
    float: left;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid black;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }
}
.top3{
    float: left;
    margin-left:5px;
}
.top4{
   float: right;
}
.x1{
    height: 80px;
    width: 100%;
}
.x1-1{
    height: 80px;
    width: 32%;
    border: 1px solid #cccccc;
    float: left;
    border-right: none;
    line-height: 80px;
}
.x1-2{
    height: 80px;
    width: 32%;
    border: 1px solid#cccccc;
    float: left;
    border-right: none;
    line-height: 80px;
}
.x1-3{
    height: 80px;
    width: 32%;
    border: 1px solid#cccccc;
    float: left;
    line-height: 80px;
}
.k{
    margin-left: 120px;
    margin-top: 10px;
}
.bottom{
    width: 100%;
    background: #f4f4ff;;
    height: 400px;
}

.bottom1{
float: left;

}
.bottom2{
float: right;
font-size: 24px;
}
button{
    outline: none;
    border: none;
    border-radius:5% ;
    background:  #1890ff;
    color: #f4f4ff;
}
.main{
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>