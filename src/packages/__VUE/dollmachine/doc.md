# DollMachine 抓娃娃

### 介绍

模拟娃娃机抽奖，可配置图片、开始结束回调等。

### 安装
``` javascript
import { createApp } from 'vue';
// vue
import { Dollmachine } from '@nutui/nutui-bingo';

const app = createApp();
app.use(Dollmachine);
```

## 代码示例
## 基本用法

```html
<nutbig-doll-machine
  ref="lottoRollDom"
  :prize-list="prizeList"
  :prize-index="prizeIndex"
  @start-turns="startTurns"
  @end-turns="endTurns"
>
</nutbig-doll-machine>
```

```javascript
export default {
  props: {},
  setup() {
    const lottoRollDom:any = ref(null);
    const prizeList = reactive([
      {
        imagePath: "https://img11.360buyimg.com/imagetools/jfs/t1/147182/12/2440/6194/5f06cde6Ead240fe8/31082e30a182a5ce.png",
        text: "大鸡腿"
      },
      {
        imagePath: "https://img12.360buyimg.com/imagetools/jfs/t1/221361/4/7410/16458/61c9261eE45802396/27b64caa9e7c9bac.png",
        text: "JOY"
      },
      { 
        imagePath: "https://img11.360buyimg.com/imagetools/jfs/t1/128607/26/6643/6790/5f06cd27E9b5e15f7/7509bc7ce2da66b8.png",
        text: "VIP"
      },
      {
        imagePath: "https://img12.360buyimg.com/imagetools/jfs/t1/221361/4/7410/16458/61c9261eE45802396/27b64caa9e7c9bac.png",
        text: "JOY"
      },
    ]);

    // 中奖的奖品的index(此数据可根据后台返回的值重新赋值)
    const prizeIndex = ref(3); 
    const startTurns = () => {
      console.log('开始抽奖');
    }

    const endTurns = () => {
      console.log('抽奖结束');
      setTimeout(() => {
        Dialog({
          title: '中奖提示',
          content: '您已完成抽奖，是否继续？',
          onCancel: () => {},
          onOk: () => {
            setTimeout(() => {
              lottoRollDom.value.init();
            }, 300);
          }
        });
      }, 5000);
    }
   
    return {
      lottoRollDom,
      prizeList,
      prizeIndex,
      startTurns,
      endTurns
    };
  }
}
```


### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| prize-list | 奖品列表 | Array | 目前需要至少4个奖品
| speed | 奖品滚动的速度 | Number | 20
| init | 初始化游戏 | Function | -
| default-claw | 初始化爪子的样式，也可插槽形式 | string | -
| active-claw | 爪子抓到奖品的样式，也可插槽形式 | string | -
| prize-index | 中奖奖品在列表的索引位置 | Number | -1（-1未中奖）

```ts
default-claw 插槽形式: <template v-slot:defaultClaw></template> 
active-claw 插槽形式: <template v-slot:defaultClaw></template> 
```

### Events

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| init | 游戏初始化 | dom.value.init()
| start-turns | 爪子开始下伸，赋值到 prize-index| - 
| end-turns | 爪子已经抓到/未抓到奖品触发 | - 

