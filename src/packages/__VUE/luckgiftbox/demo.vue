<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-bingo-luckgiftbox
    
    >
    </nut-bingo-luckgiftbox>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('luckgiftbox');
export default createDemo({
  props: {},
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.nut-temp {
}
</style>
