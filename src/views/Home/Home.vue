<template>
  <div class="main">
    <div class="section1">
      <div id="banner">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="address">
        <div><span>登别石水亭温泉酒店</span><button @click="goReserve()">预定</button></div>
        <div class="addre">
          <van-icon name="location" color="#2FB99E" />
          <span style="marginLeft: 10px"
            >门店详细地址详细地址，只显示一排，多余的...</span
          ><br />
          <van-icon name="phone" color="#2FB99E" />
          <span style="marginLeft: 10px">020-25654852</span>
        </div>
      </div>
    </div>

    <div class="section2">
      <h5>酒店介绍</h5>
      <div class="img">
        <div>
          <img src="@/assets/u10358.jpg" alt="" />
        </div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam fermentum
        </div>
      </div>
    </div>

    <div class="section3">
      <h5>酒店设施</h5>
      <div style="borderBottom: 1px solid #ccc">
        <h2>店内设施</h2>
        <table>
          <tr>
            <td>大堂电脑</td>
            <td>免费WIFI</td>
            <td>自助洗衣房</td>
          </tr>
          <tr>
            <td>复印传真</td>
            <td>自助咖啡机</td>
            <td>自助营养早餐厅</td>
          </tr>
          <tr>
            <td>休闲书吧</td>
            <td>停车场</td>
            <td>支持刷卡</td>
          </tr>
          <tr>
            <td>内有电梯</td>
          </tr>
        </table>
      </div>

      <div>
        <h2>店内设施</h2>
        <img
          src="@/assets/u10384.png"
          alt=""
       
        />
      </div>
    </div>

    <div class="section3">
      <h5>交通指引</h5>
      <div class="txt">
        酒店距离新千岁机场（New Chitose Airport）有1小时车程，距离JR札幌站（JR
        Sapporo station）有2小时车程。在提前预约的情况下，酒店提供往返班车服务。
      </div>
    </div>

    <div class="section3">
      <h5>酒店政策</h5>
      <div class="txt">
        若要乘坐酒店的班车，请联系酒店，并在预订客房时预约班车。请注意，由于座位有限，因此此服务需视供应情况而定。您还必须在抵达新千岁机场（New
        Chitose Airport）或JR札幌火车站（Sapporo Train
        Station）时致电酒店。预订确认信中附有联络详情。
        客人可以在酒店的商店购买免税商品。欲了解更多详情，请咨询商店。
        以含晚餐的房价预订住宿的客人可在预订客房时，针对饮食限制或食物过敏方面提出特殊要求。
        携带儿童入住的客人须在预订时告知酒店。请在特殊要求栏中注明入住儿童的人数及其年龄。
        住宿可能不允许有纹身的客人进入公共浴池区或其他类似设施，以免纹身对其他客人造成影响。
        客人如需用晚餐，必须在19:00之前办理入住。在规定时间后到店的客人无法享用晚餐，且相关费用不予退还。
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload, Button, Icon } from "vant";

Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Icon);
export default {
  data() {
    return {
      images: [
        "http://cloud.axureshop.com/gsc/TIQ0AB/69/6f/10/696f1013c84347a5b631f42f4f41f1a6/images/酒店首页/u10350.jpg?token=082d45239c143b84582ad4376b6a7f2f08c6ab0a3940cc27785c1c24f508d9cf",
        "http://cloud.axureshop.com/gsc/TIQ0AB/69/6f/10/696f1013c84347a5b631f42f4f41f1a6/images/%E9%85%92%E5%BA%97%E9%A6%96%E9%A1%B5/u10351.jpg?token=67409a0e30503e69c3ed0d08a0eadbfc461fca792ac8187c31f11a9b66ec4450",
        "http://cloud.axureshop.com/gsc/TIQ0AB/69/6f/10/696f1013c84347a5b631f42f4f41f1a6/images/%E9%85%92%E5%BA%97%E9%A6%96%E9%A1%B5/u10352.jpg?token=8e7d8dbb88a6f2ec70d53dbc4f2b98122486264ab025c04576aa3fb0f9d72252",
        "http://cloud.axureshop.com/gsc/TIQ0AB/69/6f/10/696f1013c84347a5b631f42f4f41f1a6/images/%E9%85%92%E5%BA%97%E9%A6%96%E9%A1%B5/u10353.jpg?token=6d6ad411af1103972addef54989f9deff4e7c216499dfabebc1a85120cc07808",
      ],
    };
  },
  created() {
    this.$store.commit("setTitle","首页");
  },
  methods:{
    goReserve(){
      this.$router.push('/reserve');
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
.main {
  background: #f2f2f2;
  margin-bottom: 50px;
  margin-top: 50px;
}
.section1 {
  background: #fff;

  #banner {
    height: 221px;
    width: 100%;
  }
  .address {
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    color: #515151;
    position: relative;
    box-sizing: border-box;
    padding-left: 10px;
    button {
      position: absolute;
      right: 10px;
      top: 0;
      width: 72px;
      height: 32px;
      border-radius: 3px;
      font-family: "PingFangSC-Regular", "PingFang SC";
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      color: #ff6633;
      background: #fff;
      border: 1px solid;
    }
    .addre {
      font-size: 14px;
      color: #999999;
      margin-top: 10px;
    }
  }
}

.section2 {
  background: #fff;
  margin-top: 10px;
  height: 241px;
  h5 {
    font-size: 14px;
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    font-style: normal;
    color: #515151;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    margin: 0;
  }
  .img {
    height: 114px;
    text-align: center;
    font-size: 13px;
    color: #333333;
    img {
      width: 170px;
      margin-top: 10px;
    }
  }
}

.section3 {
  background: #fff;
  margin-top: 10px;

  h5 {
    font-size: 14px;
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    font-style: normal;
    color: #515151;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    margin: 0;
  }
  h2 {
    font-size: 14px;
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    font-style: normal;
    color: #0d0d0d;
    padding-left: 10px;
    box-sizing: border-box;
  }
  table td {
    width: 20%;
    text-align: center;
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
  }
}
.txt {
  font-family: "ArialMT", "Arial";
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #333333;
  text-align: left;
  line-height: normal;
  padding: 10px;
}
</style>