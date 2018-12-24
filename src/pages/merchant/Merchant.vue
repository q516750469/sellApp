<template>
    <div class="merchant">
        <merchant-top></merchant-top>
        <merchant-content></merchant-content>
    </div>
</template>

<script>
    import MerchantTop from "./Merchant-top.vue"
    import MerchantContent from "./Merchant-content.vue"
    export default {
        components:{
            MerchantTop,
            MerchantContent
        }
    }
</script>

<style scoped lang="less">

.merchant{
    background: #ccc;
}

</style>