# Hiteggs组件

### 介绍

用于砸金蛋抽奖场景，可以自定义金蛋图片等
### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { Hiteggs } from '@nutui/nutui-bingo';

const app = createApp();
app.use(Hiteggs);

```

## 代码演示

### 基础用法


```html
<nutbig-hiteggs></nutbig-hiteggs>
```

###  自定义传入个数


```html
<nutbig-hiteggs :num=9></nutbig-hiteggs>
```

### 砸击事件

```html
<nutbig-hiteggs :num=9 @click="hit"></nutbig-hiteggs>
```
```javascript
setup(){
     const hit = ()=>{
      console.log('中奖啦');
      
    }
    return{
        hit,
    }
}
```
## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| num         | 金蛋个数              | number | 9             |
| intact-img        | 完整金蛋图片地址  | String |     img10.360buyimg.com/imagetools/jfs/t1/217651/2/1901/114207/617770f2E74551438/5342f7b949e7bec3.png          |
| hammer         | 锤子图片 | String |    img13.360buyimg.com/imagetools/jfs/t1/95159/30/17834/9845/61444874E0f463263/924741cae55efb85.png           |
| width | 金蛋图片宽度    | String | 80px |
| height         | 金蛋图片高度                      | String |80px              |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 砸击金蛋后触发 | - |
