import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personalInfo:{
      nickName:"菲菲",
      name:"卢大炮",
      gender:0,
      mobile:18512345678
    },
    showFooter:"true",
    title: "首页",
    defaultAddress: {
      id: '1',
      name: '张三',
      tel: '13000000000',
      address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
      isDefault: true,
    },
    address: [
      {
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true,
      },
      {
        id: '2',
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
      },
    ],
  },


  mutations: {
   
    setTitle(state, title) {
      state.title = title;

    },
    insertAddress(state, address) {
      state.address.push(address);
      window.localStorage.setItem('address', JSON.stringify(state.address));
    },
    showFooter(state,bool){
      state.showFooter=bool;
    },

    setNickName(state,nickName){
      state.personalInfo.nickName=nickName;
    },
    setName(state,name){
      state.personalInfo.name=name;
    },
    setGender(state,gender){
      state.personalInfo.gender=gender;
    },
    setMobile(state,mobile){
      state.personalInfo.mobile=mobile;
    },
    
  },

  actions: {
  },
  modules: {
  }

})
