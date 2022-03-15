# 快速上手

## 预览


> 扫描下方二维码体验，体验 bingo 组件库示例

<img src="https://img11.360buyimg.com/imagetools/jfs/t1/167199/15/24963/2648/61ea6b4dE7bcc7a55/bccecb56cb063dff.png" width="200" alt="NutUI-Bingo">

#### NPM 安装

```bash
# Vue3
npm i @nutui/nutui-bingo
```


> 我们推荐使用 *NPM* 或 *YARN* 方式安装，不推荐在页面中直接引入的用法
#### NPM 使用示例

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import NutBig from "@nutui/nutui-bingo";
import "@nutui/nutui-bingo/dist/style.css";
createApp(App).use(NutBig).mount("#app");
```

> 注意：这种方式将会导入所有组件

## 推荐使用按需加载

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { Turntable } from "@nutui/nutui-bingo";
import "@nutui/nutui-bingo/dist/style.css";
createApp(App).use(Turntable).mount("#app");
```

#### CDN 安装使用示例

> 可以通过 CDN 的方式引入， 可以在 **jsdelivr** 和 **unpkg** 等公共 CDN 上获取到 NutUI。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nutui/nutui-bingo/dist/style.css" />
    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
    <!-- 引入NutUI-Bingo组件库 -->
    <script src="https://cdn.jsdelivr.net/npm/@nutui/nutui-bingo/dist/nutbig.umd.js"></script>
  </head>
  <body>
    <div id="app">
        
    </div>
    <script>
      // 在 #app 标签下渲染一个按钮组件
      const app = Vue.createApp({
        template: `
          <nutbig-scratch-card 
            content="618万"
          ></nutbig-scratch-card>
        `,
      });
      app.use(nutbig);
      app.mount("#app");
    </script>
  </body>
</html>
```


## 注意事项

- 组件 css 单位使用的是 **px**，如果你的项目中需要 **rem** 单位，可借助一些工具进行转换，比如 [webpack](https://www.webpackjs.com/) 的 [px2rem-loader](https://www.npmjs.com/package/px2rem-loader)、[postcss](https://github.com/postcss/postcss) 的 [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) 插件等
