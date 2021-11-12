<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div class="demo1" style="background: url('//img11.360buyimg.com/imagetools/jfs/t1/114254/40/21041/607452/618e30bbE6ab3ee0c/9b7a249aee21ba46.jpg') no-repeat top center/100% 100%">
      <nut-bingo-luckshake
        ref="luckshakePrize"
        :luck-width="luckWidth"
        :luck-height="luckheight"
        @shake-event="shakeEvent()"
        @click-shake="handelClick()"
      >
        <!-- <template #shake-num>
          <view class="shake-num">抽奖可用次数{{ shakeNum }}</view>
        </template> -->
      </nut-bingo-luckshake>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, toRefs, watch, computed, onMounted, watchEffect, reactive } from 'vue';
import { createComponent } from '../../utils/create';
import { Toast } from "@nutui/nutui";
const { createDemo } = createComponent('luckshake');
export default createDemo({
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
});
</script>

<style lang="scss" scoped>
.demo {
  .demo1 {
    position: relative;
    width: 100%;
    height: 140vw;
  }
}

</style>
