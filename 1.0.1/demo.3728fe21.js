import{c as i}from"./mobile.4c59c968.js";import{m as s,a as r,r as m,e as d,g as n,j as l,_ as p,C as _,D as g,o as h}from"./vendor.f1d0dae3.js";import{_ as f}from"./index.40d06686.js";const{createDemo:D}=i("doll-machine"),E=D({props:{},setup(){const e=s(null),t=r([{imagePath:"https://img11.360buyimg.com/imagetools/jfs/t1/147182/12/2440/6194/5f06cde6Ead240fe8/31082e30a182a5ce.png",text:"\u5927\u9E21\u817F"},{imagePath:"https://img12.360buyimg.com/imagetools/jfs/t1/221361/4/7410/16458/61c9261eE45802396/27b64caa9e7c9bac.png",text:"JOY"},{imagePath:"https://img11.360buyimg.com/imagetools/jfs/t1/128607/26/6643/6790/5f06cd27E9b5e15f7/7509bc7ce2da66b8.png",text:"VIP"},{imagePath:"https://img12.360buyimg.com/imagetools/jfs/t1/221361/4/7410/16458/61c9261eE45802396/27b64caa9e7c9bac.png",text:"JOY"}]),o=s(3);return{lottoRollDom:e,prizeList:t,prizeIndex:o,startTurns:()=>{console.log("\u5F00\u59CB\u62BD\u5956")},endTurns:()=>{console.log("\u62BD\u5956\u7ED3\u675F"),setTimeout(()=>{p({title:"\u4E2D\u5956\u63D0\u793A",content:"\u60A8\u5DF2\u5B8C\u6210\u62BD\u5956\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",onCancel:()=>{},onOk:()=>{setTimeout(()=>{e.value.init()},300)}})},4500)}}}}),b=e=>(_("data-v-64cd6662"),e=e(),g(),e),T={class:"demo"},v=b(()=>n("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),F={class:"show-demo"};function x(e,t,o,a,u,z){const c=m("nutbig-doll-machine");return h(),d("div",T,[v,n("div",F,[l(c,{ref:"lottoRollDom","prize-list":e.prizeList,"prize-index":e.prizeIndex,onStartTurns:e.startTurns,onEndTurns:e.endTurns},null,8,["prize-list","prize-index","onStartTurns","onEndTurns"])])])}var y=f(E,[["render",x],["__scopeId","data-v-64cd6662"]]);export{y as default};