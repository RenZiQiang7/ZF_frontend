<template>
  <div class="main">
    <OrderHeader></OrderHeader>
    <router-view></router-view>
  </div>
</template>


<script>
import OrderHeader from "@/components/nav/orderHeader";
export default {
  components: {
    OrderHeader,
  },
  created() {
    this.$store.commit("setTitle", "商品订单");
    this.$store.commit("showFooter", false);
  },
  destroyed() {
    this.$store.commit("showFooter", true);
  },
};
</script>

<style lang="scss" scoped>
.main{
  margin-top: 90px;
}
</style>
