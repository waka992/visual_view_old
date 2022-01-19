<template>
  <div class="">
    <BackGround />
    <Header title="供需关系" />
    <div class="body">
      <div class="left">
        <div>
          <div class="title">
            <div class="text">种植面积及占比</div>
          </div>
          <div>
            <div class="left-chart-1">
              <div class="title">粮食播种面积占比</div>
              <AgriculturePie ref="agriLeftPie" :height="'360px'" :width="'400px'" />
              <div class="label-area">
                <div class="labels" v-for="(v, i) in agriLeftPieLabels" :key="i" :style="'top:'+(i+1)*40+'px;'">
                  <div
                    class="label-icon"
                    :style="'background:' + v.color + ';'"
                  ></div>
                  <div class="label-info">{{ v.info }}</div>
                </div>
              </div>
            </div>
            
            <div class="left-chart-2" style="height: 36vh">
              <div class="title">国内{{ type_val == 1 ? '豆粕' : '玉米'}}种植面积</div>
              <AreaBasic ref="leftLineChart" />
            </div>
          </div>
        </div>
      </div>

      <div class="center">
        <div class="down-stream">
          <div class="title">
            <div class="text">下游</div>
          </div>
          <div class="desc">
            <div v-for="(v, k) in industry.list" :key="k" class="item">
              <div class="t1">
                <!-- <img :src="v.img" alt="" srcset="" /> -->
                <div class="t2">{{ v.title }}</div>
              </div>
              <div class="d1">
                {{ v.desc }}
              </div>
            </div>
          </div>
            <div  class="agri-pie1" :class="type_val == 1 ? 'single-pie' : ''">
              <AgriculturePie ref="agripie" :height="'210px'" :width="'210px'" />
              <div class="labels-area">
                <div class="labels" v-for="(v, i) in agriPieLabels" :key="i" :style="'top:'+i*35+'px;'">
                  <div
                    class="label-icon"
                    :style="'background:' + v.color + ';'"
                  ></div>
                  <div class="label-info">{{ v.info }}</div>
                </div>
              </div>
            </div>
            <div  class="agri-pie2" v-show="type_val == 2">
              <div class="title">我国玉米深加工市场下游需求分析</div>
              <AgriculturePie ref="agripie2" :height="'210px'" :width="'210px'" />
              <div class="labels-area">
                <div class="labels" v-for="(v, i) in agriPieLabels2" :key="i" :style="'top:'+i*35+'px;'">
                  <div
                    class="label-icon"
                    :style="'background:' + v.color + ';'"
                  ></div>
                  <div class="label-info">{{ v.info }}</div>
                </div>
              </div>
            </div>
        </div>
        <div class="mt1">
          <div class="title">
            <div class="text">产量</div>
          </div>
          <div>
            <div class="chart-wrapper">
              <ProductionBar ref="abc1" :height="'35vh'" :index="type_val"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let dd = console.log;

import * as supply from "@/api/supply";

import BackGround from "@/components/BackGround2";
import Header from "@/components/Header";
import AgriculturePie from "./components/AgriculturePie";
import ProductionBar from "./components/ProductionBar";
import AreaBasic from "./components/AreaBasic.vue";


export default {
  name: "index",
  components: {
    Header,
    BackGround,
    AgriculturePie,
    ProductionBar,
    AreaBasic,
  },
  data() {
    return {
      type_val: 0,
      industry: {
        list: [
          {
            title: "",
            desc:
              "豆粕是大豆提取豆油后得到的一种副产品，大部分用作饲料，少部分用于发酵食品生产。按照产业链来看，我国豆粕产业链上游主要为大豆生产环节，下游主要包括饲料行业、食品行业、化妆品行业和抗菌素原料。目前豆粕下游产业90%集中在饲料行业，其中用于生猪养殖业占比最多，达46%，肉禽、蛋禽以及水产饲料分别占22%、18%、7%。",
          },
        ],
      },
      agriLeftPieLabels: [],
      agriPieLabels: [],
      agriPieLabels2: [],
      enterprise: {
        list: [
          
        ],
      },
      enterprise1: {
        list: [
          
        ],
      },
    };
  },
  mounted() {
    this.type_val = Number(this.$route.params.type) + 1 // 1铜，2铝
    this.get_downstreamindustry(this.type_val);
    this.get_stoage(this.type_val);
    this.get_area(this.type_val);
    this.get_plant_area(this.type_val);
  },
  methods: {
    // 获取下游企业
    get_downstreamindustry(mode = 1) {
          if (mode === 1) {
            this.industry.list = [
                {
                  desc:
                    "豆粕是大豆提取豆油后得到的一种副产品，大部分用作饲料，少部分用于发酵食品生产。按照产业链来看，我国豆粕产业链上游主要为大豆生产环节，下游主要包括饲料行业、食品行业、化妆品行业和抗菌素原料。目前豆粕下游产业90%集中在饲料行业，其中用于生猪养殖业占比最多，达46%，肉禽、蛋禽以及水产饲料分别占22%、18%、7%。",
                },
            ]
            let option = {
              series: [
                {
                  data: [
                    { value: 46, name: "猪料", },
                    { value: 22, name: "肉禽料", },
                    { value: 18, name: "蛋禽料", },
                    { value: 7, name: "水产料", },
                    { value: 7, name: "其他", },
                  ]
                }
              ]
            }
            this.$refs.agripie.updateChart(option)
            this.agriPieLabels = [
              { info: "猪料 46%", color: "#5470c6" },
              { info: "肉禽料 22%", color: "#91cc75" },
              { info: "蛋禽料 18%", color: "#fac858" },
              { info: "水产料 7%", color: "#ee6666" },
              { info: "其他 7%", color: "#73c0de" },
            ]
          }
          else {
            this.industry.list = [
                {
                  desc:
                    "在玉米消费当中，约60%用作粮食，剩余约40%用于加工。在加工领域中，60-70%用于饲料消费，约30%用于深加工（包括工业和食用）。深加工主要包括玉米淀粉、酒精、味精、赖氨酸等，其中玉米淀粉和酒精分别占深加工行业的57%和29%，是玉米深加工中的两个主要消费种类。",
                },
            ]
            let option = {
              series: [
                {
                  data: [
                    {value: 67,name: "饲料消费",},
                    { value: 25, name: "工业消费",},
                    { value: 7, name: "种用及食用消费",},
                    { value: 7, name: "损耗量",},
                  ]
                }
              ]
            }
            this.$refs.agripie.updateChart(option)
            this.agriPieLabels = [
              { info: "饲料消费 67%", color: "#5470c6" },
              { info: "工业消费 25%", color: "#91cc75" },
              { info: "种用及食用消费 7%", color: "#fac858" },
              { info: "损耗量 7%", color: "#ee6666" },
            ]
            let option2 = {
              series: [
                {
                  data: [
                    {value: 57,name: "玉米淀粉",},
                    { value: 29, name: "酒精",},
                    { value: 7, name: "味精",},
                    { value: 7, name: "赖氨酸",},
                  ]
                }
              ]
            }
            this.$refs.agripie2.updateChart(option2)
            this.agriPieLabels2 = [
                { info: "玉米淀粉 57%", color: "#5470c6" },
                { info: "酒精 29%", color: "#91cc75" },
                { info: "味精 7%", color: "#fac858" },
                { info: "赖氨酸 7%", color: "#ee6666" },
            ]
          }
    },

    // 获取产量
    get_stoage(mode = 1) {
      let option = {
        xAxis: { data: [], },
        series: [ 
          { 
            data: [],
          },
         ],
      };
      let data = []
      if (mode === 1) {
        data = [
          {"id":0,"statis_date":"2012","amount":4830},
          {"id":1,"statis_date":"2013","amount":5206},
          {"id":2,"statis_date":"2014","amount":5707},
          {"id":3,"statis_date":"2015","amount":6120},
          {"id":4,"statis_date":"2016","amount":6746},
          {"id":5,"statis_date":"2017","amount":7145},
          {"id":6,"statis_date":"2018","amount":6480},
          {"id":7,"statis_date":"2019","amount":7210},
          {"id":8,"statis_date":"2020","amount":7621},
          {"id":9,"statis_date":"2021","amount":7910},
        ]
      }
      else {
        data = [
          {"id":0,"statis_date":"2012","amount":86800},
          {"id":1,"statis_date":"2013","amount":99047},
          {"id":2,"statis_date":"2014","amount":101603},
          {"id":3,"statis_date":"2015","amount":97221},
          {"id":4,"statis_date":"2016","amount":112341},
          {"id":5,"statis_date":"2017","amount":108009},
          {"id":6,"statis_date":"2018","amount":112492},
          {"id":7,"statis_date":"2019","amount":111971},
          {"id":8,"statis_date":"2020","amount":112280},
          {"id":9,"statis_date":"2021","amount":120873},
        ]
      }
      
      option.xAxis.data = [];
      option.series[0].data = [];

      data.map((v, k) => {
        let name = v.statis_date;
        let value = v.amount;
        option.xAxis.data.push(name);
        option.series[0].data.push(value);
      });

      this.$refs.abc1.updateChart(option);
    },

    // 获取种植面积及占比
    get_area(mode = 1) {
      let option = {}
      if (mode === 1) {
         option = {
          series: [
            {
              data: [
                 { value: 37, name: "玉米", },
                { value: 25, name: "稻谷", },
                { value: 20, name: "小麦", },
                { value: 9, name: "豆类", },
                { value: 6, name: "薯类", },
              ]
            }
          ]
        }

      }
      else {
       option = {
          series: [
            {
              data: [
                 { value: 37, name: "玉米", },
                { value: 25, name: "稻谷", },
                { value: 20, name: "小麦", },
                { value: 9, name: "豆类", },
                { value: 6, name: "薯类", },
              ]
            }
          ]
        }
      }
        this.agriLeftPieLabels = [
          { info: "玉米 46%", color: "#5470c6" },
          { info: "稻谷 22%", color: "#91cc75" },
          { info: "小麦 18%", color: "#fac858" },
          { info: "豆类 7%", color: "#ee6666" },
          { info: "薯类 7%", color: "#73c0de" },
        ]
      this.$refs.agriLeftPie.updateChart(option);
    },

    get_plant_area (mode = 1) {
      let option = {
        xAxis: {
          data: []
        },
        series: [{
          data: []
        }],
      }
        option.xAxis.data = ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
      if (mode == 1) {
        option.series[0].data = [11.05,10.36,9.40,8.89,8.82,8.43,9.29,10.05,10.19,11.08,11.59,]
      }
      else {
        option.series[0].data = [34.98,36.77, 39.11, 41.30, 43.00, 44.97, 44.18, 42.40, 42.13, 41.28, 41.26, ]
      }
      this.$refs.leftLineChart.updateChart(option)
    }
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$red: #f50638;
$white: #fff;
$bg: #02071d;
$blue: #012d57dc;
$blue1: #a9d7f9;
$blue2: #2a71b5;
$yellow: #fec979;

.body {
  padding: 0 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  color: $white;
  overflow: hidden;
  // font-size: 20px;

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
    }
  }

  .left {
    flex: 1;
    margin: 0 20px;
    // height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: $blue;

    .left-chart-1,.left-chart-2 {
      position: relative;

      .labels {
        width: 300px;
        position: absolute;
        left: 400px;
      }

      .label-icon {
        position: absolute;
        width: 10px;
        height: 10px;
        left: 0;
        top: 10px;
      }

      .label-info {
        position: absolute;
        left: 15px;
        top: 0;
        font-size: 15px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #addcfe;
        line-height: 30px;
      }
    }

    .left-chart-1 {
      height: 360px;
      padding-top: 80px;

      .title {
        position: absolute;
        top: 90px;
        right: 20px;
        text-align: right;
        padding-right: 130px;
        background: transparent;
      }

      .label-area {
        position: absolute;
        top: 88px;
        width: 400px;
        height: 400px;
      }
    }

    .left-chart-2 {
      margin-top: 105px;

      .title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -40px;
        font-size: 18px;
        letter-spacing: 3px;
        background: transparent;
        // padding: 10px 40px;
        text-align: center;
        // margin-top: -20px;
      }
    }
  }

  .center {
    flex: 1.8;
    height: 80vh;
    display: flex;
    flex-direction: column;
    // justify-content: space-evenly;
    position: relative;

    .down-stream {
      position: relative;
      background: $blue;
    }

    .desc {
      height: 36vh;
      width: 800px;
      padding: 20px 50px;
      position: relative;
      line-height: 50px;

      .item {
        position: relative;
        margin-bottom: 20px;
        height: 100%;

        .t1 {
          display: flex;
          flex-direction: column;
          color: $yellow;
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 10px;

          img {
            position: absolute;
            width: 50px;
            height: 50px;
            right: 0;
            top: 0;
          }
          .num {
            margin-top: 10px;
            width: fit-content;
            border: 2px dashed $blue2;
            color: $red;
            padding: 5px 10px;
            border-radius: 3px;
          }
        }

        .d1 {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: $blue1;
          font-weight: bold;
        }
      }
    }

    .desc1 {
      height: 33vh;
      background: $blue;
      padding: 20px 10px;

      .item {
        position: relative;
        margin-bottom: 20px;

        .t1 {
          display: flex;
          flex-direction: row;
          align-items: center;
          color: $yellow;
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 10px;

          img {
            position: absolute;
            width: 50px;
            height: 50px;
            right: 0;
            top: 0;
          }

          .num {
            margin-top: 10px;
            margin-left: 10px;
            width: fit-content;
            border: 2px dashed $blue2;
            color: $red;
            padding: 5px 10px;
            border-radius: 3px;
          }
        }

        .d1 {
          color: $blue1;
          font-weight: bold;
        }
      }
    }

    .agri-pie1,.agri-pie2 {
      width: 330px;
      height: 210px;
      position: absolute;
      left: 780px;

      .labels-area {
        position: absolute;
        top: 5px;
        left: 0;
        width: 300px;
        height: 300px;
      }
      .labels {
        width: 300px;
        position: absolute;
        left: 200px;
      }

      .label-icon {
        position: absolute;
        width: 5px;
        height: 5px;
        left: 0;
        top: 13px;
      }

      .label-info {
        position: absolute;
        left: 15px;
        top: 0;
        font-size: 15px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #addcfe;
        line-height: 30px;
      }
    }

    .agri-pie1 {
      top: 55px;

      &.single-pie {
        top: 65%;
        transform: translateY(-50%);

        .labels-area {
          position: absolute;
          top: -10px;
          left: 0;
          width: 300px;
          height: 300px;
        }
      }
    }


    .agri-pie2 {
      top: 265px;

      .title {
        position: absolute;
        width: 100%;
        left: 60px;
        top: -30px;
        font-size: 18px;
        color: #fff;
      }
    }

    .mt1 {
      margin-top: 20px;

      .chart-wrapper {
        padding-top: 30px;
      }
    }
  }
}

</style>
