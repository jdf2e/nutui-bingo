import{c as g}from"./mobile.da231850.js";import{m as r,a as _,r as l,e as f,g as s,j as o,k as c,C as b,D as h,o as D,l as i}from"./vendor.9be82274.js";import{_ as v}from"./index.33fba367.js";const{createDemo:F}=g("lotto-roll"),E=F({props:{},setup(){const t=r(null),a=_([{imagePath:"https://img11.360buyimg.com/imagetools/jfs/t1/147182/12/2440/6194/5f06cde6Ead240fe8/31082e30a182a5ce.png",text:"\u5927\u9E21\u817F"},{imagePath:"https://img11.360buyimg.com/imagetools/jfs/t1/128607/26/6643/6790/5f06cd27E9b5e15f7/7509bc7ce2da66b8.png",text:"VIP"},{imagePath:"https://img11.360buyimg.com/imagetools/jfs/t1/105385/19/15140/111093/5e6f1506E48bd0dfb/829a98a8cdb4c27f.png",text:"Apple watch"},{imagePath:"https://img14.360buyimg.com/imagetools/jfs/t1/90507/38/15165/448364/5e6f15b4E5df0c718/4bd4c3d375eec312.png",text:"\u575A\u679C\u793C\u76D2"},{imagePath:"https://img14.360buyimg.com/imagetools/jfs/t1/104165/34/15186/96522/5e6f1435E46bc0cb0/d4e878a15bfd9362.png",text:"\u624B\u673A"}]),e=r(-1);return{lottoRollDom:t,prizeList:a,prizeIndex:e,startRole:()=>{e.value=Math.floor(Math.random()*5),t.value.start()},startRole2:()=>{e.value=-1,t.value.start()},startTurns:()=>{console.log("\u5F00\u59CB\u62BD\u5956")},endTurns:()=>{console.log("\u62BD\u5956\u7ED3\u675F")}}}}),B=t=>(b("data-v-2269115c"),t=t(),h(),t),C={class:"demo"},T=B(()=>s("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),y={class:"show-demo"},z={class:"btnBtn"},R=i("\u4E2D\u5956\uFF08\u6D4B\u8BD5\uFF09"),k=i("\u4E0D\u4E2D\u5956\uFF08\u6D4B\u8BD5\uFF09");function x(t,a,e,d,p,m){const n=l("nutbig-lotto-roll"),u=l("nut-button");return D(),f("div",C,[T,s("div",y,[o(n,{ref:"lottoRollDom","prize-list":t.prizeList,"prize-index":t.prizeIndex,onStartTurns:t.startTurns,onEndTurns:t.endTurns},null,8,["prize-list","prize-index","onStartTurns","onEndTurns"]),s("div",z,[o(u,{type:"danger",onClick:t.startRole,disabled:t.startFlag},{default:c(()=>[R]),_:1},8,["onClick","disabled"]),o(u,{type:"danger",onClick:t.startRole2,disabled:t.startFlag},{default:c(()=>[k]),_:1},8,["onClick","disabled"])])])])}var S=v(E,[["render",x],["__scopeId","data-v-2269115c"]]);export{S as default};