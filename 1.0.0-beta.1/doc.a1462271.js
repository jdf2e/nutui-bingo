import{e as t,o,y as n}from"./vendor.0c010953.js";const e={class:"markdown-body"},d=n(`<h1>LottoRoll \u8001\u864E\u673A</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u8001\u864E\u673A\u62BD\u5956\uFF0C\u53EF\u914D\u7F6E\u56FE\u7247\u3001\u5F00\u59CB\u7ED3\u675F\u56DE\u8C03\u7B49\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;
// vue
import { LottoRoll } from &#39;@nutui/nutui-bingo&#39;;

const app = createApp();
app.use(LottoRoll);
</code></pre><h2>\u4EE3\u7801\u793A\u4F8B</h2><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-html">&lt;nutbig-lotto-roll
  ref=&quot;lottoRollDom&quot;
  :prize-list=&quot;prizeList&quot;
  :prize-index=&quot;prizeIndex&quot;
  @start-turns=&quot;startTurns&quot;
  @end-turns=&quot;endTurns&quot;
&gt;
&lt;/nutbig-lotto-roll&gt;
&lt;div class=&quot;btnBtn&quot;&gt;
  &lt;nut-button type=&quot;danger&quot; @click=&quot;startRole&quot; :disabled=&quot;startFlag&quot;&gt;\u4E2D\u5956\uFF08\u6D4B\u8BD5\uFF09&lt;/nut-button&gt;
  &lt;nut-button type=&quot;danger&quot; @click=&quot;startRole2&quot; :disabled=&quot;startFlag&quot;&gt;\u4E0D\u4E2D\u5956\uFF08\u6D4B\u8BD5\uFF09&lt;/nut-button&gt;
&lt;/div&gt;
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
        imagePath: &quot;https://img11.360buyimg.com/imagetools/jfs/t1/128607/26/6643/6790/5f06cd27E9b5e15f7/7509bc7ce2da66b8.png&quot;,
        text: &quot;VIP&quot;
      },
      {
        imagePath: &quot;https://img11.360buyimg.com/imagetools/jfs/t1/105385/19/15140/111093/5e6f1506E48bd0dfb/829a98a8cdb4c27f.png&quot;,
        text: &quot;Apple watch&quot;
      },
      {
        imagePath: &quot;https://img14.360buyimg.com/imagetools/jfs/t1/90507/38/15165/448364/5e6f15b4E5df0c718/4bd4c3d375eec312.png&quot;,
        text: &quot;\u575A\u679C\u793C\u76D2&quot;
      },
      {
        imagePath: &quot;https://img14.360buyimg.com/imagetools/jfs/t1/104165/34/15186/96522/5e6f1435E46bc0cb0/d4e878a15bfd9362.png&quot;,
        text: &quot;\u624B\u673A&quot;
      },
    ]);

    // \u4E2D\u5956\u7684\u5956\u54C1\u7684index(\u6B64\u6570\u636E\u53EF\u6839\u636E\u540E\u53F0\u8FD4\u56DE\u7684\u503C\u91CD\u65B0\u8D4B\u503C)
    const index = Math.floor(Math.random() * prizeList.length);
    const prizeIndex = ref(3); 
    const startTurns = () =&gt; {
      console.log(&#39;\u5F00\u59CB\u62BD\u5956&#39;);
    }

    const endTurns = () =&gt; {
      console.log(&#39;\u62BD\u5956\u7ED3\u675F&#39;);
    }

    
    const startRole = () =&gt; {
      prizeIndex.value = Math.floor(Math.random() * 5);
      lottoRollDom.value.start();
    }
    const startRole2 = () =&gt; {
      prizeIndex.value = -1;
      lottoRollDom.value.start();
    }
   
    return {
      lottoRollDom,
      prizeList,
      prizeIndex,
      startTurns,
      endTurns,
      startRole,
      startRole2,
    };
  }
}
</code></pre><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prize-list</td><td>\u5956\u54C1\u5217\u8868</td><td>Array</td><td>[{imagePath: \u201Cxxxx\u201D,text: \u201Cxxx\u201D}, {}\u2026]</td></tr><tr><td>turns-number</td><td>\u8F6C\u52A8\u7684\u5708\u6570</td><td>Number</td><td>0</td></tr><tr><td>turns-time</td><td>\u4ECE\u5F00\u59CB\u8F6C\u52A8\u5230\u7ED3\u675F\u6240\u7528\u65F6\u95F4</td><td>Number</td><td>0(\u5355\u4F4D\u662F\u6BEB\u79D2)</td></tr><tr><td>prize-index</td><td>\u4E2D\u5956\u5956\u54C1\u5728\u5217\u8868\u7684\u7D22\u5F15\u4F4D\u7F6E</td><td>Number</td><td>-1\uFF08-1\u968F\u673A\u505C\uFF0C\u5927\u4E8E1\u4E3A\u8BBE\u7F6E\u7684\u56FE\u7247\u7D22\u5F15\u4F4D\u7F6E\uFF0C\u8BF7\u4FDD\u8BC1\u4E2D\u95F4\u53C2\u6570\u521D\u59CB\u503C\u4E3A-1\uFF09</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>start</td><td>\u8F6C\u76D8\u5F00\u59CB\u8F6C\u52A8\u65B9\u6CD5</td><td>-</td></tr><tr><td>start-turns</td><td>\u8F6C\u76D8\u5F00\u59CB\u8F6C\u52A8\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u6B64\u65F6\u5C06\u63A5\u53E3\u4E2D\u7684\u4E2D\u5956\u7D22\u5F15\uFF0C\u8D4B\u503C\u5230 prize-index</td><td>-</td></tr><tr><td>end-turns</td><td>\u8F6C\u76D8\u4E2D\u505C\u6B62\u8F6C\u52A8\u540E\u7684\u56DE\u8C03\u51FD\u6570</td><td>-</td></tr></tbody></table>`,13),r=[d],i={setup(a){return(u,s)=>(o(),t("div",e,r))}};export{i as default};
