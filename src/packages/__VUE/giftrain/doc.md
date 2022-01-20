# GiftRain 组件

### 介绍

红包雨

### 安装

```javascript
import { createApp } from "vue";
import { GiftRain } from "@nutui/nutui-bingo";

const app = createApp();
app.use(GiftRain);
```

## 代码演示

### 基础用法

```html
<nutbig-giftrain
  ref="rain"
  width="100%"
  height="580px"
  @gameOver="gameOver"
  @start="start"
  @click="click"
>
</nutbig-giftrain>
<div v-if="!isStart" class="start" @click="onStart">开始</div>
```

```javascript
 setup() {
    const rain = ref();
    const isStart = ref(false)
    const gameOver = () => {
      isStart.value = false
    };
    const start=()=>{
      isStart.value = true
    }
    const click=()=>{
      console.log('点击');
    }
    const onStart = ()=>{
      rain.value.startRain()
    }
    return { gameOver ,isStart,start,click,onStart,rain};
  },
```

## API

### Props

| 参数        | 说明                 | 类型   | 默认值                                                                                              |
| ----------- | -------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| width       | 容器宽度             | string | 375px                                                                                               |
| height      | 容器高度             | string | 500px                                                                                               |
| rain-time   | 持续时间             | string | 30000ms                                                                                             |
| rain-num    | 一页最多展示多少红包 | string | 5                                                                                                   |
| rain-img    | 红包图片             | string | //img13.360buyimg.com/imagetools/jfs/t1/199416/7/16633/40527/618c8bebEb03467d8/6af8bde529c5cf61.png |
| rain-width  | 红包宽度             | number | 50                                                                                                  |
| rain-height | 红包高度             | number | 50                                                                                                  |

### Events

| 事件名    | 说明           | 回调参数 |
| --------- | -------------- | -------- |
| start     | 游戏开始时触发 |          |
| game-over | 游戏结束时触发 |          |
| click     | 点击红包时触发 |          |
