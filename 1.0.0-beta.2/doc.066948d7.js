import{e as t,o as n,y as e}from"./vendor.9be82274.js";const r={class:"markdown-body"},d=e(`<h1>Turntable \u8F6C\u76D8\u62BD\u5956</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5927\u8F6C\u76D8\u6EDA\u52A8\u62BD\u5956\u573A\u666F\uFF0C\u53EF\u914D\u7F6E\u5956\u54C1\u3001\u56FE\u7247\u3001\u8F6C\u76D8\u6837\u5F0F\u7B49\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;
// vue
import { Turntable } from &#39;@nutui/nutui-bingo&#39;;

const app = createApp();
app.use(Turntable);
</code></pre><h2>\u4EE3\u7801\u793A\u4F8B</h2><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-html">&lt;nutbig-turntable
  class=&quot;turntable&quot;
  :width=&quot;luckWidth&quot;
  :height=&quot;luckheight&quot;
  :prize-list=&quot;prizeList&quot;
  :turns-number=&quot;turnsNumber&quot;
  :turns-time=&quot;turnsTime&quot;
  :prize-index=&quot;prizeIndex&quot;
  :style-opt=&quot;styleOpt&quot;
  :pointer-style=&quot;pointerStyle&quot;
  @start-turns=&quot;startTurns&quot;
  @end-turns=&quot;endTurns&quot;
&gt;
&lt;/nutbig-turntable&gt;
</code></pre><pre><code class="language-javascript">export default {
  setup() {
    // \u8F6C\u76D8\u5927\u5C0F
    const luckWidth = ref(&#39;300px&#39;);
    const luckheight = ref(&#39;300px&#39;);
    // \u8F6C\u76D8\u6307\u9488\u56FE\u7247\u6837\u5F0F
    const pointerStyle = {
      width: &#39;80px&#39;,
      height: &#39;80px&#39;,
      backgroundImage: &#39;url(&quot;https://img11.360buyimg.com/imagetools/jfs/t1/89512/11/15244/137408/5e6f15edEf57fa3ff/cb57747119b3bf89.png&quot;)&#39;,
      backgroundSize: &#39;contain&#39;,
      backgroundRepeat: &#39;no-repeat&#39;
    };
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
    // \u8F6C\u52A8\u5708\u6570
    const turnsNumber = ref(5);
    // \u8F6C\u52A8\u9700\u8981\u6301\u7EED\u7684\u65F6\u95F4(\u79D2)
    const turnsTime = ref(5);
    // \u8F6C\u76D8\u6837\u5F0F\u7684\u9009\u9879
    const styleOpt = reactive({
      // \u8F6C\u76D8\u4E2D\u6BCF\u4E00\u5757\u6247\u5F62\u7684\u80CC\u666F\u8272,\u6839\u636E\u5956\u54C1\u7684index\u6765\u53D6\u6BCF\u4E00\u5757\u7684\u5BF9\u5E94\u989C\u8272
      prizeBgColors: [
        &#39;rgb(255, 231, 149)&#39;,
        &#39;rgb(255, 247, 223)&#39;,
        &#39;rgb(255, 231, 149)&#39;,
        &#39;rgb(255, 247, 223)&#39;,
        &#39;rgb(255, 231, 149)&#39;,
        &#39;rgb(255, 247, 223)&#39;
      ],
      // \u6BCF\u4E00\u4E2A\u6247\u5F62\u7684\u5916\u8FB9\u6846\u989C\u8272
      borderColor: &#39;#ff9800&#39;
    });
    // \u4E2D\u5956\u7684\u5956\u54C1\u7684index(\u6B64\u6570\u636E\u53EF\u6839\u636E\u540E\u53F0\u8FD4\u56DE\u7684\u503C\u91CD\u65B0\u8D4B\u503C)
    const prizeIndex = ref(-1);
    // \u7528\u6765\u9501\u5B9A\u8F6C\u76D8\uFF0C\u907F\u514D\u540C\u65F6\u591A\u6B21\u70B9\u51FB\u8F6C\u52A8
    const lock = ref(false);
    // \u5269\u4F59\u62BD\u5956\u6B21\u6570
    const num = ref(5);
    const startTurns = () =&gt; {
      const index = Math.floor(Math.random() * prizeList.value.length);
      prizeIndex.value = index;
    }
    const endTurns = () =&gt; {
      alert(&quot;\u4E2D\u5956\u4E86&quot;)
    }
    return {
      luckWidth,
      luckheight,
      pointerStyle,
      prizeList,
      turnsNumber,
      turnsTime,
      styleOpt,
      prizeIndex,
      lock,
      num,
      startTurns,
      endTurns
    };
  }
}
</code></pre><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>width</td><td>\u8F6C\u76D8\u7684\u5BBD\u5EA6</td><td>String</td><td>300px</td></tr><tr><td>height</td><td>\u8F6C\u76D8\u7684\u9AD8\u5EA6</td><td>String</td><td>300px</td></tr><tr><td>prize-list</td><td>\u5956\u54C1\u5217\u8868</td><td>Array</td><td>-</td></tr><tr><td>turns-number</td><td>\u8F6C\u52A8\u7684\u5708\u6570</td><td>Number</td><td>5</td></tr><tr><td>turns-time</td><td>\u4ECE\u5F00\u59CB\u8F6C\u52A8\u5230\u7ED3\u675F\u6240\u7528\u65F6\u95F4</td><td>Number</td><td>5(\u5355\u4F4D\u662F\u79D2)</td></tr><tr><td>prize-index</td><td>\u4E2D\u5956\u5956\u54C1\u5728\u5217\u8868\u7684\u7D22\u5F15\u4F4D\u7F6E</td><td>Number</td><td>-1</td></tr><tr><td>style-opt</td><td>\u8F6C\u76D8\u4E2D\u7684\u6837\u5F0F\uFF0C\u5305\u62EC\u6BCF\u4E2A\u6247\u533A\u7684\u80CC\u666F\u989C\u8272(\u5728\u6BCF\u6761\u6570\u636E\u4E2D\u9875\u53EF\u5355\u72EC\u8BBE\u7F6EprizeColor)\uFF0C\u6247\u533A\u7684\u8FB9\u6846\u989C\u8272</td><td>Object</td><td>{prizeBgColors: [],borderColor: \u2018\u2019}</td></tr><tr><td>pointer-style</td><td>\u8F6C\u76D8\u4E2D\u6307\u9488\u7684\u6837\u5F0F\uFF0C\u5305\u62EC\u80CC\u666F\u56FE\u7247\u3001\u5927\u5C0F\u7B49</td><td>Object</td><td>{width: \u201880px\u2019,height: \u201880px\u2019}</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>start-turns</td><td>\u8F6C\u76D8\u5F00\u59CB\u8F6C\u52A8\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u6B64\u65F6\u5C06\u63A5\u53E3\u4E2D\u7684\u4E2D\u5956\u7D22\u5F15\uFF0C\u8D4B\u503C\u5230 prize-index</td><td>-</td></tr><tr><td>end-turns</td><td>\u8F6C\u76D8\u4E2D\u505C\u6B62\u8F6C\u52A8\u540E\u7684\u56DE\u8C03\u51FD\u6570</td><td>-</td></tr></tbody></table>`,13),o=[d],a={setup(i){return(s,u)=>(n(),t("div",r,o))}};export{a as default};
