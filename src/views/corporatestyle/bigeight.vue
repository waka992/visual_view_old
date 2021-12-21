<template>
  <div>
    <BackGround />
    <Header title="八大优势" />
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
          src="/static/images/corporatestyle/bigeight/1.png"
        />
        <img
          class="item-logo"
          v-if="i == 1"
          src="/static/images/corporatestyle/bigeight/2.png"
        />
        <img
          class="item-logo"
          v-if="i == 2"
          src="/static/images/corporatestyle/bigeight/3.png"
        />
        <img
          class="item-logo"
          v-if="i == 3"
          src="/static/images/corporatestyle/bigeight/4.png"
        />
        <img
          class="item-logo"
          v-if="i == 4"
          src="/static/images/corporatestyle/bigeight/5.png"
        />
        <img
          class="item-logo"
          v-if="i == 5"
          src="/static/images/corporatestyle/bigeight/6.png"
        />
        <img
          class="item-logo"
          v-if="i == 6"
          src="/static/images/corporatestyle/bigeight/7.png"
        />
        <img
          class="item-logo"
          v-if="i == 7"
          src="/static/images/corporatestyle/bigeight/8.png"
        />
        <div class="item-title">{{ info.title }}</div>
        <div class="item-desc">
          {{ info.desc }}
          <div class="extra-desc" v-for="(extrainfo, j) in info.extra" :key="j">
            {{ extrainfo.info }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackGround from "@/components/BackGround2";
import Header from "@/components/Header";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";

export default {
  name: "BigEight",
  components: {
    Header,
    BackGround
  },

  data() {
    return {
      introList: [
        {
          title: "一站式的交易平台",
          desc:
            "广东有色金属交易中心是集铜、铝、铅、锌等有色金属交易品种为主，农产品交易品种协调的综合性一体的电子商务交易平台，后续还会不断引进符合政策以及市场需求的品种，打造一个规范的、安全的、快捷的交易平台。"
        },
        {
          title: "全方位的优质服务",
          desc:
            "广东有色金属交易中心提供交易、信息、结算、交收、申报、创新、融资等服务，在供需双方充当一个中立者的角色，提供一个公平、公正、公开交易平台。为会员企业提供透明、即时的交易信息，从而把传统的铺位经济模式，引导向席位经济模式发展，解决了信息不对称、采购成本高、社会资源配置不平衡等传统贸易模式导致的缺陷。极大地帮助相关企业规避现货市场价格波动所带来的经营风险。"
        },
        {
          title: "创新性的电子商务",
          desc:
            "广东有色金属交易中心，立足广东佛山，定位全国市场，建立网络经济，服务实体经济，实现有色金属交易市场的低成本高质量信息资讯的汇集。以小带大，产生飓风效应，带动大宗电子商务市场的发展！建立成为诚信、便利、实惠的电子贸易中心。"
        },
        {
          title: "专业化的信息服务",
          desc:
            "广东有色金属交易中心通过门户网站发布大量的行业信息促进行业间的沟通，根据交易平台上集中交易产生的价格变动、反映市场的供求变化，提供交易讯息专业化、更新迅速化、数据精准化的信息服务，形成权威、客观、及时的行业信息服务中心。"
        },
        {
          title: "完善的交收服务",
          desc:
            "广东有色金属交易中心通过提供并不断完善的电子化规范化的注册仓单，形成优质、高效、畅通的仓储物流等完善的交收服务，促进行业的不断发展。"
        },
        {
          title: "高效的流转服务",
          desc:
            "广东有色金属交易中心为客户规范交易资金管理、建立交易双方信用评估体系，增加交易资金的流量、加快流转速度，有效的解决了供应链资金流问题。"
        },
        {
          title: "便捷的融资服务",
          desc:
            "广东有色金属交易中心不仅为会员提供最新的信息化服务，同时还为会员企业提供政策奖励的申报服务、合同融资等方面的需求。"
        },
        {
          title: "广泛的合作模式",
          desc:
            "广东有色金属交易中心，汇聚全国信息、资金、整合资源，获取规模效益，与银行、担保公司、专业机构进行广泛的合作，提升商户交易规模，推动全国大宗商品市场的发展。",
          extra: [
            { info: "一.建立有色金属产业定价权 — 华南铝价" },
            { info: "二.组一个大联盟 — 四大业务重构产业生态 " },
            { info: "三.周边环境 — 有色金属总部群楼正在成形" }
          ]
        }
      ]
    };
  },

  methods: {}
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

.item {
  position: absolute;
  top: 48px;
  display: inline-block;
  width: 437px;
  height: 435px;
  background-image: url("/static/images/corporatestyle/bigeight/desc-border.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .item-logo {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 20px;
    left: 32px;
  }

  .item-title {
    position: absolute;
    top: 30px;
    left: 109px;
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

  .item-desc {
    position: absolute;
    top: 91px;
    left: 31px;
    width: 376px;
    height: 328px;
    font-size: 19px;
    font-family: SourceHanSansCN-Light;
    font-weight: 300;
    color: #9abcff;
    line-height: 32px;
    letter-spacing: 1px;
    text-align: justify;

    .extra-desc {
      margin-top: 20px;
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #e5e4eb;
      line-height: 20px;
    }
  }
}

.item0,
.item4 {
  left: 44px;
}
.item1,
.item5 {
  left: calc(44px + (33px + 426px) * 1);
}
.item2,
.item6 {
  left: calc(44px + (33px + 426px) * 2);
}
.item3,
.item7 {
  left: calc(44px + (33px + 426px) * 3);
}
.item4,
.item5,
.item6,
.item7 {
  top: 514px;
}
</style>
