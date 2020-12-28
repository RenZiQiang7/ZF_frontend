<template>
    <div class="k">
        <div class="k1">
        姓名：<input type="text" placeholder="请输入你要修改的姓名" v-model="name">
        </div>
        <button @click="save()"> 保存修改</button>
    </div>
</template>

<script>
export default {
     data:function(){
        return{
            name:"",
        }
    },
    created(){
        this.$store.commit("setTitle","设置姓名")
   
    },
     methods:{
        save(){
            this.$store.commit('setName',this.name);
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