<template>
  <div class="main">
    <div class="thetop" style="border: 1px solid #ccc">
      <div class="mysugg">
        <span style="margin-left: 20px; font-size: 14px"
          >我提交的建议
          <van-tag type="primary" style="margin-left: 80px">三</van-tag>
        </span>
      </div>
      <div class="mytxt">
        2020-12-28 20:18:23 Aenean euismod bibendum laoreet. Proin gravida dolor
        sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
        sic tempor. Sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate,
        felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
      </div>
      <div class="mysugg">
        <span style="margin-left: 20px; font-size: 14px; color: red"
          >管理员的回复：
        </span>
      </div>
      <div class="mytxt">
        2019-10-29 13:23:17 ulvinar sic tempor. Sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,
        nulla luctus pharetra vulputate, fe
      </div>
    </div>
    <div>
      <van-field
        v-model="value"
        label="姓名"
        placeholder="请输入姓名"
        input-align="right"
      />
      <van-field
        v-model="value"
        label="手机号"
        placeholder="请输入手机号"
        input-align="right"
      />
      <!-- 弹出层 -->
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="类型"
        placeholder="请选择类型"
        @click="show = true"
      />
      <van-popup v-model="show" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择类型"
          :options="options"
          @close="show = false"
          @finish="onFinish"
          text-align="right"
        />
      </van-popup>
      <!-- 留言 -->
      <div style="border-bottom:1px solid #ccc">
           <van-field
        rows="2"
        autosize
        label="内容"
        type="textarea"
        maxlength="50"
        placeholder="请输入内容"
        input-align="right"
        show-word-limit

      />
      </div>
     
    </div>
    <div style="margin-top:20px">
       <van-button type="info" size="large" @click="success()">提交</van-button> 
    </div>
    
  </div>
</template>
<script>
import Vue from "vue";
import { Tag, Field, Cascader , Button , Toast} from "vant";


Vue.use(Toast);
Vue.use(Button);
Vue.use(Cascader);
Vue.use(Field);
Vue.use(Tag);

export default {
  data: function () {
    return {
      show: false,
      value: "",

      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '投诉',
          value: '330000',
          
        },
        {
          text: '建议',
          value: '320000',
         
        },
      ],
    };
  },
  methods: {
      onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
    },
    success(){
        Toast.success('信息已提交');
        setTimeout(() => {
            this.$router.push('/vipmenber')
        }, 1000);
    }
  },
  created() {
    this.$store.commit("setTitle", "投诉建议");
    this.$store.commit("showFooter", false);
  },
  destroyed(){
      this.$store.commit('showFooter',true)
  } 
};
</script>
<style lang="scss" scoped>
.main {
  margin-top: 50px;
  margin-bottom: 50px;
}
.mytxt {
  color: #a1a1a1;
  font-size: 13px;
  text-align: left;
  margin: 5px 20px;
}
</style>