# 快速上手

## 预览


> 扫描下方二维码体验，体验 bingo 组件库示例

<img src="https://img11.360buyimg.com/imagetools/jfs/t1/167199/15/24963/2648/61ea6b4dE7bcc7a55/bccecb56cb063dff.png" width="200" alt="NutUI-Bingo">

#### NPM 安装

```bash
# Vue3
npm i @bingo/nutui-bingo
```


> 我们推荐使用 *NPM* 或 *YARN* 方式安装，不推荐在页面中直接引入的用法
#### NPM 使用示例

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import NutBig from "@bingo/nutui-bingo";
import "@bingo/nutui-bingo/dist/style.css";
createApp(App).use(NutBig).mount("#app");
```

> 注意：这种方式将会导入所有组件

## 推荐使用按需加载

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { Turntable } from "@test/nutui-bingo";
import "@test/nutui-bingo/dist/style.css";
createApp(App).use(Turntable).mount("#app");
```


## 注意事项

- 组件 css 单位使用的是 **px**，如果你的项目中需要 **rem** 单位，可借助一些工具进行转换，比如 [webpack](https://www.webpackjs.com/) 的 [px2rem-loader](https://www.npmjs.com/package/px2rem-loader)、[postcss](https://github.com/postcss/postcss) 的 [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) 插件等
