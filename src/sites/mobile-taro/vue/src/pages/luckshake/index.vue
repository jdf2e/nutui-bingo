<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div
      class="demo1"
      style="
        background: url('//img11.360buyimg.com/imagetools/jfs/t1/114254/40/21041/607452/618e30bbE6ab3ee0c/9b7a249aee21ba46.jpg')
          no-repeat top center/100% 100%;
        height: 140vw;
      "
    >
      <nutbig-luckshake
        ref="luckshakePrize"
        :luck-width="luckWidth"
        :luck-height="luckheight"
        :shake-num="shakeNum"
        @shake-event="shakeEvent()"
        @click-shake="handelClick()"
      >
        <!-- <template #shake-num>
          <view class="shake-num">抽奖可用次数{{ shakeNum }}</view>
        </template> -->
      </nutbig-luckshake>
    </div>
  </div>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";
import { ref, reactive } from "vue";
// import { Toast } from "@nutui/nutui";
export default {
  setup() {
    // 红包大小
    const luckWidth = ref("200px");
    const luckheight = ref("160px");
    // 剩余抽奖次数
    let shakeNum = ref(4);

    const shakeEvent = () => {
      console.log("您进行了摇一摇", shakeNum.value);
      if (shakeNum.value == 0) {
        Taro.showToast({
          title: "无抽奖次数",
        });
      } else if (shakeNum.value == 1) {
        setTimeout(() => {
          Taro.showToast({
            title: "中奖啦",
          });
        }, 200);
        shakeNum.value -= 1;
      } else {
        console.log("444");
        setTimeout(() => {
          // Do something
          Taro.showToast({
            title: `抽奖次数还剩${shakeNum.value}次`,
          });
        }, 200);
        shakeNum.value -= 1;
      }
    };
    const handelClick = () => {
      console.log("点击摇一摇", shakeNum.value);
      if (shakeNum.value == 0) {
        Taro.showToast({
          title: "无抽奖次数",
        });
      } else if (shakeNum.value == 1) {
        setTimeout(() => {
          Taro.showToast({
            title: "中奖啦",
          });
        }, 200);
        shakeNum.value -= 1;
      } else {
        setTimeout(() => {
          // Do something
          Taro.showToast({
            title: `抽奖次数还剩${shakeNum.value}次`,
          });
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

<style lang="scss" scoped></style>
