import{e as t,o as e,y as d}from"./vendor.63588a2d.js";const g={class:"markdown-body"},h=d(`<h1>Hiteggs\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u7838\u91D1\u86CB\u62BD\u5956\u573A\u666F\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u91D1\u86CB\u56FE\u7247\u7B49</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;
// vue
import { Hiteggs } from &#39;@nutui/nutui-bingo&#39;;

const app = createApp();
app.use(Hiteggs);

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html">&lt;nutbig-hiteggs&gt;&lt;/nutbig-hiteggs&gt;
</code></pre><h3>\u81EA\u5B9A\u4E49\u4F20\u5165\u4E2A\u6570</h3><pre><code class="language-html">&lt;nutbig-hiteggs :num=9&gt;&lt;/nutbig-hiteggs&gt;
</code></pre><h3>\u7838\u51FB\u4E8B\u4EF6</h3><pre><code class="language-html">&lt;nutbig-hiteggs :num=9 @click=&quot;hit&quot;&gt;&lt;/nutbig-hiteggs&gt;
</code></pre><pre><code class="language-javascript">setup(){
     const hit = ()=&gt;{
      console.log(&#39;\u4E2D\u5956\u5566&#39;);
    }
    return{
        hit,
    }
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>num</td><td>\u91D1\u86CB\u4E2A\u6570</td><td>number</td><td>9</td></tr><tr><td>intact-img</td><td>\u5B8C\u6574\u91D1\u86CB\u56FE\u7247\u5730\u5740</td><td>String</td><td><a href="http://img10.360buyimg.com/imagetools/jfs/t1/217651/2/1901/114207/617770f2E74551438/5342f7b949e7bec3.png">img10.360buyimg.com/imagetools/jfs/t1/217651/2/1901/114207/617770f2E74551438/5342f7b949e7bec3.png</a></td></tr><tr><td>hammer</td><td>\u9524\u5B50\u56FE\u7247</td><td>String</td><td><a href="http://img13.360buyimg.com/imagetools/jfs/t1/95159/30/17834/9845/61444874E0f463263/924741cae55efb85.png">img13.360buyimg.com/imagetools/jfs/t1/95159/30/17834/9845/61444874E0f463263/924741cae55efb85.png</a></td></tr><tr><td>width</td><td>\u91D1\u86CB\u56FE\u7247\u5BBD\u5EA6</td><td>String</td><td>80px</td></tr><tr><td>height</td><td>\u91D1\u86CB\u56FE\u7247\u9AD8\u5EA6</td><td>String</td><td>80px</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u7838\u51FB\u91D1\u86CB\u540E\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,18),n=[h],s={setup(o){return(r,a)=>(e(),t("div",g,n))}};export{s as default};
