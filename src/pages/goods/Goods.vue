<template>
    <div>
        <div class="goods">
            <div class="leftNav">
                <ul class="content">
                    <li v-for="(item,index) in data" @click="clickScroll(index)" :class="{ li: true , selected: curSelectedIndex == index }" >
                        <span>{{item.name}}</span> 
                    </li>
                </ul>
            </div>
            <div class="rightGoods">
                <div>
                    <goods-item :id="index" v-for="(item,index) in data" :item="item"></goods-item>
                </div>
            </div>
        </div>
        <div class="shopCar">
            <shop-car></shop-car>
        </div>
    </div>
</template>

<script>

    import BScroll from 'better-scroll'

    import GoodsItem from './Goods-item'
    import shopCar from './Goods-shopCar'
    export default {
        data(){
            return {
                scrollLeft: undefined,     //左侧滚动组件
                scrollRight: undefined,     //右侧滚动组件
                curSelectedIndex: 0, //默认选中左侧第一个标签
                isshow:false,
            }
        },
        computed:{
            // 商品列表
            data(){
                return this.$store.state.list;
            }
        },
        async created(){
            this.$store.dispatch('ainitFoodsData')
        },
        mounted(){
            // 左侧
            let wrapperLeft = document.querySelector('.leftNav');
            let scrollLeft = new BScroll(wrapperLeft,{
                click:true
            });
            this.scrollLeft = scrollLeft;
            // 右侧
             let wrapperRight = document.querySelector('.rightGoods');
            let srcollRight = new BScroll(wrapperRight);
            this.scrollRight = srcollRight;
        },
        methods:{
            clickScroll(index){
                this.isshow=true;
                let domEl = document.getElementById(index)
                // 滚动到指定目标元素
                this.scrollRight.scrollToElement(domEl,500)
                
                // 设置当前选中标签的索引
                this.curSelectedIndex = index
            }
        },
        components:{
            GoodsItem,
            shopCar
        }
    }
</script>

<style scoped lang="less">
    .goods{
        display:flex;
        flex-direction: row;
        .leftNav{
            width: 20%;
                height:500px;
                overflow: auto;
                border: 1px solid #d9dde1;
            .content{
                background-color: #f3f5f7;
                list-style: none;
                li{
                    display: flex;
                    align-items: center;
                    height:70px;
                    font-size: 12px;
                    color:#07111b;
                    padding: 0 10px;
                    border-bottom: 1px #dbdee1 solid;
                    
                    .active{
                        background-color: #fff;
                        color:#07111b;
                        font-weight: bold;
                    }
                    
                }
            }
            .selected{
                background-color: #fff;
                color:#07111b;
                font-weight: bold;
            }
        }
        .rightGoods{
            height:500px;
            width: 80%;
            overflow: auto;
            border:1px solid rgba(7, 17, 27, 0.1);
        }
    };
    .shopCar{
        height: 60px;
        width: 100%;
        position: fixed;
        bottom: 0;
         background-color: #131d27;
    }
</style>