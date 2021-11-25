<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>
let dd = console.log;

import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme

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
      type: "pie",
      radius: [0, "60%"],
      center: ["50%", "35%"],
      showEmptyCircle: false,
      data: [
        {
          value: 63.45,
          name: "铝压延加工",
        },
        {
          value: 23.96,
          name: "铜压延加工",
        },
        {
          value: 6.84,
          name: "有色金属合金制造",
        },
        {
          value: 2.82,
          name: "铜冶炼",
        },
        {
          value: 2.81,
          name: "其他有色金属压延加工",
        },
        {
          value: 0.12,
          name: "稀有稀土金属压延加工",
        },
      ],
      roseType: false,
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
