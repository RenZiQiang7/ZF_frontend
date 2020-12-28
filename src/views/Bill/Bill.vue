<template>
    <div class="main">
        <div class="top">
        <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1"/>
</van-dropdown-menu>
        </div>

        <div class="top1">
         <van-cell title="2020-12-28" :value="date" @click="show = true" class="top1-1"/>
<van-calendar v-model="show" @confirm="onConfirm" />
    <span class="top1-2">消费：￥1103.00</span> <span class="top1-3">充值：100.00</span>
        </div>
        <div class="bottom">
           <div>
               <span class="bottom1">消费</span><span class="bottom2">-100.00</span>
               <br>
               <span style="font-size:12px">2020-12-28 9:07</span>
           </div>
           <hr>
             <div>
               <span class="bottom1">充值</span><span class="bottom2" style="color:orange">+203.00</span>
               <br>
               <span style="font-size:12px">2020-12-28 9:07</span>
           </div>
           <hr>
            <div>
               <span class="bottom1">消费</span><span class="bottom2">-432.00</span>
               <br>
               <span style="font-size:12px">2020-12-28 9:07</span>
           </div>
           <hr>
            <div>
               <span class="bottom1">消费</span><span class="bottom2">-666.00</span>
               <br>
               <span style="font-size:12px">2020-12-28 9:07</span>
           </div>
           <hr>
           <div>
               <span class="bottom1">充值</span><span class="bottom2" style="color:orange">+666.00</span>
               <br>
               <span style="font-size:12px">2020-12-28 9:07</span>
           </div>
           <hr>
        </div>
          
        <div>
            <van-loading type="spinner" color="#1989fa" size="14"/><br>
            <span style="font-size:12px">暂无更多数据</span>
        </div>

    </div>
</template>

<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
import { Calendar } from 'vant';

Vue.use(Calendar);

import { Loading } from 'vant';

Vue.use(Loading);
export default {
    data() {
    return {
      value1: 0,
      option1: [
        { text: '全部', value: 0 },
        { text: '消费', value: 1 },
        { text: '充值', value: 2 },
      ],
       date: '',
      show: false,
    };
  },
  created(){
  this.$store.commit("setTitle","消费信息")
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
}
</script>

<style lang="scss" scoped>
.main{
  margin-top: 50px;
  margin-bottom: 50px;
}
.top{
    width: 100%;
    height: 30px;
    background: rgb(245, 245, 245);
    
}
.top1{
    width: 100%;
    height: 60px;
    background: rgb(245, 245, 245);
}
.top1-1{
    background: rgb(245, 245, 245);
    font-size: 16px;
}
.top1-2{
    font-size: 12px;
}
.top1-3{
    font-size: 12px;
    margin-left: 20px;
}
.bottom1{
float: left;
margin-top: 5px;
margin-left: 5px;
}
.bottom2{
float: right;
margin-top: 5px;
margin-right: 5px;
}
</style>