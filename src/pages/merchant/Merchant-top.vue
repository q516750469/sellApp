<template>
    <div class="top">
        <div class="topTitle">
            <div>
                <div>粥品香坊（大运村）</div>
                <div>
                    <label>
                        <img src="../../assets/imgs/star24_on@2x.png" alt="">
                        <img src="../../assets/imgs/star24_on@2x.png" alt="">
                        <img src="../../assets/imgs/star24_on@2x.png" alt="">
                        <img src="../../assets/imgs/star24_on@2x.png" alt="">
                        <img src="../../assets/imgs/star24_off@2x.png" alt="">
                    </label>
                    <span>(661) 月售690单</span>
                </div>
            </div>
            <div>
                <img src="../../assets/imgs/heart.png" alt="" width="36px" height="28px">
                <span>已收藏</span>
            </div>
        </div>
        
        <div class="price">
            <div>
                <span>起送价</span>
                <b>20<span>元</span></b>
            </div>

            <div>
                <span>商家配送</span>
                <b>4<span>元</span></b>
            </div>

            <div>
                <span>平均配送时间</span>
                <b>39<span>分钟</span></b>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="less">

.top{
    border-bottom: 1px solid rgb(129, 129, 129);
    background: #fff;
    margin-bottom: 20px;
    .topTitle{
        margin:0 16px;
        padding: 16px 0;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        &>div{
            &:nth-of-type(1){
                div{
                    &:nth-of-type(1){
                        font-size:20px;
                        color: #000;
                        font-weight: 600;
                        margin-bottom: 5px;
                    }
                    &:nth-of-type(2){
                        label{
                            img{
                                margin-right: 5px;
                                vertical-align: middle;
                            }
                        }
                        span{
                            vertical-align: middle;
                            font-size: 14px;
                            line-height: 16px;
                        }
                    }
                }
            }


            &:nth-of-type(2){
                display: flex;
                flex-direction: column;
                text-align: center;
                img{
                    margin-bottom: 5px;
                }
            }
            
        }
    }

    .price{
        display: flex;
        div{
            margin: 30px 0;
            width: 33%;
            display: flex;
            flex-direction: column;
            text-align: center;
            border-right: 1px solid #ccc;
            &:last-of-type{
                border: none;
            }
            &>span{
                font-size: 16px;
            }
            &>b{
                font-size: 28px;
                font-weight: normal;
                color: #000;
                &>span{
                    font-size: 10px;
                }
            }
        }
    }
}

</style>