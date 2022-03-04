import{e as n,o as e,y as t}from"./vendor.d935373b.js";const o={class:"markdown-body"},u=t(`<h1>\u56FD\u9645\u5316\uFF083.0\u5F00\u53D1\u4E2D\uFF09</h1><p>NutUI 3.0 \u4EE5\u4E0A\u7248\u672C\u652F\u6301\u591A\u8BED\u8A00\u3002\u7EC4\u4EF6\u9ED8\u8BA4\u4F7F\u7528\u4E2D\u6587\uFF0C\u652F\u6301\u52A0\u8F7D\u5176\u4ED6\u8BED\u8A00\u5305\u6765\u5B9E\u73B0\u591A\u8BED\u8A00\u5207\u6362\u529F\u80FD\u3002\u9664\u4E86\u7EC4\u4EF6\u672C\u8EAB\u7684\u8BED\u8A00\u5207\u6362\u4EE5\u5916\uFF0C\u7528\u6237\u8FD8\u53EF\u4EE5\u8C03\u7528\u76F8\u5173\u7684\u8BED\u8A00\u8F6C\u6362\u65B9\u6CD5\u6765\u652F\u6301\u5176\u4ED6\u529F\u80FD\u7684\u56FD\u9645\u5316\u3002\u5177\u4F53\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><h2>\u4F7F\u7528\u65B9\u6CD5</h2><h3>\u5F15\u7528\u6574\u4E2A\u7EC4\u4EF6\u5E93</h3><pre><code class="language-javascript">import Vue from &#39;vue&#39;;
import NutUI from &#39;@nutui/nutui&#39;;

import enUS from &#39;@nutui/nutui/dist/locales/lang/en-US&#39;;

Vue.use(NutUI, {
  locale: &#39;en-US&#39;,
  lang: enUS
});
</code></pre><h3>\u6309\u9700\u5F15\u7528\u7EC4\u4EF6</h3><p>\u901A\u8FC7 <strong><a href="https://www.npmjs.com/package/@nutui/babel-plugin-separate-import">@nutui/babel-plugin-separate-import</a></strong> \u63D2\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u9879\u76EE\u9700\u8981\u5F15\u7528 NutUI \u7684\u7EC4\u4EF6\uFF0C\u6700\u7EC8\u53EA\u6253\u5305\u5F15\u7528\u7684\u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5F15\u5165\u4EE3\u7801\u7684\u4F53\u79EF\u3002\u56FD\u9645\u5316\u529F\u80FD\u540C\u6837\u652F\u6301\u6309\u9700\u5F15\u7528\u7684\u65B9\u5F0F\u3002</p><pre><code class="language-javascript">import Vue from &#39;vue&#39;;
import {locale} from &#39;@nutui/nutui&#39;;

import enUS from &#39;@nutui/nutui/dist/locales/lang/en-US&#39;;

locale(&#39;en-US&#39;, enUS);
</code></pre><blockquote><p>\u8BF7\u6CE8\u610F\uFF1A\u901A\u8FC7\u8BE5\u63D2\u4EF6\u8FDB\u884C\u6309\u9700\u5F15\u7528\u7EC4\u4EF6\u65F6\u9ED8\u8BA4\u5F15\u7528\u7684\u662F\u6784\u5EFA\u540E\u7684\u6587\u4EF6\uFF0C\u6B64\u65F6\u5E76\u4E0D\u652F\u6301\u56FD\u9645\u5316\u7684\u529F\u80FD\u3002\u5982\u9700\u4F7F\u7528\u7EC4\u4EF6\u5E93\u7684\u56FD\u9645\u5316\u529F\u80FD\uFF0C\u9700\u8981\u5728 babel \u7684\u914D\u7F6E\u6587\u4EF6\uFF08\u5982.babelrc\uFF09\u4E2D\u5C06 <strong>@nutui/babel-plugin-separate-import</strong> \u63D2\u4EF6\u7684 <strong>sourceCode</strong> \u53C2\u6570\u503C\u8BBE\u4E3A <strong>true</strong> \u3002\u8FD9\u6837\u63D2\u4EF6\u5C06\u5F15\u7528\u672A\u7ECF\u6784\u5EFA\u7684\u6E90\u6587\u4EF6\uFF0C\u540C\u65F6\u5F15\u7528\u7684\u7EC4\u4EF6\u4E5F\u4E0D\u518D\u5177\u6709 <code>install</code> \u65B9\u6CD5\uFF0C\u8BF7\u4F7F\u7528 <code>Vue.component</code> \u5BF9\u7EC4\u4EF6\u8FDB\u884C\u6CE8\u518C\u3002</p></blockquote><pre><code class="language-bash">{
  &quot;plugins&quot;: [
    [&quot;@nutui/babel-plugin-separate-import&quot;, {
      &quot;sourceCode&quot;: true,
      &quot;style&quot;: &quot;css&quot;
    }]
  ]
}
</code></pre><h2>\u517C\u5BB9 vue-i18n</h2><pre><code class="language-javascript">import VueI18n from &#39;vue-i18n&#39;;
import enUS from &#39;@nutui/nutui/dist/locales/lang/en-US&#39;;

Vue.use(VueI18n);

Vue.locale = () =&gt; {};
const i18n = new VueI18n({
  locale: &#39;en-US&#39;,
  messages: {
    &#39;en-US&#39;: enUS
  }
});


const app = new Vue({
  el: &#39;#app&#39;,
  i18n
})

</code></pre><h2>\u8BED\u8A00\u5207\u6362</h2><p>\u4F7F\u7528 <strong>vue-i18n</strong> \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528 <strong>$t</strong> \u65B9\u6CD5\u6765\u5BF9\u67D0\u4E2A\u4F4D\u7F6E\u505A\u56FD\u9645\u5316\u652F\u6301\u7684\u8BED\u8A00\u5207\u6362\u3002\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8C03\u7528 NutUI \u5185\u7F6E\u7684\u8BED\u8A00\u5207\u6362\u65B9\u6CD5 <strong>nutTranslate</strong> \u6765\u5B9E\u73B0\u76F8\u540C\u529F\u80FD\uFF0C\u800C\u4E14\u8FD8\u652F\u6301\u975E\u5E38\u7075\u6D3B\u7684\u6A21\u677F\u5316\u4F20\u53C2\u65B9\u5F0F\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <strong>mixin</strong> \u5C06\u8BE5\u8BED\u8A00\u5207\u6362\u65B9\u6CD5\u6DF7\u5165\u5230\u6BCF\u4E2A\u7EC4\u4EF6\u7684 <strong>methods</strong>\uFF0C\u65B9\u4FBF\u76F4\u63A5\u8C03\u7528\u3002</p><pre><code class="language-javascript">import Vue from &#39;vue&#39;;
import {i18n} from &#39;@nutui/nutui&#39;;

Vue.mixin({
    methods: {
        nutTranslate() {
            return i18n.apply(this, arguments);
        }
    }
});


// \u4F7F\u7528 nutTranslate
// params \u53C2\u6570\u652F\u6301\u9ED8\u8BA4\u503C\u3001\u5BF9\u8C61\u3001\u6570\u7EC4\u3001\u51FD\u6570\u7B49\u683C\u5F0F
&lt;nut-cell :title=&quot;nutTranslate(&#39;demo.cell.title&#39;, params)&quot; /&gt;
</code></pre><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u8981\u5B9E\u73B0\u5168\u9762\u7684\u56FD\u9645\u5316\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5C06\u7528\u6237\u81EA\u5DF1\u7684\u8BED\u8A00\u5305\u4E0E\u7EC4\u4EF6\u5E93\u7684\u8BED\u8A00\u5305\u8FDB\u884C\u5408\u5E76\u3002</p><pre><code class="language-javascript">import Vue from &#39;vue&#39;;
import {locale} from &#39;@nutui/nutui&#39;;
import enUS from &#39;@nutui/nutui/dist/locales/lang/en-US&#39;;
import myEnUS from &#39;./path/to/lang/en-US&#39;;

Object.assign(enUS, myEnUS);

locale(&#39;en-US&#39;, enUS);
</code></pre>`,17),r=[u],p={setup(a){return(s,i)=>(e(),n("div",o,r))}};export{p as default};
