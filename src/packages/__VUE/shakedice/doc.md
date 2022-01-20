# ShakeDice 组件

### 介绍

摇骰子

### 安装

```javascript
import { createApp } from "vue";
import { ShakeDice } from "@nutui/nutui-bingo";

const app = createApp();
app.use(ShakeDice);
```

## 代码演示

### 基础用法

```html
 <nutbig-shakedice  ref="dice" :id="id"></nutbig-shakedice >
<div @click="jump" class="demoBtn">摇动</div>
```

```javascript
 setup() {
    const dice = ref();
    const id = ref()
    const jump = () => {
      id.value = 5
      dice.value.shake();
    };
    return {
      jump,
      dice,
      id
    };
  },
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
| ------------ | -------------------------------- | ------ | ---------------- |
| time         | 旋转时间   ms     | string |          3000   |
| speed        | 旋转速度 几秒一圈                      | number |  1             |
| id        |  中奖的id(1为1点，依次类推) | number |      1        | 

### Events

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| shake  | 骰子开始摇动| - |
| end  | 骰子摇动结束| - |

   