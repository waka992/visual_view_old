<template>
    <div class="area-basic" :style="{height:height,width:width}" />
</template>

<script>
    import echarts from 'echarts'
    require('echarts/theme/macarons') // echarts theme

    export default {
        props: {
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '100%'
            },
            year: {
                type: Number,
            },
        },

        data() {
            return {
                xData: [],
                yData: [],
                chart: null,
            }
        },

        mounted() {
           this.getTradevolume()
        },

        methods: {
            getTradevolume() {
                this.xData = ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
                this.yData = [34.98,36.77, 39.11, 41.30, 43.00, 44.97, 44.18, 42.40, 42.13, 41.28, 41.26, ]
                this.initChart();
            },

            // 初始化echarts
            initChart() {
                let option = {
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {
                            inside: true,
                            length: 0
                        },
                        axisLine: {
                            lineStyle: {
                                width: 2,
                                color: '#1e95f0'
                            },
                        },
                        axisLabel: {
                            show:true,
                            interval:0, // 使x轴横坐标全部显示
                            margin: 20,
                            fontSize: 13,
                            fontWeight: 'bold'
                        },
                        // nameTextStyle: {
                        //     fontSize: 36,
                        //     color: '#1e95f0',
                        // },
                        data: this.xData
                    },
                    yAxis: {
                        show: true,
                        name: '百万公顷',
                        nameLocation: 'end',
                        nameGap: 30,
                        nameTextStyle: {    // 坐标轴名称样式
                            color: '#fff',
                            padding: [5, 0, 0, 5]  // 坐标轴名称相对位置
                        }, 
                        axisTick: {
                            inside: true,
                            length: 0
                        },
                        axisLine: {
                            lineStyle: {
                                width: 2,
                                color: '#1e95f0'
                            },
                        },
                        axisLabel: {
                            margin: 20,
                            fontSize: 13,
                            fontWeight: 'bold'
                        },
                        splitLine: {
                            show: true,
                            lineStyle:{
                                type:'dashed',
                                color: '#1e95f0'
                            }
                        },
                        type: 'value'
                    },
                    grid: {
                        left: 36,
                        right: 40,
                        top: 70,
                        bottom: 10,
                        containLabel: true,
                    },
                    series: [{
                        type: 'line',
                        data: this.yData,
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#fcc26f'
                                }, {
                                    offset: 1,
                                    color: '#00294b'
                                }]),
                            }
                        },
                        label: {
                            show: true,
                            color: '#fff',
                            distance: 20
                        },
                        symbol: 'circle',
                        symbolSize: 8,
                        itemStyle: {
                            normal: { borderColor: "#fff", color: '#1e95f0', lineStyle: { color: "#fcc26f", width: 1.5} }
                        },
                    }]
                };

                var chart = echarts.init(this.$el, 'macarons');
                this.chart = chart
                chart.setOption(option);
            },

            updateChart(opt) {
                this.chart.setOption(opt);
            },
        }
    }
</script>