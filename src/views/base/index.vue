<template>
  <div>
    <BackGround />
    <Header title="产业基础" />
    <div class="body">
      <img class="bg bg2" src="~@/assets/images/trade/bg.png" />

      <div class="intro-alum">
        <div class="title">
          <div class="text">产业优势</div>
        </div>
        <div class="desc">
          <div v-for="(v, k) in introAlum" :key="k" class="item">
            <div class="t1">
              <div class="t2"></div>
            </div>
            <div class="d1">
              {{ v.info }}
            </div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-title-left">
            有色金属加工规模全国占比
          </div>
          <div class="chart-title-right">
            窗帘导轨和户外遮阳产品欧洲市场占比
          </div>
          <div class="chart-left">
              <IndustrySituation ref="situationChart1" :height="'210px'" :width="'235px'" />
          </div>
          <div class="chart-right">
              <IndustrySituation ref="situationChart2" :height="'210px'" :width="'235px'" />
          </div>
        </div>
      </div>

      <div class="intro-cu">
        <div class="title">
          <div class="text">名企集聚</div>
        </div>
        <div class="desc"  style="padding-bottom:130px;">
            <div class="contract">
                全国“建筑铝型材20强”中，广东占了9家，其中佛山地区有6家，分别是：
            </div>
            <div class="item-lists">
                <div v-for="(v, k) in introCu" :key="k" class="item">
                <div class="t1">
                    <div class="t2"></div>
                </div>
                <div class="d1">
                    {{ v.info }}
                </div>
                <img
                    class="item-list-img"
                    src="/static/images/foshan-star.png"
                    alt=""
                />
                </div>
            </div>
        </div>
      </div>

      <div class="intro-map">
        <div class="title">
          <div class="text">我国铜铝产量全球占比</div>
        </div>
        <div class="desc">
            <BaseProductionBar ref="baseimportpercent" :height="'30vh'"/>
        </div>
      </div>

    <div class="main">
        <div class="title">
            <div class="subject">华南铝价</div>
            <div class="desc">
                <!-- {{ aluminumPrice.price }} -->
                <count-to :start-val="0" :end-val="aluminumPrice.hnalu_price" :duration="2000" class="card-panel-num" separator=""/>
                <div v-if="Math.sign(aluminumPrice.change) === 1" class="desc-up">
                    {{ this.aluminumPrice.change }}&uarr;
                </div> 
                <div v-else class="desc-down">
                    {{ this.aluminumPrice.change.toString().slice(1) }}&darr;
                </div> 
            </div> 
        </div>
        <div class="title-decoration"></div>
        <div class="desc">
            <div class="subject">
                最低 {{ aluminumPrice.hnalu_price_low }} — 最高  {{ aluminumPrice.hnalu_price_high }}
            </div>
            <div class="time">
                <img src="~@/assets/images/platformindex/title-time.png"/>
                {{ aluminumPrice.date | parseTime('{y}.{m}.{d}') }}
            </div> 
        </div>
    </div>

     <div class="intro">
        <div class="title">
          <div class="text">概况</div>
        </div>
        <div class="desc">
            <div class="item">
                <div class="d1">
                    为了更好地服务产业，2019年，粤汇金属交易中心同新华社合作，制定并发布了“华南铝价”，引导电解铝相关产品的交易定价，现在“华南铝价”已成为广东、上海、河南等地重要的定价参照标准。
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BackGround from "@/components/BackGround2";
import FoshanMapProd from "./components/FoshanMapProd";
import IndustrySituation from "./components/IndustrySituation";
import BaseProductionBar from "./components/BaseProductionBar";
import { parseTime } from "@/utils";
import { aluminumPrice, startPrice, latestSpotIndex, spotIndex } from '@/api/platformindex'
    import CountTo from 'vue-count-to'

export default {
  name: "IndustryBase",
  components: {
    Header,
    BackGround,
    FoshanMapProd,
    IndustrySituation,
    BaseProductionBar,
    CountTo
  },
    filters: {
        parseTime,
    },
  data() {
    return {
        canvasHeight: 0,
        canvasWidth: 0,
        aluminumPrice: {
            change: '',
        },
 
      introAlum: [
        {
          info:
            "大沥镇素有“中国铝材第一镇”、“中国有色金属名镇”的称号"
        },
      ],
      introCu: [
 
        {
            info:
            "广东坚美铝型材厂（集团）有限公司"
        },
        {
            info:
            "广东兴发铝业有限公司"
        },
        {
            info:
            "广东凤铝铝业有限公司"
        },
        {
            info:
            "广亚铝业有限公司"
        },
        {
            info:
            "广东华昌铝厂有限公司"
        },
        {
            info:
            "广东伟业铝厂集团有限公司"
        },
     
      ]
    };
  },

  created() {},

  mounted() {
    this.setSituationChart()
    this.getImport()
    this.getAluminumPrice()
  },

  methods: {
    setSituationChart() {
      let option = {
        color: ['#91cc75' ,'#fac858'],
        title: {
        },
        series: [
          {
            center: ["50%", "54%"],
            data: [
              {
                value: 50,
                name: "其他",
              },
              {
                value: 50,
                name: "南海 50%",
              },
            ]
          }
        ]
      }
      let option2 = {
        color:['#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
        title: {
          text: ''
        },
        series: [
          {
            center: ["50%", "54%"],
            data: [
              {
                value: 40,
                name: "其他",
              },
              {
                value: 60,
                name: "大沥 60%",
              },
            ]
          }
        ]
      }
      let option3 = {
        color:['#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
        title: {
          text: ''
        },
        series: [
          {
            center: ["50%", "36%"],
            data: [
              {
                value: 25,
                name: "佛山",
              },
              {
                value: 75,
                name: "广东其他",
              },
            ]
          }
        ]
      }
      this.$refs.situationChart1.updateChart(option)
      this.$refs.situationChart2.updateChart(option2)
    },

     getImport(mode = 1) {
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        textStyle: {
      
        },
        xAxis: {
          type: "category",
          axisTick: {
            inside: true,
            length: 0,
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              width: 2,
              color: "#addcfe",
            },
          },
    
          data: ["2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        },
        yAxis: {
          show: true,
          name: "百分比 % ",
          nameLocation: "end",
          nameTextStyle: {
            // 坐标轴名称样式
            color: "#addcfe",
            padding: [5, 0, 0, 5], // 坐标轴名称相对位置
          },
          nameGap: 10, // 坐标轴名称与轴线之间的距离
          axisTick: {
            inside: true,
            length: 0,
          },
          axisLine: {
            lineStyle: {
              width: 2,
              color: "#addcfe",
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              type: "dashed",
              color: "#1e95f0",
            },
          },
          type: "value",
        },
        grid: {
          left: 50,
          right: 10,
          top: 40,
          bottom: 40,
          show: true,
          borderColor: "transparent",
          backgroundColor: "rgba(63,28,85,0.2)",
        },
        label: {
          color: '#addcfe'
        },
        series: [
          {
            name: "铜",
            type: "bar",
            barWidth: "10%",
            data: [1000, 5200, 2000, 3340, 3900, 3300, 2200],
            itemStyle: {
              normal: { 
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#66b1ea", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#addcfe", // 100% 处的颜色
                    },
                  ],
                },
               },
            },
          },
          {
            name: "铜",
            type: "bar",
            barWidth: "10%",
            data: [1000, 5200, 2000, 3340, 3900, 3300, 2200],
            itemStyle: {
              normal: { 
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#ee6666", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#F7B8B8", // 100% 处的颜色
                    },
                  ],
                },
               },
            },
          },
        ],
      };
      option.xAxis.data = [];
      option.series[0].data = [];
      option.xAxis.data = ['2000电解铜/铝产量占比','2022电解铜/铝产量占比']
      option.series[0].data = [13,43]
      option.series[1].data = [13,59]
      this.$refs.baseimportpercent.updateChart(option);
    },

    getAluminumPrice() {
        aluminumPrice()
        .then(res => {
            if (res.code === 1000) { 
                this.aluminumPrice = res.data.results[0];
            }
        })
    },
  }
};
</script>

<style lang="scss" scoped>
$red: #f50638;
$white: #fff;
$bg: #02071d;
$blue: #012d57dc;
$blue1: #a9d7f9;
$blue2: #2a71b5;
$yellow: #fec979;
.body {
  // box-sizing: border-box;
  padding-top: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 90vh;
  position: relative;
}
.text,.d1,.label-info,.bg,.chart-title3,.chart-title {
    user-select: none;
}
.chart-title-left,.chart-title-right {
    user-select: none;
}
.h {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 11vh;
  width: 100%;
}

.intro,
.intro-alum,
.intro-cu,
.intro-map {
  position: absolute;
  width: 475px;
  overflow: hidden;
}
.intro {
  top: 20px;
  right: 50px;
}

.intro-alum {
  height: 605px;
  top: 20px;
  left: 50px;

  .desc {
    height: 180px;
  }
  .d1 {
    padding-top: 26px;
      line-height: 38px !important;
    }
}

.intro-cu {
  width: 47vw;
  left: 50px;
  top: 495px;
  
  .desc {
    height: 388px;
    font-size: 19px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #addcfe;
    padding: 60px 40px;

    .item-lists {
        text-align: center;
        padding-left: 90px;
        padding-top: 30px;
    }
    .item {
        display: inline-block;
        width: 360px;
        text-align: left;
      .d1 {
        display: inline-block;
        line-height: 36px;
      }
    }

    .contract {
        line-height: 30px;
        padding: 0 40px;
    }
  }
}

.intro {
  .desc {
    height: 388px;
    padding: 40px 40px;
    letter-spacing: 2px;
  }
  .d1 {
    text-align: justify;
    line-height: 40px !important;
  }
}

.intro-map {
  width: 47vw;
  top: 495px;
  right: 50px;
  .desc {
    height: 388px;
  }

}
.chart {
  height: 210px;
  background: $blue;
  position: relative;
  text-align: center;
}
.chart3 {
  display: inline-block;
  vertical-align: middle;
}

.chart-title-left,.chart-title-right {
  position: absolute;
  top: -18px;
  width: 100%;
  font-weight: 500;
  letter-spacing: 2px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  width: 180px;
}
.chart-title-left {
    left: 30px;
}
.chart-title-right {
    right: 30px;
}

.chart-title3 {
  display: inline-block;
  font-weight: 500;
  letter-spacing: 2px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  vertical-align: middle;
  padding-left: 80px;
  margin-right: -20px;
  margin-top: -60px;
}

.chart-left,.chart-right {
  display: inline-block;
  width: 235px;
}

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
  padding: 10px 30px;
  box-sizing: border-box;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-evenly;
  // height: 400px;
  .item-intro {
    margin: 6px 0;
  }
  .item-list-img {
    position: absolute;
    top: 20px;
    left: -18px;
    width: 10px;
    height: 10px;
  }
  .item {
    flex: 1;
    position: relative;
    .t1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: $yellow;
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 10px;

      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
    }

    .d1 {
      color: $blue1;
      font-weight: bold;
      font-size: 19px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #addcfe;
      line-height: 27px;
    }
  }
}
.bg {
  width: 30vw;
  height: 30vw;
  position: absolute;
  top: 20vh;
  left: 35vw;
}
.bg2 {
  width: 100%;
  left: 0;
}

.wordCloud {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 800px;
  height: 800px;

  .click-area {
    position: absolute;
    background-color: transparent;
    width: 150px;
    height: 150px;
    top: 40%;
    left: 60%;
    z-index: 999;
  }
}


.main {
    position: absolute;
    left: 27.5vw;
    width: 42vw;
    margin: 0 1.5vw;
    background-image: url("~@/assets/images/platformindex/zhongjianbiankuang.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;

    .title {
        background-image: url("~@/assets/images/platformindex/title-bg.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        margin: 3vh 2vw 0 2vw;
        height: 15vh;
        background-color: transparent;
        padding: 0;

        .subject {
            height: 6vh;
            text-align: center;
            font-size: 39px;
            letter-spacing: 8px;
            font-weight: bold;
            color: $white;
        }

        .desc {
            height: 9vh;
            line-height: 9vh;
            text-align: center;
            font-size: 9vh;
            color: #FBC779;
            position: relative;
        }

        .desc-up {
            display: inline-block;
            position: absolute;
            margin-left: 1vw;
            height: 3vh;
            font-size: 3vh;
            color: red; 
        }

        .desc-down {
            display: inline-block;
            position: absolute;
            margin-left: 1vw;
            height: 3vh;
            font-size: 3vh;
            color: green; 
        }
    }

    .title-decoration {
        height: 5vh;
        background-image: url("~@/assets/images/platformindex/title-decoration.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .desc {
        font-weight: bold;
        color: #ADDCFE;
        background: none;
        padding: 0;
        .subject {
            display:table-cell;
            text-align:center;
            vertical-align: middle;
            height: 12vh;
            width: 42vw;
            font-size: 2.5vh;
        }

        .time {
            text-align: center;
            font-size: 2vh;
            padding-bottom: 30px;
        }

        img {
            width: 1.5vh;
            height: 1.6vh;
            margin-right: 0.5vw;
        }
    }
}
</style>
