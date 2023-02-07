<template>
  <div class="">
    <BackGround />
    <Header title="供需关系" />

    <div class="body">
      <div class="one">
        <div class="title">
          <div class="text">下游行业</div>
        </div>
        <div class="desc">
          <div v-for="(v, k) in industry.list" :key="k" class="item">
            <div class="t1">
              <img :src="v.img" alt="" srcset="" />
              <div class="t2">{{ v.title }}</div>
            </div>
            <div class="d1">
              {{ v.desc }}
            </div>
          </div>
        </div>
      </div>
      <div class="one1">
        <div>
          <div class="title">
            <div class="text">供需平衡</div>
          </div>
          <div>
            <div class="chart-wrapper">
              <SupplyLine ref="abc" :height="'35vh'" />
            </div>
          </div>
        </div>
        <div class="mt1">
          <div class="title">
            <div class="text">行业占比</div>
          </div>
          <div>
            <div class="chart-wrapper">
              <ReserveMap ref="abc1" :height="'35vh'" :index="type_val"/>
            </div>
          </div>
        </div>
      </div>
      <div class="one2">
        <div>
          <div class="title">
            <div class="text">加工企业</div>
          </div>
          <div class="desc">
            <div v-for="(v, k) in enterprise.list" :key="k" class="item">
              <div class="t1">
                <img :src="v.img" alt="" srcset="" />
                <div class="t2">{{ v.title }}</div>
                <div class="num">{{ v.num }}</div>
              </div>
              <div class="d1">
                {{ v.desc }}
              </div>
            </div>
          </div>
        </div>
        <div class="btns">
          <div
            @click="$router.push({ path: '/industrychain' })"
            class="btn btn1"
          >
            <img src="/static/images/supply-img9.png" alt="" srcset="" />
            <div>产业链</div>
          </div>
          <!-- <div @click="$router.push({ path: '/industrychain/trade' })" class="btn">
            <img src="/static/images/supply-img10.png" alt="" srcset="" />
            <div>贸易关系</div>
          </div> -->
          <div @click="$router.push({ path: '/industrychain/localsituation' })" class="btn">
            <img src="/static/images/supply-img10.png" alt="" srcset="" />
            <div>佛山概况</div>
          </div>
        </div>
        <div>
          <div class="desc">
            <div v-for="(v, k) in enterprise1.list" :key="k" class="item">
              <div class="t1">
                <img :src="v.img" alt="" srcset="" />
                <div class="t2">{{ v.title }}</div>
                <div class="num">{{ v.num }}</div>
              </div>
              <div class="d1">
                {{ v.desc }}
              </div>
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

import SupplyLine from "./components/SupplyLine";
import ReserveMap from "@/views/industry-chain/components/ReserveMap";

export default {
  name: "index",
  components: {
    SupplyLine,
    Header,
    BackGround,
    ReserveMap
  },
  data() {
    return {
      type_val: 0,
      industry: {
        list: [
            {
                title: "电力投资",
                desc:
                "电力行业是中国铜消费最大行业，需求较为稳定，占比45%左右。2022年，在“稳增长”总基调之下，基建发挥托底作用，带动电力电缆端用铜需求。",
                img: "/static/images/supply-img1.png",
            },
            {
                title: "房地产",
                desc:
                "美欧发达国家铜消费主要集中在地产行业，占比超50%。中国铜在房地产行业主要用于竣工阶段，如小区配电、室内布线、卫浴和水管等。",
                img: "/static/images/supply-img2.png",
            },
            {
                title: "家用电器",
                desc:
                "铜管消费主要是制冷领域，其中以空调为主，铜管是空调冰箱等制冷装置的重要原材料。",
                img: "/static/images/supply-img3.png",
            },
            {
                title: "汽车制造",
                desc:
                "汽车行业铜消费占比7%。2022年1-10月，汽车产销量分别达到2224.2万辆和2197.5万辆，同比增长7.9%和4.6%。",
                img: "/static/images/supply-img4.png",
            },
        ],
      },
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
    this.get_manufacturingenterprise(this.type_val);
    this.get_supply(this.type_val);
    this.get_industry(this.type_val);
  },
  methods: {
    // 获取下游企业
    get_downstreamindustry(mode = 1) {
      supply
        .downstreamindustry({
          fields: "id,title,description",
          commodity: 1,
        })
        .then((e) => {
          if (e.code != 1000) {
            return;
          }
          let data = []
          if (mode === 1) {
            this.industry.list = [
                {
                  title: "电力投资",
                  desc:
                    "电力行业是中国铜消费最大行业，需求较为稳定，占比45%左右。2022年，在“稳增长”总基调之下，基建发挥托底作用，带动电力电缆端用铜需求。",
                  img: "/static/images/supply-img1.png",
                },
                {
                  title: "房地产",
                  desc:
                   "美欧发达国家铜消费主要集中在地产行业，占比超50%。中国铜在房地产行业主要用于竣工阶段，如小区配电、室内布线、卫浴和水管等。",
                  img: "/static/images/supply-img2.png",
                },
                {
                  title: "家用电器",
                  desc:
                    "铜管消费主要是制冷领域，其中以空调为主，铜管是空调冰箱等制冷装置的重要原材料。",
                  img: "/static/images/supply-img3.png",
                },
                {
                  title: "汽车制造",
                  desc:
                    "汽车行业铜消费占比7%。2022年1-10月，汽车产销量分别达到2224.2万辆和2197.5万辆，同比增长7.9%和4.6%。",
                  img: "/static/images/supply-img4.png",
                },
            ]
          }
          if (mode === 2) {
            this.industry.list = [
                {
                  title: "建筑业",
                  desc:
                    "建筑业是我国铝材最大的下游应用领域，占比达到32%。铝合金广泛应用于建筑工程结构和建筑装饰，如门窗框、幕墙、顶棚及隔断等。",
                  img: "/static/images/supply-img2.png",
                },
                {
                  title: "电子电力",
                  desc:
                   "由于铝具有良好导电性能和密度低、质量轻的特性，在电力行业中用于制造电线电缆、母线及导体及其它输配电设备等，同时是计算机、通讯设备、个人电子消费品等重要电子产品领域的原材料。",
                  img: "/static/images/supply-img1.png",
                },
                {
                  title: "交通运输",
                  desc:
                    "汽车制造、铁路及轨道车辆制造以及集装箱制造是电解铝在交通运输领域应用最广的三大细分行业。其中，新能源汽车及汽车轻量化发展成为近期铝消费的新增长点，2022年1-10月，中国新能源汽车累计产量549万辆，占汽车总产量的25%，该比值在2020年仅为5%。单车铝合金使用量比传统燃油车多40%左右。",
                  img: "/static/images/supply-img4.png",
                },
            ]
          }
        //   else {
        //     data = e.data.results;
        //     data.map((v, k) => {
        //       this.industry.list[k].title = v.title;
        //       this.industry.list[k].desc = v.description;
        //     });
        //   }
        });
    },
    // 获取加工企业
    get_manufacturingenterprise(mode = 1) {
      supply
        .manufacturingenterprise({
          fields: "id,title,annual_production,icon,description",
          ordering: "-annual_production",
          commodity: 1,
        })
        .then((e) => {
          if (e.code != 1000) {
            return;
          }
          let data = []
          if (mode === 2) {
              this.enterprise = {
                list: [
                  {
                    title: "山东魏桥",
                    num: "产量: 646万吨/年",
                    desc:
                      "山东魏桥铝电有限公司是一家集热电铝业联产的民营企业。成立于2002年，是集热电、氧化铝、电解铝、铝深加工于一体的特大型综合企业。",
                    img: "/static/images/supply-img14.png",
                  },
                  {
                    title: "中国铝业",
                    num: "产量: 386万吨/年",
                    desc:
                      "中国铝业股份有限公司是中央管理的国有重要骨干企业，从事矿产资源开发、有色金属冶炼加工、相关贸易及工程技术服务等，同业综合实力位居全国第一。",
                    img: "/static/images/supply-img13.png",
                  },
                ],
              }
            this.enterprise1 = {
              list: [
                {
                  title: "信发铝电",
                  num: "产量: 218万吨/年",
                  desc:
                    "山东信发铝电集团有限公司是集发电、供热、电解铝、氧化铝、中高密度板、铝深加工等产业链条于一体的现代化大型企业集团",
                  img: "/static/images/supply-img15.png",
                },
                {
                  title: "云铝股份",
                  num: "产量: 241万吨/年",
                  desc:
                    "铝土矿开采、氧化铝生产、铝冶炼、铝加工及铝用炭素生产，形成了集铝土矿、氧化铝、电解铝、铝加工及铝用炭素生产为一体的完整产业链。",
                  img: "/static/images/supply-img7.png",
                },
              ],
            }
          }
          else {
              this.enterprise= {
                list: [
                  {
                    title: "江西铜业",
                    num: "产量: 178万吨/年",
                    desc:
                      "中国国内最大的铜生产基地，最大的伴生金、银生产基地。公司年加工铜产品超过160万吨，阴极铜产量超过170万吨/年。",
                    img: "/static/images/supply-img5.png",
                  },
                  {
                    title: "铜陵有色",
                    num: "产量: 160万吨/年",
                    desc:
                      "年产量160万吨，占国内总产量的15%。名列国内、国际精炼铜生产企业前茅。",
                    img: "/static/images/supply-img6.png",
                  },
                ],
              }
              this.enterprise1= {
                list: [
                  {
                    title: "云南铜业",
                    num: "产量: 135万吨/年",
                    desc:
                      "是中国重要的铜、金、银和硫化工生产基地。其中阴极铜产能超130万吨/年。",
                    img: "/static/images/supply-img7.png",
                  },
                  {
                    title: "紫金矿业",
                    num: "产量: 58万吨/年",
                    desc:
                      "通过资源并购及自主勘查，紫金矿业铜资源储量持续快速增长，其在海外12个国家拥有重要矿业投资项目，其中包括6座铜矿。",
                    img: "/static/images/supply-img8.png",
                  },
                ],
              }
          }
        });
    },
    // 获取供需关系
    get_supply(mode = 1) {
      let option = {
        // grid: {
        //   right: 140,
        // },
        legend: {
          textStyle: {
            color: "#2a71b5",
          },
          show: true,
        },
        xAxis: {
          type: "category",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          axisLine: {
            lineStyle: {
              width: 2,
              color: "#E6D90C",
            },
          },
          nameLocation: "middle",
        },
        yAxis: {
          type: "value",
          axisLine: { show: false },
          axisTick: { show: false },
          // minorTick: { show: false },
          axisLabel: {
            show: true,
            color: "#E6D90C",
          },
          splitLine: { show: true, lineStyle: {type: 'dashed'} },
          // minorSplitLine: { show: false },
          // splitArea: { show: false },
        },
        // tooltip: {
        //   trigger: "axis",
        // },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260, 100, 100, 100, 100, 100],
            type: "line",
            itemStyle: {
              color: "#E20A3C",
            },
            name: "年度缺口",
            showSymbol: false,
          },
          // {
          //   data: [100, 100, 100, 100, 100, 150, 230, 224, 218, 135, 147, 260],
          //   type: "line",
          //   itemStyle: {
          //     color: "#E1B738",
          //   },
          //   name: "生产量",
          //   showSymbol: false,
          // },
        ],
      };
        let data = [
           ]
           if (this.type_val == 1) {
             data = [
                {"id":1,"statis_date":"2006","amount": 27.80 },
                {"id":2,"statis_date":"2007","amount": -11.90 },
                {"id":3,"statis_date":"2008","amount": 34.30 },
                {"id":4,"statis_date":"2009","amount": 41.00 },
                {"id":5,"statis_date":"2010","amount": 1.82 },
                {"id":6,"statis_date":"2011","amount": 25.00 },
                {"id":7,"statis_date":"2012","amount": 25.00 },
                {"id":8,"statis_date":"2013","amount": 28.30 },
                {"id":9,"statis_date":"2014","amount": 11.60 },
                {"id":10,"statis_date":"2015","amount": 14.10 },
                {"id":11,"statis_date":"2016","amount": -10.20 },
                {"id":12,"statis_date":"2017","amount": 13.80 },
                {"id":13,"statis_date":"2018","amount": -1.90 },
                {"id":14,"statis_date":"2019","amount": -9.40 },
                {"id":15,"statis_date":"2020","amount": -139.10 },
              ]
           }
           else {
              data = [
                {"id":1,"statis_date":"2006","amount": 34.10  },
                {"id":2,"statis_date":"2007","amount": 17.80  },
                {"id":3,"statis_date":"2008","amount": 125.10  },
                {"id":4,"statis_date":"2009","amount": 76.90  },
                {"id":5,"statis_date":"2010","amount": 98.90  },
                {"id":6,"statis_date":"2011","amount": 188.70  },
                {"id":7,"statis_date":"2012","amount": 34.90  },
                {"id":8,"statis_date":"2013","amount": 56.90  },
                {"id":9,"statis_date":"2014","amount": -58.90  },
                {"id":10,"statis_date":"2015","amount": -65.90  },
                {"id":11,"statis_date":"2016","amount": -77.00  },
                {"id":12,"statis_date":"2017","amount": -120.90  },
                {"id":13,"statis_date":"2018","amount": -99.30  },
                {"id":14,"statis_date":"2019","amount": 68.50  },
                {"id":15,"statis_date":"2020","amount": 154.60  },
              ]
            }
            let xAxisData = []
         
            data.map((v, k) => {
              let name = v.statis_date;
              let value = v.amount;

              option.xAxis.data.unshift(name);
              option.series[0].data.push(value);
            });
            option.xAxis.data = xAxisData
          this.$refs.abc.updateChart(option);
    },
    // 行业占比
    get_industry(mode = 1) {
      let option = {
        title: {
          show: false,
        },
        tooltip: {
          trigger: "item",
        },
        grid: {
          left: "13%",
          right: "60%",
          top: "4%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          show: false,
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: [],
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#fff",
          },
        },
        series: [
          {
            type: "bar",
            barWidth: "30%",
            data: [
            ],
            label: {
                formatter: (e) => {
                return e.data.value + '%'
              }
            }
          },
          {
            type: "pie",
            radius: [0, "60%"],
            center: ["68%", "45%"],
            showEmptyCircle: false,
            data: [
  
            ],
            roseType: "radius",
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
            label: {
              color: "#6EBAEE",
            },
            labelLine: {
              lineStyle: {
                color: "#6EBAEE",
                type: "dashed",
              },
            },
            emphasis: {
              labelLine: {
                lineStyle: {
                  color: "#6EBAEE",
                  type: "dashed",
                },
              },
            },
            markPoint: {
              show: false,
            },
            markLine: {
              show: false,
            },
            markArea: {
              show: false,
            },
          },
        ],
      };
      let data = []
      if (this.type_val == 1) {
        data = [
          {name: '电力投资', percent: 45},
          {name: '房地产', percent: 18},
          {name: '家用电器', percent: 16},
          {name: '汽车制造', percent: 7},
          {name: '其他', percent: 14},
        ]
      }
      else {
        data = [
          {name: '建筑业', percent: 32},
          {name: '电子电力', percent: 16},
          {name: '交通运输', percent: 13},
          {name: '耐用消费品', percent: 11},
          {name: '钢材铝合金', percent: 12},
          {name: '其他', percent: 16},
        ]
      }
        let colorArr = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
        data.map((v, k) => {
          let name = v.name;
          let name1 = `${k + 1} ${name}`;
          let value = v.percent;

          // let color = random_color();

          option.yAxis.data.unshift(name1);
          
          option.series[0].data.unshift({
            value,
            name,
            itemStyle: {
              color: colorArr[k]
            }
          });
          option.series[1].data.unshift({
            value,
            name,
            itemStyle: {
              color: colorArr[k]
            },
          });
        });
        this.$refs.abc1.updateChart(option);
    },
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

  display: flex;
  flex-direction: row;
  margin-top: 20px;
  color: $white;
  font-size: 20px;

  .text,.t1,.d1,.btns {
      user-select: none;
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
    }
  }

  .one {
    flex: 1;
    .desc {
      background: $blue;
      padding: 20px 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 76.3vh;
      .item {
        flex: 1;
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
        }
      }
    }
  }
  .one1 {
    flex: 2;
    margin: 0 20px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .chart-wrapper {
      background: $blue;
    }
    .mt1 {
    }
  }
  .one2 {
    flex: 1;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .desc {
      height: 36vh;
      background: $blue;
      padding: 20px 10px;
      .item {
        position: relative;
        margin-bottom: 20px;
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

    .btns {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 10px 0;
      .btn {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        background: $blue;
        padding: 10px;
        img {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
      .btn1 {
        margin-right: 10px;
      }
    }
  }
}
</style>
