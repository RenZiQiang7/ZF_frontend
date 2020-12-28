<template>
    <div >
         <van-cell title="头像" is-link />
        <van-cell is-link title="昵称" @click="gocname" :value="$store.state.personalInfo.nickName"/>
         <van-cell is-link title="姓名" @click="goname" :value="$store.state.personalInfo.name"/>
        <van-cell is-link title="性别" @click="show = true" :value="$store.state.personalInfo.gender==1?'男':'女'"/>
<van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        <van-cell is-link title="手机" @click="gomoble" :value="$store.state.personalInfo.mobile"/>

    </div>
</template>
<script>
import Vue from 'vue';
import { ActionSheet,Toast,Calendar } from 'vant';

Vue.use(ActionSheet);
Vue.use(Toast);
Vue.use(Calendar);

import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
export default {
    data() {
    return {
      show: false,
      actions: [{ name: '男' }, { name: '女' }, { name: '取消' }],
      personalInfo:{},
      
    };
  },

  created(){
   this.$store.commit("setTitle","修改个人信息")
   this.personalInfo=this.$store.state.personalInfo;
   this.personalInfo.gender=this.personalInfo.gender===0?"女":"男";
  },
  methods: {
    onSelect(item) {
      this.show = false;
  
      this.$store.commit('setGender',item.name=="男"?1:0)

    },
    goname(){
        this.$router.push("/name")
    },
    gocname(){
        this.$router.push("/nickname")
    },
    gomoble(){
        this.$router.push("/moble")
    }
  },

}
</script>
<style lang="scss" scoped>
.main{
    margin-bottom: 50px;
    margin-top: 50px;
}
</style>