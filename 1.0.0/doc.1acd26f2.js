import{e as t,o as n,y as e}from"./vendor.da7cad2a.js";const d={class:"markdown-body"},r=[e('<h1>Guessgift 你藏我猜</h1><h3>介绍</h3><p>用于盲猜或考验眼力的游戏，可配置动画速度、开始结束回调、图片等。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n// vue\nimport { GuessGift } from &#39;@nutui/nutui-bingo&#39;;\n\nconst app = createApp();\napp.use(GuessGift);\n</code></pre><h2>代码示例</h2><h2>基本用法</h2><pre><code class="language-html">&lt;nutbig-guess-gift\n  ref=&quot;guessgiftDom&quot;\n  :prize-index=&quot;prizeIndex&quot;\n  @start-turns=&quot;startTurns&quot;\n  @end-turns=&quot;endTurns&quot;\n&gt;\n&lt;/nutbig-guess-gift&gt;\n</code></pre><pre><code class="language-javascript">export default {\n  props: {},\n  setup() {\n    const guessgiftDom:any = ref(null);\n\n    // 中奖的奖品的index(此数据可根据后台返回的值重新赋值)\n    const prizeIndex = ref(3); \n    const gameStart = () =&gt; {\n      guessgiftDom.value.start();\n    }\n    const startTurns = () =&gt; {\n      console.log(&#39;开始抽奖&#39;);\n    }\n\n    const endTurns = () =&gt; {\n      Dialog({\n        title: &#39;中奖提示&#39;,\n        content: &#39;您已完成抽奖，是否继续？&#39;,\n        onCancel: () =&gt; {},\n        onOk: () =&gt; {\n          setTimeout(() =&gt; {\n            guessgiftDom.value.init();\n          }, 300);\n        }\n      });\n    }\n   \n    return {\n      guessgiftDom,\n      prizeIndex,\n      gameStart,\n      startTurns,\n      endTurns\n    };\n  }\n}\n</code></pre><h3>Props</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>turns-number</td><td>交换次数</td><td>Number</td><td>20</td></tr><tr><td>turns-time</td><td>每个碗移动所用时间</td><td>Number</td><td>0(单位是毫秒)</td></tr><tr><td>turns-frequency</td><td>动画频率，位置交换更新</td><td>Number</td><td>500(单位是毫秒)</td></tr><tr><td>raise-height</td><td>碗抬起的高度</td><td>Number</td><td>50</td></tr><tr><td>prize-index</td><td>中奖奖品在列表的索引位置</td><td>Number</td><td>-1（-1随机停，大于1为设置的图片索引位置）</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>start-turns</td><td>转盘开始转动的回调函数，此时将接口中的中奖索引，赋值到 prize-index</td><td>-</td></tr><tr><td>end-turns</td><td>转盘中停止转动后的回调函数</td><td>-</td></tr></tbody></table>',13)],s={setup:e=>(e,s)=>(n(),t("div",d,r))};export{s as default};
