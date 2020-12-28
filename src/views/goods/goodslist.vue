<template>
  <div class="main">
    <div class="top">
      <div class="fenlei">
        <span style="float: left; color: gray; margin: 6px 20px">
          <van-icon name="bars" size="25" />
        </span>
        <van-search
          class="inputSearch"
          v-model="value"
          placeholder="请输入搜索关键词"
          shape="round"
        />
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
</template>
<script>
import Vue from "vue";
import { Search, Card, Icon, Button } from "vant";

Vue.use(Button);
Vue.use(Card);
Vue.use(Icon);
Vue.use(Search);
export default {
  data: function () {
    return {
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
  },
  created() {
    this.getData();
    this.$store.commit('setTitle',"商品列表")
  },
};
</script>
<style lang="scss" scoped>
.main {
  margin-top: 50px;
  margin-bottom: 50px;
}
.top {
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
</style>