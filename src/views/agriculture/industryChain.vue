<template>
  <div class="">
    <BackGround />
    <Header title="供给端" />

    <div class="body">
      <div class="one">
        <WorldMap ref="abc2" :height="'80vh'" />
      </div>
      <div class="one2">
        <div class="pos">
          <div
            @click="mode_sel(v, k)"
            v-for="(v, k) in mode.list"
            :key="k"
            class="btn"
            :class="[k == mode.index ? 'active' : '']"
          >
            {{ v.text }}
          </div>
        </div>
        <div>
          <div class="title">
            <div class="text">{{mode.index == 0 ? '2020年大豆' : '2021年玉米'}}进口国进口量</div>
          </div>
          <div class="desc">
            <ReserveMap ref="abc" :height="'43vh'" :index="mode.index"/>
          </div>
        </div>
        <div class="btns">
          <div @click="$router.push({ path: '/agriculture/demand', name: 'agriculturedemand', params:{type: mode.index}})" class="btn btn1">
            <img src="/static/images/industrychain-1.png" alt="" srcset="" />
            <div>供需关系</div>
          </div>
          <!-- <div @click="$router.push({ path: '/industrychain/trade' })" class="btn">
            <img src="/static/images/supply-img10.png" alt="" srcset="" />
            <div>贸易关系</div>
          </div> -->
          <!-- <div @click="$router.push({ path: '/industrychain/localsituation' })" class="btn">
            <img src="/static/images/supply-img10.png" alt="" srcset="" />
            <div>佛山概况</div>
          </div> -->
        </div>
        <div>
          <div class="title">
            <div class="text">{{mode.index == 0 ? '大豆' : '玉米'}}主要国家产量排名</div>
          </div>
          <div class="desc">
            <ProductionBar ref="abc1" :height="'20vh'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let dd = console.log;

import * as industrychain from "@/api/industrychain";

import Header from "@/components/Header";
import BackGround from "@/components/BackGround2";
import WorldMap from "@/views/industry-chain/components/WorldMap";

import ReserveMap from "@/views/industry-chain/components/ReserveMap";
import ProductionBar from "@/views/industry-chain/components/ProductionBar";

export default {
  name: "Resource",
  components: {
    Header,
    BackGround,
    WorldMap,
    ReserveMap,
    ProductionBar,
  },

  data() {
    return {
      mode: {
        index: 0,
        list: [
          {
            text: "豆粕",
            val: 1,
          },
          {
            text: "玉米",
            val: 2,
          },
          //   {
          //     text: "铅",
          //     val: 3,
          //   },
          //   {
          //     text: "锌",
          //     val: 4,
          //   },
        ],
      },
      modeSetFlag: false, // 限制铜铝按钮操作太快
    };
  },
  mounted() {
    this.modeSetFlag = false
    this.get_fly(1);
    this.mode_sel(this.mode.list[0], 0);
  },
  methods: {
    mode_sel(v, k) {
        if (this.modeSetFlag) {return}
        this.modeSetFlag = true
        setTimeout(() => {
            this.modeSetFlag = false
        }, 1000);
        this.mode.index = k;
        this.get_sort(v.val);
        this.get_trend(v.val);
        this.get_fly(v.val);
    },
    // 获取排名
    get_sort(mode = 1) {
      let option = {
        title: {
          show: false,
        },
        tooltip: {
          trigger: "item",
        },
        grid: {
          left: "0%",
          // right: "4%",
          top: "75%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          show: false,
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: ["中国"],
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
          },
          {
            type: "pie",
            radius: [0, "58%"],
            center: ["50%", "35%"],
            data: [
              {
                value: 400,
                name: "中国",
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#46BFEC", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#35B1DE", // 100% 处的颜色
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      };
        let data = []
        if (mode == 1) {
          data = [
            {country: '巴西', amount: 6207.24, percent: 62},
            {country: '美国', amount: 2361.25, percent: 24},
            {country: '阿根廷', amount: 745.57, percent: 7},
            {country: '其他国家', amount: 717.39, percent: 7},
          ]
        }
        else {
          data = [
            {country: '美国', amount: 1958.94, percent: 73},
            {country: '乌克兰', amount: 731.49, percent: 27},
            {country: '其他国家', amount: 10.58, percent: 0},
          ]
        }
          option.yAxis.data = [];
          option.series[0].data = [];
          option.series[1].data = [];

          let colorArr = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
          data.map((v, k) => {
            let name = v.country;
            let nameBar = `${k + 1} ${name}`;
            let namePie = `${name} ${v.percent}%`
            let value = v.amount;

            // let color = random_color();

            option.yAxis.data.unshift(nameBar);
            
            option.series[0].data.unshift({
              value,
              nameBar,
              itemStyle: {
                color: colorArr[k]
              }
            });
            option.series[1].data.unshift({
              value,
              name: namePie,
              itemStyle: {
                color: colorArr[k]
              },
            });
          });
          this.$refs.abc.updateChart(option);
    },
    // 获取趋势
    get_trend(mode = 1) {
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        textStyle: {
          fontStyle: {
            color: "#fcc26f",
          },
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
              color: "#E6D90C",
            },
          },
          data: ["2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        },
        yAxis: {
          show: true,
          name: "亿吨",
          nameLocation: "end",
          nameTextStyle: {
            // 坐标轴名称样式
            color: "#E6D90C",
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
              color: "#E6D90C",
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
          top: 20,
          bottom: 20,
          show: true,
          borderColor: "transparent",
          backgroundColor: "rgba(63,28,85,0.2)",
        },
        series: [
          {
            name: "铜",
            type: "bar",
            barWidth: "20%",
            data: [1000, 5200, 2000, 3340, 3900, 3300, 2200],
            itemStyle: {
              normal: { color: "#E6D90C" },
            },
          },
        ],
      };
      let data =[]
      if(mode == 1) {
        data = [
          {country: '中国', amount: 0.16},
          {country: '阿根廷', amount: 0.50},
          {country: '美国', amount: 1.20},
          {country: '巴西', amount: 1.44},
        ]
      }
      else {
        data = [
          {country: '欧盟27国', amount: 0.70},
          {country: '巴西', amount: 1.18},
          {country: '中国', amount: 2.73},
          {country: '美国', amount: 3.83},
        ]
      }
          option.xAxis.data = [];
          option.series[0].data = [];

          data.map((v, k) => {
            let name = v.country;
            let value = v.amount;

            option.xAxis.data.push(name);
            option.series[0].data.push(value);
          });

          this.$refs.abc1.updateChart(option);
    },
    // 获取飞线
    get_fly(mode = 1) {
      let option = {
        title: {
          show: false,
        },
        geo: {
          zoom: 1,
          map: "world",
          roam: false, //是否可手势或者鼠标滚轮放大缩小
          left: 10, //如果为0可最大化的在画布上显示地图，但也可能边缘处有的被隐藏，所以留一定的距离
          right: 10,
          label: {
            show: false,
          },
          itemStyle: {
            areaColor: "#002E57",
            borderColor: "#A3D2F3",
            borderWidth: 1,
          },
          emphasis: {
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: "#D9EEFF",
            },
          },
          regions: [
            //这里可自定义每一个国家的颜色
            // { name: "China", itemStyle: { areaColor: "green" } },
          ],
        },
        series: [
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            symbol: "circle",
            symbolSize: 10, //这里也是可以用一个函数的，根据数据来决定标记的大小
            label: {
              show: true,
              formatter: (params) => {
                  return params.name
              }
            },
            tooltip: {
              show: false,
            },
            itemStyle: {
              color: "#FDFE2A",
              shadowBlur: 10,
            },
            data: [
              {
                value: [121.450802, 31.201617], //[经度,维度]
              },
              {
                value: [30.28, 116.0],
              },
            ],
            zlevel: 2,
          },
          {
            type: "lines",
            zlevel: 3,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow", //箭头图标
              symbolSize: 5, //图标大小
              color: "#E78A37",
            },
            lineStyle: {
              color: "#FDFE2A",
              width: 1, //线条宽度
              // opacity: 0.1, //尾迹线条透明度
              curveness: 0.3, //尾迹线条曲直度
            },
            data: [
              {
                coords: [
                  [-77.02, 38.54],
                  [116.46, 39.92],
                ],
              },
            ],
          },
        ],
      };

          // 铝
          let data = []
          if (mode === 1) {
             data = [
               {"id":1,"longitude_start":-47.55,"latitude_start":-15.47,"longitude_end":115.27226,"latitude_end":38.635842, name: '巴西'},
               {"id":2,"longitude_start":-77.02,"latitude_start":39.91,"longitude_end":115.27226,"latitude_end":38.635842, name: '美国'},
               {"id":3,"longitude_start":-60.00,"latitude_start":-36.30,"longitude_end":115.27226,"latitude_end":38.635842, name: '阿根廷'},
            ]
          }
          else {
            // data = e.data.results;
            
            data = [
               {"id":4,"longitude_start":-77.02,"latitude_start":39.91,"longitude_end":115.27226,"latitude_end":38.635842, name: '美国'},
               {"id":5,"longitude_start":30.28,"latitude_start":50.30,"longitude_end":115.27226,"latitude_end":38.635842, name: '乌克兰'},
            ]
          }
          option.series[0].data = [];
          option.series[1].data = [];

          data.map((v, k) => {
            // let temp = ''
            let start_x = v.longitude_start;
            let start_y = v.latitude_start;

            // temp =  start_x
            // start_x =  start_y
            // start_y =  temp

            let end_x = v.longitude_end;
            let end_y = v.latitude_end;

            // temp =  end_x
            // end_x =  end_y
            // end_y =  temp

            option.series[0].data.push({
              value: [start_x, start_y],
              name: v.name
            });
            option.series[0].data.push({
              value: [end_x, end_y],
              name: ''
            });
            option.series[1].data.push({
              coords: [
                [start_x, start_y],
                [end_x, end_y],
              ],
            });
          });

          this.$refs.abc2.updateChart(option);
    },
  },
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

.text,.btn {
    user-select: none;
}
.body {
  // box-sizing: border-box;
  padding: 0 20px;
  padding-top: 20px;

  display: flex;
  flex-direction: row;
  color: $white;

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
    width: 70vw;
    margin-right: 20px;
  }
  .one2 {
    position: relative;
    width: 30vw;
    .desc {
      background: $blue;
      padding: 20px;
    }

    .btns {
      margin: 10px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
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

    .pos {
      top: 20vh;
      left: -4vw;
      position: absolute;
      display: flex;
      flex-direction: column;
      .btn {
        width: 3vw;
        height: 3vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        background: $blue;
        padding: 5px;
        margin-bottom: 10px;
        border-radius: 10px;
      }
      .btn.active {
        color: $yellow;
        border: 2px solid $yellow;
      }
    }
  }
}
</style>
