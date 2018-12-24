<template>
    <div class="content">

        <div class="activity">
            <div class="notice">
                <div class="brief">
                    <h2>公告与活动</h2>
                    <span>
                        粥品香坊其烹饪粥料的秘方源于中国千年古法,在融和现代制作工艺,由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐,发展至今成为粥类引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
                    </span>
                </div>

                <div class="special">
                    <img src="../../assets/imgs/decrease_3@2x.png" alt="">
                    <span>在线支付满28减5,满50减10</span>
                </div>

                <div class="special">
                    <img src="../../assets/imgs/discount_3@2x.png" alt="">
                    <span>单人精彩赛</span>
                </div>

                <div class="special">
                    <img src="../../assets/imgs/discount_3@2x.png" alt="">
                    <span>清肺雪梨汤8折抢购</span>
                </div>

                <div class="special">
                    <img src="../../assets/imgs/special_3@2x.png" alt="">
                    <span>特价饮品八折抢购</span>
                </div>

                <div class="special">
                    <img src="../../assets/imgs/special_3@2x.png" alt="">
                    <span>单人特色套餐</span>
                </div>

                <div class="special">
                    <img src="../../assets/imgs/invoice_3@2x.png" alt="">
                    <span>该商家支持开发票,请在下单时填写好发票抬头</span>
                </div>

                <div class="special">
                    <img src="../../assets/imgs/guarantee_3@2x.png" alt="">
                    <span>已加入"外卖保"计划,食品安全保障</span>
                </div>
            </div>
        </div>

        <div class="scene">
            <h2>商家实景</h2>
            <img src="" alt="">
            <img src="" alt="">
        </div>

        <div class="information">
            <h2>商家信息</h2>
            <div>该商家支持开发票,请在下单时填写好发票抬头</div>
            <div>品类 : 其他菜系、包子粥店</div>
            <div>地址 : 北京市昌平区回龙观西大街龙观置业大厦底座B座102单元1340</div>
            <div>营业时间 : 10:00-20:30</div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="less">

.content{
    .activity{
        background: #fff;
        border-top: 1px solid rgb(129, 129, 129);
        border-bottom: 1px solid rgb(129, 129, 129);
        margin-bottom: 20px;
        .notice{
            margin: 0 16px;
            .brief{
                padding-bottom: 20px;
                border-bottom: 1px solid rgb(129, 129, 129);
                h2{
                    color: #000;
                    margin: 8px 0 4px 0;
                }
                span{
                    color: #f01411;
                    font-size: 14px;
                    padding: 0 10px;
                    display: inline-block;
                }
            }

            .special{
                border-bottom: 1px solid rgba(129, 129, 129, 0.5);
                padding: 10px 0;
                img{
                    vertical-align: middle; 
                    margin-right: 10px;
                }
                span{
                    vertical-align: middle; 
                    font-size: 16px;
                    color: #000;
                }
                &:last-of-type{
                    border-bottom:none;
                }
            }
        }
    }
    
    .scene{
        background: #fff;
        border-top: 1px solid rgb(129, 129, 129);
        border-bottom: 1px solid rgb(129, 129, 129);
        margin-bottom: 20px;
        h2{
            margin: 16px;
            color: #000;
        }
        img{
            margin: 0 0 16px 16px;
            width: 33%;
            height: 100px;
            display: inline-block;
            border:1px solid #ccc;
        }
    }

    .information{
        background: #fff;
        border-top: 1px solid rgb(129, 129, 129);
        border-bottom: 1px solid rgb(129, 129, 129);
        margin-bottom: 20px;
        h2{
            margin: 0 16px;
            padding: 16px 0;
            color: #000;
            border-bottom: 1px solid rgba(129, 129, 129, 0.5);
        }
        div{
            margin: 0 16px;
            padding: 16px 0;
            color: #000;
            border-bottom: 1px solid rgba(129, 129, 129, 0.5);
            font-size: 16px;
            padding-left: 10px;
            &:last-of-type{
                border-bottom:none;
            }
        }
    }
}

</style>