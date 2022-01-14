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
import { computed } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('giftbox');

export default create({
  props: {
    openActive: {
      type: Boolean,
      default: false
    },
    canGift: {
      type: Boolean,
      default: true
    }
  },
  emits: ['click'],

  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        "gift-box": true
      };
    });

    const handleClick = (event: Event) => {
      console.log(123);
    };

    return {
      classes,
      handleClick
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
