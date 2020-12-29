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
      }
    ],
  },


  mutations: {
   
    setTitle(state, title) {
      state.title = title;

    },
    insertAddress(state, address) {
      console.log(state.address);
      state.address.push(address);
      window.localStorage.setItem('address', JSON.stringify(state.address));
    },
    showFooter(state,bool){
      state.showFooter=bool;
    },
// 修改个人信息方法=========================================
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
// ====================================================

// 修改收货地址方法================================================================
    setAddrName(state,arg){
      let index=parseInt(arg[0])

      state.address[index].name=arg[1];
    },
    setAddrTel(state,arg){
      let index=parseInt(arg[0])
      state.address[index].tel=arg[1];
    },
    setAddrAddress(state,arg){
      let index=parseInt(arg[0])
      state.address[index].address=arg[1];
    },
  
    //删除一个收货地址
    delAddr(state,index){
      state.address.splice(index,1);
    }


// ===============================================================================

    
  },

  actions: {
  },
  modules: {
  }

})
