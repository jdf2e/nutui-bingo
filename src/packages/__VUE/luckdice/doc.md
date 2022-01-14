# Luckrain 组件

### 介绍

摇骰子

### 安装

```javascript
import { createApp } from "vue";
import { shakeDice } from "@nutui/nutui";

const app = createApp();
app.use(shakeDice);
```

## 代码演示

### 基础用法

```html
 <nut-bingo-luckdice ref="dice"></nut-bingo-luckdice>
<div @click="jump" class="demoBtn">摇动</div>
```

```javascript
setup() {
    const dice = ref();
    const jump = () => {
      dice.value.jump();
    };
    return {
      jump,
      dice,
    };
  },
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
| ------------ | -------------------------------- | ------ | ---------------- |
| time         | 旋转时间   ms     | String |          3000   |
| speed        | 旋转速度 几秒一圈                      | Number |  1             |
| id        |  中奖的id(依据下标处理 0对应骰子1，依次类推) | Number |      1        | 

### Events

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| shake  | 骰子开始摇动| - |
| end  | 骰子摇动结束| - |

   