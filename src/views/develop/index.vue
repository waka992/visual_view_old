<template>
    <div>
        <BackGround />
        <Header title="发展历程"/>

        <div class="body">
        <div class="aside left" >
                <div class="intro" style="margin-bottom: 30px;" >
                    <div class="title">
                        <div class="text">概况</div>
                    </div>
                    <div class="desc" style="height: 24.5vh;">
                        广东粤汇金属交易中心，是佛山市唯一一家规范保留类的大宗商品现货交易场所。一直秉承“立足产业，服务实体”的理念，通过“产业+金融”的模式，为南海有色金属贸易从铺位经济转向席位经济、实现有色金属产业升级服务。
                    </div>
                </div>

                <div class="item-title" style="margin-bottom: 30px;" @click="$router.push({ path: '/base', })">产业基础</div>

                <div>
                    <div class="aside-title">
                        <div class="text">第三产业GDP占比</div>
                    </div>
                    <div class="desc" style="height: 34vh">
                        <GDPPie :year="tradeYear"/>
                        <div class="gdp-desc">
                            交易中心2021年交易额
                            占佛山第三产业GDP的<span class="gdp-hl">20%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main">
                <div class="main-content"></div>
                <FoshanMap ref="abc2" :height="'800px'" />
            </div>

            <div class="aside right">
                <div style="margin-bottom: 40px;">
                    <div class="aside-title" style="margin-top: 20px;">
                        <div class="text">年度交易额</div>
                    </div>
                    <div class="desc" style="height: 35vh">
                        <DevBarTick />
                    </div>
                </div>
                <div>
                    <div class="aside-title" style="margin-top: 20px;">
                        <div class="text">会员数量</div>
                    </div>
                    <div class="desc" style="height: 35vh">
                        <DevBarTick2 />
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import BackGround from '@/components/BackGround2'
    import ChinaMap from "./components/ChinaMap.vue";
    import Pie from "./components/DatasPie.vue";
    import DevBarTick from "./components/DevBarTick.vue";
    import DevBarTick2 from "./components/DevBarTick2.vue";
    import GDPPie from "./components/GDPPie.vue";
    import ReserveMap from "@/views/industry-chain/components/ReserveMap.vue";
    import ProductionBar from "@/views/industry-chain/components/ProductionBar.vue";
    import FoshanMap from "./components/FoshanMap";

    import { currentVolume } from "@/api/transaction";

    export default {
        name: 'Develop',
        components: {
            Header, 
            BackGround,
            ChinaMap,
            Pie,
            DevBarTick,
            DevBarTick2,
            GDPPie,
            ReserveMap,
            ProductionBar,
            FoshanMap,
        },

        created() {
            this.tradeYear = new Date().getFullYear();
            this.getCurrentVolume();
        },

        data() {
            return {
                tradeYear: String,
                currentTradeTotal: 0,
            };
        },

        methods: {
            getCurrentVolume() {
                currentVolume()
                .then(res => {
                    if (res.code === 1000) { 
                        this.currentTradeTotal = res.data.total_amount;
                    }
                })
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    $white: #fff;
    $blue: #00294d;
    $yellow: #fec979;
    $blue1: #a9d7f9;

    * { padding: 0; margin: 0;}
    .main-title,.text,.icon {
        user-select: none;
    }

    .body {
        padding: 20px;
        display: flex;
        flex-direction: row;
        color: $white;
        position: relative;


        .main {
            height: 85vh;
            width: 44vw;
            margin: 0 20px;
            position: relative;
        }

        .main-title {
            background-image: url("~@/assets/images/exchangedata/jiaoyishujukuang.png");
            background-size: 100% 100%;
            width: 100%;
            height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 34px;
            color: #FFFFFF;
            font-weight: bold;

            span {
                vertical-align: bottom;
                font-size: 67px;
                color:  #FEC979;
            }
        } 

        .main-content {
            z-index: -1;
            background-image: url("~@/assets/images/exchangedata/earth.png");
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            opacity: 0.4;

            position: absolute;
            top: 15%;
            left: 10%;
            height: 80%;
            width: 80%;
        }

        .aside-title {
            background: $blue;
            .text {
                background-image: url("~@/assets/images/exchangedata/faguang-zhuangshi.png");
                background-size: 100% 100%;
                background-position: center;
                background-repeat: no-repeat;
                box-sizing: border-box;
                text-align: center;
                height: 36px;
                line-height: 34px;
                font-size: 24px;
            }
        }

        .aside {
            width: 34vw;
            margin: 10px 40px;
            .desc {
                position: relative;
                background: $blue;  
                padding: 20px;
                line-height: 40px;
                letter-spacing: 2px;
                font-size: 16px;
                background-image: url("~@/assets/images/exchangedata/faguangzhuangshijiao.png");
                background-size: 100%;
                background-repeat:no-repeat;
                background-position:left bottom;            
            }
        }

        .aside-right-content {
            padding: 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .icon{
                display:inline-block;
                vertical-align: middle;
                height: 40px;
                width: 40px;
            }
            .text {
                margin-left: 8px;
                font-size: 18px;
            }
        } 
    }
    .gdp-desc {
        position: absolute;
        right: 0;
        top: 30%;
        white-space: pre-wrap;
        font-size: 15px;
        color: #fff;
        width: 380px;
        letter-spacing: 2px;
        text-align: justify;
    }
    .gdp-hl {
        color: #E3BE48;
    }
    .intro {
        margin-top: 20px;
        .title {
            // border-left: 5px solid $yellow;
            background: $blue;
            .text {
                background-image: url("/static/images/bg-title1.png");
                background-size: 100% 100%;
                background-position: center;
                background-repeat: no-repeat;
                box-sizing: border-box;
                text-align: center;
                height: 40px;
                line-height: 40px;
                font-size: 24px;
                color: #fff;
                letter-spacing: 5px;
            }
        }
        .desc {
            background: $blue;
            padding: 30px 60px !important;
            box-sizing: border-box;
            text-align: justify;
        }
    }
        .item-title {
            display: inline-block;
            width: 100%;
            background-image: url("/static/images/corporatestyle/title-arrow.png");
            background-size: contain;
            background-repeat: no-repeat;
            text-align: center;
            height: 98px;
            font-size: 25px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #e5e4eb;
            line-height: 98px;
            letter-spacing: 5px;
        }
</style>