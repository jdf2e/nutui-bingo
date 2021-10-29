# LuckGiftbox 神秘大礼盒

### 介绍

用于礼盒抽奖长江，可配置图片、开始结束回调等。

### 安装
``` javascript
import { createApp } from 'vue';
// vue
import { Luckgiftbox } from '@nutui/nutui-bingo';
// taro
import { Luckgiftbox } from '@nutui/nutui-bingo-taro';

const app = createApp();
app.use(Luckgiftbox);
```

## 代码示例
## 基本用法

```html
<nut-bingo-Luckgiftbox
  ref="refChild"
  @start-turns="startTurns"
  @end-turns="endTurns"
>
</nut-bingo-Luckgiftbox>
<nut-button type="primary" @click="initBox">再来一次</nut-button>
```

```javascript
export default {
  setup() {
    const refChild = ref();
    const initBox = () => {
      refChild.value.init();
    }
    const startTurns = () => {
      console.log('开始');
    }
    const endTurns = () => {
      console.log('结束');
    }
    return {
      refChild,
      initBox,
      startTurns,
      endTurns
    };
  }
}
```




### Events

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| init | 礼盒初始化 | - 
| start-turns | 礼盒打开时候的回调函数 | - 
| end-turns | 礼盒打开后的回调函数 | - 

