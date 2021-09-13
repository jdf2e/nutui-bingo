<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-bingo-luckgiftbox
    :openActive="open" @showPrize="showPrize" :canGift="this.isLocking"
    >
    </nut-bingo-luckgiftbox>
    <nut-button type="primary" @click="openBox">开礼盒</nut-button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('luckgiftbox');
export default createDemo({
  props: {},
  setup() {
    const open = ref(false);
    const openBox = () => {
      open.value = true;
    }
    return {
      open,
      openBox,
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
