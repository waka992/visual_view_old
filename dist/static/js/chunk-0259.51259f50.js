(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0259"],{"/kbj":function(t,e,i){"use strict";i.r(e);var a=i("yMcw"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return a[t]})}(s);e.default=n.a},"2POU":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i("GncU")),n=l(i("AYc9")),s=l(i("mByD")),r=l(i("mUA+")),o=l(i("5328"));function l(t){return t&&t.__esModule?t:{default:t}}console.log;e.default={name:"index",components:{SupplyLine:r.default,Header:s.default,BackGround:n.default,ReserveMap:o.default},data:function(){return{type_val:0,industry:{list:[{title:"电力投资",desc:"电力行业是中国铜消费最大行业，需求较为稳定，占比45%左右。2022年，在“稳增长”总基调之下，基建发挥托底作用，带动电力电缆端用铜需求。",img:"/static/images/supply-img1.png"},{title:"房地产",desc:"美欧发达国家铜消费主要集中在地产行业，占比超50%。中国铜在房地产行业主要用于竣工阶段，如小区配电、室内布线、卫浴和水管等。",img:"/static/images/supply-img2.png"},{title:"家用电器",desc:"铜管消费主要是制冷领域，其中以空调为主，铜管是空调冰箱等制冷装置的重要原材料。",img:"/static/images/supply-img3.png"},{title:"汽车制造",desc:"汽车行业铜消费占比7%。2022年1-10月，汽车产销量分别达到2224.2万辆和2197.5万辆，同比增长7.9%和4.6%。",img:"/static/images/supply-img4.png"}]},enterprise:{list:[]},enterprise1:{list:[]}}},mounted:function(){this.type_val=Number(this.$route.params.type)+1,this.get_downstreamindustry(this.type_val),this.get_manufacturingenterprise(this.type_val),this.get_supply(this.type_val),this.get_industry(this.type_val)},methods:{get_downstreamindustry:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;a.downstreamindustry({fields:"id,title,description",commodity:1}).then(function(i){if(1e3==i.code){1===e&&(t.industry.list=[{title:"电力投资",desc:"电力行业是中国铜消费最大行业，需求较为稳定，占比45%左右。2022年，在“稳增长”总基调之下，基建发挥托底作用，带动电力电缆端用铜需求。",img:"/static/images/supply-img1.png"},{title:"房地产",desc:"美欧发达国家铜消费主要集中在地产行业，占比超50%。中国铜在房地产行业主要用于竣工阶段，如小区配电、室内布线、卫浴和水管等。",img:"/static/images/supply-img2.png"},{title:"家用电器",desc:"铜管消费主要是制冷领域，其中以空调为主，铜管是空调冰箱等制冷装置的重要原材料。",img:"/static/images/supply-img3.png"},{title:"汽车制造",desc:"汽车行业铜消费占比7%。2022年1-10月，汽车产销量分别达到2224.2万辆和2197.5万辆，同比增长7.9%和4.6%。",img:"/static/images/supply-img4.png"}]),2===e&&(t.industry.list=[{title:"建筑业",desc:"建筑业是我国铝材最大的下游应用领域，占比达到32%。铝合金广泛应用于建筑工程结构和建筑装饰，如门窗框、幕墙、顶棚及隔断等。",img:"/static/images/supply-img2.png"},{title:"电子电力",desc:"由于铝具有良好导电性能和密度低、质量轻的特性，在电力行业中用于制造电线电缆、母线及导体及其它输配电设备等，同时是计算机、通讯设备、个人电子消费品等重要电子产品领域的原材料。",img:"/static/images/supply-img1.png"},{title:"交通运输",desc:"汽车制造、铁路及轨道车辆制造以及集装箱制造是电解铝在交通运输领域应用最广的三大细分行业。其中，新能源汽车及汽车轻量化发展成为近期铝消费的新增长点，2022年1-10月，中国新能源汽车累计产量549万辆，占汽车总产量的25%，该比值在2020年仅为5%。单车铝合金使用量比传统燃油车多40%左右。",img:"/static/images/supply-img4.png"}])}})},get_manufacturingenterprise:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;a.manufacturingenterprise({fields:"id,title,annual_production,icon,description",ordering:"-annual_production",commodity:1}).then(function(i){if(1e3==i.code){2===e?(t.enterprise={list:[{title:"山东魏桥",num:"产量: 646万吨/年",desc:"山东魏桥铝电有限公司是一家集热电铝业联产的民营企业。成立于2002年，是集热电、氧化铝、电解铝、铝深加工于一体的特大型综合企业。",img:"/static/images/supply-img14.png"},{title:"中国铝业",num:"产量: 446万吨/年",desc:"中国铝业股份有限公司是中央管理的国有重要骨干企业，从事矿产资源开发、有色金属冶炼加工、相关贸易及工程技术服务等，同业综合实力位居全国第一。",img:"/static/images/supply-img13.png"}]},t.enterprise1={list:[{title:"信发铝电",num:"产量: 218万吨/年",desc:"山东信发铝电集团有限公司是集发电、供热、电解铝、氧化铝、中高密度板、铝深加工等产业链条于一体的现代化大型企业集团",img:"/static/images/supply-img15.png"},{title:"云铝股份",num:"产量: 240万吨/年",desc:"铝土矿开采、氧化铝生产、铝冶炼、铝加工及铝用炭素生产，形成了集铝土矿、氧化铝、电解铝、铝加工及铝用炭素生产为一体的完整产业链。",img:"/static/images/supply-img7.png"}]}):(t.enterprise={list:[{title:"江西铜业",num:"产量: 164万吨/年",desc:"江西铜业是中国国内最大的铜生产基地，最大的伴生金、银生产基地。电解铜年产量164万吨，占国内总产量的16%。预估2021年公司生产阴极铜173万吨。",img:"/static/images/supply-img5.png"},{title:"铜陵有色",num:"产量: 142万吨/年",desc:"年产量142万吨，占国内总产量的14%。名列国内、国际精炼铜生产企业前茅。预估2021年公司生产阴极铜151万吨。",img:"/static/images/supply-img6.png"}]},t.enterprise1={list:[{title:"云南铜业",num:"产量: 131万吨/年",desc:"是中国重要的铜、金、银和硫化工生产基地。其中阴极铜产能130万吨/年。",img:"/static/images/supply-img7.png"},{title:"紫金矿业",num:"产量: 45万吨/年",desc:"通过资源并购及自主勘查，紫金矿业铜资源储量持续快速增长，其在海外12个国家拥有重要矿业投资项目，其中包括6座铜矿。",img:"/static/images/supply-img8.png"}]})}})},get_supply:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t={legend:{textStyle:{color:"#2a71b5"},show:!0},xAxis:{type:"category",data:[1,2,3,4,5,6,7,8,9,10,11,12],axisLine:{lineStyle:{width:2,color:"#E6D90C"}},nameLocation:"middle"},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,color:"#E6D90C"},splitLine:{show:!0,lineStyle:{type:"dashed"}}},series:[{data:[150,230,224,218,135,147,260,100,100,100,100,100],type:"line",itemStyle:{color:"#E20A3C"},name:"年度缺口",showSymbol:!1}]};(1==this.type_val?[{id:1,statis_date:"2006",amount:27.8},{id:2,statis_date:"2007",amount:-11.9},{id:3,statis_date:"2008",amount:34.3},{id:4,statis_date:"2009",amount:41},{id:5,statis_date:"2010",amount:1.82},{id:6,statis_date:"2011",amount:25},{id:7,statis_date:"2012",amount:25},{id:8,statis_date:"2013",amount:28.3},{id:9,statis_date:"2014",amount:11.6},{id:10,statis_date:"2015",amount:14.1},{id:11,statis_date:"2016",amount:-10.2},{id:12,statis_date:"2017",amount:13.8},{id:13,statis_date:"2018",amount:-1.9},{id:14,statis_date:"2019",amount:-9.4},{id:15,statis_date:"2020",amount:-139.1}]:[{id:1,statis_date:"2006",amount:34.1},{id:2,statis_date:"2007",amount:17.8},{id:3,statis_date:"2008",amount:125.1},{id:4,statis_date:"2009",amount:76.9},{id:5,statis_date:"2010",amount:98.9},{id:6,statis_date:"2011",amount:188.7},{id:7,statis_date:"2012",amount:34.9},{id:8,statis_date:"2013",amount:56.9},{id:9,statis_date:"2014",amount:-58.9},{id:10,statis_date:"2015",amount:-65.9},{id:11,statis_date:"2016",amount:-77},{id:12,statis_date:"2017",amount:-120.9},{id:13,statis_date:"2018",amount:-99.3},{id:14,statis_date:"2019",amount:68.5},{id:15,statis_date:"2020",amount:154.6}]).map(function(e,i){var a=e.statis_date,n=e.amount;t.xAxis.data.unshift(a),t.series[0].data.push(n)}),t.xAxis.data=[],this.$refs.abc.updateChart(t)},get_industry:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t={title:{show:!1},tooltip:{trigger:"item"},grid:{left:"13%",right:"60%",top:"4%",bottom:"10%",containLabel:!0},xAxis:{type:"value",show:!1,boundaryGap:[0,.01]},yAxis:{type:"category",data:[],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#fff"}},series:[{type:"bar",barWidth:"30%",data:[],label:{formatter:function(t){return t.data.value+"%"}}},{type:"pie",radius:[0,"60%"],center:["68%","45%"],showEmptyCircle:!1,data:[],roseType:"radius",animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()},label:{color:"#6EBAEE"},labelLine:{lineStyle:{color:"#6EBAEE",type:"dashed"}},emphasis:{labelLine:{lineStyle:{color:"#6EBAEE",type:"dashed"}}},markPoint:{show:!1},markLine:{show:!1},markArea:{show:!1}}]},e=["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"];(1==this.type_val?[{name:"电力投资",percent:45},{name:"房地产",percent:18},{name:"家用电器",percent:16},{name:"汽车制造",percent:7},{name:"其他",percent:14}]:[{name:"建筑业",percent:32},{name:"电子电力",percent:16},{name:"交通运输",percent:13},{name:"耐用消费品",percent:11},{name:"钢材铝合金",percent:12},{name:"其他",percent:16}]).map(function(i,a){var n=i.name,s=a+1+" "+n,r=i.percent;t.yAxis.data.unshift(s),t.series[0].data.unshift({value:r,name:n,itemStyle:{color:e[a]}}),t.series[1].data.unshift({value:r,name:n,itemStyle:{color:e[a]}})}),this.$refs.abc1.updateChart(t)}}}},"2enn":function(t,e,i){"use strict";i.r(e);var a=i("fW4V"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return a[t]})}(s);e.default=n.a},"4mMR":function(t,e,i){"use strict";i.r(e);var a=i("2POU"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return a[t]})}(s);e.default=n.a},5328:function(t,e,i){"use strict";i.r(e);var a=i("wdaF"),n=i("2enn");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return n[t]})}(s);var r=i("KHd+"),o=Object(r.a)(n.default,a.a,a.b,!1,null,null,null);o.options.__file="ReserveMap.vue",e.default=o.exports},"58lJ":function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[e("div",{staticClass:"vue-particles",style:{backgroundImage:"url("+this.bgImage+")"}})])},n=[]},"6eAq":function(t,e,i){},"7Qib":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i("EJiy"));function n(t,e){if(0===arguments.length)return null;var i=e||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"===(void 0===t?"undefined":(0,a.default)(t))?n=t:("string"==typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"==typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var s={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return i.replace(/{([ymdhisa])+}/g,function(t,e){var i=s[e];return"a"===e?["日","一","二","三","四","五","六"][i]:i.toString().padStart(2,"0")})}e.parseTime=n,e.formatTime=function(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var i=new Date(t),a=(Date.now()-i)/1e3;if(a<30)return"刚刚";if(a<3600)return Math.ceil(a/60)+"分钟前";if(a<86400)return Math.ceil(a/3600)+"小时前";if(a<172800)return"1天前";return e?n(t,e):i.getMonth()+1+"月"+i.getDate()+"日"+i.getHours()+"时"+i.getMinutes()+"分"},e.isExternal=function(t){return/^(https?:|mailto:|tel:)/.test(t)}},"9DfR":function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("BackGround"),t._v(" "),i("Header",{attrs:{title:"供需关系"}}),t._v(" "),i("div",{staticClass:"body"},[i("div",{staticClass:"one"},[t._m(0),t._v(" "),i("div",{staticClass:"desc"},t._l(t.industry.list,function(e,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"t1"},[i("img",{attrs:{src:e.img,alt:"",srcset:""}}),t._v(" "),i("div",{staticClass:"t2"},[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"d1"},[t._v("\n            "+t._s(e.desc)+"\n          ")])])}))]),t._v(" "),i("div",{staticClass:"one1"},[i("div",[t._m(1),t._v(" "),i("div",[i("div",{staticClass:"chart-wrapper"},[i("SupplyLine",{ref:"abc",attrs:{height:"35vh"}})],1)])]),t._v(" "),i("div",{staticClass:"mt1"},[t._m(2),t._v(" "),i("div",[i("div",{staticClass:"chart-wrapper"},[i("ReserveMap",{ref:"abc1",attrs:{height:"35vh",index:t.type_val}})],1)])])]),t._v(" "),i("div",{staticClass:"one2"},[i("div",[t._m(3),t._v(" "),i("div",{staticClass:"desc"},t._l(t.enterprise.list,function(e,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"t1"},[i("img",{attrs:{src:e.img,alt:"",srcset:""}}),t._v(" "),i("div",{staticClass:"t2"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"num"},[t._v(t._s(e.num))])]),t._v(" "),i("div",{staticClass:"d1"},[t._v("\n              "+t._s(e.desc)+"\n            ")])])}))]),t._v(" "),i("div",{staticClass:"btns"},[i("div",{staticClass:"btn btn1",on:{click:function(e){t.$router.push({path:"/industrychain"})}}},[i("img",{attrs:{src:"/static/images/supply-img9.png",alt:"",srcset:""}}),t._v(" "),i("div",[t._v("产业链")])]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(e){t.$router.push({path:"/industrychain/localsituation"})}}},[i("img",{attrs:{src:"/static/images/supply-img10.png",alt:"",srcset:""}}),t._v(" "),i("div",[t._v("佛山概况")])])]),t._v(" "),i("div",[i("div",{staticClass:"desc"},t._l(t.enterprise1.list,function(e,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"t1"},[i("img",{attrs:{src:e.img,alt:"",srcset:""}}),t._v(" "),i("div",{staticClass:"t2"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"num"},[t._v(t._s(e.num))])]),t._v(" "),i("div",{staticClass:"d1"},[t._v("\n              "+t._s(e.desc)+"\n            ")])])}))])])])],1)},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[this._v("下游行业")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[this._v("供需平衡")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[this._v("行业占比")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[this._v("加工企业")])])}]},"9lL0":function(t,e,i){},AYc9:function(t,e,i){"use strict";i.r(e);var a=i("58lJ"),n=i("ay3F");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return n[t]})}(s);i("ykF3");var r=i("KHd+"),o=Object(r.a)(n.default,a.a,a.b,!1,null,"68f4c094",null);o.options.__file="index.vue",e.default=o.exports},B1fr:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"title"},[i("div",{staticClass:"left"},[t._v("广东粤汇金属交易中心")]),t._v(" "),i("div",{staticClass:"middle"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t._f("parseTime")(t.nowDate,"{y} 年 {m}月 {d}日 {h}:{i}")))])])])},n=[]},GncU:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.production=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.default)({url:"api/v1/industry/production/",method:"get",params:t})},e.consumption=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.default)({url:"api/v1/industry/consumption/",method:"get",params:t})},e.storage=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.default)({url:"api/v1/industry/storage/",method:"get",params:t})},e.downstreamindustry=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.default)({url:"api/v1/industry/downstreamindustry/",method:"get",params:t})},e.manufacturingenterprise=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.default)({url:"api/v1/industry/manufacturingenterprise/",method:"get",params:t})};var a=function(t){return t&&t.__esModule?t:{default:t}}(i("t3Un"))},K02u:function(t,e,i){"use strict";var a=i("6eAq");i.n(a).a},UK2T:function(t,e,i){"use strict";var a=i("j3BA");i.n(a).a},ZGZn:function(t,e,i){"use strict";i.r(e);var a=i("fF/G"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return a[t]})}(s);e.default=n.a},ay3F:function(t,e,i){"use strict";i.r(e);var a=i("fhdU"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return a[t]})}(s);e.default=n.a},"fF/G":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i("MT78"));console.log;i("gX0l");var n={legend:{right:"10%",show:!0,textStyle:{color:"#2a71b5"}},xAxis:{type:"category",data:[1,2,3,4,5,6,7,8,9,10,11,12],axisLine:{lineStyle:{width:2,color:"#E6D90C"}},nameLocation:"middle"},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,color:"#E6D90C"},splitLine:{show:!1}},series:[{data:[150,230,224,218,135,147,260,100,100,100,100,100],type:"line",itemStyle:{color:"#E20A3C"},name:"当月缺口",showSymbol:!1}]};e.default={props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},methods:{initChart:function(){this.chart=a.default.init(this.$el),this.updateChart(n)},updateChart:function(t){this.chart.setOption(t)}}}},fW4V:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i("MT78"));console.log;i("gX0l");var n={title:{show:!1},tooltip:{trigger:"item"},grid:{left:"0%",top:"75%",bottom:"0%",containLabel:!0},xAxis:{type:"value",show:!1,boundaryGap:[0,.01]},yAxis:{type:"category",data:["四 美国","三 德国","二 韩国","一 中国"],offset:70,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#fff",align:"left",width:70}},series:[{type:"bar",barWidth:"30%",label:{show:!0,position:"right",color:"#6EBAEE",distance:6,formatter:function(t){return t.data.value+"万吨"}},data:[{value:400,name:"中国",itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#46BFEC"},{offset:1,color:"#35B1DE"}]}}}]},{type:"pie",radius:[0,"60%"],center:["50%","35%"],showEmptyCircle:!1,data:[{value:0,name:"中国"}],roseType:"radius",animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()},label:{show:!0,color:"#6EBAEE",overflow:"none"},labelLine:{lineStyle:{color:"#6EBAEE",type:"dashed"}},emphasis:{labelLine:{lineStyle:{color:"#6EBAEE",type:"dashed"}}},markPoint:{show:!1},markLine:{show:!1},markArea:{show:!1}}]};e.default={props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},methods:{initChart:function(){this.chart=a.default.init(this.$el),this.updateChart(n)},updateChart:function(t){this.chart.setOption(t)}}}},fhdU:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"BackGround2",props:{bgImage:{type:String,default:"/static/images/background.png"}},data:function(){return{pressTimer:null,startX:"",startY:"",startTime:""}},mounted:function(){var t=this;"/"!==this.$route.path&&(window.addEventListener("touchstart",function(e){t.start(e)},!0),window.addEventListener("touchend",function(e){t.cancel(e)},!0),window.addEventListener("touchcancel",function(e){t.cancel(e)},!0),window.addEventListener("dblclick",function(e){return t.$contextmenu({items:[{label:"",onClick:function(){t.$router.go(-1)}},{label:"",onClick:function(){t.$router.push({path:"/"})}},{label:"",onClick:function(){t.$router.go(0)}},{label:"",onClick:function(){t.$contextmenu.destroy()}}],event:e,zIndex:99}),!1},!0)),document.oncontextmenu=function(){return!1}},methods:{start:function(t){var e=this;"click"===t.type&&0!==t.button||(t.preventDefault(),this.startTime=(new Date).getTime(),this.startX=t.targetTouches[0].clientX,this.startY=t.targetTouches[0].clientY,null===this.pressTimer&&"/"!=this.$route.path&&(this.pressTimer=setTimeout(function(){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&navigator.vibrate(200),e.$contextmenu({items:[{label:"",onClick:function(){e.$router.go(-1)}},{label:"",onClick:function(){e.$router.push({path:"/"})}},{label:"",onClick:function(){e.$router.go(0)}},{label:"",onClick:function(){e.$contextmenu.destroy()}}],x:e.startX,y:e.startY,zIndex:99,minWidth:230})},1e3)))},cancel:function(t){if(t.preventDefault(),(new Date).getTime()-this.startTime<300){var e=Math.abs(this.startX-t.changedTouches[0].clientX)<30,i=Math.abs(this.startY-t.changedTouches[0].clientY)<30;e&&i&&t.changedTouches[0].target.click()}null!==this.pressTimer&&(clearTimeout(this.pressTimer),this.pressTimer=null)}}}},gX0l:function(t,e,i){var a,n,s;n=[e,i("MT78")],void 0===(s="function"==typeof(a=function(t,e){if(e){var i=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],a={color:i,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:i[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{color:"#008acd",borderColor:"#008acd"},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{color:"#d87a80",color0:"#2ec7c9"},lineStyle:{width:1,color:"#d87a80",color0:"#2ec7c9"},areaStyle:{color:"#2ec7c9",color0:"#b6a2de"}},scatter:{symbol:"circle",symbolSize:4},map:{itemStyle:{color:"#ddd"},areaStyle:{color:"#fe994e"},label:{color:"#d87a80"}},graph:{itemStyle:{color:"#d87a80"},linkStyle:{color:"#2ec7c9"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};e.registerTheme("macarons",a)}else!function(t){"undefined"!=typeof console&&console&&console.error&&console.error(t)}("ECharts is not Loaded")})?a.apply(e,n):a)||(t.exports=s)},j3BA:function(t,e,i){},mByD:function(t,e,i){"use strict";i.r(e);var a=i("B1fr"),n=i("/kbj");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return n[t]})}(s);i("K02u");var r=i("KHd+"),o=Object(r.a)(n.default,a.a,a.b,!1,null,"19500570",null);o.options.__file="index.vue",e.default=o.exports},"mUA+":function(t,e,i){"use strict";i.r(e);var a=i("yTwv"),n=i("ZGZn");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return n[t]})}(s);var r=i("KHd+"),o=Object(r.a)(n.default,a.a,a.b,!1,null,null,null);o.options.__file="SupplyLine.vue",e.default=o.exports},nzax:function(t,e,i){"use strict";i.r(e);var a=i("9DfR"),n=i("4mMR");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return n[t]})}(s);i("UK2T");var r=i("KHd+"),o=Object(r.a)(n.default,a.a,a.b,!1,null,"0e65ddcd",null);o.options.__file="index.vue",e.default=o.exports},wdaF:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var a=function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{height:this.height,width:this.width}})},n=[]},yMcw:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7Qib");e.default={name:"Header",components:{},props:{title:{type:String,default:"标题"}},filters:{parseTime:a.parseTime},data:function(){return{nowDate:new Date}},mounted:function(){var t=this;this.now=setInterval(function(){t.nowDate=new Date},1e3)},beforeDestroy:function(){this.now&&clearInterval(this.now)}}},yTwv:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var a=function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{height:this.height,width:this.width}})},n=[]},ykF3:function(t,e,i){"use strict";var a=i("9lL0");i.n(a).a}}]);