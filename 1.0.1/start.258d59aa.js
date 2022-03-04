import{e as t,o,y as e}from"./vendor.d935373b.js";const p={class:"markdown-body"},u=e(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><h2>\u9884\u89C8</h2><blockquote><p>\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u4F53\u9A8C\uFF0C\u4F53\u9A8C bingo \u7EC4\u4EF6\u5E93\u793A\u4F8B</p></blockquote><img src="https://img11.360buyimg.com/imagetools/jfs/t1/167199/15/24963/2648/61ea6b4dE7bcc7a55/bccecb56cb063dff.png" width="200" alt="NutUI-Bingo"><h4>NPM \u5B89\u88C5</h4><pre><code class="language-bash"># Vue3
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
</code></pre><h2>\u6CE8\u610F\u4E8B\u9879</h2><ul><li>\u7EC4\u4EF6 css \u5355\u4F4D\u4F7F\u7528\u7684\u662F <strong>px</strong>\uFF0C\u5982\u679C\u4F60\u7684\u9879\u76EE\u4E2D\u9700\u8981 <strong>rem</strong> \u5355\u4F4D\uFF0C\u53EF\u501F\u52A9\u4E00\u4E9B\u5DE5\u5177\u8FDB\u884C\u8F6C\u6362\uFF0C\u6BD4\u5982 <a href="https://www.webpackjs.com/">webpack</a> \u7684 <a href="https://www.npmjs.com/package/px2rem-loader">px2rem-loader</a>\u3001<a href="https://github.com/postcss/postcss">postcss</a> \u7684 <a href="https://www.npmjs.com/package/postcss-plugin-px2rem">postcss-plugin-px2rem</a> \u63D2\u4EF6\u7B49</li></ul>`,14),s=[u],i={setup(c){return(n,r)=>(o(),t("div",p,s))}};export{i as default};
