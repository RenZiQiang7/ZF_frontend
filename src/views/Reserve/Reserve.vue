<template>
  <div class="main">
    <div class="top">
      <h2>登别石水亭温泉酒店</h2>
      <div class="desc">
        <span>舒适</span>
        <span>森林院子</span>
        <span>独栋</span>
        <span>私密</span>
        <span>山水之间</span>
      </div>
      <div class="dh">
        <span @click="goMap"
          ><van-icon name="location" color="#5BB9BF" />一键导航</span
        >
        <span style="color: #5bb9bf">|</span>
        <span><van-icon name="phone" color="#5BB9BF" />联系电话</span>
      </div>
    </div>

    <div class="time">
      <van-steps :active="active" active-icon="success" active-color="#38f">
        <van-step
          ><span @click="showTime"
            >入住时间{{
              dateStart
                ? dateStart
                : new Date().getMonth() + 1 + "-" + new Date().getDate()
            }}</span
          ></van-step
        >
        <van-step
          ><span @click="showTime"
            >离店时间{{
              dateEnd
                ? dateEnd
                : new Date().getMonth() + 1 + "-" + (new Date().getDate() + 1)
            }}</span
          ></van-step
        >
      </van-steps>
      <van-calendar v-model="show" type="range" @confirm="onConfirm" />
    </div>
    <div>
      <van-card   v-for="(v,k) in dataList" :key="k" @click="goRoomDetail(v)">
        <template #title>
          <div class="list-title">
            {{v.name}}
          </div>
        </template>
        <template #thumb>
          <div class="list-img">
            <img :src="v.img" alt="">
          </div>
        </template>
       <template #price class="item-price">
         <span class="price">￥{{v.price}}</span>
         <van-button size="normal" class="yuding" type="primary" @click.stop="goBookroom(v)">预定</van-button>
       </template>
        <template #tags >
          <div class="list-tag">
 <van-tag plain type="danger" v-for="(item,key) in v.tag" :key="key" class="tag" color="#ccc" text-color="rgb(143, 142, 142)">{{item}}</van-tag>
          </div>
         
        </template>
       
      </van-card>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import { Step, Steps, Icon, Calendar, Card, Tag } from "vant";

Vue.use(Step);
Vue.use(Steps);
Vue.use(Icon);
Vue.use(Calendar);
Vue.use(Card);
Vue.use(Tag);
export default {
  data() {
    return {
      active: 0,
      dateStart: new Date().getMonth() + 1 + "-" + new Date().getDate(),
      dateEnd: new Date().getMonth() + 1 + "-" + (new Date().getDate() + 1),

      show: false,
      dataList:[],
    };
  },
  methods: {
    goRoomDetail(item){
      this.$router.push({name:"roomdetail",params:{item:item,dateStart:this.dateStart,dateEnd:this.dateEnd}})
    },
    goBookroom(item){
      this.$router.push({name:"bookroom",params:{item:item,dateStart:this.dateStart,dateEnd:this.dateEnd}})
     
    },
    goMap() {
      this.$router.push("/map");
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.dateStart = `${this.formatDate(start)}`;
      this.dateEnd = ` ${this.formatDate(end)}`;
    },
    showTime() {
      this.show = true;
    },
  },
  created() {
    this.$store.commit('setTitle',"客房预订")
    this.$http.get('/v1/roomlist').then(ret=>{
      console.log(ret);
      this.dataList=ret;
    })
  },

};
</script>
<style lang="scss" scoped>
.main {
  margin-bottom: 50px;
  margin-top: 50px;
  background: #f2f2f2;
}
.top {
  background: #fff;
  h2 {
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    color: #515151;
    text-align: center;
    height: 20px;
  }
  .desc {
    display: flex;
    justify-content: center;

    span {
      border: 1px solid #ccc;
      font-size: 15px;
      color: rgb(116, 113, 113);
      margin: 5px;
    }
  }
  .dh {
    display: flex;
    justify-content: center;
    span {
      margin-right: 5px;
      vertical-align: top;
    }
  }
}
.time {
  background: #fff;
  padding-left: 30px;
  padding-right: 30px;
}

.list-title{
  margin-left: 80px;
  margin-bottom: 10px;
}
.list-img{
  width: 153px;
  height: 93px;
  margin-right: 10px;
  img{
    width: 100%;
    height: 100%;
  }
}
.price{
  color: red;
  margin-left: 80px;
   font-size: 15px;
}
.list-tag{
  margin-left: 80px;

}
.tag{
  margin-top: 3px;
 margin-right: 10px;

}

.item-price{
  position: relative;
 
}
.yuding{
  position: absolute;
  right: 0;
  bottom: -5px;
}

</style>