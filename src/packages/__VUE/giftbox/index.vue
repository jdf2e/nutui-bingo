<template>
  <view class="giftbox-wraper">
    <view :class="classes" @click="handleClick">
      <view id="giftAnimate" class="gBox gift-box-1" :class="{'gift-box-1-open': openActive}"></view>
      <view class="gBox gift-box-2"></view>
      <view class="gBox gift-box-3" :class="{'gift-box-3-open': openActive}"></view>
    </view>
  </view>
</template>
<script lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('luckgiftbox');

export default create({
  props: {
    initPrize: {
      type: Boolean,
      default: true
    }
  },
  emits: ['start-turns', 'end-turns'],

  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        "gift-box": true
      };
    });

    const openActive = ref(false);

    const handleClick = (event: Event) => {
      if (openActive.value) {
        return false
      }
      emit('start-turns');
      openActive.value = true;
      gift();
    };

    const init = () => {
      openActive.value = false;
    }

    const gift = () => {
      let transitionFlag = true;
      let gift: HTMLElement = document.getElementById('giftAnimate') as HTMLElement;
      gift.addEventListener("webkitTransitionEnd", function(e){
        if(e.target === e.currentTarget && transitionFlag) {
          transitionFlag = false;
          emit('end-turns');
          removeListen();
        }
      });
    }
    
    const removeListen = () => {
      let gift: HTMLElement = document.getElementById('giftAnimate') as HTMLElement;
      gift.removeEventListener("webkitTransitionEnd", function(){});
    }

    return {
      classes,
      init,
      openActive,
      handleClick
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
