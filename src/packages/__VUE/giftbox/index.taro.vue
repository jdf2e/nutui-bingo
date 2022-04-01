<template>
  <view class="giftbox-wraper">
    <view :class="classes" @click="handleClick">
      <view
        id="giftAnimate"
        class="gBox gift-box-1"
        :class="{ 'gift-box-1-open': openActive }"
      ></view>
      <view class="gBox gift-box-2"></view>
      <view
        class="gBox gift-box-3"
        :class="{ 'gift-box-3-open': openActive }"
      ></view>
    </view>
  </view>
</template>
<script lang="ts">
import { onMounted, ref, computed } from "vue";
import { createComponent } from "../../utils/create";
const { componentName, create } = createComponent("giftbox");
import Taro, {
  eventCenter,
  getCurrentInstance as getCurrentInstanceTaro,
} from "@tarojs/taro";

export default create({
  props: {
    initPrize: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["start-turns", "end-turns"],

  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        "gift-box": true,
      };
    });

    const removeListen = () => {
      const gift: HTMLElement = document.getElementById(
        "giftAnimate"
      ) as HTMLElement;
      gift.removeEventListener("webkitTransitionEnd", function () {});
    };

    const gift = () => {
      let transitionFlag = true;
      const gift: HTMLElement = document.getElementById(
        "giftAnimate"
      ) as HTMLElement;
      gift.addEventListener("webkitTransitionEnd", function (e) {
        if (e.target === e.currentTarget && transitionFlag) {
          transitionFlag = false;
          emit("end-turns");
          removeListen();
        }
      });
    };

    const openActive = ref(false);

    const handleClick = () => {
      if (openActive.value) {
        return false;
      }
      emit("start-turns");
      openActive.value = true;
      gift();
    };

    const init = () => {
      openActive.value = false;
    };

    onMounted(() => {
      eventCenter.once((getCurrentInstanceTaro() as any).router.onReady, () => {
        gift();
      });
    });

    return {
      classes,
      init,
      openActive,
      handleClick,
    };
  },
});
</script>

<style lang="scss">
@import "index.scss";
</style>
