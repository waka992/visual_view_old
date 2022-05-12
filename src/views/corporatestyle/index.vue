<template>
  <div>
    <BackGround />
    <Header title="企业风采" />
    <div class="content">
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
        <div class="item-title">发展历程</div>
        <!-- <div class="item-title"  @click="$router.push({ path: '/memorabilia' })">发展历程</div> -->
      </div>

      <div class="big-eight" @click="$router.push({ path: '/corporatestyle/bigeight' })">
        <div class="item-title">八大优势</div>
        <div class="big-eight-info">
          <div class="big-eight-info-item" v-for="(v, i) in bigEight" :key="i">
            <img class="item-list-img" src="/static/images/foshan-star.png" />
            {{ v.info }}
          </div>
        </div>
      
      </div>
      <!-- 预览图片 -->
      <div class="preview-box" @click="closePreview" v-if="prevFlag">
        <div class="preview-pic" ref="imgArea">
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
      previewArr: [],
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
            "2014年，在区、镇两级政府的大力支持下，广东有色金属交易平台正式成立，旨在重塑大沥产业结构，助力产业升级。交易中心为会员提供交易服务、结算服务、交收服务、信息服务及其他创新服务。"
        },
        {
          title: "产业集聚",
          desc:
            "交易中心在广佛国际商贸中心区的龙汇大厦落实，吸引越来越多有色金属上下游企业汇聚于此，助力有色金属产业经济迈上新征程。广东粤汇金属交易中心会员数量从2014年160家增加到2021年超4000家，会员遍布全国各地。"
        },
        {
          title: "持续发展",
          desc:
            "交易中心实现了有色金属现货产品高效流转。交易额从2014年421.89亿元增长到2021年4343.82亿元。交易中心发布“华南铝价”、成立广东南海有色金属产业联盟,推动产业链不断延伸，争夺行业话语权，成为华南地区有色金属企业总部的汇聚点。"
        }
      ],
      picList: [
          { url: "/static/images/corporatestyle/co-1.jpg", hdurl: '/static/images/corporatestyle/co-1-hd.png'},
        { url: "/static/images/corporatestyle/pic-1.png", hdurl: '/static/images/corporatestyle/pic-1-hd.jpg'},
        { url: "/static/images/corporatestyle/co-3.jpg", hdurl: '/static/images/corporatestyle/co-3-hd.jpg'},
        { url: "/static/images/corporatestyle/co-2.png", hdurl: '/static/images/corporatestyle/co-2-hd.jpg'},
        // { url: "/static/images/corporatestyle/pic-5.png", hdurl: '/static/images/corporatestyle/pic-5-hd.jpg'}
      ]
    };
  },

  methods: {
    preview(i) {
      this.prevFlag = true
      this.$nextTick(() => {
        this.$refs.imgArea.appendChild(this.previewArr[i])
      })
    },
    closePreview() {
      this.prevFlag = false
    },
    preload(arr) {
      for (let i = 0; i < arr.length; i++) {
        let img = new Image()
        img.src = arr[i].hdurl
        img.style.display = 'inline-block'
        img.style.width = '100%'
        img.style.height = '100%'
        this.previewArr[i] = img
      }
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
  },
  mounted() {
    this.preload(this.picList)
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
  user-select: none;

  &::after {
    content: '';
    position: absolute;
    left: 60%;
    bottom: 0;
    width: 100%;
    transform: translateX(-63%);
    height: 100%;
    background-image: url("/static/images/corporatestyle/light.png");
    background-repeat: no-repeat;
    opacity: 0.5;
  }
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

    img {
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
  width: 592px;
  height: 452px;
  background-image: url("/static/images/corporatestyle/info-border.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .item-logo {
    width: 124px;
    height: 124px;
    position: absolute;
    top: 37px;
    left: 45px;
  }

  .item-desc {
    position: absolute;
    top: 196px;
    left: 61px;
    width: 472px;
    height: 212px;
    font-size: 21px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #9abcff;
    line-height: 34px;
    letter-spacing: 2px;
  }
  .item-title {
    position: absolute;
    top: 79px;
    left: 218px;
    display: inline-block;
    width: 300px;
    background-image: url("/static/images/corporatestyle/title-desc.png");
    background-repeat: no-repeat;
    text-align: center;
    height: 40px;
    line-height: 36px;
    font-size: 25px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #e5e4eb;
    letter-spacing: 5px;
  }
}

.item0 {
  left: 44px;
}
.item1 {
  left: 670px;
}
.item2 {
  left: 1290px;
}

.pic-list {
  position: absolute;
  top: 525px;
  left: 670px;
  width: 1210px;
  height: 417px;
  background-image: url("/static/images/corporatestyle/pics-border.png");
  background-repeat: no-repeat;
  overflow: hidden;
  z-index: 99;

  .item-title {
    position: absolute;
    top: 44px;
    left: 780px;
    display: inline-block;
    width: 388px;
    background-image: url("/static/images/corporatestyle/title-arrow2.png");
    background-repeat: no-repeat;
    text-align: center;
    height: 98px;
    font-size: 25px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #fff;
    line-height: 98px;
    letter-spacing: 5px;
    z-index: 99;
  }


  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:linear-gradient(to right, transparent, #02071e3f)
  }

  .pics {
    position: absolute;
    top: 47px;
    width: 232px;
    height: 186px;
    background-image: url("/static/images/corporatestyle/pic-border.png");
    z-index: 100;

    .pic-img {
      position: absolute;
      top: 11px;
      left: 10px;
      display: inline-block;
      width: 215px;
      height: 167px;
    }

    &.pic0 {
      left: 57px;
      top: 37px;
      z-index: 10;
    }

    &.pic1 {
      left: 280px;
      top: 193px;
      z-index: 9;
    }

    &.pic2 {
      left: 496px;
      top: 37px;
      z-index: 8;
    }

    &.pic3 {
      left: 711px;
      top: 193px;
      z-index: 7;
    }

    &.pic4 {
      left: 1449px;
    }
  }
}
// 八大优势
.big-eight {
  left: 50px;
  top: 527px;
  position: absolute;
  width: 587px;
  height: 415px;
  overflow: hidden;
  background-image: url("/static/images/corporatestyle/big-eight-border.png");
  z-index: 99;

  .item-title {
    position: absolute;
    top: 3px;
    left: 3px;
    display: inline-block;
    width: 587px;
    background-image: url("/static/images/corporatestyle/title-arrow.png");
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
  .big-eight-info {
    position: absolute;
    top: 139px;
    text-align: center;
    width: 100%;

    .big-eight-info-item {
      display: inline-block;
      width: 293px;
      text-indent: 73px;
      letter-spacing: 2px;
      // position: absolute;
      text-align: left;
      line-height: 50px;
      font-size: 21px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      color: #addcfe;
      position: relative;

      .item-list-img {
        position: absolute;
        top: 18px;
        left: 46px;
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
