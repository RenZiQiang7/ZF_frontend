<template>
  <div class="main">
    <div>
      <img :src="res.img" />
    </div>

    <div class="resname">
      {{ res.name }}
    </div>
    <div>
      <van-tag
        plain
        type="primary"
        v-for="item in res.tag"
        :key="item"
        class="itemTag"
        color="#6B6B6B"
        >{{ item }}</van-tag
      >
    </div>
    <div>
      <span class="price">
        ￥{{ res.price }}
        <van-button
          type="primary"
          color=" rgba(92, 185, 191, 1)"
          size="small"
          class="yuding"
          @click="gotoBookRoom()"
          >预定</van-button
        >
      </span>
    </div>
    <div class="section3">
          
      <h5>房型信息</h5>
      <div class="txt">
        <span>
          房间面积：{{ res.size }}平方米
          <span class="floatright">
            能否加床：{{ res.bed ? "可以加床" : "不能加床" }}
          </span>

          <br />

          可住人数：{{ res.man }}人
          <span class="floatright">
            是否含早：{{ res.breakfrist ? "包含早餐" : "不含早餐" }}
          </span>
        </span>
      </div>
    </div>
    <div class="section3">
          
      <h5>配套服务</h5>
      <div class="txt">
        <span>
          <van-grid>
             
            <van-grid-item icon="like-o" text="行李托管"  />
            <van-grid-item icon="fire-o" text="休闲娱乐" />
            <van-grid-item icon="phone-o" text="游泳池" />
            <van-grid-item icon="photo-o" text="餐饮服务" />
            <van-grid-item icon="bag-o" text="保险柜" />
            <van-grid-item icon="smile-o" text="酒店wifi" />
            <van-grid-item icon="award-o" text="浴缸" />
            <van-grid-item icon="cluster-o" text="吹风机" />
          </van-grid>
        </span>
      </div>
    </div>
    <div class="section3">
       
      <h5>房型介绍</h5>
      <div class="txt">
        {{ res.desc }}
      </div>
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
  Toast,
  Tag,
  Button,
  Grid,
  GridItem,
  Icon 
} from "vant";

Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Button);
Vue.use(Tag);
Vue.use(Toast);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  data() {
    return {
      res: [],
      completeRes:[],
    };
  },
  created() {
    let res = this.$route.params.item;
    this.completeRes=this.$route.params;
    this.res = res;
    console.log(this.completeRes);
    this.$store.commit('setTitle',"客房详情")
  },
  methods: {
    succes() {
      Toast.success("已加入购物车");
    },
    gotoBookRoom(){
        this.$router.push({name:"bookroom",params:this.completeRes})
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
  color: #948f8f;
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
.itemTag {
  margin-left: 20px;
  margin-top: 10px;
  line-height: 20px;
}
.yuding {
  float: right;
  margin-right: 30px;
  margin-bottom: 10px;
}
.floatright {
  float: right;
}
</style>
