import{e as t,o as d,y as r}from"./vendor.9be82274.js";const c={class:"markdown-body"},o=r(`<h1>Scratchcard\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u57FA\u4E8E canvas \u7684\u4E00\u4E2A\u522E\u522E\u5361\u7EC4\u4EF6</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;
// vue
import { Scratchcard } from &#39;@nutui/nutui-bingo&#39;;

const app = createApp();
app.use(Scratchcard);
</code></pre><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-html">&lt;nutbig-scratch-card 
  content=&quot;1000\u4E07&quot;
&gt;&lt;/nutbig-scratch-card&gt;
</code></pre><h2>\u5F02\u6B65\u6570\u636E</h2><pre><code class="language-html">&lt;nutbig-scratch-card 
  :content=&quot;val&quot;
&gt;&lt;/nutbig-scratch-card&gt;
</code></pre><h2>\u652F\u6301\u81EA\u5B9A\u4E49\u989C\u8272</h2><pre><code class="language-html">&lt;nutbig-scratch-card 
  coverColor=&quot;#F9CC9D&quot; 
  backgroundColor=&quot;#C3D08B&quot; 
  content=&quot;&lt;em&gt;1000&lt;em&gt;&lt;strong&gt;\u5143&lt;/strong&gt;&quot;
&gt;&lt;/nutbig-scratch-card&gt;
</code></pre><h2>\u652F\u6301\u80CC\u666F\u662F\u56FE\u7247</h2><pre><code class="language-html">  &lt;nutbig-scratch-card 
  content=&quot;1000\u4E07&quot; 
  :coverImg=&quot;coverImage&quot;
&gt;&lt;/nutbig-scratch-card&gt;
</code></pre><h2>\u4E8B\u4EF6\u56DE\u8C03</h2><pre><code class="language-html">&lt;nutbig-scratch-card 
  content=&quot;1000\u4E07&quot;
  @open=&quot;opencard&quot;
&gt;&lt;/nutbig-scratch-card&gt;
</code></pre><h2>\u8BBE\u7F6E\u522E\u5F00\u6BD4\u4F8B</h2><pre><code class="language-html">&lt;nutbig-scratch-card 
  content=&quot;1000\u4E07&quot;
  @open=&quot;opencard&quot;
  ratio=&quot;0.2&quot;
&gt;&lt;/nutbig-scratch-card&gt;
</code></pre><h2>Prop</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>content</td><td>\u5956\u9879\u4FE1\u606F\uFF0C\u652F\u6301html</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>height</td><td>\u5361\u7247\u9AD8\u5EA6</td><td>String</td><td>50px</td></tr><tr><td>width</td><td>\u5361\u7247\u9AD8\u5EA6</td><td>String</td><td>300px</td></tr><tr><td>coverColor</td><td>\u522E\u5F00\u5C42\u989C\u8272</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>coverImg</td><td>\u522E\u5F00\u5C42\u662F\u56FE\u7247\uFF08\u4E0D\u652F\u6301\u8DE8\u57DF\u3002\u8BBE\u7F6E\u6B64\u9879\u540EcoverColor\u5931\u6548\uFF09</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>fontSize</td><td>\u4E2D\u5956\u4FE1\u606F\u5B57\u53F7</td><td>String</td><td>20px</td></tr><tr><td>backgroundColor</td><td>\u5185\u5BB9\u5C42\u80CC\u666F\u989C\u8272</td><td>String</td><td>\u2018#FFFFFF\u2019</td></tr><tr><td>ratio</td><td>\u89E6\u53D1\u4E8B\u4EF6\u7684\u522E\u5F00\u6BD4</td><td>Number</td><td>0.8(\u4ECB\u4E8E0-1\u4E4B\u95F4)</td></tr></tbody></table><h2>\u4E8B\u4EF6</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>open</td><td>\u522E\u5F00\u540E\u56DE\u8C03\u51FD\u6570</td><td>function</td><td>\u2018\u2019</td></tr></tbody></table>`,21),n=[o],u={setup(e){return(a,h)=>(d(),t("div",c,n))}};export{u as default};
