<template>
    <div class="line-stack" :style="{height:height,width:width}" />
</template>

<script>
    import echarts from 'echarts'
    require('echarts/theme/macarons') // echarts theme
    import { spotIndex } from '@/api/platformindex'

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
        },

        data() {
            return {
                xData: [],
                yDiff: {
                    name: '基差',
                    type: 'line',
                    // stack: '基差',
                    yAxisIndex: 0,
                    data: []
                },
                // yPrice: {
                //     name: '价格指数',
                //     type: 'line',
                //     // stack: '价格指数',
                //     yAxisIndex: 0,
                //     data: []
                // },
                // yAmplitude: {
                //     name: '涨跌',
                //     type: 'line',
                //     // stack: '涨跌',
                //     yAxisIndex: 1,
                //     data: []
                // },
            }
        },

        mounted() {
            this.getOption();
        },

        methods: {
            getOption(){
                spotIndex()
                .then(res => {
                    if (res.code === 1000) { 

                        // let loopData = res.data.results.reverse();
                        // 暂时使用本地数据
                        let results = {"code":1000,"msg":"success","data":{"links":{"next":"http://81.68.190.115:8002/api/v1/index/spotindex/?fields=id%2Cstatis_date%2Cindex%2Cchange%2Cchg&is_composite=true&limit=20&offset=20&ordering=-statis_date","previous":null},"count":129,"results":[{"id":33,"statis_date":"2021-11-01","diff":70},{"id":32,"statis_date":"2021-10-01","diff":-20},{"id":31,"statis_date":"2021-09-01","diff":20},{"id":30,"statis_date":"2021-08-01","diff":10},{"id":29,"statis_date":"2021-07-01","diff":60},{"id":28,"statis_date":"2021-06-01","diff":120},{"id":27,"statis_date":"2021-05-01","diff":160},{"id":26,"statis_date":"2021-04-01","diff":40},{"id":25,"statis_date":"2021-03-01","diff":-70},{"id":24,"statis_date":"2021-02-01","diff":10},{"id":23,"statis_date":"2021-01-01","diff":80},{"id":22,"statis_date":"2020-12-01","diff":-20},{"id":21,"statis_date":"2020-11-01","diff":0},{"id":20,"statis_date":"2020-10-01","diff":-60},{"id":19,"statis_date":"2020-09-01","diff":80},{"id":18,"statis_date":"2020-08-01","diff":110},{"id":17,"statis_date":"2020-07-01","diff":-60},{"id":16,"statis_date":"2020-06-01","diff":100},{"id":15,"statis_date":"2020-05-01","diff":190},{"id":14,"statis_date":"2020-04-01","diff":230},{"id":13,"statis_date":"2020-03-01","diff":30},{"id":12,"statis_date":"2020-02-01","diff":60},{"id":11,"statis_date":"2020-01-01","diff":250},{"id":10,"statis_date":"2019-12-01","diff":270},{"id":9,"statis_date":"2019-11-01","diff":60},{"id":8,"statis_date":"2019-010-01","diff":10},{"id":7,"statis_date":"2019-09-01","diff":90},{"id":6,"statis_date":"2019-08-01","diff":40},{"id":5,"statis_date":"2019-07-01","diff":30},{"id":4,"statis_date":"2019-06-01","diff":180},{"id":3,"statis_date":"2019-05-01","diff":320},{"id":2,"statis_date":"2019-04-01","diff":270},{"id":1,"statis_date":"2019-03-01","diff":90}]}}
                        let loopData = results.data.results.reverse();
                        for (let i = 0; i < loopData.length; i++) {
                            this.xData[i] = loopData[i].statis_date.slice(0,7)
                            // this.xData[i] = loopData[i].statis_date.slice(-5)
                            // this.yPrice.data[i] = loopData[i].index
                            // this.yAmplitude.data[i] = loopData[i].change
                            this.yDiff.data[i] = loopData[i].diff
                        }
                        this.initChart();
                    }
                }) 
            },

            // 初始化echarts
            initChart() {
                let option = {
                    backgroundColor: '',
                    title: {
                        // text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    color:['#F90639','#ECBE37',],
                    legend: {
                        data: ['价格指数', '涨跌'],
                        textStyle: {
                            color: '#FFF'
                        },
                        icon: "circle",
                        itemGap: 50, // 间距
                        textStyle: {
                            fontSize: 16,
                            color: '#fff'
                        },
                    },
                    grid: {
                        left: '2%',
                        right: '2%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: this.xData,
                        itemStyle: {
                            normal: { borderColor: "#fff", color: '#315e86', lineStyle: { color: "#fcc26f" } }
                        },
                        
                        axisLabel: {        
                            show: true,
                            textStyle: {
                                color: '#FEC979',
                                fontSize: '16'
                            },
                        },
                        axisLine: {
                            lineStyle: {
                                width: 1,
                                // color: '#1e95f0'
                            },
                            onZero: false
                        },  
                        axisTick:{
                            show: false  //去掉刻度
                        },
                        
                    },
                    yAxis: [
                        {
                            type: 'value',
                            name : '',
                            position: 'left',
                            scale: true, // y轴自适应 
                            axisLine: {
                                lineStyle: {
                                    width: 1, 
                                    // color: '#77C8FF'
                                },
                            },
                            axisLabel: {        
                                show: true,
                                textStyle: {
                                    color: '#ECBE37',
                                    fontSize: '16'
                                }
                            },
                            axisTick:{
                                show: false  //去掉刻度
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    // type:'dashed',
                                    color: "#1e95f0",
                                    opacity: 0.2
                                },
                            },
                            splitArea: {
                                show: false
                            },
                        },
                        {
                            type : 'value',
                            name : '',
                            show: true,
                            position: 'right',
                            scale: true, // y轴自适应
                            axisLine: {
                                lineStyle: {
                                    width: 1, 
                                    // color: '#1e95f0'
                                },
                            },
                            axisLabel: {        
                                show: true,
                                textStyle: {
                                    color: '#F90639',
                                    fontSize: '16'
                                }
                            },
                            axisTick:{
                                show: false  //去掉刻度
                            }, 

                            splitLine: {
                                show: true,
                                lineStyle:{
                                    // type:'dashed',
                                    color: "rgba(0,0,0,0)",
                                    opacity: 0.2
                                }
                            },

                            splitArea: {
                                show: false
                            },
                        }
                    ],
                    // series: [this.yPrice, this.yAmplitude]
                    series: [this.yDiff]
                };

                var chart = echarts.init(this.$el, 'macarons');
                chart.setOption(option);
            },
        }
    }
</script>