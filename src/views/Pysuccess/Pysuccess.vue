<template>
    <div class="t1">
        <div class="t2">
         <van-icon name="checked" class="t2-1" size="80" color="rgb(0, 204, 102)"/>
        </div>
        <div class="t3">
            <h2>订单支付成功</h2>
            <h6>感谢您的购买，我们会尽快处理此订单</h6>
        </div>

        <div class="t4">
            <button class="b1">查看订单</button><br>
            <button class="b2" @click="togo">返回首页</button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
    data(){
        return{
        }
    },
    methods:{
        togo(){
            this.$router.push('/goodslist')
        }
    },
    created(){
        this.$store.commit("setTitle","支付成功")
    }
}
</script>

<style lang="scss" scoped>
.t1{
    width: 90%;
    height: 100%;
   background: rgb(245, 245, 245);
    margin: 0 auto;
    position: relative;
}
.t2{
    width: 80px;
    height: 80px;
    border: 1px solid black;
    border-radius: 50%;
    left: 35%;
    position: absolute;
    top: 70px;
}
.t3{
    position: absolute;
    top:160px ;
    left: 20%;
}
.t4{
    position: absolute;
    top:280px ;
    left: 5%;
}
.b1{
    width: 260px;
    height: 30px;
    background: rgb(0, 204, 102);
    border: none;
}
.b2{
    margin-top:5px ;
    width: 260px;
    height: 30px;
}
</style>