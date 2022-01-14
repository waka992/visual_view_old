<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>

import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme

let option = {
  color:['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
  title: {
    show: true,
    left: 24,
    textStyle: {
      color: '#fff',
      fontSize: 16,
    }
  },

  grid: {
    left: "0%",
    // right: "4%",
    // top: "75%",
    bottom: "0%",
  },

  series: [
    {
      type: "pie",
      radius: [0, "60%"],
      center: ["50%", "46%"],
      showEmptyCircle: false,
      data: [
        {
          value: 5,
          name: "全国",
        },
        {
          value: 2,
          name: "佛山",
        },
      ],
      roseType: false,
      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
      label: {
        color: "#fff",
        show: true,
        overflow: 'break',
        position: 'inside'
      },
      labelLine: {
        show: true,
        length: 4,
        lineStyle: {
          color: "#6EBAEE",
          type: "dashed",
        },
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
