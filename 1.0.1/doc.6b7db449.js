import{e as t,o as d,y as e}from"./vendor.63588a2d.js";const n={class:"markdown-body"},r=e(`<h1>SquareNine \u4E5D\u5BAB\u683C\u7FFB\u724C\u62BD\u5956</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u7FFB\u724C\u62BD\u5956\u573A\u666F</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;
import { SquareNine } from &#39;@nutui/nutui-bingo&#39;;

const app = createApp();
app.use(SquareNine);

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html">&lt;nutbig-squarenine
      :prize-list=&quot;dataArr&quot;
      :prize-id=&quot;prizeId&quot;
      :cardImg=&quot;cardImg&quot;
      @click=&quot;click&quot;
    &gt;
&lt;/nutbig-squarenine&gt;
</code></pre><pre><code class="language-javascript"> setup() {
    const dataArr = reactive([
      {
        name: &quot;\u5546\u54C1\u540D\u79F0\u540D\u79F0&quot;,
        id:1,
        pictureUrl:
          &quot;//m.360buyimg.com/babel/s180x180_jfs/t1/174906/19/10256/188436/60a242afE89a800c9/801b64e5b80fde9a.jpg!q70.jpg&quot;,
      },
      {
       name: &quot;\u6CA1\u6709\u4E2D\u5956\u54E6&quot;,
        id:2,
        pictureUrl:
          &quot;https://img14.360buyimg.com/imagetools/jfs/t1/213369/13/5346/13899/619b60e5E2761162e/dca9b64e09bb2fed.png&quot;,
      },
      {
        name: &quot;\u5546\u54C1\u540D\u79F0\u540D\u79F0&quot;,
        id:3,
        pictureUrl:
          &quot;//m.360buyimg.com/babel/s180x180_jfs/t1/17279/28/13940/140479/60b984f4E723b9981/d007711aa1cdc358.jpg!q70.jpg&quot;,
      },
      {
        name: &quot;\u5546\u54C1\u540D\u79F0\u540D\u79F0&quot;,
        id:4,
        pictureUrl:
          &quot;//m.360buyimg.com/babel/s180x180_jfs/t1/190452/2/84/116077/608627ecEef11d11e/e0a93f09eca31ddf.jpg!q70.jpg&quot;,
      },
      {
        name: &quot;\u5546\u54C1\u540D\u79F0\u540D\u79F0&quot;,
        id:5,
        pictureUrl:
          &quot;https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg&quot;,
      },
      {
        name: &quot;\u7965\u79BE\u997D\u997D\u94FA\u4EAC\u4E1C\u81EA\u8425\u65D7\u8230\u5E97&quot;,
        id:6,
        pictureUrl:
          &quot;//m.360buyimg.com/babel/s66x66_jfs/t1/195378/33/9432/145698/60d0400eE0520ca9f/2283995f6c6176e7.jpg!q50.jpg&quot;,
      },
      {
        name: &quot;\u9C9C\u82B14+1\u675F \u9C9C\u82B1\u901F\u9012 &quot;,
        id:7,
        pictureUrl:
          &quot;//m.360buyimg.com/babel/s180x180_jfs/t1/185809/36/6800/181830/60b4fdaaEa74ddfdf/7f3776e9a493ec20.jpg!q70.jpg&quot;,
      },
      {
        name: &quot;\u5927\u8FDE\u8428\u7C73\u6258\u7231\u5FC3\u6A31\u6843&quot;,
        id:8,
        pictureUrl:
          &quot;//m.360buyimg.com/babel/s180x180_jfs/t1/191656/26/7699/116921/60c1ed9eE933be59e/5c77c8eabda19d0d.jpg!q70.jpg&quot;,
      },
    ]);
    const prizeId = ref();
    const cardImg= ref(&#39;//img11.360buyimg.com/imagetools/jfs/t1/73511/35/17197/9388/613852cdE75dc6822/ddb31e0f3cfdcb81.png&#39;);
    const click = () =&gt; {
      prizeId.value=2
    };
    return {
      dataArr,
      prizeId,
      cardImg,
      click,
    };
  },
</code></pre><h3>\u81EA\u5B9A\u4E49\u5F00\u59CB\u6E38\u620F\u6309\u94AE</h3><pre><code class="language-html"> &lt;nutbig-squarenine
      :data=&quot;dataArr&quot;
      :prize-id=&quot;prizeId&quot;
      :cardImg=&quot;cardImg&quot;
      @click=&quot;click&quot;
    &gt;
     &lt;template #startBtn&gt;
       &lt;div&gt;\u81EA\u5B9A\u4E49&lt;/div&gt;
     &lt;/template&gt;
    &lt;/nutbig-squarenine&gt;
</code></pre><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prize-list</td><td>\u5956\u54C1\u5217\u8868</td><td>Array</td><td>[]</td></tr><tr><td>prize-id</td><td>\u4E2D\u5956id</td><td>Number</td><td>5</td></tr><tr><td>card-img</td><td>\u5361\u724C\u80CC\u9762\u56FE\u7247</td><td>String</td><td>-</td></tr></tbody></table><h3>prize-list</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u5956\u54C1\u540D\u79F0</td><td>String</td><td>-</td></tr><tr><td>id</td><td>\u5956\u54C1id</td><td>Number</td><td>-</td></tr><tr><td>pictureUrl</td><td>\u5956\u54C1\u56FE\u7247</td><td>String</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u7528\u6237\u7FFB\u724C\u65F6\u89E6\u53D1\uFF0C\u6B64\u65F6\u53EF\u4EE5\u66F4\u6539\u4E2D\u5956id</td><td>-</td></tr><tr><td>start</td><td>\u7528\u6237\u70B9\u51FB\u5F00\u59CB\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>return</td><td>\u7528\u6237\u70B9\u51FB\u8FD4\u56DE\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,17),a=[r],p={setup(o){return(u,c)=>(d(),t("div",n,a))}};export{p as default};
