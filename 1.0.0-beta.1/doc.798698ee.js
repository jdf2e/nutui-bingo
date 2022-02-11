import{e as t,o as e,y as d}from"./vendor.0c010953.js";const n={class:"markdown-body"},a=d(`<h1>LucShake \u6447\u4E00\u6447</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u6447\u4E00\u6447\u62BD\u5956\u573A\u666F\uFF0C\u53EF\u914D\u7F6E\u56FE\u7247\u3001\u6447\u6643\u8BBE\u5907\u56DE\u8C03\u7B49\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;
// vue
import { Luckshake } from &#39;@nutui/nutui-bingo&#39;;

const app = createApp();
app.use(Luckshake);
</code></pre><h2>\u4EE3\u7801\u793A\u4F8B</h2><h2>\u57FA\u672C\u7528\u6CD5</h2><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u76D1\u542C\u8BBE\u5907\u7684\u52A0\u901F\u5EA6\u53D8\u5316\u7B49\u4FE1\u606F\u7684 API <code>devicemotion</code> \u7684\u517C\u5BB9\u6027\u95EE\u9898\uFF1A</p><ul><li>\u5728 ios 10(\u5305\u62EC\u76EE\u524D\u7684\u4E00\u4E9B\u5B89\u5353\u673A) \u4E4B\u540E\uFF0CIOS \u505A\u4E86\u5B89\u5168\u9650\u5236\uFF0C\u5982\u679C\u60F3\u8981\u5728\u9875\u9762\u4E2D\u4F7F\u7528\u9640\u87BA\u4EEA\u76F8\u5173\u7684\u4E00\u4E9B\u4E8B\u4EF6\uFF0C\u5FC5\u987B\u4F7F\u7528 https \u534F\u8BAE\uFF1B</li><li>\u5982\u679C\u7528\u6237\u53EF\u4EE5\u5728\u624B\u673A\u7684\u8BBE\u7F6E\u5173\u95ED\u6389\u201C\u52A8\u4F5C\u4E0E\u65B9\u5411\u8BBF\u95EE\u201D\uFF0C\u5219\u8BBE\u5907\u4E0D\u652F\u6301\u6447\u4E00\u6447\u529F\u80FD\uFF1B</li><li>\u8C03\u7528\u624B\u673A\u9707\u52A8\u7684 API <code>navigator.vibrate</code> \u53EA\u5728\u5B89\u5353\u7CFB\u7EDF\u6709\u6548\u3002</li></ul><pre><code class="language-html">&lt;div class=&quot;demo1&quot; style=&quot;background: url(&#39;//img11.360buyimg.com/imagetools/jfs/t1/114254/40/21041/607452/618e30bbE6ab3ee0c/9b7a249aee21ba46.jpg&#39;) no-repeat top center/100% 100%&quot;&gt;
  &lt;nut-bingo-luckshake
    ref=&quot;luckshakePrize&quot;
    :luck-width=&quot;luckWidth&quot;
    :luck-height=&quot;luckheight&quot;
    @shake-event=&quot;shakeEvent()&quot;
    @click-shake=&quot;handelClick()&quot;
  &gt;
  &lt;/nut-bingo-luckshake&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-javascript">export default {
  setup() {
    // \u7EA2\u5305\u5927\u5C0F
    const luckWidth = ref(&#39;200px&#39;);
    const luckheight = ref(&#39;160px&#39;);
    // \u5269\u4F59\u62BD\u5956\u6B21\u6570
    let shakeNum = ref(3);

    const shakeEvent = () =&gt; {
      // console.log(&quot;\u60A8\u8FDB\u884C\u4E86\u6447\u4E00\u6447&quot;)
      if (shakeNum.value == 0) {
        (Toast as any).text(\`\u65E0\u62BD\u5956\u6B21\u6570\`);
      } else if (shakeNum.value == 1) {
        setTimeout(() =&gt; {
          (Toast as any).text(\`\u4E2D\u5956\u5566\`);
        }, 200)
        shakeNum.value -= 1
      } else {
        setTimeout(() =&gt; {
          (Toast as any).text(\`\u62BD\u5956\u6B21\u6570\u8FD8\u5269\${shakeNum.value}\u6B21\`) // Do something
        }, 200)
        shakeNum.value -= 1
      }
    }
    const handelClick = () =&gt; {
      console.log(&quot;\u70B9\u51FB\u6447\u4E00\u6447&quot;)
      if (shakeNum.value == 0) {
        (Toast as any).text(\`\u65E0\u62BD\u5956\u6B21\u6570\`);
      } else if (shakeNum.value == 1) {
        setTimeout(() =&gt; {
          (Toast as any).text(\`\u4E2D\u5956\u5566\`);
        }, 200)
        shakeNum.value -= 1
      } else {
        setTimeout(() =&gt; {
          (Toast as any).text(\`\u62BD\u5956\u6B21\u6570\u8FD8\u5269\${shakeNum.value}\u6B21\`) // Do something
        }, 200)
        shakeNum.value -= 1
      }
    }
    return {
      luckWidth,
      luckheight,
      shakeNum,
      shakeEvent,
      handelClick
    };
  }
}
</code></pre><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>is-shake</td><td>\u5F53\u524D\u73AF\u5883\u662F\u5426\u652F\u6301\u6447\u4E00\u6447</td><td>String</td><td>-</td></tr><tr><td>luck-width</td><td>\u7EA2\u5305\u56FE\u7247\u7684\u5BBD\u5EA6</td><td>String</td><td>200px</td></tr><tr><td>luck-height</td><td>\u7EA2\u5305\u56FE\u7247\u7684\u9AD8\u5EA6</td><td>String</td><td>160px</td></tr><tr><td>luck-img-top</td><td>\u7EA2\u5305\u4E0A\u534A\u90E8\u5206\u56FE\u7247</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>luck-img-bottom</td><td>\u7EA2\u5305\u4E0B\u534A\u90E8\u5206\u56FE\u7247</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>click-point</td><td>\u70B9\u51FB\u624B\u52BF\u56FE\u7247\uFF0C\u4E0D\u9700\u8981\u53EF\u8BBE\u7F6E\u4E3Afalse</td><td>String\uFF0CBoolean</td><td>\u2018\u2019</td></tr><tr><td>shake-speed</td><td>\u6447\u624B\u673A\u7684\u9619\u503C\uFF0C\u8D8A\u5C0F\u8D8A\u7075\u654F</td><td>Number</td><td>110</td></tr><tr><td>duration-time</td><td>\u9707\u52A8\u6301\u7EED\u65F6\u95F4\uFF0C\u5C0F\u7A0B\u5E8F\u4E0D\u53EF\u8BBE\u7F6E\u6B64\u53C2\u6570</td><td>Number</td><td>1000</td></tr><tr><td>duration-animation</td><td>\u89E6\u53D1\u6447\u4E00\u6447\u540E\u8DDD\u79BB\u56DE\u8C03\u51FD\u6570\u7684\u65F6\u95F4</td><td>Number</td><td>1000</td></tr><tr><td>pointer-style</td><td>\u70B9\u51FB\u56FE\u7247\u7684\u6837\u5F0F</td><td>Object</td><td>{width: \u201890px\u2019,height: \u201890px\u2019}</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>shake-event</td><td>\u6447\u6643\u8BBE\u5907\u7684\u56DE\u8C03\u51FD\u6570</td><td>-</td></tr><tr><td>click-shake</td><td>\u70B9\u51FB\u56DE\u8C03\u51FD\u6570</td><td>-</td></tr></tbody></table>`,15),o=[a],l={setup(s){return(u,h)=>(e(),t("div",n,o))}};export{l as default};
