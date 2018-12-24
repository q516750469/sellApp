<template>
    <div id="content">
        <div class="btn">
            <Button class="blues" type="primary">全部<i>57</i></Button>
            <Button class="skyBlues" type="info">满意<i>47</i></Button>
            <Button class="gray">不满意<i>10</i></Button>
        </div>

        <div class="look">
            <i>√</i>
            <span>只看有内容的评论</span>
        </div>

        <div class="comment">
            <div class="customer">
                <div class="photo">
                    <img src="" alt="">
                </div>
                <div class="other">
                    <div>
                        <span>聚***家</span>
                        <span>2016-07-13 20:33</span>
                    </div>

                    <div>
                        <label>
                            <img src="../../assets/imgs/star24_on@2x.png" alt="">
                            <img src="../../assets/imgs/star24_on@2x.png" alt="">
                            <img src="../../assets/imgs/star24_on@2x.png" alt="">
                            <img src="../../assets/imgs/star24_on@2x.png" alt="">
                            <img src="../../assets/imgs/star24_off@2x.png" alt="">
                        </label>
                        <span>80分钟送达</span>
                    </div>

                    <div>
                        油条凉了，而且没有酱。75分钟才到。很慢。送餐员态度不错，但毕竟好晚了啊。
                    </div>
                    
                    <div>
                        <span>大王香菇卤肉饭</span>
                        <span>大王香菇卤肉饭</span>
                        <span>大王香菇卤肉饭</span>
                    </div>
                </div>
            </div>

            <div class="customer">
                <div class="photo">
                    <img src="" alt="">
                </div>
                <div class="other">
                    <div>
                        <span>谭***0</span>
                        <span>2016-07-13 20:22</span>
                    </div>

                    <div>
                        <label>
                            <img src="../../assets/imgs/star24_on@2x.png" alt="">
                            <img src="../../assets/imgs/star24_on@2x.png" alt="">
                            <img src="../../assets/imgs/star24_on@2x.png" alt="">
                            <img src="../../assets/imgs/star24_on@2x.png" alt="">
                            <img src="../../assets/imgs/star24_off@2x.png" alt="">
                        </label>
                        <span>60分钟送达</span>
                    </div>

                    <div>
                        这次太慢了，下次希望能直接和客户沟通而不是我一次次打电话问，但快递师傅态度很好。
                    </div>
                    
                    <div>
                        <span>大王香菇卤肉饭</span>
                    </div>
                </div>
            </div>

            <div class="customer">
                <div class="photo">
                    <img src="" alt="">
                </div>
                <div class="other">
                    <div>
                        <span>叽************</span>
                        <span>2016-07-13 20:33</span>
                    </div>

                    <div>
                        <label>
                            <img src="../../assets/imgs/star24_on@2x.png" alt="">
                            <img src="../../assets/imgs/star24_off@2x.png" alt="">
                            <img src="../../assets/imgs/star24_off@2x.png" alt="">
                            <img src="../../assets/imgs/star24_off@2x.png" alt="">
                            <img src="../../assets/imgs/star24_off@2x.png" alt="">
                        </label>
                        <span>40分钟送达</span>
                    </div>

                    <div>
                        我要求18点40送达，结果提前了45分钟，家里没人。
                    </div>
                    
                    <div>
                        <span>大王香菇卤肉饭</span>
                        <span>大王香菇卤肉饭</span>
                        <span>大王香菇卤肉饭</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="less">

    #content{
        margin-top: 20px;
        border-top: 1px solid #ccc;
        background: #fff;
        overflow: auto;
        .btn{
            margin: 0 16px;
            padding: 16px 0;
            border-bottom: 1px solid rgb(216, 213, 213);
            Button{
                margin-right: 5px;
                font-size: 14px;
                i{
                    font-style: normal;
                    margin-left: 5px;
                    font-size: 10px;
                }
            }
            .blues{
                border-radius: 0;
                color: #fff;
                font-weight: 600;
            }
            .skyBlues{
                background: #cceef7;
                border: #cceef7 1px solid;
                border-radius: 0;
                color: #000;
            }
            .gray{
                background: #ccc;
                border-radius: 0;
                color: #000;
            }
        }

        .look{
            margin: 0 16px;
            padding: 16px 0;
            i{
                width: 20px;
                height: 20px;
                background: #ccc;
                display: inline-block;
                border-radius: 50%;
                color:#fff;
                font-weight: bold;
                text-align: center;
                line-height: 23px;
                vertical-align: middle;
                font-size: 16px;
            }
            span{
                font-size: 16px;
                vertical-align: middle;
                margin-left: 5px;
                color:rgb(141, 138, 138);
            }
        }

        .comment{
            width: 100%;
            border-top: 1px solid #ccc;
            .customer{
                width: 92%;
                margin: 0 16px;
                padding: 16px 0;
                display: flex;
                border-bottom: 1px solid #ccc;
                .photo{
                    width: 12%;
                    margin-right: 5px;
                    img{
                        width: 40px;
                        height: 40px;
                        display: inline-block;
                        border-radius: 50%;
                        border:1px solid #000;
                    }
                }
                .other{
                    width: 88%;
                    div{
                        margin-bottom: 5px;
                        &:nth-of-type(1){
                            display: flex;
                            justify-content: space-between;
                        }
                        &:nth-of-type(2){
                            label{
                                img{
                                    width: 12px;
                                    height: 12px;
                                    margin-right: 5px;
                                }
                            }
                        }
                        &:nth-of-type(3){
                            font-size: 14px;
                            font-weight: 600;
                            color: rgb(29, 28, 28);
                        }
                        &:nth-of-type(4){
                            span{
                                width: 80px;
                                height: 20px;
                                border: 1px solid #ccc;
                                text-align: center;
                                margin-right: 5px;
                                color: rgb(207, 201, 201);
                                display: inline-block;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }
            }
        }
    }

</style>