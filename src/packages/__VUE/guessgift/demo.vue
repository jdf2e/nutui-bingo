<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div class="show-demo">
      <nut-bingo-guess-gift
        ref="guessgiftDom"
        :prize-index="prizeIndex"
        :turn-number="turnNum"
        @start-turns="startTurns"
        @end-turns="endTurns"
      >
      </nut-bingo-guess-gift>
      <nut-button type="primary" @click="gameStart">开始</nut-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Dialog } from "@nutui/nutui";
import { ref } from 'vue';
import { createComponent } from '../../utils/create';
import { reactive } from '@vue/reactivity';
const { createDemo } = createComponent('guess-gift');
export default createDemo({
  props: {},
  setup() {
    const guessgiftDom:any = ref(null);

    // 中奖的奖品的index(此数据可根据后台返回的值重新赋值)
    const prizeIndex = ref(3); 
    const gameStart = () => {
      guessgiftDom.value.start();
    }
    const startTurns = () => {
      console.log('开始抽奖');
    }

    const endTurns = () => {
      Dialog({
        title: '中奖提示',
        content: '您已完成抽奖，是否继续？',
        onCancel: () => {},
        onOk: () => {
          setTimeout(() => {
            guessgiftDom.value.init();
          }, 300);
        }
      });
    }
    const turnNum = ref(20);
    return {
      guessgiftDom,
      turnNum,
      prizeIndex,
      gameStart,
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
  height: 100%;
  background: #000;
  h2 {
    padding: 0 20px;
    color: white;
  }
}
.show-demo {
  margin-top: 50px;
  .nut-button {
    display: block;
    width: 100px;
    margin: 30px auto;
  }
}
</style>
