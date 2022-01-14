# Guessgift 你藏我猜

### 介绍

用于盲猜或考验眼力的游戏，可配置动画速度、开始结束回调、图片等。

### 安装
``` javascript
import { createApp } from 'vue';
// vue
import { GuessGift } from '@nutui/nutui-bingo';

const app = createApp();
app.use(GuessGift);
```

## 代码示例
## 基本用法

```html
<nutbig-guess-gift
  ref="guessgiftDom"
  :prize-index="prizeIndex"
  @start-turns="startTurns"
  @end-turns="endTurns"
>
</nutbig-guess-gift>
```

```javascript
export default {
  props: {},
  setup() {
    const guessgiftDom:any = ref(null);

    // 中奖的奖品的index(此数据可根据后台返回的值重新赋值)
    const prizeIndex = ref(3); 
    const gameStart = () => {
      guessgiftDom.value.start();
    }
    const startTurns = () => {
      console.log('开始抽奖');
    }

    const endTurns = () => {
      Dialog({
        title: '中奖提示',
        content: '您已完成抽奖，是否继续？',
        onCancel: () => {},
        onOk: () => {
          setTimeout(() => {
            guessgiftDom.value.init();
          }, 300);
        }
      });
    }
   
    return {
      guessgiftDom,
      prizeIndex,
      gameStart,
      startTurns,
      endTurns
    };
  }
}
```


### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| turns-number | 交换次数 | Number | 20
| turns-time | 每个碗移动所用时间 | Number | 0(单位是毫秒)
| turns-frequency | 动画频率，位置交换更新 | Number | 500(单位是毫秒)
| raise-height | 碗抬起的高度 | Number | 50
| prize-index | 中奖奖品在列表的索引位置 | Number | -1（-1随机停，大于1为设置的图片索引位置）

### Events

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| start-turns | 转盘开始转动的回调函数，此时将接口中的中奖索引，赋值到 prize-index| - 
| end-turns | 转盘中停止转动后的回调函数 | - 

