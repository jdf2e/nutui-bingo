# LucShake 摇一摇

### 介绍

用于摇一摇抽奖场景，可配置图片、摇晃设备回调等。

### 安装

```javascript
import { createApp } from "vue";
// vue
import { Luckshake } from "@nutui/nutui-bingo";
// taro
import { Luckshake } from "@nutui/nutui-bingo-taro";

const app = createApp();
app.use(Luckshake);
```

### 基础用法

需要注意的是，监听设备的加速度变化等信息的 API `devicemotion` 的兼容性问题：

- 在 ios 10(包括目前的一些安卓机) 之后，IOS 做了安全限制，如果想要在页面中使用陀螺仪相关的一些事件，必须使用 https 协议；
- 如果用户可以在手机的设置关闭掉“动作与方向访问”，则设备不支持摇一摇功能；
- 调用手机震动的 API `navigator.vibrate` 只在安卓系统有效。

:::demo

```html
<template>
  <div
    class="demo1"
    style="background: url('//img11.360buyimg.com/imagetools/jfs/t1/114254/40/21041/607452/618e30bbE6ab3ee0c/9b7a249aee21ba46.jpg') no-repeat top center/100% 100%"
  >
    <nutbig-luckshake
      ref="luckshakePrize"
      :luck-width="luckWidth"
      :luck-height="luckheight"
      @shake-event="shakeEvent()"
      @click-shake="handelClick()"
    >
    </nutbig-luckshake>
  </div>
</template>
<script>
  import { ref, onMounted } from "vue";
  export default {
    setup() {
      // 红包大小
      const luckWidth = ref("200px");
      const luckheight = ref("160px");
      // 剩余抽奖次数
      let shakeNum = ref(3);

      const shakeEvent = () => {
        if (shakeNum.value == 0) {
          console.log(`无抽奖次数`);
        } else if (shakeNum.value == 1) {
          setTimeout(() => {
            console.log(`中奖啦`);
          }, 200);
          shakeNum.value -= 1;
        } else {
          setTimeout(() => {
            console.log(`抽奖次数还剩${shakeNum.value}次`); // Do something
          }, 200);
          shakeNum.value -= 1;
        }
      };
      const handelClick = () => {
        console.log("点击摇一摇");
        if (shakeNum.value == 0) {
          console.log(`无抽奖次数`);
        } else if (shakeNum.value == 1) {
          setTimeout(() => {
            console.log(`中奖啦`);
          }, 200);
          shakeNum.value -= 1;
        } else {
          setTimeout(() => {
            console.log(`抽奖次数还剩${shakeNum.value}次`); // Do something
          }, 200);
          shakeNum.value -= 1;
        }
      };
      return {
        luckWidth,
        luckheight,
        shakeNum,
        shakeEvent,
        handelClick,
      };
    },
  };
</script>
```

:::

### Props

| 字段               | 说明                               | 类型            | 默认值                         |
| ------------------ | ---------------------------------- | --------------- | ------------------------------ |
| is-shake           | 当前环境是否支持摇一摇             | String          | -                              |
| luck-width         | 红包图片的宽度                     | String          | 200px                          |
| luck-height        | 红包图片的高度                     | String          | 160px                          |
| luck-img-top       | 红包上半部分图片                   | String          | ''                             |
| luck-img-bottom    | 红包下半部分图片                   | String          | ''                             |
| click-point        | 点击手势图片，不需要可设置为 false | String，Boolean | ''                             |
| shake-speed        | 摇手机的阙值，越小越灵敏           | Number          | 110                            |
| duration-time      | 震动持续时间，小程序不可设置此参数 | Number          | 1000                           |
| duration-animation | 触发摇一摇后距离回调函数的时间     | Number          | 1000                           |
| pointer-style      | 点击图片的样式                     | Object          | {width: '90px',height: '90px'} |

### Events

| 字段        | 说明               | 回调参数 |
| ----------- | ------------------ | -------- |
| shake-event | 摇晃设备的回调函数 | -        |
| click-shake | 点击回调函数       | -        |
