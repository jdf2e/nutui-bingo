#  Scratchcard组件

### 介绍
    
基于 canvas 的一个刮刮卡组件
    
### 安装
 ``` javascript
import { createApp } from 'vue';
// vue
import { Scratchcard } from '@nutui/nutui';

const app = createApp();
app.use(Scratchcard);

```   
    
 ## 基本用法

```html
<nutbig-scratch-card 
  content="1000万"
></nutbig-scratch-card>
```
## 异步数据

```html
<nutbig-scratch-card 
  :content="val"
></nutbig-scratch-card>
```
## 支持自定义颜色

```html
<nutbig-scratch-card 
  coverColor="#F9CC9D" 
  backgroundColor="#C3D08B" 
  content="<em>1000<em><strong>元</strong>"
></nutbig-scratch-card>
```
## 支持背景是图片

```html
  <nutbig-scratch-card 
  content="1000万" 
  :coverImg="coverImage"
></nutbig-scratch-card>
```

## 事件回调

```html
<nutbig-scratch-card 
  content="1000万"
  @open="opencard"
></nutbig-scratch-card>
```
## 设置刮开比例

```html
<nutbig-scratch-card 
  content="1000万"
  @open="opencard"
  ratio="0.2"
></nutbig-scratch-card>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| content | 奖项信息，支持html | String | ''
| height | 卡片高度 | String | 50px
| width | 卡片高度 | String | 300px
| coverColor | 刮开层颜色 | String | ''
| coverImg | 刮开层是图片（不支持跨域。设置此项后coverColor失效） | String | ''
| fontSize | 中奖信息字号 | String | 20px
| backgroundColor | 内容层背景颜色 | String | '#FFFFFF'
| ratio | 触发事件的刮开比 | Number |0.8(介于0-1之间)

## 事件

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| open | 刮开后回调函数 | function | ''



