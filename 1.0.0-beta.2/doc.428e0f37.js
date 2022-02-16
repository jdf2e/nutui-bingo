import{e as t,o as n,y as e}from"./vendor.9be82274.js";const r={class:"markdown-body"},d=e(`<h1>Guessgift \u4F60\u85CF\u6211\u731C</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u76F2\u731C\u6216\u8003\u9A8C\u773C\u529B\u7684\u6E38\u620F\uFF0C\u53EF\u914D\u7F6E\u52A8\u753B\u901F\u5EA6\u3001\u5F00\u59CB\u7ED3\u675F\u56DE\u8C03\u3001\u56FE\u7247\u7B49\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;
// vue
import { GuessGift } from &#39;@nutui/nutui-bingo&#39;;

const app = createApp();
app.use(GuessGift);
</code></pre><h2>\u4EE3\u7801\u793A\u4F8B</h2><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-html">&lt;nutbig-guess-gift
  ref=&quot;guessgiftDom&quot;
  :prize-index=&quot;prizeIndex&quot;
  :turn-number=&quot;turnNum&quot;
  @start-turns=&quot;startTurns&quot;
  @end-turns=&quot;endTurns&quot;
&gt;
&lt;/nutbig-guess-gift&gt;
&lt;nut-button type=&quot;primary&quot; @click=&quot;gameStart&quot;&gt;\u5F00\u59CB&lt;/nut-button&gt;
</code></pre><pre><code class="language-javascript">export default {
  props: {},
  setup() {
    const guessgiftDom:any = ref(null);

    // \u4E2D\u5956\u7684\u5956\u54C1\u7684index(\u6B64\u6570\u636E\u53EF\u6839\u636E\u540E\u53F0\u8FD4\u56DE\u7684\u503C\u91CD\u65B0\u8D4B\u503C)
    const prizeIndex = ref(3); 
    const gameStart = () =&gt; {
      guessgiftDom.value.start();
    }
    const startTurns = () =&gt; {
      console.log(&#39;\u5F00\u59CB\u62BD\u5956&#39;);
    }

    const endTurns = () =&gt; {
      console.log(&#39;\u62BD\u5956\u7ED3\u675F&#39;);
    }
    const turnNum = ref(5);
    return {
      guessgiftDom,
      turnNum,
      prizeIndex,
      gameStart,
      startTurns,
      endTurns
    };
  }
}
</code></pre><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>turns-number</td><td>\u4EA4\u6362\u6B21\u6570</td><td>Number</td><td>20</td></tr><tr><td>turns-time</td><td>\u6BCF\u4E2A\u7897\u79FB\u52A8\u6240\u7528\u65F6\u95F4</td><td>Number</td><td>0(\u5355\u4F4D\u662F\u6BEB\u79D2)</td></tr><tr><td>turns-frequency</td><td>\u52A8\u753B\u9891\u7387\uFF0C\u4F4D\u7F6E\u4EA4\u6362\u66F4\u65B0</td><td>Number</td><td>500(\u5355\u4F4D\u662F\u6BEB\u79D2)</td></tr><tr><td>raise-height</td><td>\u7897\u62AC\u8D77\u7684\u9AD8\u5EA6</td><td>Number</td><td>50</td></tr><tr><td>prize-index</td><td>\u4E2D\u5956\u5956\u54C1\u5728\u5217\u8868\u7684\u7D22\u5F15\u4F4D\u7F6E</td><td>Number</td><td>-1\uFF08-1\u4E0D\u4E2D\u5956\uFF0C\u5927\u4E8E\u7B49\u4E8E0\u4E3A\u4E2D\u5956\uFF09</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>start-turns</td><td>\u7897\u5F00\u59CB\u6362\u4F4D</td><td>-</td></tr><tr><td>end-turns</td><td>\u7897\u505C\u6B62\u6362\u4F4D\uFF0C\u70B9\u51FB\u67D0\u4E2A\u7897\u62BD\u5956</td><td>-</td></tr></tbody></table>`,13),s=[d],h={setup(u){return(o,a)=>(n(),t("div",r,s))}};export{h as default};
