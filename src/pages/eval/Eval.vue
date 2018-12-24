<template>
    <div id="Eval">
        <eval-top></eval-top>
        <eval-content></eval-content>
    </div>
</template>

<script>
    import EvalTop from "./Eval-top.vue";
    import EvalContent from "./Eval-content.vue";

    export default {
        components:{
            EvalTop,
            EvalContent
        }
    }
</script>

<style scoped lang="less">

    #Eval{
        background: #f3f6f6;
    }

</style>