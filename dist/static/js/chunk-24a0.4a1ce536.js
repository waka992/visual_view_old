(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-24a0"],{"+ugt":function(t,e,a){"use strict";a.r(e);var i=a("mXtb"),n=a("RhI6");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return n[t]})}(r);var o=a("KHd+"),l=Object(o.a)(n.default,i.a,i.b,!1,null,null,null);l.options.__file="ProductionBar.vue",e.default=l.exports},"/kbj":function(t,e,a){"use strict";a.r(e);var i=a("yMcw"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return i[t]})}(r);e.default=n.a},"0UBu":function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{height:this.height,width:this.width}})},n=[]},"2enn":function(t,e,a){"use strict";a.r(e);var i=a("fW4V"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return i[t]})}(r);e.default=n.a},5328:function(t,e,a){"use strict";a.r(e);var i=a("0UBu"),n=a("2enn");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return n[t]})}(r);var o=a("KHd+"),l=Object(o.a)(n.default,i.a,i.b,!1,null,null,null);l.options.__file="ReserveMap.vue",e.default=l.exports},"58lJ":function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[e("div",{staticClass:"vue-particles",style:{backgroundImage:"url("+this.bgImage+")"}})])},n=[]},"5Nk6":function(t,e,a){},"7Qib":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(a("EJiy"));function n(t,e){if(0===arguments.length)return null;var a=e||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"===(void 0===t?"undefined":(0,i.default)(t))?n=t:("string"==typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"==typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var r={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return a.replace(/{([ymdhisa])+}/g,function(t,e){var a=r[e];return"a"===e?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")})}e.parseTime=n,e.formatTime=function(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var a=new Date(t),i=(Date.now()-a)/1e3;if(i<30)return"刚刚";if(i<3600)return Math.ceil(i/60)+"分钟前";if(i<86400)return Math.ceil(i/3600)+"小时前";if(i<172800)return"1天前";return e?n(t,e):a.getMonth()+1+"月"+a.getDate()+"日"+a.getHours()+"时"+a.getMinutes()+"分"},e.isExternal=function(t){return/^(https?:|mailto:|tel:)/.test(t)}},"83Ik":function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("BackGround"),t._v(" "),a("Header",{attrs:{title:"产业链"}}),t._v(" "),a("div",{staticClass:"body"},[a("div",{staticClass:"one"},[a("WorldMap",{ref:"abc2",attrs:{height:"80vh"}})],1),t._v(" "),a("div",{staticClass:"one2"},[a("div",{staticClass:"pos"},t._l(t.mode.list,function(e,i){return a("div",{key:i,staticClass:"btn",class:[i==t.mode.index?"active":""],on:{click:function(a){t.mode_sel(e,i)}}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),t._v(" "),a("div",[t._m(0),t._v(" "),a("div",{staticClass:"desc"},[a("ProductionBar",{ref:"importpercent",attrs:{height:"13vh"}})],1)]),t._v(" "),a("div",{staticClass:"btns"},[a("div",{staticClass:"btn btn1",on:{click:function(e){t.$router.push({path:"/supply",name:"supply",params:{type:t.mode.index}})}}},[a("img",{attrs:{src:"/static/images/industrychain-1.png",alt:"",srcset:""}}),t._v(" "),a("div",[t._v("供需关系")])]),t._v(" "),a("div",{staticClass:"btn",on:{click:function(e){t.$router.push({path:"/industrychain/localsituation"})}}},[a("img",{attrs:{src:"/static/images/supply-img10.png",alt:"",srcset:""}}),t._v(" "),a("div",[t._v("佛山概况")])])]),t._v(" "),a("div",[a("div",{staticClass:"title"},[a("div",{staticClass:"text"},[t._v(t._s(0==t.mode.index?"铜矿":"铝土矿")+"进口量趋势图")])]),t._v(" "),a("div",{staticClass:"desc"},[a("ProductionBar",{ref:"abc1",attrs:{height:"13vh"}})],1)]),t._v(" "),a("div",{staticStyle:{"margin-top":"13px"}},[a("div",{staticClass:"title"},[a("div",{staticClass:"text"},[t._v(t._s(0==t.mode.index?"精炼铜":"铝土矿")+"进口来源国家排名")])]),t._v(" "),a("div",{staticClass:"desc"},[a("ReserveMap",{ref:"abc",attrs:{height:"31vh",index:t.mode.index}})],1)])])])],1)},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[this._v("我国铜铝在全球地位")])])}]},"90IC":function(t,e,a){},"9lL0":function(t,e,a){},AYc9:function(t,e,a){"use strict";a.r(e);var i=a("58lJ"),n=a("ay3F");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return n[t]})}(r);a("ykF3");var o=a("KHd+"),l=Object(o.a)(n.default,i.a,i.b,!1,null,"68f4c094",null);l.options.__file="index.vue",e.default=l.exports},IZix:function(t,e,a){"use strict";a.r(e);var i=a("lz5o"),n=a("W9nE");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return n[t]})}(r);var o=a("KHd+"),l=Object(o.a)(n.default,i.a,i.b,!1,null,null,null);l.options.__file="WorldMap.vue",e.default=l.exports},PdaJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(a("MT78"));console.log;a("gX0l");var n={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},textStyle:{fontStyle:{color:"#fcc26f"}},xAxis:{type:"category",axisTick:{inside:!0,length:0,alignWithLabel:!0},axisLabel:{interval:0},axisLine:{lineStyle:{width:2,color:"#E6D90C"}},data:["2月","3月","4月","5月","6月","7月","8月"]},yAxis:{show:!0,name:"万吨",nameLocation:"end",nameTextStyle:{color:"#E6D90C",padding:[5,0,0,5]},nameGap:10,axisTick:{inside:!0,length:0},axisLine:{lineStyle:{width:2,color:"#E6D90C"}},splitLine:{show:!1,lineStyle:{type:"dashed",color:"#1e95f0"}},type:"value"},grid:{left:50,right:10,top:20,bottom:20,show:!0,borderColor:"transparent",backgroundColor:"rgba(63,28,85,0.2)"},label:{show:!0,position:"top",color:"#E6D90C"},series:[{name:"铜",type:"bar",barWidth:"20%",data:[1e3,5200,2e3,3340,3900,3300,2200],itemStyle:{normal:{color:"#E6D90C"}}}]};e.default={props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},methods:{initChart:function(){this.chart=i.default.init(this.$el),this.updateChart(n)},updateChart:function(t){this.chart.setOption(t)}}}},RhI6:function(t,e,a){"use strict";a.r(e);var i=a("PdaJ"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return i[t]})}(r);e.default=n.a},W9nE:function(t,e,a){"use strict";a.r(e);var i=a("cUfB"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return i[t]})}(r);e.default=n.a},ay3F:function(t,e,a){"use strict";a.r(e);var i=a("fhdU"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return i[t]})}(r);e.default=n.a},bPda:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"title",class:{longDecorate:t.long}},[a("div",{staticClass:"left"},[t._v("广东粤汇金属交易中心")]),t._v(" "),a("div",{staticClass:"middle"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"right"},[t._v(t._s(t._f("parseTime")(t.nowDate,"{y} 年 {m}月 {d}日 {h}:{i}")))])])])},n=[]},cUfB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(a("MT78"));a("Z1wy"),a("xU2t");console.log;var n={title:{show:!1,text:"世界地图显示",subtext:"数据中心统计",left:"center",textStyle:{color:"red",fontSize:"16"},subtextStyle:{color:"smokewhite",fontSize:"13"}},tooltip:{trigger:"item"},geo:{zoom:1,map:"world",roam:!1,left:10,right:10,label:{show:!1},itemStyle:{areaColor:"#002E57",borderColor:"#A3D2F3",borderWidth:1},emphasis:{label:{show:!1},itemStyle:{areaColor:"#D9EEFF"}},regions:[{name:"China",itemStyle:{areaColor:"green"}}]},series:[{type:"effectScatter",coordinateSystem:"geo",symbol:"circle",symbolSize:10,label:{show:!1,color:"#fff",offset:[0,18]},tooltip:{show:!1},itemStyle:{color:"#FDFE2A",shadowBlur:10},data:[{name:"新疆",capital:"库尔勒",value:[86.06,41.68],man:"帆帆挖金"},{name:"甘肃",capital:"兰州",value:[103.73,36.03,9],man:"未来建筑师"}],zlevel:2},{type:"lines",zlevel:3,effect:{show:!0,period:4,trailLength:0,symbol:"arrow",symbolSize:5,color:"#E78A37"},lineStyle:{color:"#FDFE2A",width:1,curveness:.3},data:[{coords:[[86.06,41.68],[103.73,36.03,9]]}]}]};e.default={props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"}},mounted:function(){this.initChart()},data:function(){return{chart:null}},methods:{initChart:function(){this.chart=i.default.init(this.$el),this.updateChart(n)},updateChart:function(t){this.chart.setOption(t)}}}},fW4V:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(a("MT78"));console.log;a("gX0l");var n={title:{show:!1},tooltip:{trigger:"none"},grid:{left:"0%",top:"75%",bottom:"0%",containLabel:!0},xAxis:{type:"value",show:!1,boundaryGap:[0,.01]},yAxis:{type:"category",data:["四 美国","三 德国","二 韩国","一 中国"],offset:70,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#fff",align:"left",width:70}},series:[{type:"bar",barWidth:"30%",label:{show:!0,position:"right",color:"#6EBAEE",distance:6,formatter:function(t){return t.data.value+"万吨"}},data:[{value:400,name:"中国",itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#46BFEC"},{offset:1,color:"#35B1DE"}]}}}]},{type:"pie",radius:[0,"60%"],center:["50%","35%"],showEmptyCircle:!1,data:[{value:0,name:"中国"}],roseType:"radius",animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()},label:{show:!0,color:"#6EBAEE",overflow:"none",formatter:"{b}"},labelLine:{lineStyle:{color:"#6EBAEE",type:"dashed"}},emphasis:{labelLine:{lineStyle:{color:"#6EBAEE",type:"dashed"}}},markPoint:{show:!1},markLine:{show:!1},markArea:{show:!1}}]};e.default={props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},methods:{initChart:function(){this.chart=i.default.init(this.$el),this.updateChart(n)},updateChart:function(t){this.chart.setOption(t)}}}},fhdU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"BackGround2",props:{bgImage:{type:String,default:"/static/images/background.png"}},data:function(){return{pressTimer:null,startX:"",startY:"",startTime:""}},mounted:function(){var t=this;"/"!==this.$route.path&&(window.addEventListener("touchstart",function(e){t.start(e)},!0),window.addEventListener("touchend",function(e){t.cancel(e)},!0),window.addEventListener("touchcancel",function(e){t.cancel(e)},!0),window.addEventListener("dblclick",function(e){return t.$contextmenu({items:[{label:"",onClick:function(){t.$router.go(-1)}},{label:"",onClick:function(){t.$router.push({path:"/"})}},{label:"",onClick:function(){t.$router.go(0)}},{label:"",onClick:function(){t.$contextmenu.destroy()}}],event:e,zIndex:99}),!1},!0)),document.oncontextmenu=function(){return!1}},methods:{start:function(t){var e=this;"click"===t.type&&0!==t.button||(t.preventDefault(),this.startTime=(new Date).getTime(),this.startX=t.targetTouches[0].clientX,this.startY=t.targetTouches[0].clientY,null===this.pressTimer&&"/"!=this.$route.path&&(this.pressTimer=setTimeout(function(){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&navigator.vibrate(200),e.$contextmenu({items:[{label:"",onClick:function(){e.$router.go(-1)}},{label:"",onClick:function(){e.$router.push({path:"/"})}},{label:"",onClick:function(){e.$router.go(0)}},{label:"",onClick:function(){e.$contextmenu.destroy()}}],x:e.startX,y:e.startY,zIndex:99,minWidth:230})},1e3)))},cancel:function(t){if(t.preventDefault(),(new Date).getTime()-this.startTime<300){var e=Math.abs(this.startX-t.changedTouches[0].clientX)<30,a=Math.abs(this.startY-t.changedTouches[0].clientY)<30;e&&a&&t.changedTouches[0].target.click()}null!==this.pressTimer&&(clearTimeout(this.pressTimer),this.pressTimer=null)}}}},gQug:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(a("P2sY"));e.materialimportsource=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.default)({url:"api/v1/industry/materialimportsource/",method:"get",params:(0,i.default)({limit:5},t)})},e.materialimporttotal=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.default)({url:"api/v1/industry/materialimporttotal/",method:"get",params:t})},e.flyline=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.default)({url:"api/v1/industry/flyline/",method:"get",params:t})},e.materialproduction=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.default)({url:"api/v1/industry/materialproduction/",method:"get",params:t})},e.company=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.default)({url:"api/industry/company",method:"get",params:t})};var n=r(a("t3Un"));function r(t){return t&&t.__esModule?t:{default:t}}},i91y:function(t,e,a){"use strict";a.r(e);var i=a("83Ik"),n=a("t0xu");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return n[t]})}(r);a("tnzb");var o=a("KHd+"),l=Object(o.a)(n.default,i.a,i.b,!1,null,"72ed2fa2",null);l.options.__file="index.vue",e.default=l.exports},lz5o:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{height:this.height,width:this.width}})},n=[]},mByD:function(t,e,a){"use strict";a.r(e);var i=a("bPda"),n=a("/kbj");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return n[t]})}(r);a("qFqb");var o=a("KHd+"),l=Object(o.a)(n.default,i.a,i.b,!1,null,"8f7764e2",null);l.options.__file="index.vue",e.default=l.exports},mXtb:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n});var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{height:this.height,width:this.width}})},n=[]},qFqb:function(t,e,a){"use strict";var i=a("5Nk6");a.n(i).a},t0xu:function(t,e,a){"use strict";a.r(e);var i=a("x96s"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return i[t]})}(r);e.default=n.a},tnzb:function(t,e,a){"use strict";var i=a("90IC");a.n(i).a},x96s:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(a("gQug")),n=u(a("mByD")),r=u(a("AYc9")),o=u(a("IZix")),l=u(a("5328")),s=u(a("+ugt"));function u(t){return t&&t.__esModule?t:{default:t}}console.log;e.default={name:"Resource",components:{Header:n.default,BackGround:r.default,WorldMap:o.default,ReserveMap:l.default,ProductionBar:s.default},data:function(){return{mode:{index:0,list:[{text:"铜",val:1},{text:"铝",val:2}]},modeSetFlag:!1}},mounted:function(){this.modeSetFlag=!1,this.get_fly(1),this.mode_sel(this.mode.list[0],0)},methods:{mode_sel:function(t,e){var a=this;this.modeSetFlag||(this.modeSetFlag=!0,setTimeout(function(){a.modeSetFlag=!1},1e3),this.mode.index=e,this.get_sort(t.val),this.get_trend(t.val),this.get_fly(t.val),this.getImport(t.val))},get_sort:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a={title:{show:!1},tooltip:{trigger:"none"},grid:{left:"0%",right:"60%",top:"0%",bottom:"65%",containLabel:!0},xAxis:{type:"value",show:!1,boundaryGap:[0,.01],interval:0,nameTextStyle:{align:"left"}},yAxis:{type:"category",data:["中国"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#fff"},nameTextStyle:{align:"left"},boundaryGap:[0,.01]},series:[{type:"bar",barWidth:"50%",label:{},data:[]},{type:"pie",radius:[0,"72%"],center:["60%","56%"],showEmptyCircle:!1,data:[{value:400,name:"中国",itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#46BFEC"},{offset:1,color:"#35B1DE"}]}}}],roseType:"radius",animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()},label:{color:"#6EBAEE"},labelLine:{lineStyle:{color:"#6EBAEE",type:"dashed"}},emphasis:{labelLine:{lineStyle:{color:"#6EBAEE",type:"dashed"}}},markPoint:{show:!1},markLine:{show:!1},markArea:{show:!1}}]};a.series[0].label.formatter=2==e?function(t){return t.data.value+"%"}:function(t){return t.data.value+"万吨"},i.materialimportsource({ordering:"-amount",fields:"id,amount,country",commodity:e,expand:"country",year:"2021"}).then(function(e){if(1e3==e.code){for(var i=e.data.results,n=0;n<i.length;n++){var r=i[n];i[n].percentage=Math.log(r.amount)-1.6}a.yAxis.data=[],a.series[0].data=[],a.series[1].data=[];var o=["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"];i.map(function(t,e){var i=t.country.title,n=e+1+" "+i,r=t.amount,l=t.percentage;a.yAxis.data.unshift(n),a.series[0].data.unshift({value:r,name:i,itemStyle:{color:o[e]}}),a.series[1].data.unshift({value:l,name:i,itemStyle:{color:o[e]}})}),t.$refs.abc.updateChart(a)}})},get_trend:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a={tooltip:{trigger:"none",axisPointer:{type:"shadow"}},textStyle:{fontStyle:{color:"#fcc26f"}},xAxis:{type:"category",axisTick:{inside:!0,length:0,alignWithLabel:!0},axisLine:{lineStyle:{width:2,color:"#addcfe"}},data:["2月","3月","4月","5月","6月","7月","8月"]},yAxis:{show:!0,name:"万吨",nameLocation:"end",nameTextStyle:{color:"#addcfe",padding:[5,0,0,5]},nameGap:10,axisTick:{inside:!0,length:0},axisLine:{lineStyle:{width:2,color:"#addcfe"}},splitLine:{show:!1,lineStyle:{type:"dashed",color:"#1e95f0"}},type:"value"},grid:{left:50,right:10,top:20,bottom:20,show:!0,borderColor:"transparent",backgroundColor:"rgba(63,28,85,0.2)"},series:[{name:"铜",type:"bar",barWidth:"20%",data:[1e3,5200,2e3,3340,3900,3300,2200],itemStyle:{normal:{color:function(t){return["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"][t.dataIndex]}}}}]};i.materialimporttotal({ordering:"-statis_date",fields:"id,statis_date,amount",commodity:e,query_years:6}).then(function(e){if(1e3==e.code){var i=e.data.results;a.xAxis.data=[],a.series[0].data=[],i.map(function(t,e){var i=t.statis_date,n=t.amount;a.xAxis.data.unshift(i),a.series[0].data.unshift(n)}),t.$refs.abc1.updateChart(a)}})},get_fly:function(){var t={title:{show:!1},geo:{zoom:1,map:"world",roam:!1,left:10,right:10,label:{show:!1},itemStyle:{areaColor:"#002E57",borderColor:"#A3D2F3",borderWidth:1},emphasis:{label:{show:!1},itemStyle:{areaColor:"#D9EEFF"}},regions:[]},series:[{type:"effectScatter",coordinateSystem:"geo",symbol:"circle",symbolSize:10,label:{show:!0,formatter:function(t){return t.name}},tooltip:{show:!1},itemStyle:{color:"#FDFE2A",shadowBlur:10},data:[{value:[121.450802,31.201617]},{value:[30.28,116]}],zlevel:2},{type:"lines",zlevel:3,effect:{show:!0,period:4,trailLength:0,symbol:"arrow",symbolSize:5,color:"#E78A37"},lineStyle:{color:"#FDFE2A",width:1,curveness:.3},data:[{coords:[[-77.02,38.54],[116.46,39.92]]}]}]},e=[];e=2===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)?[{id:6,longitude_start:134.846984,latitude_start:-25.431389,longitude_end:115.27226,latitude_end:38.635842,name:"澳大利亚"},{id:7,longitude_start:-10.051821,latitude_start:10.442355,longitude_end:115.27226,latitude_end:38.635842,name:"几内亚"},{id:8,longitude_start:120.146969,latitude_start:-2.239847,longitude_end:115.27226,latitude_end:38.635842,name:"印度尼西亚"}]:[{id:2,longitude_start:139.630281,latitude_start:36.661181,longitude_end:115.27226,latitude_end:38.635842,name:"日本"},{id:3,longitude_start:68.248769,latitude_start:47.97209,longitude_end:115.27226,latitude_end:38.635842,name:"哈萨克斯坦"},{id:4,longitude_start:134.846984,latitude_start:-25.431389,longitude_end:115.27226,latitude_end:38.635842,name:"澳大利亚"},{id:5,longitude_start:-71.03774,latitude_start:-29.434142,longitude_end:115.27226,latitude_end:38.635842,name:"智利"}],t.series[0].data=[],t.series[1].data=[],e.map(function(e,a){var i=e.longitude_start,n=e.latitude_start,r=e.longitude_end,o=e.latitude_end;t.series[0].data.push({value:[i,n],name:e.name}),t.series[0].data.push({value:[r,o],name:""}),t.series[1].data.push({coords:[[i,n],[r,o]]})}),this.$refs.abc2.updateChart(t)},getImport:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},textStyle:{fontStyle:{color:"#fcc26f"}},xAxis:{type:"category",axisTick:{inside:!0,length:0,alignWithLabel:!0},axisLine:{lineStyle:{width:2,color:"#addcfe"}},data:["2月","3月","4月","5月","6月","7月","8月"]},yAxis:{show:!0,name:"百分比 % ",nameLocation:"end",nameTextStyle:{color:"#addcfe",padding:[5,0,0,5]},nameGap:10,axisTick:{inside:!0,length:0},axisLine:{lineStyle:{width:2,color:"#addcfe"}},splitLine:{show:!1,lineStyle:{type:"dashed",color:"#1e95f0"}},type:"value"},grid:{left:50,right:10,top:20,bottom:20,show:!0,borderColor:"transparent",backgroundColor:"rgba(63,28,85,0.2)"},label:{color:"#addcfe"},series:[{name:"铜",type:"bar",barWidth:"20%",data:[1e3,5200,2e3,3340,3900,3300,2200],itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#66b1ea"},{offset:1,color:"#addcfe"}]}}}},{name:"铜",type:"bar",barWidth:"20%",data:[1e3,5200,2e3,3340,3900,3300,2200],itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#ee6666"},{offset:1,color:"#F7B8B8"}]}}}}]};t.xAxis.data=[],t.series[0].data=[],t.xAxis.data=["矿储量占比","矿自给率","电解铜/铝产量占比","电解铜/铝消费占比"],t.series[0].data=[3,8,43,55],t.series[1].data=[3,40,59,59],this.$refs.importpercent.updateChart(t)}}}},yMcw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7Qib");e.default={name:"Header",components:{},props:{title:{type:String,default:"标题"},long:{type:Boolean,default:!1}},filters:{parseTime:i.parseTime},data:function(){return{nowDate:new Date}},mounted:function(){var t=this;this.now=setInterval(function(){t.nowDate=new Date},1e3)},beforeDestroy:function(){this.now&&clearInterval(this.now)}}},ykF3:function(t,e,a){"use strict";var i=a("9lL0");a.n(i).a}}]);