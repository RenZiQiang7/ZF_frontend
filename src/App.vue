<template>
  <div>
    <Header style="position: fixed; top: 0; width: 100%">
      <div>{{ this.$store.state.title }}</div>
    </Header>
    <router-view />
    <Footer v-show="$store.state.showFooter" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  data: function () {
    return {
      data: {
        code: 100,
        data: [
        {
          orderId: 11977242,
          goods: [
            {
              id: "SN123",
              name: "银色星芒刺绣网纱底裤",
              num:1,
              price: 100,
              info:
                "这款运动内衣大身以红色山峦印花拼黑色，引人注目。采用具有超细网眼的机织尼氨面料，内衬冲孔透气填充胸垫，稳固胸型的同时更弹力透气。前胸的V字网眼搭配背部层叠设计，增强运动稳定性的同时，也帮助运动中的身体透气排汗，令性感的运动美展现无疑。",
              smallImg:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi1%2F4256687000%2FO1CN01qdqTjR21a331Z3OKA_%21%214256687000.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654950&t=e559962b53bc885397b9449f7f9f4441",
              imgHref: [
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1899343364,314244&fm=26&gp=0.jpg",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201912%2F10%2F20191210225621_hwmig.thumb.400_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611655016&t=6be67a7505fede7ca080e62190991248",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi4%2F2200801292362%2FO1CN018diH5d1TJq5HVmt5b_%21%212200801292362.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611655016&t=e6583494f928699050e72b2d6d933265",
              ],
            },
             {
              id: "SN456",
              name: "银色星芒刺绣网纱底裤",
              num:5,
              price: 200,
              info:
                "这款运动内衣大身以红色山峦印花拼黑色，引人注目。采用具有超细网眼的机织尼氨面料，内衬冲孔透气填充胸垫，稳固胸型的同时更弹力透气。前胸的V字网眼搭配背部层叠设计，增强运动稳定性的同时，也帮助运动中的身体透气排汗，令性感的运动美展现无疑。",
              smallImg:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi1%2F4256687000%2FO1CN01qdqTjR21a331Z3OKA_%21%214256687000.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611654950&t=e559962b53bc885397b9449f7f9f4441",
              imgHref: [
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1899343364,314244&fm=26&gp=0.jpg",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201912%2F10%2F20191210225621_hwmig.thumb.400_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611655016&t=6be67a7505fede7ca080e62190991248",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi4%2F2200801292362%2FO1CN018diH5d1TJq5HVmt5b_%21%212200801292362.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611655016&t=e6583494f928699050e72b2d6d933265",
              ],
            }
          ],
          orderState:"等待收货",
          address:{
            name:"张三",
            tel:"13000000000",
            address:"浙江省杭州市拱墅区莫干山路50号"
          },
          totalPay:1100,
          ticket:0,
          score:5,
          realPay:1095,
          commitTime:"2020-12-30 12:24",
          payType:"微信支付",
          payTime:"2020-12-30 12:34"
        },
      ],
        msg: "成功",
      },
    };
  },
  components: {
    Header,
    Footer,
  },
  created(){
    console.log(JSON.stringify(this.data));
  }
};
</script>
<style lang="scss">
</style>
