<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>
let dd = console.log;

import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme

let option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  textStyle: {
      color: "#addcfe",
      fontSize: 16
  },
  xAxis: {
    type: "category",
    axisTick: {
      inside: true,
      length: 0,
      alignWithLabel: true,
    },
    axisLabel: {
        interval: 0,
        fontSize: 16
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
    name: "万吨",
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
  label: {
    show: true,
    position: 'top',
    color: '#E6D90C'
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
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);
      this.updateChart(option);
    },
    updateChart(opt) {
      this.chart.setOption(opt);
    },
  },
};
</script>