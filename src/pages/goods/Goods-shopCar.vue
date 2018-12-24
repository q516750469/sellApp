<template>
    <div>
        <div class="shopNav">
            <div class="circle">
                <Poptip title="购物车" content="暂无商品">
                    <Icon type="md-cart" class="icon" size="40"/>
                    <div slot="title" class="title">
                        <p>购物车</p>
                        <a @click="clearNum">清空</a>
                    </div>
                    <div class="api" slot="content" v-for="item in showdata" v-if="showdata.length>0">
                        <h6>{{item.name}}</h6>
                        <div>
                            <span class="sigPric">￥{{item.price*item.num}}</span>
                            <Button shape="circle" @click="numDec(item)">-</Button>
                            <span>{{item.num}}</span>
                            <Button shape="circle" @click="numAdd(item)">+</Button>
                        </div>
                    </div>
                </Poptip>
            </div>
            <p class="total">￥{{total}}</p>
            <p class="exPrice">另需配送费￥4元</p>
            <div class="sureBtn">
                ￥20元起送
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            numDec(data){
                this.$store.commit({
                    type:"numChange",
                    name:data.name,
                    num:-1
                })
            },
            numAdd(data){
                this.$store.commit({
                    type:"numChange",
                    name:data.name,
                    num:1
                })
            },
            clearNum(){
                this.$store.commit("clearNum")
            }
        },
        computed:{
            data(){
                return this.$store.state.list;
            },
            showdata(){
                let arr = [];
                for(let item of this.$store.state.list){
                    for(let food of item.foods){
                        if(food.num > 0)
                            arr.push(food)
                    }
                }
                return arr
            },
            total(){
                let totalPrice=0;
                for(let item of this.$store.state.list){
                    for(let food of item.foods){
                        if(food.num > 0){
                            totalPrice += food.num*food.price
                        }
                    }
                }
                return totalPrice
            }
        },
        async created(){
            this.$store.dispatch("ainitFoodsData");
        }
    }
</script>

<style scoped lang="less">
    .shopNav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .circle{
            margin: 0 20px;
            width: 50px;
            height: 50px;
            border-radius: 50px;
            background-color: #2a343c;
            text-align: center;
            line-height: 50px;
            .title{
                display: flex;
                justify-content: space-between;
            }
            .icon{
                color: #fff;
            }
            .api{
                width: 330px;
                display: flex;
                justify-content: space-between;
                h6{
                    font-size: 16px;
                    color: rgb(7, 17, 27)
                }
                .sigPric{
                    font-size: 14px;
                    color: red;
                }
                Button{
                    padding: 0 10px;
                }
            }
        }
        .total{
            color: #fff;
            font-size: 20px;
            line-height: 60px;
            padding-right: 10px;
            border-right: 1px solid #2b353f
        }
        .exPrice{
            color: #fff;
            font-size: 14px;
            line-height: 60px;
        }
        .sureBtn{
            width:25%;
            background-color: #2a353a;
            text-align: center;
            line-height: 60px;
            font-size: 14px;
            font-weight: bold;
        }
    }
</style>