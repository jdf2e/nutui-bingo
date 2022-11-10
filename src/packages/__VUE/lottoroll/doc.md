# LottoRoll 老虎机

### 介绍

用于老虎机抽奖，可配置图片、开始结束回调等。

### 安装

```javascript
import { createApp } from "vue";
// vue
import { LottoRoll } from "@nutui/nutui-bingo";
// taro
import { LottoRoll } from "@nutui/nutui-bingo-taro";

const app = createApp();
app.use(LottoRoll);
```

## 基础用法

:::demo

```html
<template>
  <nutbig-lotto-roll
    ref="lottoRollDom"
    :prize-list="prizeList"
    :prize-index="prizeIndex"
    @start-turns="startTurns"
    @end-turns="endTurns"
  >
  </nutbig-lotto-roll>
  <div class="btnBtn">
    <button @click="startRole" :disabled="startFlag">中奖（测试）</button>
    <button @click="startRole2" :disabled="startFlag">不中奖（测试）</button>
  </div>
</template>
<script lang="ts">
  import { ref, reactive } from "vue";
  export default {
    setup() {
      const lottoRollDom: any = ref(null);
      const prizeList = reactive([
        {
          imagePath:
            "https://img11.360buyimg.com/imagetools/jfs/t1/147182/12/2440/6194/5f06cde6Ead240fe8/31082e30a182a5ce.png",
          text: "大鸡腿",
        },
        {
          imagePath:
            "https://img11.360buyimg.com/imagetools/jfs/t1/128607/26/6643/6790/5f06cd27E9b5e15f7/7509bc7ce2da66b8.png",
          text: "VIP",
        },
        {
          imagePath:
            "https://img11.360buyimg.com/imagetools/jfs/t1/105385/19/15140/111093/5e6f1506E48bd0dfb/829a98a8cdb4c27f.png",
          text: "Apple watch",
        },
        {
          imagePath:
            "https://img14.360buyimg.com/imagetools/jfs/t1/90507/38/15165/448364/5e6f15b4E5df0c718/4bd4c3d375eec312.png",
          text: "坚果礼盒",
        },
        {
          imagePath:
            "https://img14.360buyimg.com/imagetools/jfs/t1/104165/34/15186/96522/5e6f1435E46bc0cb0/d4e878a15bfd9362.png",
          text: "手机",
        },
      ]);
      const startFlag = ref(false);

      // 中奖的奖品的index(此数据可根据后台返回的值重新赋值)
      const index = Math.floor(Math.random() * prizeList.length);
      const prizeIndex = ref(3);
      const startTurns = () => {
        startFlag.value = true;
        console.log("开始抽奖");
      };

      const endTurns = () => {
        startFlag.value = false;
        console.log("抽奖结束");
      };

      const startRole = () => {
        prizeIndex.value = Math.floor(Math.random() * 5);
        lottoRollDom.value.start();
      };
      const startRole2 = () => {
        prizeIndex.value = -1;
        lottoRollDom.value.start();
      };

      return {
        lottoRollDom,
        prizeList,
        prizeIndex,
        startTurns,
        endTurns,
        startFlag,
        startRole,
        startRole2,
      };
    },
  };
</script>
```

:::

### Props

| 字段         | 说明                     | 类型   | 默认值                                                                 |
| ------------ | ------------------------ | ------ | ---------------------------------------------------------------------- |
| prize-list   | 奖品列表                 | Array  | [{imagePath: "xxxx",text: "xxx"}, {}...]                               |
| turns-number | 转动的圈数               | Number | 0                                                                      |
| turns-time   | 从开始转动到结束所用时间 | Number | 0(单位是毫秒)                                                          |
| prize-index  | 中奖奖品在列表的索引位置 | Number | -1（-1 随机停，大于 1 为设置的图片索引位置，请保证中间参数初始值为-1） |

### Events

| 字段        | 说明                                                               | 回调参数 |
| ----------- | ------------------------------------------------------------------ | -------- |
| start       | 转盘开始转动方法                                                   | -        |
| start-turns | 转盘开始转动的回调函数，此时将接口中的中奖索引，赋值到 prize-index | -        |
| end-turns   | 转盘中停止转动后的回调函数                                         | -        |
