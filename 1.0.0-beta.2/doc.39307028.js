import{e as t,o as d,y as r}from"./vendor.9be82274.js";const n={class:"markdown-body"},a=r(`<h1>GiftRain \u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u7EA2\u5305\u96E8</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">import { createApp } from &quot;vue&quot;;
import { GiftRain } from &quot;@nutui/nutui-bingo&quot;;

const app = createApp();
app.use(GiftRain);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html">&lt;nutbig-giftrain
  ref=&quot;rain&quot;
  width=&quot;100%&quot;
  height=&quot;580px&quot;
  @gameOver=&quot;gameOver&quot;
  @start=&quot;start&quot;
  @click=&quot;click&quot;
&gt;
&lt;/nutbig-giftrain&gt;
&lt;div v-if=&quot;!isStart&quot; class=&quot;start&quot; @click=&quot;onStart&quot;&gt;\u5F00\u59CB&lt;/div&gt;
</code></pre><pre><code class="language-javascript"> setup() {
    const rain = ref();
    const isStart = ref(false)
    const gameOver = () =&gt; {
      isStart.value = false
    };
    const start=()=&gt;{
      isStart.value = true
    }
    const click=()=&gt;{
      console.log(&#39;\u70B9\u51FB&#39;);
    }
    const onStart = ()=&gt;{
      rain.value.startRain()
    }
    return { gameOver ,isStart,start,click,onStart,rain};
  },
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>width</td><td>\u5BB9\u5668\u5BBD\u5EA6</td><td>string</td><td>375px</td></tr><tr><td>height</td><td>\u5BB9\u5668\u9AD8\u5EA6</td><td>string</td><td>500px</td></tr><tr><td>rain-time</td><td>\u6301\u7EED\u65F6\u95F4</td><td>string</td><td>30000ms</td></tr><tr><td>rain-num</td><td>\u4E00\u9875\u6700\u591A\u5C55\u793A\u591A\u5C11\u7EA2\u5305</td><td>string</td><td>5</td></tr><tr><td>rain-img</td><td>\u7EA2\u5305\u56FE\u7247</td><td>string</td><td><a href="//img13.360buyimg.com/imagetools/jfs/t1/199416/7/16633/40527/618c8bebEb03467d8/6af8bde529c5cf61.png">//img13.360buyimg.com/imagetools/jfs/t1/199416/7/16633/40527/618c8bebEb03467d8/6af8bde529c5cf61.png</a></td></tr><tr><td>rain-width</td><td>\u7EA2\u5305\u5BBD\u5EA6</td><td>number</td><td>50</td></tr><tr><td>rain-height</td><td>\u7EA2\u5305\u9AD8\u5EA6</td><td>number</td><td>50</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>start</td><td>\u6E38\u620F\u5F00\u59CB\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>game-over</td><td>\u6E38\u620F\u7ED3\u675F\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>click</td><td>\u70B9\u51FB\u7EA2\u5305\u65F6\u89E6\u53D1</td><td></td></tr></tbody></table>`,14),e=[a],h={setup(o){return(i,s)=>(d(),t("div",n,e))}};export{h as default};
