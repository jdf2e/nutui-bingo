# LucShake 摇一摇

### 介绍

用于摇一摇抽奖场景，可配置图片、摇晃设备回调等。

### 安装
``` javascript
import { createApp } from 'vue';
// vue
import { Luckshake } from '@nutui/nutui-bingo';

const app = createApp();
app.use(Luckshake);
```

## 代码示例
## 基本用法

需要注意的是，监听设备的加速度变化等信息的 API `devicemotion` 的兼容性问题：
- 在 ios 10(包括目前的一些安卓机) 之后，IOS 做了安全限制，如果想要在页面中使用陀螺仪相关的一些事件，必须使用 https 协议；
- 如果用户可以在手机的设置关闭掉“动作与方向访问”，则设备不支持摇一摇功能；
- 调用手机震动的 API `navigator.vibrate` 只在安卓系统有效。

```html
<div class="demo1" style="background: url('//img11.360buyimg.com/imagetools/jfs/t1/114254/40/21041/607452/618e30bbE6ab3ee0c/9b7a249aee21ba46.jpg') no-repeat top center/100% 100%">
  <nut-bingo-luckshake
    ref="luckshakePrize"
    :luck-width="luckWidth"
    :luck-height="luckheight"
    @shake-event="shakeEvent()"
    @click-shake="handelClick()"
  >
  </nut-bingo-luckshake>
</div>
```

```javascript
export default {
  setup() {
    // 红包大小
    const luckWidth = ref('200px');
    const luckheight = ref('160px');
    // 剩余抽奖次数
    let shakeNum = ref(3);

    const shakeEvent = () => {
      // console.log("您进行了摇一摇")
      if (shakeNum.value == 0) {
        (Toast as any).text(`无抽奖次数`);
      } else if (shakeNum.value == 1) {
        setTimeout(() => {
          (Toast as any).text(`中奖啦`);
        }, 200)
        shakeNum.value -= 1
      } else {
        setTimeout(() => {
          (Toast as any).text(`抽奖次数还剩${shakeNum.value}次`) // Do something
        }, 200)
        shakeNum.value -= 1
      }
    }
    const handelClick = () => {
      console.log("点击摇一摇")
      if (shakeNum.value == 0) {
        (Toast as any).text(`无抽奖次数`);
      } else if (shakeNum.value == 1) {
        setTimeout(() => {
          (Toast as any).text(`中奖啦`);
        }, 200)
        shakeNum.value -= 1
      } else {
        setTimeout(() => {
          (Toast as any).text(`抽奖次数还剩${shakeNum.value}次`) // Do something
        }, 200)
        shakeNum.value -= 1
      }
    }
    return {
      luckWidth,
      luckheight,
      shakeNum,
      shakeEvent,
      handelClick
    };
  }
}
```

### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| luck-width | 红包的宽度 | String | 200px
| luck-height | 红包的高度 | String | 160px
| luck-img | 红包图片 | String | -
| click-point | 红包图片 | String | -
| duration-time | 震动持续时间 | Number | -
| pointer-style | 点击图片的样式 | Object | {width: '90px',height: '90px'}

### Events

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| shake-event  | 摇晃设备的回调函数 | - 
| click-shake | 点击回调函数 | - 

