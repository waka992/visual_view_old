<template>
  <div class="">
    <BackGround />
    <Header title="产业链" />

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
            <div class="text">我国铜铝在全球地位</div>
          </div>
          <div class="desc">
            <ProductionBar ref="importpercent" :height="'13vh'"/>
          </div>
        </div>
     
        <div class="btns">
          <div @click="$router.push({ path: '/supply', name: 'supply', params:{type: mode.index}})" class="btn btn1">
            <img src="/static/images/industrychain-1.png" alt="" srcset="" />
            <div>供需关系</div>
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
          <div class="title">
            <div class="text">{{mode.index == 0 ? '铜矿' : '铝土矿'}}进口量趋势图</div>
          </div>
          <div class="desc">
            <ProductionBar ref="abc1" :height="'13vh'"/>
          </div>
        </div>
        <div  style="margin-top:13px;">
          <div class="title">
            <div class="text">{{mode.index == 0 ? '精炼铜' : '铝土矿'}}进口来源国家排名</div>
          </div>
          <div class="desc">
            <ReserveMap ref="abc" :height="'31vh'" :index="mode.index"/>
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
import WorldMap from "./components/WorldMap";

import ReserveMap from "./components/ReserveMap";
import ProductionBar from "./components/ProductionBar";

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
          //商品类型，1铜 2铝 3铅 4锌
          {
            text: "铜",
            val: 1,
          },
          {
            text: "铝",
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
      this.getImport(v.val)
    },
    // 获取排名
    get_sort(mode = 1) {
      let option = {
        title: {
          show: false,
        },
        tooltip: {
          trigger: "none",
        },
        grid: {
          left: "0%",
          right: "60%",
          top: "0%",
          bottom: "65%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          show: false,
          boundaryGap: [0, 0.01],
          interval: 0,
          nameTextStyle: {
            align: 'left'
          },
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
          nameTextStyle: {
            align: 'left'
          },
          boundaryGap: [0, 0.01],
        },
        series: [
          {
            type: "bar",
            barWidth: "50%",
            // barCategoryGap: '20%',
            label: {
            },
            data: [
              // {
              //   value: 100,
              //   name: "美国",
              //   itemStyle: {
              //     color: {
              //       type: "linear",
              //       x: 0,
              //       y: 0,
              //       x2: 0,
              //       y2: 1,
              //       colorStops: [
              //         {
              //           offset: 0,
              //           color: "#FF002C", // 0% 处的颜色
              //         },
              //         {
              //           offset: 1,
              //           color: "#FF3881", // 100% 处的颜色
              //         },
              //       ],
              //     },
              //   },
              // },
            ],
          },
          {
            type: "pie",
            radius: [0, "72%"],
            center: ["60%", "56%"],
            showEmptyCircle: false,
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

      if (mode == 2) {
        option.series[0].label.formatter = (e) => {
          return e.data.value + '%'
        }
      }
      else {
        option.series[0].label.formatter = (e) => {
          return e.data.value + '万吨'
        }
      }

      industrychain
        .materialimportsource({
          ordering: "-amount",
          fields: "id,amount,country",
          commodity: mode,
          expand: "country",
          year: "2021",
        })
        .then((e) => {
          if (e.code != 1000) {
            return;
          }
          let data = e.data.results;
        /**  增加data的处理，防止饼图大小差异太大 */
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            data[i].percentage = Math.log(element.amount) - 1.6 // 大约-1.6图像比较合理
          }
        /**  增加data的处理，防止饼图大小差异太大 */
          

          option.yAxis.data = [];
          option.series[0].data = [];
          option.series[1].data = [];

          function random_color() {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let color = "rgba(" + r + "," + g + "," + b + ",1)";

            return color;
          }
          let colorArr = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
          data.map((v, k) => {
            let name = v.country.title;
            let name1 = `${k + 1} ${name}`;
            let value = v.amount;
            let percentage = v.percentage

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
              value:percentage,
              name,
              itemStyle: {
                color: colorArr[k]
              },
            });
          });
          this.$refs.abc.updateChart(option);
        });
    },
    // 获取趋势
    get_trend(mode = 1) {
      let option = {
        tooltip: {
          trigger: "none",
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
              color: "#addcfe",
            },
          },
          data: ["2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        },
        yAxis: {
          show: true,
          name: "万吨",
          nameLocation: "end",
          nameTextStyle: {
            // 坐标轴名称样式
            color: "#addcfe",
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
              color: "#addcfe",
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
              normal: { color: (params) =>  {
                  let colorArr = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
                  return colorArr[params.dataIndex]
              } },
            },
          },
        ],
      };

      industrychain
        .materialimporttotal({
          ordering: "-statis_date",
          fields: "id,statis_date,amount",
          commodity: mode,
          query_years: 6,
        })
        .then((e) => {
          if (e.code != 1000) {
            return;
          }
          let data = e.data.results;
          option.xAxis.data = [];
          option.series[0].data = [];

          data.map((v, k) => {
            let name = v.statis_date;
            let value = v.amount;

            option.xAxis.data.unshift(name);
            option.series[0].data.unshift(value);
          });


          this.$refs.abc1.updateChart(option);
        });
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
          if (mode === 2) {
            data = [{"id":6,"longitude_start":134.846984,"latitude_start":-25.431389,"longitude_end":115.27226,"latitude_end":38.635842, name:'澳大利亚'},
            {"id":7,"longitude_start":-10.051821,"latitude_start":10.442355,"longitude_end":115.27226,"latitude_end":38.635842, name:'几内亚'},
            {"id":8,"longitude_start":120.146969,"latitude_start":-2.239847,"longitude_end":115.27226,"latitude_end":38.635842, name:'印度尼西亚'}]
          }
          else {
            // data = e.data.results;
            data = [{"id":2,"longitude_start":139.630281,"latitude_start":36.661181,"longitude_end":115.27226,"latitude_end":38.635842, name:'日本'},
            {"id":3,"longitude_start":68.248769,"latitude_start":47.97209,"longitude_end":115.27226,"latitude_end":38.635842, name:'哈萨克斯坦'},
            {"id":4,"longitude_start":134.846984,"latitude_start":-25.431389,"longitude_end":115.27226,"latitude_end":38.635842, name:'澳大利亚'},
            {"id":5,"longitude_start":-71.03774,"latitude_start":-29.434142,"longitude_end":115.27226,"latitude_end":38.635842, name:'智利'}]
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
    // 铜铝进口占比
    getImport(mode = 1) {
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
              color: "#addcfe",
            },
          },
          data: ["2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        },
        yAxis: {
          show: true,
          name: "百分比 % ",
          nameLocation: "end",
          nameTextStyle: {
            // 坐标轴名称样式
            color: "#addcfe",
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
              color: "#addcfe",
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
        label: {
          color: '#addcfe'
        },
        series: [
          {
            name: "铜",
            type: "bar",
            barWidth: "20%",
            data: [1000, 5200, 2000, 3340, 3900, 3300, 2200],
            itemStyle: {
              normal: { 
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#66b1ea", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#addcfe", // 100% 处的颜色
                    },
                  ],
                },
               },
            },
          },
          {
            name: "铜",
            type: "bar",
            barWidth: "20%",
            data: [1000, 5200, 2000, 3340, 3900, 3300, 2200],
            itemStyle: {
              normal: { 
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#ee6666", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#F7B8B8", // 100% 处的颜色
                    },
                  ],
                },
               },
            },
          },
        ],
      };
      option.xAxis.data = [];
      option.series[0].data = [];
      option.xAxis.data = ['矿储量占比','矿自给率','电解铜/铝产量占比','电解铜/铝消费占比']
      option.series[0].data = [3,8,43,55]
      option.series[1].data = [3,40,59,59]
      this.$refs.importpercent.updateChart(option);
    }
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

.body {
  // box-sizing: border-box;
  padding: 0 20px;
  padding-top: 20px;

  display: flex;
  flex-direction: row;
  color: $white;
  position: relative;

  .pos,.text,.btns {
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
      font-size: 22px;
    }
  }

  .one {
    width: 70vw;
    margin-right: 20px;
  }
  .one2,.one3 {
    position: relative;
    width: 30vw;
    .desc {
      background: $blue;
      padding: 20px;
    }

    .btns {
      margin: 13px 0;
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
      left: -3vw;
      position: absolute;
      display: flex;
      flex-direction: column;
      .btn {
        width: 2vw;
        height: 2vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        background: $blue;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
      }
      .btn.active {
        color: $yellow;
        border: 2px solid $yellow;
      }
    }
  }

  // .one3 {
  //   position: absolute;
  //   bottom: 0;
  //   right: 31vw;
  // }
}
</style>
