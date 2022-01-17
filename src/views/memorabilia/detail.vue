<template>
  <div class="memorabilia-content">
    <BackGround :bgImage="''" />
    <Header title="发展历程" />
    <div class="body">
      <div class="bg"></div>

      <div class="pic-box">
        <div class="pic-desc">
          <img class="desc1" src="~@/assets/images/memorabilia/square.png">
          <img class="desc2" src="~@/assets/images/memorabilia/square.png">
          <img class="desc3" src="~@/assets/images/memorabilia/square.png">
          <img class="desc4" src="~@/assets/images/memorabilia/square.png">
        </div>

        <div class="pic-content">
          <div class="pic-info" :class="'pic-info'+i" v-for="(pic,i) in pics" :key="i">
            <img class="pic-bg" src="~@/assets/images/memorabilia/pic-border-45deg.png">
            <img class="pic-url" src="~@/assets/images/memorabilia/lizi.png">
          </div>
        </div>
      </div>

      <div class="detail">
        <div class="detail-date">
          {{detail.date}}
        </div>
        <div class="detail-title">{{detail.title}}</div>
        <div class="detail-line"></div>
        <div class="detail-info">
          {{detail.info}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BackGround from "@/components/BackGround2";
import "swiper/dist/css/swiper.css";

export default {
  name: "Memorabilia",
  components: {
    Header,
    BackGround
  },

  created() {
  },

  data() {
    return {
      detail: {
        date: '2014年3月25日',
        title: '广东有色金属交易平台\n开业暨有色金属电子交易系统启动仪式',
        info: '于2013年11月12日成立，由拥有20多年有色金属贸易实践经验的服务商共同投资组建，在有色金属，大宗商品现货交易、仓储、物流、融资等方面具有丰富的营运经验、雄厚的产业基础和广泛的市场资源，致力打造国内一流的交易平台。',
      },
      pics: [
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
      ]
    };
  },

  methods: {

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
  user-select: none;
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

.pic-box {
  position: absolute;
  top: 213px;
  left: 113px;

  .pic-content {
    .pic-info {
      position: absolute;
      z-index: 2;

      img {
        display: inline-block;
        width: 252px;
        height: 252px;
      }
    }
    .pic-info0 {
      left: 130px;top: 134px;
    }
    .pic-info1 {
      left: 269px;top: -6px;
    }
    .pic-info2 {
      left: 409px;top: 134px;
    }
    .pic-info3 {
      left: 269px;top: 270px;
    }

    .pic-bg {
      position: absolute;
      top: 0;
      left: 0;
    }

    .pic-url {
      //126px
       -webkit-clip-path:polygon(11px 126px,126px 11px,241px 126px,126px 241px,11px 126px);
    }
  }

  .pic-desc {
    width: 788px;
    height: 518px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

    .desc1,.desc2,.desc3,.desc4 {
      position: absolute;
    }

    .desc1 {
      top: 0;left: 0;
    }
    .desc2 {
      top: 0;right: 0;
    }
    .desc3 {
      bottom: 0;left: 0;
    }
    .desc4 {
      bottom: 0;right: 0;
    }
  }
  
}

.detail {
  position: absolute;
  top: 189px;
  left: 1045px;

  .detail-date {
    width: 308px;
    height: 51px;
    background-image: url("~@/assets/images/memorabilia/title-decorate.png");
    color: white;
    text-align: center;
    line-height: 51px;
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 27px;
  }

  .detail-title {
    top: 90px;
    color: #9ABCFF;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 8px;
    white-space: pre-line;
    line-height: 60px;
    margin-bottom: 135px;
  }
  
  .detail-info {
    display: inline-block;
    // background-image: url("~@/assets/images/memorabilia/pic-border.png");
    font-weight: 200;
    line-height: 54px;
    letter-spacing: 3px;
    font-size: 26px;
    color: #fff;
    width: 765px;
    height: 182px;
  }

  .detail-line {
    position: absolute;
    background-color: #caceda;
    width: 65px;
    height: 5px;
    top: 255px;
    left: 0;
  }
}


</style>
