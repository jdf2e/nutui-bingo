import{e as t,o as e,y as n}from"./vendor.d935373b.js";const d={class:"markdown-body"},r=n(`<h1>Marquee \u8DD1\u9A6C\u706F</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u8DD1\u9A6C\u706F\u62BD\u5956\u573A\u666F\uFF0C\u53EF\u914D\u7F6E\u5956\u54C1\u3001\u56FE\u7247\u7B49\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;
// vue
import { Marquee } from &#39;@nutui/nutui-bingo&#39;;

const app = createApp();
app.use(Marquee);
</code></pre><h2>\u4EE3\u7801\u793A\u4F8B</h2><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-html">&lt;nutbig-marquee
  :prize-list=&quot;prizeList&quot;
  :prize-index=&quot;prizeIndex&quot;
  :speed=&quot;100&quot;
  :circle=&quot;40&quot;
  @start-turns=&quot;startTurns&quot;
  @end-turns=&quot;endTurns&quot;
&gt;
&lt;/nutbig-marquee&gt;
</code></pre><pre><code class="language-javascript">export default {
  setup() {
    // \u8F6C\u76D8\u4E0A\u8981\u5C55\u793A\u7684\u5956\u54C1\u6570\u636E
    const prizeList = ref([
      {
        id: &#39;xiaomi&#39;,
        prizeName: &#39;\u5C0F\u7C73\u624B\u673A&#39;,
        prizeImg: &#39;https://img14.360buyimg.com/imagetools/jfs/t1/104165/34/15186/96522/5e6f1435E46bc0cb0/d4e878a15bfd9362.png&#39;
      },
      {
        id: &#39;blue&#39;,
        prizeColor: &#39;rgb(251, 219, 216)&#39;,
        prizeName: &#39;\u84DD\u7259\u8033\u673A&#39;,
        prizeImg: &#39;https://img13.360buyimg.com/imagetools/jfs/t1/91864/11/15108/139003/5e6f146dE1c7b511d/1ddc5aa6e502060a.jpg&#39;
      },
      {
        id: &#39;thanks&#39;,
        prizeName: &#39;\u8C22\u8C22\u53C2\u4E0E&#39;,
        prizeImg: &#39;https://img11.360buyimg.com/imagetools/jfs/t1/96116/38/15085/5181/5e6f15d1E48e31d30/71353b61dff705d4.png&#39;
      },
      {
        id: &#39;apple&#39;,
        prizeName: &#39;apple watch&#39;,
        prizeImg: &#39;https://img11.360buyimg.com/imagetools/jfs/t1/105385/19/15140/111093/5e6f1506E48bd0dfb/829a98a8cdb4c27f.png&#39;
      },
      {
        id: &#39;fruit&#39;,
        prizeColor: &#39;rgba(246, 142, 46, 0.5)&#39;,
        prizeName: &#39;\u8FEA\u58EB\u5C3C\u82F9\u679C&#39;,
        prizeImg: &#39;https://img11.360buyimg.com/imagetools/jfs/t1/108308/11/8890/237603/5e6f157eE489cccf1/26e0437cfd93b9c8.png&#39;
      },
      {
        id: &#39;thanks&#39;,
        prizeName: &#39;\u8C22\u8C22\u53C2\u4E0E&#39;,
        prizeImg: &#39;https://img11.360buyimg.com/imagetools/jfs/t1/96116/38/15085/5181/5e6f15d1E48e31d30/71353b61dff705d4.png&#39;
      },
      {
        id: &#39;fish&#39;,
        prizeName: &#39;\u6D77\u9C9C\u5957\u9910&#39;,
        prizeImg: &#39;https://img14.360buyimg.com/imagetools/jfs/t1/90507/38/15165/448364/5e6f15b4E5df0c718/4bd4c3d375eec312.png&#39;
      },
      {
        id: &#39;thanks&#39;,
        prizeName: &#39;\u8C22\u8C22\u53C2\u4E0E&#39;,
        prizeImg: &#39;https://img11.360buyimg.com/imagetools/jfs/t1/96116/38/15085/5181/5e6f15d1E48e31d30/71353b61dff705d4.png&#39;
      }
    ]);
    // \u8F6C\u76D8\u6837\u5F0F\u7684\u9009\u9879
    const styleOpt = reactive({
      prizeItem: {},
      startStyle:{},
      contentBg: {
        background: &quot;rgb(255, 231, 149)&quot;
      }
    });
    // \u4E2D\u5956\u7684\u5956\u54C1\u7684index(\u6B64\u6570\u636E\u53EF\u6839\u636E\u540E\u53F0\u8FD4\u56DE\u7684\u503C\u91CD\u65B0\u8D4B\u503C)
    const prizeIndex = ref(0);
    const startTurns = () =&gt; {
      const index = Math.floor(Math.random() * prizeList.value.length);
      prizeIndex.value = index;
    }
    const endTurns = () =&gt; {
      alert(&quot;\u4E2D\u5956\u4E86&quot;)
    }
    return {
      prizeList,
      styleOpt,
      prizeIndex,
      startTurns,
      endTurns
    };
  }
}
</code></pre><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prize-list</td><td>\u5956\u54C1\u5217\u8868</td><td>Array</td><td>[]</td></tr><tr><td>prize-index</td><td>\u4E2D\u5956\u5956\u54C1\u5728\u5217\u8868\u7684\u7D22\u5F15\u4F4D\u7F6E</td><td>Number</td><td>-1</td></tr><tr><td>speed</td><td>\u8F6C\u52A8\u901F\u5EA6</td><td>Number</td><td>150</td></tr><tr><td>circle</td><td>\u8F6C\u52A8\u5708\u6570</td><td>Number</td><td>30</td></tr><tr><td>style-opt</td><td>\u8DD1\u9A6C\u706F\u4E2D\u7684\u6837\u5F0F\uFF1AcontentBg-\u6574\u4E2A\u5BB9\u5668\u6837\u5F0F\uFF0CprizeItem-\u6BCF\u4E2A\u5956\u54C1\u6837\u5F0F\uFF0CstartStyle-\u4E2D\u95F4\u6309\u94AE\u6837\u5F0F</td><td>Object</td><td>{contentBg: {},prizeItem: {},startStyle:{}}</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>start-turns</td><td>\u5F00\u59CB\u8DD1\u52A8\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u6B64\u65F6\u5C06\u63A5\u53E3\u4E2D\u7684\u4E2D\u5956\u7D22\u5F15\uFF0C\u8D4B\u503C\u5230 prize-index</td><td>-</td></tr><tr><td>end-turns</td><td>\u505C\u6B62\u8DD1\u52A8\u540E\u7684\u56DE\u8C03\u51FD\u6570</td><td>-</td></tr></tbody></table>`,13),i=[r],m={setup(o){return(s,a)=>(e(),t("div",d,i))}};export{m as default};
