<template>
    <div>
        <!-- 导航条 -->
        <div class="nav-bar">
            <router-link to='/'>商品</router-link>
            <router-link to='/eval'>评价</router-link>
            <router-link to='/merchant'>商家</router-link>
        </div>
        <div>

        </div>

        <!-- 内容区域（路由容器） -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="less">
    .nav-bar{
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        height: 40px;
        line-height: 40px;
        font-size:14px; 
    }
</style>