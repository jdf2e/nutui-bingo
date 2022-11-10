# Guessgift 你藏我猜

### 介绍

用于盲猜或考验眼力的游戏，可配置动画速度、开始结束回调、图片等。

### 安装

```javascript
import { createApp } from "vue";
// vue
import { GuessGift } from "@nutui/nutui-bingo";
// taro
import { GuessGift } from "@nutui/nutui-bingo-taro";

const app = createApp();
app.use(GuessGift);
```

### 基础用法

:::demo

```html
<template>
  <nutbig-guess-gift
    ref="guessgiftDom"
    :prize-index="prizeIndex"
    :turn-number="turnNum"
    @start-turns="startTurns"
    @end-turns="endTurns"
  >
  </nutbig-guess-gift>
  <button type="primary" @click="gameStart">开始</button>
</template>
<script>
  import { ref } from "vue";
  export default {
    setup() {
      const guessgiftDom: any = ref(null);
      // 中奖的奖品的index(此数据可根据后台返回的值重新赋值)
      const prizeIndex = ref(3);
      const gameStart = () => {
        guessgiftDom.value.start();
      };
      const startTurns = () => {
        console.log("开始抽奖");
      };
      const endTurns = () => {
        console.log("抽奖结束");
      };
      const turnNum = ref(5);
      return {
        guessgiftDom,
        turnNum,
        prizeIndex,
        gameStart,
        startTurns,
        endTurns,
      };
    },
  };
</script>
<style>
  #app {
    width: 100%;
    padding: 57px 0 0 0;
    height: 400px;
    background: #000;
  }
  button {
    display: block;
    width: 100px;
    margin: 30px auto;
  }
</style>
```

:::

### Props

| 字段            | 说明                     | 类型   | 默认值                             |
| --------------- | ------------------------ | ------ | ---------------------------------- |
| turns-number    | 交换次数                 | Number | 20                                 |
| turns-time      | 每个碗移动所用时间       | Number | 0(单位是毫秒)                      |
| turns-frequency | 动画频率，位置交换更新   | Number | 500(单位是毫秒)                    |
| raise-height    | 碗抬起的高度             | Number | 50                                 |
| prize-index     | 中奖奖品在列表的索引位置 | Number | -1（-1 不中奖，大于等于 0 为中奖） |

### Events

| 字段        | 说明                       | 回调参数 |
| ----------- | -------------------------- | -------- |
| start-turns | 碗开始换位                 | -        |
| end-turns   | 碗停止换位，点击某个碗抽奖 | -        |
