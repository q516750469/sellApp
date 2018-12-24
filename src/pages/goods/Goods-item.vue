<template>
    <div class="good-item">
        <div class="goodsName">{{item.name}}</div>
        <ul v-for="value in item.foods">
            <li>
                <img :src="value.icon">
                <div>
                    <h3>{{value.name}}</h3>
                    <p>{{value.description}}</p>
                    <p><span>月售{{value.sellCount}}</span>&emsp;<span>好评率{{value.rating}}%</span></p>
                    <p>￥{{value.price}}</p>
                </div>
                <div class="numBtn">
                    <Button shape="circle" v-if="value.num>0" @click="numDec(value)">-</Button>
                    <span v-if="value.num>0">{{value.num}}</span>
                    <Button shape="circle" @click="numAdd(value)">+</Button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:["item"],
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
            }
        }
    }
</script>

<style scoped lang="less">
    .good-item{
        .goodsName{
            text-indent: 12px;
            background-color: #f3f5f7;
            font-size: 14px;
            color: #93999f;
        }
        ul{
            overflow: auto;
            padding: 10px;
            li{
                position: relative;
                display: flex;
                flex-direction: row;
                border-bottom:1px solid rgba(7, 17, 27, 0.1);
                padding-bottom: 10px;
                img{
                    width: 100px;
                    height: 100px;
                }
                .numBtn{
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
        }
    }
</style>