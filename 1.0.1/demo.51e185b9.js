import{c as n}from"./mobile.13ccdde9.js";import{_ as m}from"./index.40d06686.js";import{m as i,a as p,r as d,e as c,j as g,g as f,o as l}from"./vendor.d935373b.js";const{createDemo:b}=n("marquee"),z=b({setup(){const e=i([{id:"xiaomi",prizeName:"\u5C0F\u7C73\u624B\u673A",prizeImg:"https://img14.360buyimg.com/imagetools/jfs/t1/104165/34/15186/96522/5e6f1435E46bc0cb0/d4e878a15bfd9362.png"},{id:"blue",prizeColor:"rgb(251, 219, 216)",prizeName:"\u84DD\u7259\u8033\u673A",prizeImg:"https://img13.360buyimg.com/imagetools/jfs/t1/91864/11/15108/139003/5e6f146dE1c7b511d/1ddc5aa6e502060a.jpg"},{id:"thanks",prizeName:"\u8C22\u8C22\u53C2\u4E0E",prizeImg:"https://img11.360buyimg.com/imagetools/jfs/t1/96116/38/15085/5181/5e6f15d1E48e31d30/71353b61dff705d4.png"},{id:"apple",prizeName:"apple watch",prizeImg:"https://img11.360buyimg.com/imagetools/jfs/t1/105385/19/15140/111093/5e6f1506E48bd0dfb/829a98a8cdb4c27f.png"},{id:"fruit",prizeColor:"rgba(246, 142, 46, 0.5)",prizeName:"\u8FEA\u58EB\u5C3C\u82F9\u679C",prizeImg:"https://img11.360buyimg.com/imagetools/jfs/t1/108308/11/8890/237603/5e6f157eE489cccf1/26e0437cfd93b9c8.png"},{id:"thanks",prizeName:"\u8C22\u8C22\u53C2\u4E0E",prizeImg:"https://img11.360buyimg.com/imagetools/jfs/t1/96116/38/15085/5181/5e6f15d1E48e31d30/71353b61dff705d4.png"},{id:"fish",prizeName:"\u6D77\u9C9C\u5957\u9910",prizeImg:"https://img14.360buyimg.com/imagetools/jfs/t1/90507/38/15165/448364/5e6f15b4E5df0c718/4bd4c3d375eec312.png"},{id:"thanks",prizeName:"\u8C22\u8C22\u53C2\u4E0E",prizeImg:"https://img11.360buyimg.com/imagetools/jfs/t1/96116/38/15085/5181/5e6f15d1E48e31d30/71353b61dff705d4.png"}]),s=p({prizeItem:{},startStyle:{},contentBg:{background:"rgb(255, 231, 149)"}}),t=i(0);return{prizeList:e,styleOpt:s,prizeIndex:t,startTurns:()=>{const r=Math.floor(Math.random()*e.value.length);t.value=r},endTurns:()=>{alert("\u4E2D\u5956\u4E86")}}}}),C={class:"demo"},E=f("h2",null,"\u57FA\u7840\u7528\u6CD5",-1);function h(e,s,t,o,u,r){const a=d("nutbig-marquee");return l(),c("div",C,[E,g(a,{"prize-list":e.prizeList,"prize-index":e.prizeIndex,speed:100,circle:40,"style-opt":e.styleOpt,onStartTurns:e.startTurns,onEndTurns:e.endTurns},null,8,["prize-list","prize-index","style-opt","onStartTurns","onEndTurns"])])}var j=m(z,[["render",h]]);export{j as default};