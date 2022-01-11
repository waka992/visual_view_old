<template>
  <div class="memorabilia-content">
    <BackGround :bgImage="''" />
    <Header title="发展历程" />
    <div class="body">
      <div class="bg"></div>
      <div class="timeline"></div>
      <div
        v-for="(point, i) in points"
        :key="'point' + i"
        class="point"
        :class="'point' + i"
      ></div>
      <div v-for="(content, j) in contents" :key="'content' + j" class="content" :class="'content' + j">
        <div class="pic">
            <img class="pic-img" src="/static/images/corporatestyle/pic-1.png" alt="">
        </div>
        <div class="intro-info">
            <div class="title">{{content.date}}</div>
            <div class="intro">{{content.intro}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BackGround from "@/components/BackGround2";
import "swiper/dist/css/swiper.css";
import { history } from "@/api/memorabilia";

export default {
  name: "Memorabilia",
  components: {
    Header,
    BackGround
  },

  created() {
    this.getHistory();
  },

  data() {
    return {
      listData: [],
      points: [ {},{},{},{} ],
      contents: [
        { date: "2013年11月7日", intro: "广东有色金属交易平台项目进行签约仪式", url: "/static/images/corporatestyle/pic-1.png" },
        { date: "2014年3月25日", intro: "广东有色金属交易平台开业暨有色金属电子交易系统启动仪式", url: "" },
        { date: "2019年7月24日", intro: "首届华南铝价发布会暨P+N联盟签约仪式", url: "" },
        { date: "2021年4月9日", intro: "收购广东桂江农产品电子交易有限公司，拓展农产品交易业务", url: "" },
      ]
    };
  },

  methods: {
    getHistory() {
      history().then(res => {
        if (res.code === 1000) {
          this.listData = res.data.results;
          this.listData.map(a => (a.class = "slave"));
          // this.listData[this.selectedKey].class = 'master'
          this.getProgress();
        }
      });
    },

    getProgress() {
      this.lastProgress = this.selectedProgress;
      this.selectedProgress = parseInt(
        ((this.selectedKey + 1) / this.listData.length) * 100
      );
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.memorabilia-content,
.body {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bg {
  background-image: url("~@/assets/images/memorabilia/bg.png");
  position: absolute;
  width: 1307px;
  height: 958px;
  left: 341px;
  top: 0;
  z-index: 1;
}
.timeline {
  background-image: url("~@/assets/images/memorabilia/line.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 1920px;
  height: 584px;
  position: absolute;
  z-index: 2;
  top: 243px;
}
.point {
  position: absolute;
  background-image: url("~@/assets/images/memorabilia/point.png");
  width: 22px;
  height: 94px;
  z-index: 3;

  &.point0 { left: 250px; top: 703px; transform: rotate(0deg); }
  &.point1 { left: 803px; top: 408px; transform: rotate(180deg); }
  &.point2 { left: 1294px; top: 489px; transform: rotate(0deg); }
  &.point3 { left: 1682px; top: 424px; transform: rotate(180deg); }
}

.content {
  position: absolute;
  width: 308px;

  .pic {
    position: absolute;
    width: 243px;
    height: 196px;
    background-image: url("~@/assets/images/memorabilia/pic-border.png");
    left: 24px;

    .pic-img {
        display: inline-block;
        width: 213px;
        height: 166px;
        margin-top: 17px;
        margin-left: 15px;
    }
  }
  

  .title {
    width: 308px;
    height: 51px;
    background-image: url("~@/assets/images/memorabilia/title-decorate.png");
    color: white;
    text-align: center;
    line-height: 51px;
    font-size: 25px;
    font-weight: 400;
  }

  .intro {
    position: absolute;
    top: 80px;
    left: 43px;
    display: inline-block;
    width: 218px;
    color: #9ABCFF;
    font-size: 21px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
  }

  .intro-info {
      position: absolute;
  }

  &.content0 { left: 128px; top: 244px; .intro-info { top: 265px}}
  &.content1 { left: 682px; top: 161px; .intro-info { top: 381px}}
  &.content2 { left: 1161px; top: 668px; .intro-info { top: -374px}}
  &.content3 { left: 1565px; top: 75px; .intro-info { top: 483px}}

}
</style>
