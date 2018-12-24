<template>
    <div class="top">
        <div class="star">
            <div>3.9</div>
            <div>综合评分</div>
            <div>高于周边商家69.2%</div>
        </div>
        <div class="score">
            <div>
                <span>服务态度</span>
                <label>
                    <img src="../../assets/imgs/star24_on@2x.png" alt="">
                    <img src="../../assets/imgs/star24_on@2x.png" alt="">
                    <img src="../../assets/imgs/star24_on@2x.png" alt="">
                    <img src="../../assets/imgs/star24_on@2x.png" alt="">
                    <img src="../../assets/imgs/star24_off@2x.png" alt="">
                </label>
                <b>3.9</b>
            </div>
            <div>
                <span>服务质量</span>
                <label>
                    <img src="../../assets/imgs/star24_on@2x.png" alt="">
                    <img src="../../assets/imgs/star24_on@2x.png" alt="">
                    <img src="../../assets/imgs/star24_on@2x.png" alt="">
                    <img src="../../assets/imgs/star24_on@2x.png" alt="">
                    <img src="../../assets/imgs/star24_off@2x.png" alt="">
                </label>
                <b>4.0</b>
            </div>
            <div>
                <span>送达时间</span>
                <label>44分钟</label>
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
        width: 100%;
        display: flex;
        background: #fff;
        border-bottom: 1px solid #ccc;
        .star{
            width: 35%;
            text-align: center;
            margin: 10px 0;
            border-right: 1px solid rgb(223, 220, 220);
            div{
                &:nth-of-type(1){
                    font-size: 30px;
                    color: #f29a00;
                }
                &:nth-of-type(2){
                    font-size: 16px;
                    color: #000;
                    padding-bottom: 5px;
                }
                &:nth-of-type(3){
                    font-size: 12px;
                    color:#90989d;
                }
            }
        }
        .score{
            width: 65%;
            margin: 10px 0 10px 15px;
            div{
                line-height: 30px;
                span{
                    font-size: 16px;
                    color: #000;
                    font-weight: 600;
                }

                label{
                    margin-left: 10px;
                    font-size: 16px;
                    color: #90989d;
                    vertical-align: middle;
                    font-weight: 500;
                    img{
                        margin-right: 3px;
                    }
                }
                b{
                    font-size: 16px;
                    font-weight: normal;
                    color: #f29a00;
                    margin-left: 5px;
                }
            }
        }
    }

</style>