<template>
  <div>
    <BackGround />
    <Header title="企业风采" />
    <div class="content">
      <!-- <video-player class="vjs-custom-skin" ref="videoPlayer"
            controls :options="playerOptions" @ready="playerReadied" @play="onPlayerPlay($event)"  @ended="onPlayerEnded($event)" ></video-player> -->
      <!-- <div class="logo-area">
        <div class="logo"></div>
        <div class="logo-text">佛山市龙汇供应链管理服务有限公司</div>
      </div>

      <div class="intro">
        <img
          class="top-border"
          src="/static/images/corporatestyle/intro-border.png"
        />
        <div class="intro-info">
          于2013年11月12日成立，由拥有20多年有色金属贸易实践经验的服务商共同投资组建，在有色金属，大宗商品现货交易、仓储、物流、融资等方面具有丰富的营运经验、雄厚的产业基础和广泛的市场资源，致力打造国内一流的交易平台。
        </div>
        <img
          class="bottom-border"
          src="/static/images/corporatestyle/intro-border.png"
        />
      </div>

      <div class="dev-btn" @click="$router.push({ path: '/memorabilia' })">
        <div class="dev-info">发展历程</div>
        <img
          class="dev-arrow"
          src="/static/images/corporatestyle/btn-arrow.png"
        />
      </div> -->

      <div
        class="item"
        :class="'item' + i"
        v-for="(info, i) in introList"
        :key="i"
      >
        <img
          class="item-logo"
          v-if="i == 0"
          src="/static/images/corporatestyle/create.png"
          alt=""
        />
        <img
          class="item-logo"
          v-if="i == 1"
          src="/static/images/corporatestyle/develop.png"
          alt=""
        />
        <img
          class="item-logo"
          v-if="i == 2"
          src="/static/images/corporatestyle/industry.png"
          alt=""
        />
        <div class="item-title">{{ info.title }}</div>
        <div class="item-desc">{{ info.desc }}</div>
      </div>

      <div class="pic-list">
        <div
          class="pics"
          :class="'pic' + i"
          v-for="(pic, i) in picList"
          :key="i"
          @click="preview(i)"
        >
          <img class="pic-img" :src="pic.url" />
        </div>
      </div>

      <div class="big-eight">
        <img
          class="top-border"
          src="/static/images/corporatestyle/intro-border.png"
        />
        <div class="item-title">八大优势</div>
        <div class="big-eight-info">
          <div class="big-eight-info-item" v-for="(v, i) in bigEight" :key="i">
            <img class="item-list-img" src="/static/images/foshan-star.png" />
            {{ v.info }}
          </div>
        </div>
        <img
          class="bottom-border"
          src="/static/images/corporatestyle/intro-border.png"
        />
      </div>
      <!-- 预览图片 -->
      <div class="preview-box" @click="closePreview" v-if="prevFlag">
        <div class="preview-pic">
          <img class="preview-img" :src="previewUrl" alt="">
        </div>
        <!-- <div class="close">X</div> -->
        <!-- <div class="prev"></div> -->
        <!-- <div class="next"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import BackGround from "@/components/BackGround2";
import Header from "@/components/Header";
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";

export default {
  name: "CorporateStyle",
  components: {
    Header,
    BackGround,
    videoPlayer
  },

  data() {
    return {
      prevFlag: false,
      previewUrl: '',
      playerOptions: {
        fluid: true,
        sources: [
          {
            src:
              "https://lhbibucket.oss-cn-shenzhen.aliyuncs.com/video/%E5%85%B4%E6%B5%B7%E9%9B%86%E5%9B%A2%E5%AE%A3%E4%BC%A0%E7%89%872.mp4",
            type: "video/mp4"
          }
        ],
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      myPlayer: "",
      bigEight: [
        { info: "一站式的交易平台" },
        { info: "全方位的优质服务" },
        { info: "创新性的电子商务" },
        { info: "专业化的信息服务" },
        { info: "完善的交收服务" },
        { info: "高效的流转服务" },
        { info: "便捷的融资服务" },
        { info: "广泛的合作模式" }
      ],
      introList: [
        {
          title: "产业创新",
          desc:
            "2014年，在区、镇两级政府的大力支持下，广东有色金属交易平台（后更名为“广东金属交易中心”）正式成立，旨在重塑大沥产业结构，助力产业升级。交易中心为会员提供交易服务、结算服务、交收服务、信息服务及其他创新服务。"
        },
        {
          title: "产业集聚",
          desc:
            "交易中心在广佛国际商贸中心区的龙汇大厦落实，吸引越来越多有色金属上下游企业汇聚于此，助力有色金属产业经济迈上新征程。广东金属交易中心会员数量从2014年160家增加到2020年超4000家，会员遍布全国各地。"
        },
        {
          title: "持续发展",
          desc:
            "交易中心实现了有色金属现货产品高效流转。交易额从2014年421.89亿元增长到2020年3382.81亿元。交易中心发布“华南铝价”、成立广东南海有色金属产业联盟,推动产业链不断延伸，争夺行业话语权，成为华南地区有色金属企业总部的汇聚点。"
        }
      ],
      picList: [
        { url: "/static/images/corporatestyle/pic-1.png", hdurl: '/static/images/corporatestyle/pic-1-hd.jpg'},
        { url: "/static/images/corporatestyle/co-3.jpg", hdurl: '/static/images/corporatestyle/co-3-hd.jpg'},
        { url: "/static/images/corporatestyle/co-2.png", hdurl: '/static/images/corporatestyle/co-2-hd.jpg'},
        { url: "/static/images/corporatestyle/co-1.jpg", hdurl: '/static/images/corporatestyle/co-1-hd.png'},
        { url: "/static/images/corporatestyle/pic-5.png", hdurl: '/static/images/corporatestyle/pic-5-hd.jpg'}
      ]
    };
  },

  methods: {
    preview(i) {
      this.previewUrl = this.picList[i].hdurl
      this.prevFlag = true
    },
    closePreview() {
      this.prevFlag = false
    },
    // 视频加载完成回调
    playerReadied(e) {
      this.myPlayer = e;
      this.myPlayer.requestFullscreen();
    },

    onPlayerPlay(e) {
      if (!this.myPlayer.isFullscreen()) {
        this.myPlayer.isFullscreen(true);
      }
    },

    // 结束回调
    onPlayerEnded(e) {
      this.myPlayer.requestFullscreen();
      this.myPlayer.exitFullscreen();
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 110px);
  width: 100%;
  color: #fff;
  padding: 49px 47px;
  background-image: url("/static/images/corporatestyle/bg.png");
  position: relative;
}
// 预览图片
.preview-box {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  top: 0;
  left: 0;

  .preview-pic {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1044px;
    height: 756px;
    background-color: #fff;

    .preview-img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
}

.logo-area {
  display: inline-block;
  position: absolute;
  width: 564px;
  height: 154.5px;
  top: 49px;
  left: 47px;
  background-image: url("/static/images/corporatestyle/logo-border.png");

  .logo {
    position: absolute;
    width: 64px;
    height: 121px;
    top: 13px;
    left: 25px;
    background-image: url("/static/images/corporatestyle/logo.png");
  }

  .logo-text {
    position: absolute;
    left: 114px;
    top: 66px;
    width: 416px;
    height: 25px;
    font-size: 25px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
    line-height: 38px;
  }
}

.intro {
  position: absolute;
  top: 224px;
  left: 51px;
  width: 558px;
  height: 265px;

  .intro-info {
    position: absolute;
    left: 0;
    top: 32px;
    width: 541px;
    height: 170px;
    font-size: 23px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #e5e4eb;
    line-height: 38px;
  }

  .top-border {
    position: absolute;
    top: 0;
    left: 0;
  }

  .bottom-border {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.dev-btn {
  position: absolute;
  top: 528px;
  left: 47px;
  width: 564px;
  height: 103px;
  background-image: url("/static/images/corporatestyle/btn-border.png");
  text-align: center;

  .dev-info {
    position: absolute;
    top: 33px;
    left: 191px;
    font-size: 30px;
    font-family: Source Han Sans SC;
    font-weight: bold;
    color: #ffffff;
  }

  .dev-arrow {
    position: absolute;
    top: 42px;
    left: 340px;
    width: 54px;
    height: 21px;
  }
}

.item {
  position: absolute;
  top: 48px;
  display: inline-block;
  width: 357px;
  height: 582px;
  background-image: url("/static/images/corporatestyle/info-border.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .item-logo {
    width: 124px;
    height: 124px;
    position: absolute;
    top: 28px;
    left: 114px;
  }

  .item-desc {
    position: absolute;
    top: 243px;
    left: 30px;
    width: 297px;
    height: 312px;
    font-size: 21px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #9abcff;
    line-height: 34px;
  }
  .item-title {
    position: absolute;
    top: 175px;
    left: 30px;
    display: inline-block;
    width: 298px;
    background-image: url("/static/images/corporatestyle/title-desc.png");
    text-align: center;
    height: 23px;
    font-size: 25px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #e5e4eb;
    line-height: 24px;
    letter-spacing: 5px;
  }
}

.item0 {
  left: 48px;
}
.item1 {
  left: calc(48px + 450px);
}
.item2 {
  left: calc(48px + 450px + 450px);
}

.pic-list {
  position: absolute;
  top: 665px;
  left: 48px;
  width: 1824px;
  height: 274px;
  background-image: url("/static/images/corporatestyle/pics-border.png");

  .pics {
    position: absolute;
    top: 47px;
    width: 232px;
    height: 186px;
    background-image: url("/static/images/corporatestyle/pic-border.png");

    .pic-img {
      position: absolute;
      top: 11px;
      left: 10px;
      display: inline-block;
      width: 215px;
      height: 167px;
    }

    &.pic0 {
      left: 165px;
    }

    &.pic1 {
      left: 489px;
    }

    &.pic2 {
      left: 813px;
    }

    &.pic3 {
      left: 1130px;
    }

    &.pic4 {
      left: 1449px;
    }
  }
}
// 八大优势
.big-eight {
  left: calc(48px + 450px + 450px + 450px);
  top: 48px;
  position: absolute;
  width: 470px;
  height: 582px;
  overflow: hidden;
  .top-border {
    position: absolute;
    left: 0;
    top: 0;
  }
  .bottom-border {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .item-title {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 298px;
    background-image: url("/static/images/corporatestyle/title-desc.png");
    text-align: center;
    height: 23px;
    font-size: 25px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #e5e4eb;
    line-height: 24px;
    letter-spacing: 5px;
  }
  .big-eight-info {
    position: absolute;
    top: 110px;
    text-align: center;
    width: 100%;

    .big-eight-info-item {
      position: absolute;
      left: 160px;
      text-align: left;
      line-height: 50px;
      font-size: 21px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      color: #addcfe;
      position: relative;

      .item-list-img {
        position: absolute;
        top: 20px;
        left: -30px;
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>
