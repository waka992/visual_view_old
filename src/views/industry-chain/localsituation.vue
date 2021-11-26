<template>
  <div>
    <BackGround />
    <Header title="佛山概况" />
    <div class="body">
      <img class="bg bg2" src="~@/assets/images/trade/bg.png" />

      <div class="wordCloud" @click="$router.push({ path: '/corporatestyle' })">
        <FoshanMap ref="abc2" :height="'600px'" />
      </div>

      <div class="intro-map">
        <div class="title">
          <div class="text">产业布局</div>
        </div>
        <div class="desc">
          <div class="prod-map">
            <FoshanMapProd ref="abc" :height="'210px'" :width="'210px'" />
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
        <div class="desc">
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
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BackGround from "@/components/BackGround2";
import FoshanMap from "./components/FoshanMap";
import FoshanMapProd from "./components/FoshanMapProd";

export default {
  name: "Resource",
  components: {
    Header,
    BackGround,
    FoshanMap,
    FoshanMapProd
  },

  data() {
    return {
      canvasHeight: 0,
      canvasWidth: 0,
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
            "佛山南海有200多家铝型材生产企业，主要分布于大沥、官窑、狮山、罗村、丹灶等镇"
        },
        {
          info:
            "占全国市场份额的25%以上（广东省铝型材产量占全国60%左右），铝挤压材出口占全国出口的20%以上"
        },
        {
          info:
            "佛山铝产业产值占全市有色金属行业产值的60%以上，从业人员约5万人。"
        },
        {
          info:
            "铝型材占铝加工品中的60%，而佛山地区的消费占铝型材总消费中的40%，佛山地区的铝消费排名全球第二，南海地区占佛山铝型材消费的90%。"
        },
        { info: "全国“建筑铝型材20强”中，南海占了11家；" },
        { info: "全国“工业型材10强”中，南海占了4家。" },
        { info: "南海区大沥镇被誉为“中国铝材第一镇”、中国有色金属名镇”。" }
      ],
      introCu: [
        {
          info:
            "佛山有色金属产业的第二大行业是铜冶炼及其压延加工，并有一部分废铜及再生铜冶炼。"
        },
        {
          info:
            "佛山全市铜行业企业大部分集中在铜线、管及零部件加工，为下游家电（冰箱、空调等）、电子等行业服务。（下游重点行业信息：顺德北滘，中国家电制造业重镇，2020年，北滘家电产业产值约2709亿元，占据了全国家电业总产值十分之一）"
        },
        {
          info:
            "2019年，全市铜材产量约为60万吨，占广东省铜材产量（254万吨）的约1/4；铜产业的产值为312.8亿元，占全市有色产业产值的26.8%以上。其中，铜冶炼、压延加工的产值分别为32.9亿元、279.9亿元，分别占全市有色产业产值的2.8%、24.0%。"
        }
      ]
    };
  },

  created() {},

  mounted() {
    var dom = document.getElementsByClassName("wordCloud");
    this.canvasHeight = dom[0].offsetHeight;
    this.canvasWidth = dom[0].offsetWidth;
  },

  methods: {}
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
}
.intro {
  height: 365px;
  top: 51px;
  left: 50px;
}
.intro-alum {
  height: 484px;
  bottom: 35px;
  left: 50px;
}
.intro-cu {
  height: 484px;
  bottom: 35px;
  right: 50px;
}
.intro-map {
  height: 365px;
  top: 51px;
  right: 50px;

  .desc {
    height: 318px;
  }

  // 饼图
  .prod-map {
    width: 210px;
    height: 210px;
    position: absolute;
    left: 27px;
    top: 106px;
    overflow: auto;
  }
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
  }
}
.desc {
  background: $blue;
  padding: 20px 30px;
  box-sizing: border-box;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-evenly;
  // height: 400px;
  .item-intro {
    margin: 10px 0;
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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 600px;
  height: 500px;
}
</style>
