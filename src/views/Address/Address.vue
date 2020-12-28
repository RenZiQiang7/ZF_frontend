<template>
  <div>
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
      this.$router.push({path:"/Amend",query:index}) 
      Toast();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>