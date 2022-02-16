import{e as t,o as e,y as d}from"./vendor.63588a2d.js";const o={class:"markdown-body"},n=d(`<h1>ShakeDice \u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u6447\u9AB0\u5B50</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">import { createApp } from &quot;vue&quot;;
import { ShakeDice } from &quot;@nutui/nutui-bingo&quot;;

const app = createApp();
app.use(ShakeDice);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"> &lt;nutbig-shakedice  ref=&quot;dice&quot; :id=&quot;id&quot;&gt;&lt;/nutbig-shakedice &gt;
&lt;div @click=&quot;jump&quot; class=&quot;demoBtn&quot;&gt;\u6447\u52A8&lt;/div&gt;
</code></pre><pre><code class="language-javascript"> setup() {
    const dice = ref();
    const id = ref()
    const jump = () =&gt; {
      id.value = 5
      dice.value.shake();
    };
    return {
      jump,
      dice,
      id
    };
  },
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>time</td><td>\u65CB\u8F6C\u65F6\u95F4 ms</td><td>string</td><td>3000</td></tr><tr><td>speed</td><td>\u65CB\u8F6C\u901F\u5EA6 \u51E0\u79D2\u4E00\u5708</td><td>number</td><td>1</td></tr><tr><td>id</td><td>\u4E2D\u5956\u7684id(1\u4E3A1\u70B9\uFF0C\u4F9D\u6B21\u7C7B\u63A8)</td><td>number</td><td>1</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>shake</td><td>\u9AB0\u5B50\u5F00\u59CB\u6447\u52A8</td><td>-</td></tr><tr><td>end</td><td>\u9AB0\u5B50\u6447\u52A8\u7ED3\u675F</td><td>-</td></tr></tbody></table>`,14),r=[n],i={setup(a){return(h,c)=>(e(),t("div",o,r))}};export{i as default};
