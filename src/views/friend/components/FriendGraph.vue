<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>
let dd = console.log;

import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme

//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

let nodeDataList = [
  {
    name: "佛山市南海区铝型材行业协会",
    symbol: "image:///static/images/friend-1.png",
    symbolSize: 200,
    value: [1681, 381],
    abbr: 'lc',
    link: ['gsyh', 'payh', 'xmjt', 'js']
  },
  {
    name: "广东炬申物流股份有限公司",
    symbol: "image:///static/images/friend-2.png",
    symbolSize: 170,
    value: [1620, 176],
    abbr: 'js',
    link: ['lc', 'xmjt', 'ak']
  },
  {
    name: "国储供应链",
    symbol: "image:///static/images/friend-3.png",
    symbolSize: 180,
    value: [452, 118],
    abbr: 'gc',
    link: ['xqjt']
  },
  {
    name: "兴奇集团",
    symbol: "image:///static/images/friend-4.png",
    symbolSize: 232,
    value: [702, 77],
    abbr: 'xq',
    link: ['gc', 'nfby', 'xhjt', 'gfqh', 'zl']
  },
  {
    name: "广发期货",
    symbol: "image:///static/images/friend-5.png",
    symbolSize: 170,
    value: [533, 276],
    abbr: 'gfqh',
    link: ['jk', 'xhjt', 'xqjt' , 'xhs']
  },
  {
    name: "广州金控",
    symbol: "image:///static/images/friend-6.png",
    symbolSize: 170,
    value: [685, 728],
    abbr: 'jk',
    link: ['ty', 'nc', 'xhs', 'gfqh', 'nfby', 'ycjs']
  },
  {
    name: "粤储集团",
    symbol: "image:///static/images/friend-7.png",
    symbolSize: 188,
    value: [1232, 678],
    abbr: 'yc',
    link: ['ycjs', 'nhns', 'payh', 'gsyh']
  },
  {
    name: "江西铜业集团有限公司",
    symbol: "image:///static/images/friend-8.png",
    symbolSize: 220,
    value: [51, 422],
    abbr: 'jxty',
    link: ['shysw', 'shys', 'nc' , 'gc' , 'xhs']
  },
  {
    name: "南储仓储管理集团有限公司",
    symbol: "image:///static/images/friend-9.png",
    symbolSize: 172,
    value: [341, 613],
    abbr: 'nc',
    link: ['shysw', 'jxty', 'xhs', 'ty', 'jk']
  },
  {
    name: "南方报业传媒集团",
    symbol: "image:///static/images/friend-10.png",
    symbolSize: 238,
    value: [705, 488],
    abbr: 'nfby',
    link: ['jk', 'xhjt', 'ycjs', 'xqjt']
  },
  {
    name: "平安银行",
    symbol: "image:///static/images/friend-11.png",
    symbolSize: 200,
    value: [1450, 594],
    abbr: 'payh',
    link: ['yc', 'nhns', 'xmjt', 'lc', 'gsyh']
  },
  {
    name: "新华社",
    symbol: "image:///static/images/friend-12.png",
    symbolSize: 208,
    value: [330, 380],
    abbr: 'xhs',
    link: ['ty', 'nc', 'jk', 'xhjt']
  },
  {
    name: "兴海集团",
    symbol: "image:///static/images/friend-13.png",
    symbolSize: 256,
    value: [898, 347],
    abbr: 'xhjt',
    link: []
  },
  {
    name: "兴美集团",
    symbol: "image:///static/images/friend-14.png",
    symbolSize: 225,
    value: [1370, 256],
    abbr: 'xmjt',
    link: ['xhjt', 'nhns', 'ak', 'payh', 'js', 'lc']
  },
  {
    name: "宇成金属",
    symbol: "image:///static/images/friend-15.png",
    symbolSize: 224,
    value: [975, 689],
    abbr: 'ycjs',
    link: ['gzjk', 'xhjt', 'nhns', 'yc', 'nfby']
  },
  {
    name: "中铝国际贸易集团有限公司",
    symbol: "image:///static/images/friend-16.png",
    symbolSize: 218,
    value: [1062, 91],
    abbr: 'zl',
    link: ['xqjt', 'xhjt', 'ak', 'payh']
  },
  {
    name: "腾业公司",
    symbol: "image:///static/images/friend-17.png",
    symbolSize: 179,
    value: [480, 734],
    abbr: 'ty',
    link: ['shysw', 'nc', 'xhs', 'jk']
  },
  {
    name: "安控公司",
    symbol: "image:///static/images/friend-18.png",
    symbolSize: 190,
    value: [1320, 64],
    abbr: 'ak',
    link: ['zl', 'nhns', 'xmjt', 'js']
  },
  {
    name: "上海有色网",
    symbol: "image:///static/images/friend-19.png",
    symbolSize: 179,
    value: [150, 710],
    abbr: 'shysw',
    link: ['jxty', 'ty', 'nc']
  },
  {
    name: "上海有色金属交易中心",
    symbol: "image:///static/images/friend-20.png",
    symbolSize: 206,
    value: [179, 87],
    abbr: 'shys',
    link: ['gc']
  },
  {
    name: "中国工商银行",
    symbol: "image:///static/images/friend-21.png",
    symbolSize: 185,
    value: [1660, 680],
    abbr: 'gsyh',
    link: ['yc', 'payh', 'lc']
  },
  {
    name: "南海农商银行",
    symbol: "image:///static/images/friend-22.png",
    symbolSize: 198,
    value: [1203, 460],
    abbr: 'nhns',
    link: ['xhjt', 'ycjs', 'yc', 'payh', 'xmjt', 'ak', 'xhjt']
  },
];

let line = {
  type: "lines",
  coordinateSystem: "cartesian2d",
  z: 1,
  effect: {
    show: false,
    smooth: true,
    trailLength: 0,
    symbol: "circle",
    color: "#ECEDF0",
    symbolSize: 3 * 3,
    period: 3,
    delay: 1000 + 500 * 0,
    loop: true,
  },
  lineStyle: {
    normal: {
      curveness: 0,
      color: "#2F86E2",
      width: 1,
    },
  },
  data: [],
};

let lines = [];


let line_coords = [
//   {
//     coords: [
//       [0, 500],
//       [200, 700],
//     ],
//   },
];
for (let i = 0; i < nodeDataList.length; i++) {
    const link = nodeDataList[i].link;
    const value = nodeDataList[i].value
    for (let j = 0; j < nodeDataList.length; j++) {
        const node2 = nodeDataList[j];
        const value2 = nodeDataList[j].value
        if (link.indexOf(node2.abbr) !== -1) {
            let coords = [
                value, value2
            ]
            line_coords.push({coords: coords})
        }
    }
}
let num_low = parseInt((line_coords.length * 10) / 100) + 0; //10%概率显示
let num = parseInt((line_coords.length * 50) / 100) + 0; //50%概率显示
let line_show = [];
for (let i = 0; i < randomNum(num_low, num); i++) {
  line_show.push(randomNum(0, line_coords.length));
}

line_coords.map((v, k) => {
  let temp = JSON.stringify(line);
  temp = JSON.parse(temp);
  temp.data.push(v);
  for (let i = 0; i < 3; i++) {
    let temp1 = JSON.stringify(temp);
    temp1 = JSON.parse(temp1);

    temp1.effect.delay = 1000 + 300 * (i + 1);
    temp1.effect.show = false;

    if (line_show.includes(k)) {
      temp1.effect.show = true;
    }
    lines.push(temp1);
  }
});

let series = [
  {
    type: "graph",
    coordinateSystem: "cartesian2d",
    roam: false,
    zoom: 1,
    label: {
      show: false,
    },
    emphasis: {
      label: {
        show: false,
      },
    },
    data: nodeDataList,
  },
  ...lines,
];

let option = {
  title: {
    show: false,
  },
  grid: {
    top: "10%",
  },
  xAxis: {
    show: false,
    type: "value",
  },
  yAxis: {
    show: false,
    type: "value",
  },
  animationEasingUpdate: "bounceInOut",
  // animationDurationUpdate: (idx) => {
  //   // 越往后的数据延迟越大
  //   return idx * 100;
  // },
  // animationDelay: (idx) => {
  //   // 越往后的数据延迟越大
  //   return idx * 100;
  // },
  series,
};

export default {
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();
    setInterval(() => {
      this.ranOpt();
    }, 1000 * 10);
  },
  methods: {
    initChart() {
        this.chart = echarts.init(this.$el);
        this.updateChart(option);
    },
    updateChart(opt) {
      this.chart.setOption(opt);
    },
    ranOpt() {
      let line = {
        type: "lines",
        coordinateSystem: "cartesian2d",
        z: 1,
        effect: {
          show: false,
          smooth: true,
          trailLength: 0,
          symbol: "circle",
          color: "#ECEDF0",
          symbolSize: 3 * 3,
          period: 3,
          delay: 1000 + 500 * 0,
          loop: true,
        },
        lineStyle: {
          normal: {
            curveness: 0,
            color: "#2F86E2",
            width: 1,
          },
        },
        data: [],
      };

      let lines = [];

      let num_low = parseInt((line_coords.length * 10) / 100) + 0; //10%概率显示
      let num = parseInt((line_coords.length * 50) / 100) + 0; //50%概率显示
      let line_show = [];
      for (let i = 0; i < randomNum(num_low, num); i++) {
        line_show.push(randomNum(0, line_coords.length));
      }

      line_coords.map((v, k) => {
        let temp = JSON.stringify(line);
        temp = JSON.parse(temp);
        temp.data.push(v);
        for (let i = 0; i < 3; i++) {
          let temp1 = JSON.stringify(temp);
          temp1 = JSON.parse(temp1);

          temp1.effect.delay = 1000 + 300 * (i + 1);
          temp1.effect.show = false;

          if (line_show.includes(k)) {
            temp1.effect.show = true;
          }
          lines.push(temp1);
        }
      });

      let series = [
        {
          type: "graph",
          coordinateSystem: "cartesian2d",
          roam: false,
          zoom: 1,
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: false,
            },
          },
          data: nodeDataList,
        },
        ...lines,
      ];

      option = {
        animation: false,
        series,
        // 下列xaxis和 yaxis的配置不能删，删了有几率报错，echart源码需要读取这两个属性否则undefined
        xAxis: {
            show: false,
            type: "value",
        },
        yAxis: {
            show: false,
            type: "value",
        },
      };

      this.updateChart(option);
    },
  },
};
</script>
