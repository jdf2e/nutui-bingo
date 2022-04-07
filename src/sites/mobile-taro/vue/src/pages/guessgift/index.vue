<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div class="show-demo">
      <nutbig-guess-gift
        ref="guessgiftDom"
        :prize-index="prizeIndex"
        :turn-number="turnNum"
        @start-turns="startTurns"
        @end-turns="endTurns"
      >
      </nutbig-guess-gift>
      <nut-button type="primary" @click="gameStart">开始</nut-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Button } from "@nutui/nutui";
import { Ref, ref } from "vue";
export default {
  props: {},
  comments: {
    NutButton: Button,
  },
  setup() {
    const guessgiftDom: Ref = ref(null);

    // 中奖的奖品的index(此数据可根据后台返回的值重新赋值)
    const prizeIndex = ref(2);
    const gameStart = () => {
      guessgiftDom.value.start();
    };
    const startTurns = () => {
      console.log("开始抽奖");
    };

    const endTurns = () => {
      console.log("抽奖结束");
    };
    const turnNum = ref(5);
    return {
      guessgiftDom,
      turnNum,
      prizeIndex,
      gameStart,
      startTurns,
      endTurns,
    };
  },
};
</script>

<style lang="scss">
page view.h5-div.demo {
  // padding: 57px 0 0 0;
  // height: 100%;
  background: #000;
  h2 {
    padding: 0 20px;
    color: white;
  }
}
.show-demo {
  margin-top: 50px;
  padding: 10px;
  .nut-button {
    display: block;
    width: 100px;
    margin: 30px auto 0;
  }
}
</style>
