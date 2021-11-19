<template>
  <div class="nut-bingo-doll-machine">
    123
  </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted, onUnmounted, nextTick, watch, computed } from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('doll-machine');

export default create({
  props: {
    prizeList: {
      type: Array,
      default: () => []
    },
    turnsTime: {
      type: Number,
      default: 0
    },
    turnsNumber: {
      type: Number,
      default: 0
    },
    prizeIndex: {
      type: Number,
      default: -1
    },
  },
  emits: ["click", "start-turns", "end-turns"],
  setup(props, { emit }) {
    
    
    return {}
  }

});
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>

