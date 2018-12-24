<template>
    <div class="container">
        <div class="top">
            <div class="left">
                <img :src="data.avatar">
            </div>
            <div class="center">
                <div>
                    <p class="title"><img src="../../assets/imgs/brand@2x.png">{{data.name}}</p>
                    <p class="dispatching">{{data.description}}/{{data.deliveryTime}}分钟送达</p>
                    <!-- <p class="sales">{{data.supports[0].description}}</p> -->
                </div>
            </div>
            <div class="rigth">
                <Button shape="circle">{{data.deliveryPrice}}个></Button>
            </div>
        </div>
        <div class="bottom">
            <p>
                <img src="../../assets/imgs/bulletin@2x.png"/>
               nhjkshdjkahdjkhasjdkhsajkdhasjkdhjkashdjkashdkjsahdjkashdjkashdkjashdjahsdkhak
            </p>
        </div>
    </div>
</template>

<script>
    
    import {getSellData} from '../../api/sellApi.js'
    export default {
        data(){
            return{
                data:{}
            }
        },
        async created(){
           let res = await getSellData();
           this.data = res.data.data;
        }
    }
    
</script>

<style scoped lang="less">
    .container{
        color:rgba(255, 255, 255);
        height: 134px;
        .top{
            height: 106px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: rgba(7, 17, 27, 0.5);
            padding:24px 12px 18px 24px;
            .left{
                img{
                    width: 64px;
                    height: 64px;
                }
            }
            .center{
                .title{
                    font-size: 16px;
                   
                    font-weight: bold;
                    line-height: 36px;
                    img{
                        width:24px;
                        height: 16px;
                    }
                }
                .dispatching{
                    font-size: 12px;
                    font-weight: 200;
                    line-height: 12px;
                }
                .sales{
                    font-size:10px;
                    font-weight: 200;
                    line-height: 12px;
                }
            }
            .rigth{
                position: relative;
                Button{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.2);
                    border: none;
                     color:rgba(255, 255, 255);
                }
            }
        }
        .bottom{
            width: 100%;
            height:28px;
            background-color:rgba(7, 17, 27, 0.4);
            
            font-size: 12px;
            line-height: 28px;
            font-weight: 200;
            img{
                width: 24px;
                height: 16px;
            }
            p{

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap ;
            }
        }
    }
</style>