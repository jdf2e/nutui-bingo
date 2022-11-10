# GiftRain 组件

### 介绍

红包雨

### 安装

```javascript
import { createApp } from "vue";
// vue
import { GiftRain } from "@nutui/nutui-bingo";
// taro
import { GiftRain } from "@nutui/nutui-bingo-taro";

const app = createApp();
app.use(GiftRain);
```

### 基础用法

:::demo

```html
<template>
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
</template>
<script>
  import { ref } from "vue";
  export default {
    setup() {
      const rain = ref();
      const isStart = ref(false);
      const gameOver = () => {
        isStart.value = false;
      };
      const start = () => {
        isStart.value = true;
      };
      const click = () => {
        console.log("点击");
      };
      const onStart = () => {
        rain.value.startRain();
      };
      return { gameOver, isStart, start, click, onStart, rain };
    },
  };
</script>
<style>
  .nutbig-giftrain .nutbig-giftrain-content {
    background: url("//img13.360buyimg.com/imagetools/jfs/t1/156139/35/24533/600373/61974f3eEf612507c/88df16bece0b202f.png")
      no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .start {
    width: 100px;
    height: 30px;
    background: linear-gradient(
      135deg,
      rgba(114, 60, 255, 1) 0%,
      rgba(111, 58, 255, 1) 63.49938195167575%,
      rgba(150, 110, 255, 1) 87.35307751528254%,
      rgba(149, 117, 241, 1) 100%
    );
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    bottom: 0;
    left: 40%;
  }
</style>
```

:::

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
