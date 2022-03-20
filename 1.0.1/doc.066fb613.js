import{e as t,o as n,y as e}from"./vendor.f1d0dae3.js";const o={class:"markdown-body"},d=e(`<h1>DollMachine \u6293\u5A03\u5A03</h1><h3>\u4ECB\u7ECD</h3><p>\u6A21\u62DF\u5A03\u5A03\u673A\u62BD\u5956\uFF0C\u53EF\u914D\u7F6E\u56FE\u7247\u3001\u5F00\u59CB\u7ED3\u675F\u56DE\u8C03\u7B49\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;
// vue
import { Dollmachine } from &#39;@nutui/nutui-bingo&#39;;

const app = createApp();
app.use(Dollmachine);
</code></pre><h2>\u4EE3\u7801\u793A\u4F8B</h2><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-html">&lt;nutbig-doll-machine
  ref=&quot;lottoRollDom&quot;
  :prize-list=&quot;prizeList&quot;
  :prize-index=&quot;prizeIndex&quot;
  @start-turns=&quot;startTurns&quot;
  @end-turns=&quot;endTurns&quot;
&gt;
&lt;/nutbig-doll-machine&gt;
</code></pre><pre><code class="language-javascript">export default {
  props: {},
  setup() {
    const lottoRollDom:any = ref(null);
    const prizeList = reactive([
      {
        imagePath: &quot;https://img11.360buyimg.com/imagetools/jfs/t1/147182/12/2440/6194/5f06cde6Ead240fe8/31082e30a182a5ce.png&quot;,
        text: &quot;\u5927\u9E21\u817F&quot;
      },
      {
        imagePath: &quot;https://img12.360buyimg.com/imagetools/jfs/t1/221361/4/7410/16458/61c9261eE45802396/27b64caa9e7c9bac.png&quot;,
        text: &quot;JOY&quot;
      },
      { 
        imagePath: &quot;https://img11.360buyimg.com/imagetools/jfs/t1/128607/26/6643/6790/5f06cd27E9b5e15f7/7509bc7ce2da66b8.png&quot;,
        text: &quot;VIP&quot;
      },
      {
        imagePath: &quot;https://img12.360buyimg.com/imagetools/jfs/t1/221361/4/7410/16458/61c9261eE45802396/27b64caa9e7c9bac.png&quot;,
        text: &quot;JOY&quot;
      },
    ]);

    // \u4E2D\u5956\u7684\u5956\u54C1\u7684index(\u6B64\u6570\u636E\u53EF\u6839\u636E\u540E\u53F0\u8FD4\u56DE\u7684\u503C\u91CD\u65B0\u8D4B\u503C)
    const prizeIndex = ref(3); 
    const startTurns = () =&gt; {
      console.log(&#39;\u5F00\u59CB\u62BD\u5956&#39;);
    }

    const endTurns = () =&gt; {
      console.log(&#39;\u62BD\u5956\u7ED3\u675F&#39;);
      setTimeout(() =&gt; {
        Dialog({
          title: &#39;\u4E2D\u5956\u63D0\u793A&#39;,
          content: &#39;\u60A8\u5DF2\u5B8C\u6210\u62BD\u5956\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F&#39;,
          onCancel: () =&gt; {},
          onOk: () =&gt; {
            setTimeout(() =&gt; {
              lottoRollDom.value.init();
            }, 300);
          }
        });
      }, 5000);
    }
   
    return {
      lottoRollDom,
      prizeList,
      prizeIndex,
      startTurns,
      endTurns
    };
  }
}
</code></pre><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prize-list</td><td>\u5956\u54C1\u5217\u8868</td><td>Array</td><td>\u76EE\u524D\u9700\u8981\u81F3\u5C114\u4E2A\u5956\u54C1</td></tr><tr><td>speed</td><td>\u5956\u54C1\u6EDA\u52A8\u7684\u901F\u5EA6</td><td>Number</td><td>20</td></tr><tr><td>init</td><td>\u521D\u59CB\u5316\u6E38\u620F</td><td>Function</td><td>-</td></tr><tr><td>prize-index</td><td>\u4E2D\u5956\u5956\u54C1\u5728\u5217\u8868\u7684\u7D22\u5F15\u4F4D\u7F6E</td><td>Number</td><td>-1\uFF08-1\u672A\u4E2D\u5956\uFF09</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>init</td><td>\u6E38\u620F\u521D\u59CB\u5316</td><td>dom.value.init()</td></tr><tr><td>start-turns</td><td>\u722A\u5B50\u5F00\u59CB\u4E0B\u4F38\uFF0C\u8D4B\u503C\u5230 prize-index</td><td>-</td></tr><tr><td>end-turns</td><td>\u722A\u5B50\u5DF2\u7ECF\u6293\u5230/\u672A\u6293\u5230\u5956\u54C1\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,13),r=[d],c={setup(a){return(s,i)=>(n(),t("div",o,r))}};export{c as default};
