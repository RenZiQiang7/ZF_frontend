<template>
    <div class="k">
        <div class="k1">
        手机号：<input type="text" placeholder="请输入你要修改的手机号">
        </div>
        <button>保存修改</button>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.commit("setTitle","设置手机号")
    }
}
</script>
<style lang="scss" scoped>
.k{
    position: relative;
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