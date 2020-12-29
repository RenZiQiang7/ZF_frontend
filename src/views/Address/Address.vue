<template>
  <div class="main">
    <div class="top">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { AddressList } from "vant";
import { Toast } from "vant";

Vue.use(AddressList);
Vue.use(Toast);
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [],
    };
  },
  created() {
    this.$store.commit("setTitle", "地址管理");
    // const addr=[
    //   {
    //     id: '1',
    //     name: '张三',
    //     tel: '13000000000',
    //     address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
    //     isDefault: true,
    //   },
    //   {
    //     id: '2',
    //     name: '李四',
    //     tel: '1310000000',
    //     address: '浙江省杭州市拱墅区莫干山路 50 号',
    //   }
    // ];
    // localStorage.setItem('address',JSON.stringify(addr));
    this.list =
      localStorage.getItem("address") == null
        ? this.$store.state.address
        : JSON.parse(localStorage.getItem("address"));
  },
  methods: {
    onAdd() {
      this.$router.push("/Delivery");
    },
    onEdit(item, index) {
      // this.$store.state.personalInfo[index]
      this.$router.push({path:"/Amend",query:{index}}) 
 
    },
  },
};
</script>

<style lang="scss" scoped>
.main{
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>