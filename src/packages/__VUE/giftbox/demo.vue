<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nutbig-giftbox
      ref="refChild"
      @start-turns="startTurns"
      @end-turns="endTurns"
    >
    </nutbig-giftbox>
    <nut-button type="primary" @click="initBox">再来一次</nut-button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('giftbox');
export default createDemo({
  props: {},
  setup() {
    const refChild = ref();
    const initBox = () => {
      refChild.value.init();
    }
    const startTurns = () => {
      console.log('开始');
    }
    const endTurns = () => {
      console.log('结束');
    }
    return {
      refChild,
      initBox,
      startTurns,
      endTurns
    };
  }
});
</script>

<style lang="scss" scoped>
.nut-button {
  display: block;
  margin: 20px auto;
}
</style>
