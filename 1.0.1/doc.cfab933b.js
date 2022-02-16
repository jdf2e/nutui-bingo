import{e as t,o as n,y as e}from"./vendor.63588a2d.js";const o={class:"markdown-body"},r=e(`<h1>GiftBox \u795E\u79D8\u5927\u793C\u76D2</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u793C\u76D2\u62BD\u5956\uFF0C\u53EF\u914D\u7F6E\u56FE\u7247\u3001\u5F00\u59CB\u7ED3\u675F\u56DE\u8C03\u7B49\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;
// vue
import { Giftbox } from &#39;@nutui/nutui-bingo&#39;;

const app = createApp();
app.use(Giftbox);
</code></pre><h2>\u4EE3\u7801\u793A\u4F8B</h2><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-html">&lt;nutbig-giftbox
  ref=&quot;refChild&quot;
  @start-turns=&quot;startTurns&quot;
  @end-turns=&quot;endTurns&quot;
&gt;
&lt;/nutbig-giftbox&gt;
&lt;nut-button type=&quot;primary&quot; @click=&quot;initBox&quot;&gt;\u518D\u6765\u4E00\u6B21&lt;/nut-button&gt;
</code></pre><pre><code class="language-javascript">export default {
  setup() {
    const refChild = ref();
    const initBox = () =&gt; {
      refChild.value.init();
    }
    const startTurns = () =&gt; {
      console.log(&#39;\u5F00\u59CB&#39;);
    }
    const endTurns = () =&gt; {
      console.log(&#39;\u7ED3\u675F&#39;);
    }
    return {
      refChild,
      initBox,
      startTurns,
      endTurns
    };
  }
}
</code></pre><h3>Events</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>init</td><td>\u793C\u76D2\u521D\u59CB\u5316</td><td>-</td></tr><tr><td>start-turns</td><td>\u793C\u76D2\u6253\u5F00\u65F6\u5019\u7684\u56DE\u8C03\u51FD\u6570</td><td>-</td></tr><tr><td>end-turns</td><td>\u793C\u76D2\u6253\u5F00\u540E\u7684\u56DE\u8C03\u51FD\u6570</td><td>-</td></tr></tbody></table>`,11),s=[r],c={setup(d){return(u,a)=>(n(),t("div",o,s))}};export{c as default};
