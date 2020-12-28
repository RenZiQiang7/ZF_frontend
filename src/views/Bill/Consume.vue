<template>
    <div>
        <div class="top">
            <div class="top1">
            </div>
            <span>商品名称</span>
            <br>
            <span>￥100.00</span>
        </div>
        <div class="top2">
           <span class="top2-2">消费信息</span>
        </div>
        <div class="bottom">
            <span class="bottom1">类型</span><span class="bottom2" style="font-size:12px">客房预订</span>
        </div>
        <hr>
        <div class="bottom">
            <span class="bottom1">支付方式</span><span class="bottom2" style="font-size:12px">余额支付</span>
        </div>
        <hr>
        <div class="bottom">
            <span class="bottom1">会员卡号</span><span class="bottom2" style="font-size:12px">
123223432322</span>
        </div>
        <hr>
        <div class="bottom">
            <span class="bottom1">消费时间</span><span class="bottom2" style="font-size:12px">2020-12-28 10:20</span>
        </div>
        <hr>
         <div class="bottom">
            <span class="bottom1">订单编号</span><span class="bottom2" style="font-size:12px">
0231231234332423324</span>
        </div>
        <hr>
        <div class="bottom">
            <span class="bottom1">消费金额</span><span class="bottom2" style="font-size:12px">200.00</span>
        </div>
        <hr>
        <div class="bottom">
            <span class="bottom1">
优惠券(10元优惠券)</span><span class="bottom2" style="font-size:12px">
-￥10.00</span>
        </div>
        <hr>
        <div class="bottom">
            <span class="bottom1">积分抵扣(100积分)</span><span class="bottom2" style="font-size:12px">
-￥1.00</span>
        </div>
        <hr>
        <div class="bottom">
            <span class="bottom1">余额抵扣</span><span class="bottom2" style="font-size:12px">-￥62.00</span>
        </div>
        <hr>
        <div class="bottom">
            <span class="bottom1">现金支付</span><span class="bottom2" style="font-size:12px">￥100.00</span>
        </div>
        <hr>
        <div class="bottom">
            <span class="bottom1">实付金额</span><span class="bottom2" style="font-size:12px">￥100.00</span>
        </div>
        <hr>
        <div class="bottom">
            <span class="bottom1">备注</span><span class="bottom2" style="font-size:12px">张三费用充值1000元</span>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.commit("setTitle","消费记录")
    }
}
</script>

<style lang="scss" scoped>
.top1{
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius:50% ;
    margin: 0 auto;
}
.top2{
    width: 100%;
    height: 30px;
    background: rgb(245, 245, 245);
}
.top2-2{
    float: left;
    line-height: 30px;
}
.bottom{
    width: 100%;
    height: 20px;
    margin-top: 5px;
}
.bottom1{
    float: left;
    line-height: 20px;
    font-size: 14px;
}
.bottom2{
    float: right;
    line-height: 20px;
}
</style>