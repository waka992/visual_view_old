<template>
  <div>
    <BackGround />
    <Header title="佛山概况" />
    <div class="body">
      <img class="bg bg2" src="~@/assets/images/trade/bg.png" />

      <div class="wordCloud">
        <FoshanMap ref="abc2" :height="'800px'" />
        <div class="click-area"  @click="$router.push({ path: '/corporatestyle' })"></div>
      </div>

      <div class="intro-map">
        <div class="title">
          <div class="text">产业布局</div>
        </div>
        <div class="desc">
          <div class="prod-map">
            <FoshanMapProd ref="abc" :height="'210px'" :width="'210px'" />
            <div class="labels" v-for="(v, i) in foshanMapLabels" :key="i" :style="'top:'+(i*30 - 15)+'px;'">
              <div
                class="label-icon"
                :style="'background:' + v.color + ';'"
              ></div>
              <div class="label-info">{{ v.info }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="intro">
        <div class="title">
          <div class="text">概况</div>
        </div>
        <div class="desc">
          <div v-for="(v, k) in intro" :key="k" class="item item-intro">
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

      <div class="intro-cu">
        <div class="title">
          <div class="text">铜概况</div>
        </div>
        <div class="desc"  style="padding-bottom:130px;">
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
        <div class="chart">
          <div class="chart-title3">
            铜材产量
          </div>
          <div class="chart3">
            <IndustrySituation ref="situationChart3" :height="'210px'" :width="'235px'" />
          </div>
        </div>
      </div>

      <div class="intro-alum">
        <div class="title">
          <div class="text">铝概况</div>
        </div>
        <div class="desc">
          <div v-for="(v, k) in introAlum" :key="k" class="item">
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
        <div class="chart">
          <div class="chart-title">
            铝型材消费
          </div>
          <div class="chart-left">
              <IndustrySituation ref="situationChart1" :height="'210px'" :width="'235px'" />
          </div>
          <div class="chart-right">
              <IndustrySituation ref="situationChart2" :height="'210px'" :width="'235px'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BackGround from "@/components/BackGround2";
import FoshanMap from "./components/FoshanMap";
import FoshanMapProd from "./components/FoshanMapProd";
import IndustrySituation from "./components/IndustrySituation";

export default {
  name: "LocalSituation",
  components: {
    Header,
    BackGround,
    FoshanMap,
    FoshanMapProd,
    IndustrySituation,
  },

  data() {
    return {
      canvasHeight: 0,
      canvasWidth: 0,
      foshanMapLabels: [
        { info: "铝压延加工 63.45%", color: "#5470c6" },
        { info: "铜压延加工 23.96%", color: "#91cc75" },
        { info: "有色金属合金制造 6.84%", color: "#fac858" },
        { info: "铜冶炼 2.82%", color: "#ee6666" },
        { info: "其他有色金属压延加工 2.81%", color: "#73c0de" },
        { info: "稀有稀土金属压延加工 0.12%", color: "#3ba272" }
      ],
      intro: [
        { info: "全国有色金属产业的重要集聚区" },
        {
          info: "铜、铝的压延加工两大行业的产值占全市有色金属产业产值的90%以上"
        },
        {
          info:
            "形成了完善的以铝型材产销为核心的产业生态圈，掌握着建筑型材的先进技术"
        },
        {
          info:
            "全市铜行业企业大部分集中在铜线、管及零部件加工，为下游家电（冰箱、空调等）、电子等行业服务"
        }
      ],
      introAlum: [
        {
          info:
            "佛山南海有200多家铝型材生产企业，主要分布于大沥、狮山、丹灶等镇"
        },
        {
          info:
            "占全国市场份额的25%以上，铝挤压材出口占全国出口的20%以上"
        },
        {
          info:
            "佛山铝产业产值占全市有色金属行业产值的60%以上，从业人员约5万人。"
        },
        { info: "全国“建筑铝型材20强”中，广东占9家，其中佛山地区占6家，分别是：广东兴发铝业有限公司、广东凤铝铝业有限公司、广东坚美铝型材厂（集团）有限公司、广亚铝业有限公司、广东华昌铝厂有限公司、广东伟业铝厂集团有限公司。" },
        { info: "南海区大沥镇被誉为“中国铝材第一镇”、中国有色金属名镇”。" }
      ],
      introCu: [
        {
          info:
            "佛山有色金属产业的第二大行业是铜冶炼及其压延加工，并有一部分废铜及再生铜冶炼。"
        },
        {
          info:
            "佛山全市铜行业企业大部分集中在铜线、管及零部件加工，为下游家电（冰箱、空调等）、电子等行业服务。（重点行业信息：顺德北滘，中国家电制造业重镇，2020年北滘家电产业产值约2709亿元，占据全国家电业总产值十分之一）"
        },
     
      ]
    };
  },

  created() {},

  mounted() {
    var dom = document.getElementsByClassName("wordCloud");
    this.canvasHeight = dom[0].offsetHeight;
    this.canvasWidth = dom[0].offsetWidth;
    this.setSituationChart()
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
                value: 60,
                name: "全国其他",
              },
              {
                value: 40,
                name: "佛山",
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
                value: 90,
                name: "南海",
              },
              {
                value: 10,
                name: "佛山其他",
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
      this.$refs.situationChart3.updateChart(option3) // 铜
    }
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
  padding-top: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 90vh;
  position: relative;
}
.text,.d1,.label-info,.bg,.chart-title3,.chart-title {
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
  height: 385px;
  top: 10px;
  left: 50px;
}
.intro-alum {
  height: 605px;
  top: 355px;
  left: 50px;
}
.intro-cu {
  height: 605px;
  top: 355px;
  right: 50px;
  
  .desc {
    .item {
      .d1 {
        line-height: 26px;
      }
    }
  }
}

.intro {
  .desc {
    height: 288px;
  }
}

.intro-map {
  height: 365px;
  top: 10px;
  right: 50px;

  .desc {
    height: 288px;
  }

  // 饼图
  .prod-map {
    width: 365px;
    // height: 210px;
    position: absolute;
    left: 10px;
    top: 106px;

    .labels {
      width: 300px;
      position: absolute;
      left: 200px;
      top: 0;
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

.chart-title {
  position: absolute;
  top: 18px;
  width: 100%;
  font-weight: 500;
  letter-spacing: 2px;
  color: #fff;
  font-size: 18px;
  text-align: center;
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
    top: 15px;
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
      line-height: 24px;
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
</style>
