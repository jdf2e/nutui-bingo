# Luckrain 组件

### 介绍

红包雨

### 安装

```javascript
import { createApp } from "vue";
import { Luckrain } from "@nutui/nutui";

const app = createApp();
app.use(Luckrain);
```

## 代码演示

### 基础用法

```html
<nut-bingo-luckrain
  width="100%"
  height="580px"
  @gameOver="gameOver"
  @start="start"
  @click="click"
>
  <template #customize="{ onStart }" v-if="!isStart">
    <div class="start" @click="onStart">开始</div>
  </template>
</nut-bingo-luckrain>
```

```javascript
setup() {
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
    return { gameOver ,isStart,start,click};
  },
```

  width: string; // 容器宽度
  height:string // 容器高度
  rainTime: number; // 持续时间
  rainNum: number; // 一页最多展示多少红包
  rainImg: string; // 红包图片
  rainWidth:number; // 红包宽度
  rainHeight:number; // 红包高度
## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
| ------------ | -------------------------------- | ------ | ---------------- |
| width         | 容器宽度          | String |           375px     |
| height        | 容器高度                      | String |  500px              |
| rain-time         | 持续时间 | String |       30000ms         | 
| rain-num | 一页最多展示多少红包   | String | 5 | 
| rain-img   | 红包图片| String | //img13.360buyimg.com/imagetools/jfs/t1/199416/7/16633/40527/618c8bebEb03467d8/6af8bde529c5cf61.png       |
| rain-width          | 红包宽度        | Number | 50              |
| rain-height          | 红包高度                       | Number | 50              |

### Events

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| start  | 游戏开始时触发|  |
| gameOver  | 游戏结束时触发 | |
| click  | 点击红包时触发 |  |

### Slots

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| customize  | 自定义内容|   onStart（触发开始游戏开关） |       