(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-30bc"],{"/kbj":function(t,e,i){"use strict";i.r(e);var a=i("yMcw"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,function(){return a[t]})}(r);e.default=n.a},"2MfG":function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("BackGround"),t._v(" "),i("Header",{attrs:{title:"供需关系"}}),t._v(" "),i("div",{staticClass:"body"},[i("div",{staticClass:"left"},[i("div",[t._m(0),t._v(" "),i("div",[i("div",{staticClass:"left-chart-1"},[i("div",{staticClass:"title"},[t._v("粮食播种面积占比")]),t._v(" "),i("AgriculturePie",{ref:"agriLeftPie",attrs:{height:"360px",width:"400px"}}),t._v(" "),i("div",{staticClass:"label-area"},t._l(t.agriLeftPieLabels,function(e,a){return i("div",{key:a,staticClass:"labels",style:"top:"+40*(a+1)+"px;"},[i("div",{staticClass:"label-icon",style:"background:"+e.color+";"}),t._v(" "),i("div",{staticClass:"label-info"},[t._v(t._s(e.info))])])}))],1),t._v(" "),i("div",{staticClass:"left-chart-2",staticStyle:{height:"36vh"}},[i("div",{staticClass:"title"},[t._v("国内"+t._s(1==t.type_val?"豆粕":"玉米")+"种植面积")]),t._v(" "),i("AreaBasic",{ref:"leftLineChart"})],1)])])]),t._v(" "),i("div",{staticClass:"center"},[i("div",{staticClass:"down-stream"},[t._m(1),t._v(" "),i("div",{staticClass:"desc"},t._l(t.industry.list,function(e,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"t1"},[i("div",{staticClass:"t2"},[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"d1"},[t._v("\n              "+t._s(e.desc)+"\n            ")])])})),t._v(" "),i("div",{staticClass:"agri-pie1",class:1==t.type_val?"single-pie":""},[i("AgriculturePie",{ref:"agripie",attrs:{height:"210px",width:"210px"}}),t._v(" "),i("div",{staticClass:"labels-area"},t._l(t.agriPieLabels,function(e,a){return i("div",{key:a,staticClass:"labels",style:"top:"+35*a+"px;"},[i("div",{staticClass:"label-icon",style:"background:"+e.color+";"}),t._v(" "),i("div",{staticClass:"label-info"},[t._v(t._s(e.info))])])}))],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2==t.type_val,expression:"type_val == 2"}],staticClass:"agri-pie2"},[i("div",{staticClass:"title"},[t._v("我国玉米深加工市场下游需求分析")]),t._v(" "),i("AgriculturePie",{ref:"agripie2",attrs:{height:"210px",width:"210px"}}),t._v(" "),i("div",{staticClass:"labels-area"},t._l(t.agriPieLabels2,function(e,a){return i("div",{key:a,staticClass:"labels",style:"top:"+35*a+"px;"},[i("div",{staticClass:"label-icon",style:"background:"+e.color+";"}),t._v(" "),i("div",{staticClass:"label-info"},[t._v(t._s(e.info))])])}))],1)]),t._v(" "),i("div",{staticClass:"mt1"},[t._m(2),t._v(" "),i("div",[i("div",{staticClass:"chart-wrapper"},[i("ProductionBar",{ref:"abc1",attrs:{height:"35vh",index:t.type_val}})],1)])])])])],1)},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[this._v("种植面积及占比")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[this._v("下游")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[this._v("产量")])])}]},"2fn3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i("MT78"));console.log;i("gX0l");var n={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",axisTick:{inside:!0,length:0,alignWithLabel:!0},axisLine:{lineStyle:{width:2,color:"#65B1EA"}},axisLabel:{fontSize:13,fontWeight:"bold"},data:[1,2,3,4,5,6,7,8,9,10,11,12]},yAxis:{show:!0,nameLocation:"end",name:"万吨",nameTextStyle:{color:"#65B1EA",padding:[5,0,0,5]},nameGap:10,axisTick:{inside:!0,length:0},axisLabel:{fontSize:13,fontWeight:"bold"},axisLine:{lineStyle:{width:2,color:"#65B1EA"}},splitLine:{show:!1,lineStyle:{type:"dashed",color:"#1e95f0"}},type:"value"},grid:{left:20,right:20,top:30,bottom:22,containLabel:!0,borderColor:"transparent",backgroundColor:"rgba(63,28,85,0.2)"},series:[{type:"bar",barWidth:"20%",data:[1e3,5200,2e3,3340,3900,3300,2200,2200,2200,2200,2200,2200],label:{show:!0,position:"top"},itemStyle:{normal:{color:"#65B1EA"}}}]};e.default={props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},methods:{initChart:function(){this.chart=a.default.init(this.$el),this.updateChart(n)},updateChart:function(t){this.chart.setOption(t)}}}},"58lJ":function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[e("div",{staticClass:"vue-particles",style:{backgroundImage:"url("+this.bgImage+")"}})])},n=[]},"6eAq":function(t,e,i){},"7H6k":function(t,e,i){"use strict";i.r(e);var a=i("bsex"),n=i("eCx7");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,function(){return n[t]})}(r);var o=i("KHd+"),s=Object(o.a)(n.default,a.a,a.b,!1,null,null,null);s.options.__file="AgriculturePie.vue",e.default=s.exports},"7Qib":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i("EJiy"));function n(t,e){if(0===arguments.length)return null;var i=e||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"===(void 0===t?"undefined":(0,a.default)(t))?n=t:("string"==typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"==typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var r={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return i.replace(/{([ymdhisa])+}/g,function(t,e){var i=r[e];return"a"===e?["日","一","二","三","四","五","六"][i]:i.toString().padStart(2,"0")})}e.parseTime=n,e.formatTime=function(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var i=new Date(t),a=(Date.now()-i)/1e3;if(a<30)return"刚刚";if(a<3600)return Math.ceil(a/60)+"分钟前";if(a<86400)return Math.ceil(a/3600)+"小时前";if(a<172800)return"1天前";return e?n(t,e):i.getMonth()+1+"月"+i.getDate()+"日"+i.getHours()+"时"+i.getMinutes()+"分"},e.isExternal=function(t){return/^(https?:|mailto:|tel:)/.test(t)}},"9lL0":function(t,e,i){},AYc9:function(t,e,i){"use strict";i.r(e);var a=i("58lJ"),n=i("ay3F");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,function(){return n[t]})}(r);i("ykF3");var o=i("KHd+"),s=Object(o.a)(n.default,a.a,a.b,!1,null,"68f4c094",null);s.options.__file="index.vue",e.default=s.exports},B1fr:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"title"},[i("div",{staticClass:"left"},[t._v("广东粤汇金属交易中心")]),t._v(" "),i("div",{staticClass:"middle"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t._f("parseTime")(t.nowDate,"{y} 年 {m}月 {d}日 {h}:{i}")))])])])},n=[]},Cl7S:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var a=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"bar-tick",style:{height:this.height,width:this.width}})},n=[]},FK02:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var a=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"area-basic",style:{height:this.height,width:this.width}})},n=[]},GncU:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.production=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.default)({url:"api/v1/industry/production/",method:"get",params:t})},e.consumption=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.default)({url:"api/v1/industry/consumption/",method:"get",params:t})},e.storage=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.default)({url:"api/v1/industry/storage/",method:"get",params:t})},e.downstreamindustry=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.default)({url:"api/v1/industry/downstreamindustry/",method:"get",params:t})},e.manufacturingenterprise=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.default)({url:"api/v1/industry/manufacturingenterprise/",method:"get",params:t})};var a=function(t){return t&&t.__esModule?t:{default:t}}(i("t3Un"))},K02u:function(t,e,i){"use strict";var a=i("6eAq");i.n(a).a},KMke:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);e.default=t}(i("GncU"));var a=l(i("AYc9")),n=l(i("mByD")),r=l(i("7H6k")),o=l(i("b8LC")),s=l(i("OEpn"));function l(t){return t&&t.__esModule?t:{default:t}}console.log;e.default={name:"index",components:{Header:n.default,BackGround:a.default,AgriculturePie:r.default,ProductionBar:o.default,AreaBasic:s.default},data:function(){return{type_val:0,industry:{list:[{title:"",desc:"豆粕是大豆提取豆油后得到的一种副产品，大部分用作饲料，少部分用于发酵食品生产。按照产业链来看，我国豆粕产业链上游主要为大豆生产环节，下游主要包括饲料行业、食品行业、化妆品行业和抗菌素原料。目前豆粕下游产业90%集中在饲料行业，其中用于生猪养殖业占比最多，达46%，肉禽、蛋禽以及水产饲料分别占22%、18%、7%。"}]},agriLeftPieLabels:[],agriPieLabels:[],agriPieLabels2:[],enterprise:{list:[]},enterprise1:{list:[]}}},mounted:function(){this.type_val=Number(this.$route.params.type)+1,this.get_downstreamindustry(this.type_val),this.get_stoage(this.type_val),this.get_area(this.type_val),this.get_plant_area(this.type_val)},methods:{get_downstreamindustry:function(){if(1===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)){this.industry.list=[{desc:"豆粕是大豆提取豆油后得到的一种副产品，大部分用作饲料，少部分用于发酵食品生产。按照产业链来看，我国豆粕产业链上游主要为大豆生产环节，下游主要包括饲料行业、食品行业、化妆品行业和抗菌素原料。目前豆粕下游产业90%集中在饲料行业，其中用于生猪养殖业占比最多，达46%，肉禽、蛋禽以及水产饲料分别占22%、18%、7%。"}];this.$refs.agripie.updateChart({series:[{data:[{value:46,name:"猪料"},{value:22,name:"肉禽料"},{value:18,name:"蛋禽料"},{value:7,name:"水产料"},{value:7,name:"其他"}]}]}),this.agriPieLabels=[{info:"猪料 46%",color:"#5470c6"},{info:"肉禽料 22%",color:"#91cc75"},{info:"蛋禽料 18%",color:"#fac858"},{info:"水产料 7%",color:"#ee6666"},{info:"其他 7%",color:"#73c0de"}]}else{this.industry.list=[{desc:"在玉米消费当中，约60%用作粮食，剩余约40%用于加工。在加工领域中，60-70%用于饲料消费，约30%用于深加工（包括工业和食用）。深加工主要包括玉米淀粉、酒精、味精、赖氨酸等，其中玉米淀粉和酒精分别占深加工行业的57%和29%，是玉米深加工中的两个主要消费种类。"}];this.$refs.agripie.updateChart({series:[{data:[{value:67,name:"饲料消费"},{value:25,name:"工业消费"},{value:7,name:"种用及食用消费"},{value:7,name:"损耗量"}]}]}),this.agriPieLabels=[{info:"饲料消费 67%",color:"#5470c6"},{info:"工业消费 25%",color:"#91cc75"},{info:"种用及食用消费 7%",color:"#fac858"},{info:"损耗量 7%",color:"#ee6666"}];this.$refs.agripie2.updateChart({series:[{data:[{value:57,name:"玉米淀粉"},{value:29,name:"酒精"},{value:7,name:"味精"},{value:7,name:"赖氨酸"}]}]}),this.agriPieLabels2=[{info:"玉米淀粉 57%",color:"#5470c6"},{info:"酒精 29%",color:"#91cc75"},{info:"味精 7%",color:"#fac858"},{info:"赖氨酸 7%",color:"#ee6666"}]}},get_stoage:function(){var t={xAxis:{data:[]},series:[{data:[]}]},e=[];e=1===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)?[{id:0,statis_date:"2012",amount:4830},{id:1,statis_date:"2013",amount:5206},{id:2,statis_date:"2014",amount:5707},{id:3,statis_date:"2015",amount:6120},{id:4,statis_date:"2016",amount:6746},{id:5,statis_date:"2017",amount:7145},{id:6,statis_date:"2018",amount:6480},{id:7,statis_date:"2019",amount:7210},{id:8,statis_date:"2020",amount:7621},{id:9,statis_date:"2021",amount:7910}]:[{id:0,statis_date:"2012",amount:86800},{id:1,statis_date:"2013",amount:99047},{id:2,statis_date:"2014",amount:101603},{id:3,statis_date:"2015",amount:97221},{id:4,statis_date:"2016",amount:112341},{id:5,statis_date:"2017",amount:108009},{id:6,statis_date:"2018",amount:112492},{id:7,statis_date:"2019",amount:111971},{id:8,statis_date:"2020",amount:112280},{id:9,statis_date:"2021",amount:120873}],t.xAxis.data=[],t.series[0].data=[],e.map(function(e,i){var a=e.statis_date,n=e.amount;t.xAxis.data.push(a),t.series[0].data.push(n)}),this.$refs.abc1.updateChart(t)},get_area:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t={};t={series:[{data:[{value:37,name:"玉米"},{value:25,name:"稻谷"},{value:20,name:"小麦"},{value:9,name:"豆类"},{value:6,name:"薯类"}]}]},this.agriLeftPieLabels=[{info:"玉米 46%",color:"#5470c6"},{info:"稻谷 22%",color:"#91cc75"},{info:"小麦 18%",color:"#fac858"},{info:"豆类 7%",color:"#ee6666"},{info:"薯类 7%",color:"#73c0de"}],this.$refs.agriLeftPie.updateChart(t)},get_plant_area:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e={xAxis:{data:[]},series:[{data:[]}]};e.xAxis.data=["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],e.series[0].data=1==t?[11.05,10.36,9.4,8.89,8.82,8.43,9.29,10.05,10.19,11.08,11.59]:[34.98,36.77,39.11,41.3,43,44.97,44.18,42.4,42.13,41.28,41.26],this.$refs.leftLineChart.updateChart(e)}}}},OEpn:function(t,e,i){"use strict";i.r(e);var a=i("FK02"),n=i("m9fa");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,function(){return n[t]})}(r);var o=i("KHd+"),s=Object(o.a)(n.default,a.a,a.b,!1,null,null,null);s.options.__file="AreaBasic.vue",e.default=s.exports},SQV6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i("MT78"));i("gX0l"),e.default={props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"},year:{type:Number}},data:function(){return{xData:[],yData:[],chart:null}},mounted:function(){this.getTradevolume()},methods:{getTradevolume:function(){this.xData=["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],this.yData=[34.98,36.77,39.11,41.3,43,44.97,44.18,42.4,42.13,41.28,41.26],this.initChart()},initChart:function(){var t={xAxis:{type:"category",boundaryGap:!1,axisTick:{inside:!0,length:0},axisLine:{lineStyle:{width:2,color:"#1e95f0"}},axisLabel:{show:!0,interval:0,margin:20,fontSize:13,fontWeight:"bold"},data:this.xData},yAxis:{show:!0,name:"百万公顷",nameLocation:"end",nameGap:30,nameTextStyle:{color:"#fff",padding:[5,0,0,5]},axisTick:{inside:!0,length:0},axisLine:{lineStyle:{width:2,color:"#1e95f0"}},axisLabel:{margin:20,fontSize:13,fontWeight:"bold"},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#1e95f0"}},type:"value"},grid:{left:36,right:40,top:70,bottom:10,containLabel:!0},series:[{type:"line",data:this.yData,areaStyle:{normal:{color:new a.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fcc26f"},{offset:1,color:"#00294b"}])}},label:{show:!0,color:"#fff",distance:20},symbol:"circle",symbolSize:8,itemStyle:{normal:{borderColor:"#fff",color:"#1e95f0",lineStyle:{color:"#fcc26f",width:1.5}}}}]},e=a.default.init(this.$el,"macarons");this.chart=e,e.setOption(t)},updateChart:function(t){this.chart.setOption(t)}}}},Vi5y:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i("MT78"));i("gX0l");var n={color:["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],title:{show:!1},tooltip:{trigger:"item"},grid:{left:"0%",top:"75%",bottom:"0%",containLabel:!0},xAxis:{type:"value",show:!1,boundaryGap:[0,.01]},yAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#fff"}},series:[{type:"pie",radius:[0,"60%"],center:["50%","35%"],showEmptyCircle:!1,data:[{value:63.45,name:"铝压延加工"},{value:23.96,name:"铜压延加工"},{value:6.84,name:"有色金属合金制造"},{value:2.82,name:"铜冶炼"},{value:2.81,name:"其他有色金属压延加工"},{value:.12,name:"稀有稀土金属压延加工"}],roseType:!1,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()},label:{color:"#6EBAEE",show:!1},labelLine:{show:!1,lineStyle:{color:"#6EBAEE",type:"dashed"}},emphasis:{labelLine:{lineStyle:{color:"#6EBAEE",type:"dashed"}}},markPoint:{show:!1},markLine:{show:!1},markArea:{show:!1}}]};e.default={props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},methods:{initChart:function(){this.chart=a.default.init(this.$el),this.updateChart(n)},updateChart:function(t){this.chart.setOption(t)}}}},ay3F:function(t,e,i){"use strict";i.r(e);var a=i("fhdU"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,function(){return a[t]})}(r);e.default=n.a},b8LC:function(t,e,i){"use strict";i.r(e);var a=i("Cl7S"),n=i("r6x4");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,function(){return n[t]})}(r);var o=i("KHd+"),s=Object(o.a)(n.default,a.a,a.b,!1,null,null,null);s.options.__file="ProductionBar.vue",e.default=s.exports},bsex:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var a=function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{height:this.height,width:this.width}})},n=[]},eCx7:function(t,e,i){"use strict";i.r(e);var a=i("Vi5y"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,function(){return a[t]})}(r);e.default=n.a},fhdU:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"BackGround2",props:{bgImage:{type:String,default:"/static/images/background.png"}},data:function(){return{pressTimer:null,startX:"",startY:"",startTime:""}},mounted:function(){var t=this;"/"!==this.$route.path&&(window.addEventListener("touchstart",function(e){t.start(e)},!0),window.addEventListener("touchend",function(e){t.cancel(e)},!0),window.addEventListener("touchcancel",function(e){t.cancel(e)},!0),window.addEventListener("dblclick",function(e){return t.$contextmenu({items:[{label:"",onClick:function(){t.$router.go(-1)}},{label:"",onClick:function(){t.$router.push({path:"/"})}},{label:"",onClick:function(){t.$router.go(0)}},{label:"",onClick:function(){t.$contextmenu.destroy()}}],event:e,zIndex:99}),!1},!0)),document.oncontextmenu=function(){return!1}},methods:{start:function(t){var e=this;"click"===t.type&&0!==t.button||(t.preventDefault(),this.startTime=(new Date).getTime(),this.startX=t.targetTouches[0].clientX,this.startY=t.targetTouches[0].clientY,null===this.pressTimer&&"/"!=this.$route.path&&(this.pressTimer=setTimeout(function(){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&navigator.vibrate(200),e.$contextmenu({items:[{label:"",onClick:function(){e.$router.go(-1)}},{label:"",onClick:function(){e.$router.push({path:"/"})}},{label:"",onClick:function(){e.$router.go(0)}},{label:"",onClick:function(){e.$contextmenu.destroy()}}],x:e.startX,y:e.startY,zIndex:99,minWidth:230})},1e3)))},cancel:function(t){if(t.preventDefault(),(new Date).getTime()-this.startTime<300){var e=Math.abs(this.startX-t.changedTouches[0].clientX)<30,i=Math.abs(this.startY-t.changedTouches[0].clientY)<30;e&&i&&t.changedTouches[0].target.click()}null!==this.pressTimer&&(clearTimeout(this.pressTimer),this.pressTimer=null)}}}},gLCf:function(t,e,i){"use strict";i.r(e);var a=i("KMke"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,function(){return a[t]})}(r);e.default=n.a},gX0l:function(t,e,i){var a,n,r;n=[e,i("MT78")],void 0===(r="function"==typeof(a=function(t,e){if(e){var i=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],a={color:i,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:i[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{color:"#008acd",borderColor:"#008acd"},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{color:"#d87a80",color0:"#2ec7c9"},lineStyle:{width:1,color:"#d87a80",color0:"#2ec7c9"},areaStyle:{color:"#2ec7c9",color0:"#b6a2de"}},scatter:{symbol:"circle",symbolSize:4},map:{itemStyle:{color:"#ddd"},areaStyle:{color:"#fe994e"},label:{color:"#d87a80"}},graph:{itemStyle:{color:"#d87a80"},linkStyle:{color:"#2ec7c9"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};e.registerTheme("macarons",a)}else!function(t){"undefined"!=typeof console&&console&&console.error&&console.error(t)}("ECharts is not Loaded")})?a.apply(e,n):a)||(t.exports=r)},kx9x:function(t,e,i){"use strict";var a=i("yiqB");i.n(a).a},m9fa:function(t,e,i){"use strict";i.r(e);var a=i("SQV6"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,function(){return a[t]})}(r);e.default=n.a},mByD:function(t,e,i){"use strict";i.r(e);var a=i("B1fr"),n=i("/kbj");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,function(){return n[t]})}(r);i("K02u");var o=i("KHd+"),s=Object(o.a)(n.default,a.a,a.b,!1,null,"19500570",null);s.options.__file="index.vue",e.default=s.exports},r6x4:function(t,e,i){"use strict";i.r(e);var a=i("2fn3"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,function(){return a[t]})}(r);e.default=n.a},wW03:function(t,e,i){"use strict";i.r(e);var a=i("2MfG"),n=i("gLCf");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,function(){return n[t]})}(r);i("kx9x");var o=i("KHd+"),s=Object(o.a)(n.default,a.a,a.b,!1,null,"d0f85aee",null);s.options.__file="demand.vue",e.default=s.exports},yMcw:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7Qib");e.default={name:"Header",components:{},props:{title:{type:String,default:"标题"}},filters:{parseTime:a.parseTime},data:function(){return{nowDate:new Date}},mounted:function(){var t=this;this.now=setInterval(function(){t.nowDate=new Date},1e3)},beforeDestroy:function(){this.now&&clearInterval(this.now)}}},yiqB:function(t,e,i){},ykF3:function(t,e,i){"use strict";var a=i("9lL0");i.n(a).a}}]);