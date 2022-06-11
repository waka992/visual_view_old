<template>
    <div class="donut-chart" :style="{height:height,width:width}" />
</template>

<script>
    import echarts from 'echarts'
    require('echarts/theme/macarons') // echarts theme
    import { tradeVolumeKind } from "@/api/transaction";

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
                chartData: [],
                legendData: [],
                total: 0,
            }
        },

        mounted() {
            this.getData({
                expand  :  'commodity',
                year    :  this.year
            });
        },

        methods: {
            getData(query) {
                this.chartData = [
                    {
                        name: '交易额占比',
                        value: 20,
                        itemStyle: {
                            color: '#f54d74'
                        }
                    },
                    {
                        name: '其他平台交易额',
                        value: 15,
                        itemStyle: {
                            color: '#ad98d9'
                        }
                    },
                    {
                        name: '其他平台交易额',
                        value: 13,
                        itemStyle: {
                            color: '#4fa8ed'
                        }
                    },
                    {
                        name: '其他平台交易额',
                        value: 12,
                        itemStyle: {
                            color: '#ffb075'
                        }
                    },
                    {
                        name: '其他平台交易额',
                        value: 10,
                        itemStyle: {
                            color: '#FE832C'
                        }
                    },
                    {
                        name: '其他平台交易额',
                        value: 8,
                        itemStyle: {
                            color: '#9BD1FC'
                        }
                    },
                    {
                        name: '其他平台交易额',
                        value: 6,
                        itemStyle: {
                            color: '#FEC979'
                        }
                    },
                ]
                this.legendData = this.chartData
                this.initChart();
            },

            // 初始化echarts
            initChart() {
                const target = new Map();
                let total = 0            
                this.chartData.forEach((item) => {
                    // 计算value的和，用来算百分比
                    total += item.value
                    // 组成 map {A:1212} ,用来下面获取 value
                    target.set(item.name, item.value)
                })

                let option = {
                    background:'red',
                    tooltip: {
                        trigger: 'item',
                        formatter:'{c}%'　
                    },
                    color: ['#f54d74', '#ad98d9', '#4fa8ed', '#ffb075'],
                    // color: ['#f54d74', '#ad98d9', '#ad98d9', '#ad98d9','#ad98d9','#ad98d9','#ad98d9','#ad98d9',],
                    legend: [
                        {
                            top: '18%',
                            right: '16%',
                            itemGap: 30,　　
                            orient: 'vertical',
                            icon: "circle",
                            textStyle: {
                                fontSize: 14,
                                color: '#fff'
                            },
                            data: [{
                                name: '交易额占比',
                                value: 20,
                                itemStyle: {
                                    color: '#f54d74'
                                }},],
                            // 计算百分比
                            formatter: function(name) {
                                let lists = [];
                                let inum = target.get(name);
                                console.log(inum)
                                //保留inum小数点后２位
                                let vnum = parseFloat(inum).toFixed(0);
                                lists.push(name + '  ' + vnum + '%');
                                return lists;
                            }
                        }
                    ],
                    grid: {
                        top: '80%',
                        bottom: '80%',
                        left: "40%",
                        containLabel: false
                    },
                    series: [
                        {
                            name: '',
                            type: 'pie',
                            radius: ['20', '112'],
                            // center: ['50%', '60%'],
                            center: ['25%', '50%'],
                            roseType: 'radius',
                            avoidLabelOverlap: false,
                            hoverAnimation: false,　
                            label: {
                                show: false,
                                position: 'inside',
                                formatter: '{c}%'
                            },
                            emphasis: {
                                label: {
                                    show: false,
                                    fontSize: '40',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: this.chartData
                        }
                    ]
                };

                var chart = echarts.init(this.$el, 'macarons');
                chart.setOption(option);
            },

        }
    }
</script>

<style scoped>
    /* .donut-chart {
        -moz-transform:scaleX(-1);
        -webkit-transform:scaleX(-1);
        -o-transform:scaleX(-1);
        transform:scaleX(-1);
        filter:FlipH;
    } */
</style>