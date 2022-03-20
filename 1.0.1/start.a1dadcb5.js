import{e as t,o,y as n}from"./vendor.f1d0dae3.js";const e={class:"markdown-body"},u=n(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><h2>\u9884\u89C8</h2><blockquote><p>\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u4F53\u9A8C\uFF0C\u4F53\u9A8C bingo \u7EC4\u4EF6\u5E93\u793A\u4F8B</p></blockquote><img src="https://img11.360buyimg.com/imagetools/jfs/t1/167199/15/24963/2648/61ea6b4dE7bcc7a55/bccecb56cb063dff.png" width="200" alt="NutUI-Bingo"><h4>NPM \u5B89\u88C5</h4><pre><code class="language-bash"># Vue3
npm i @nutui/nutui-bingo
</code></pre><blockquote><p>\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 <em>NPM</em> \u6216 <em>YARN</em> \u65B9\u5F0F\u5B89\u88C5\uFF0C\u4E0D\u63A8\u8350\u5728\u9875\u9762\u4E2D\u76F4\u63A5\u5F15\u5165\u7684\u7528\u6CD5</p></blockquote><h4>NPM \u4F7F\u7528\u793A\u4F8B</h4><pre><code class="language-javascript">import { createApp } from &quot;vue&quot;;
import App from &quot;./App.vue&quot;;
import NutBig from &quot;@nutui/nutui-bingo&quot;;
import &quot;@nutui/nutui-bingo/dist/style.css&quot;;
createApp(App).use(NutBig).mount(&quot;#app&quot;);
</code></pre><blockquote><p>\u6CE8\u610F\uFF1A\u8FD9\u79CD\u65B9\u5F0F\u5C06\u4F1A\u5BFC\u5165\u6240\u6709\u7EC4\u4EF6</p></blockquote><h2>\u63A8\u8350\u4F7F\u7528\u6309\u9700\u52A0\u8F7D</h2><pre><code class="language-javascript">import { createApp } from &quot;vue&quot;;
import App from &quot;./App.vue&quot;;
import { Turntable } from &quot;@nutui/nutui-bingo&quot;;
import &quot;@nutui/nutui-bingo/dist/style.css&quot;;
createApp(App).use(Turntable).mount(&quot;#app&quot;);
</code></pre><h4>CDN \u5B89\u88C5\u4F7F\u7528\u793A\u4F8B</h4><blockquote><p>\u53EF\u4EE5\u901A\u8FC7 CDN \u7684\u65B9\u5F0F\u5F15\u5165\uFF0C \u53EF\u4EE5\u5728 <strong>jsdelivr</strong> \u548C <strong>unpkg</strong> \u7B49\u516C\u5171 CDN \u4E0A\u83B7\u53D6\u5230 NutUI\u3002</p></blockquote><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;!-- \u5F15\u5165\u6837\u5F0F --&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui-bingo/dist/style.css&quot; /&gt;
    &lt;!-- \u5F15\u5165Vue --&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@next&quot;&gt;&lt;/script&gt;
    &lt;!-- \u5F15\u5165NutUI-Bingo\u7EC4\u4EF6\u5E93 --&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui-bingo/dist/nutbig.umd.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;
        
    &lt;/div&gt;
    &lt;script&gt;
      // \u5728 #app \u6807\u7B7E\u4E0B\u6E32\u67D3\u4E00\u4E2A\u6309\u94AE\u7EC4\u4EF6
      const app = Vue.createApp({
        template: \`
          &lt;nutbig-scratch-card 
            content=&quot;618\u4E07&quot;
          &gt;&lt;/nutbig-scratch-card&gt;
        \`,
      });
      app.use(nutbig);
      app.mount(&quot;#app&quot;);
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><h2>\u6CE8\u610F\u4E8B\u9879</h2><ul><li>\u7EC4\u4EF6 css \u5355\u4F4D\u4F7F\u7528\u7684\u662F <strong>px</strong>\uFF0C\u5982\u679C\u4F60\u7684\u9879\u76EE\u4E2D\u9700\u8981 <strong>rem</strong> \u5355\u4F4D\uFF0C\u53EF\u501F\u52A9\u4E00\u4E9B\u5DE5\u5177\u8FDB\u884C\u8F6C\u6362\uFF0C\u6BD4\u5982 <a href="https://www.webpackjs.com/">webpack</a> \u7684 <a href="https://www.npmjs.com/package/px2rem-loader">px2rem-loader</a>\u3001<a href="https://github.com/postcss/postcss">postcss</a> \u7684 <a href="https://www.npmjs.com/package/postcss-plugin-px2rem">postcss-plugin-px2rem</a> \u63D2\u4EF6\u7B49</li></ul>`,17),p=[u],a={setup(s){return(c,i)=>(o(),t("div",e,p))}};export{a as default};
