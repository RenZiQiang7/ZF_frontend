<template>
  
   <div class="header">
<van-tabs v-model="active"  @click="changeTab()">
        <van-tab v-for="index in 4" :title="subTitle[index - 1]" :key="index">
        </van-tab>
      </van-tabs>
   </div>
      
   

</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 0,
      subTitle: ["全部", "待付款", "待发货", "待收货"],
      url: [
        "/goodsorder/allorders",
        "/goodsorder/daifukuan",
        "/goodsorder/daifahuo",
        "/goodsorder/daishouhuo",
      ],
    };
  },
  methods: {
    changeTab() {
      this.$router.push(this.url[this.active]);
    },
  },
  created(){
      this.active=this.url.indexOf(this.$route.path);
  },
  watch:{
      $route:function(val){
         this.active=this.url.indexOf(this.$route.path);
      }
  }
 
};
</script>


<style lang="scss" scoped>
.header{
  position: fixed;
  top: 46px;
  width:100%;
  z-index:99;
}
</style>