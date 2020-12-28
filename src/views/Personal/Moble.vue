<template>
    <div class="k">
        <div class="k1">
        手机号：<input type="text" placeholder="请输入你要修改的手机号" v-model="mobile">
        </div>
        <button @click="save()">保存修改</button>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            mobile:"",
        }
    },
    created(){
        this.$store.commit("setTitle","设置手机号")
    },
    methods:{
        save(){
            this.$store.commit('setMobile',this.mobile);
            this.$router.push('/personal')
        }
    }
}
</script>
<style lang="scss" scoped>
.k{
    position: relative;
    margin-top: 50px;
    margin-bottom: 50px;
}
.k1{
    margin-top: 10px;
    margin-left: 10px;

}

button{
    
   width: 150px;
    height: 40px;
    outline: none;
    border: none;
    background:  #1890ff;
    color: #f4f4ff;
    position: absolute;
    top: 50px;
    left: 25%;

}
</style>