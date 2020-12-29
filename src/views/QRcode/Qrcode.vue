<template>
    <div >
        
    </div>
</template>
<script>
export default {
    created(){
        this.$store.commit('setTitle',"支付");
        this.$store.commit('showFooter',false);
    },
    destroyed(){
        this.$store.commit('showFooter',true);
    }
}
</script>