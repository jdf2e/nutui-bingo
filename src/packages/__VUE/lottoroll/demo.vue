<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div class="show-demo">
      <nut-bingo-lotto-roll
        ref="lottoRollDom"
        :prize-list="prizeList"
        :prize-index="prizeIndex"
        @start-turns="startTurns"
        @end-turns="endTurns"
      >
      </nut-bingo-lotto-roll>
      <!-- <div class="btnBtn">
        <nut-button type="danger" @click="startRole" :disabled="startFlag">抽奖</nut-button>
        <nut-button type="danger" @click="startRole2" :disabled="startFlag">不中奖</nut-button>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '../../utils/create';
import { reactive } from '@vue/reactivity';
const { createDemo } = createComponent('lotto-roll');
export default createDemo({
  props: {},
  setup() {
    const lottoRollDom:any = ref(null);
    const prizeList = reactive([
      "https://img11.360buyimg.com/imagetools/jfs/t1/147182/12/2440/6194/5f06cde6Ead240fe8/31082e30a182a5ce.png",
      "https://img11.360buyimg.com/imagetools/jfs/t1/128607/26/6643/6790/5f06cd27E9b5e15f7/7509bc7ce2da66b8.png",
      "https://img11.360buyimg.com/imagetools/jfs/t1/105385/19/15140/111093/5e6f1506E48bd0dfb/829a98a8cdb4c27f.png",
      "https://img14.360buyimg.com/imagetools/jfs/t1/90507/38/15165/448364/5e6f15b4E5df0c718/4bd4c3d375eec312.png",
      "https://img14.360buyimg.com/imagetools/jfs/t1/104165/34/15186/96522/5e6f1435E46bc0cb0/d4e878a15bfd9362.png"
    ]);

    // 中奖的奖品的index(此数据可根据后台返回的值重新赋值)
    const prizeIndex = ref(-1); 
    const startTurns = () => {
      console.log('开始抽奖');
      const index = Math.floor(Math.random() * prizeList.length);
      prizeIndex.value = index;
    }

    const endTurns = () => {
      console.log('抽奖结束');
    }
   
    return {
      lottoRollDom,
      prizeList,
      prizeIndex,
      startTurns,
      endTurns
    };
  }
});
</script>

<style></style>
<style lang="scss" scoped>
#app .demo {
  padding: 57px 0 0 0;
}
.show-demo {
  background: #ffffff;
  padding: 0 20px;
}
h2 {
  padding: 0 20px;
}
.btnBtn {
  margin: 20px 0;
  text-align: center;
  .nut-button {
    margin-right: 20px;
  }
}
.disabledClick {
  pointer-events: none !important;
  cursor: not-allowed !important;
  opacity: 0.6 !important;
}
</style>
