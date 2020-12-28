<template>
    <div>
       <div class="top">
           <span class="top1">充值信息</span>
       </div>
        <div class="b">
            <span class="b1">实充</span><span class="b2">￥1000.00</span>
        </div>
        <hr>
        <div class="b">
            <span class="b1">赠送积分</span><span class="b2" style="color:orange">100</span>
        </div>
        <hr>
        <div class="b">
            <span class="b1">赠送优惠卷</span><span class="b2" style="color:orange">10元优惠券x1,20元优惠券x2</span>
        </div>
        <hr>
        <div class="b">
            <span class="b1">赠送余额</span><span class="b2" style="color:orange ">￥100</span>
        </div>
        <hr>
        <div class="b">
            <span class="b1">支付金额</span><span class="b2" >￥100</span>
        </div>
        <hr>
        <div class="b">
            <span class="b1">支付方式</span><span class="b2" style="font-size:14px">微信支付</span>
        </div>
        <hr>
        <div class="b">
            <span class="b1">时间</span><span class="b2" style="font-size:12px">2020-12-28 9:47</span>
        </div>
        <hr>
        <div class="b">
            <span class="b1">交易单号</span><span class="b2" style="font-size:12px">
0231231234332423324</span>
        </div>
        <hr>
        <div class="b">
            <span class="b1">备注</span><span class="b2" style="font-size:12px">张三消费1000元</span>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.commit("setTitle","订单详情")
    }
}
</script>

<style lang="scss" scoped>
.top{
    width: 100%;
    height: 30px;
    background:rgb(245, 245,245);
}
.top1{
    float: left;
    line-height: 30px;
}
.b{
    width: 100%;
    height: 20px;
    margin-top: 5px;
}
.b1{
   float: left;
}
.b2{
   float: right;
}
</style>