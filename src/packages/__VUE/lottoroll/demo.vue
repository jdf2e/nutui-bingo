<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div class="show-demo">
      <nutbig-lotto-roll
        ref="lottoRollDom"
        :prize-list="prizeList"
        :prize-index="prizeIndex"
        @start-turns="startTurns"
        @end-turns="endTurns"
      >
      </nutbig-lotto-roll>
      <div class="btnBtn">
        <button @click="startRole" :disabled="startFlag">中奖（测试）</button>
        <button @click="startRole2" :disabled="startFlag">
          不中奖（测试）
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Button } from "@nutui/nutui";
import { ref } from "vue";
import { createComponent } from "../../utils/create";
import { reactive } from "@vue/reactivity";
const { createDemo } = createComponent("lotto-roll");
export default createDemo({
  props: {},
  comments: {
    NutButton: Button,
  },
  setup() {
    const lottoRollDom: any = ref(null);
    const prizeList = reactive([
      {
        imagePath:
          "https://img11.360buyimg.com/imagetools/jfs/t1/147182/12/2440/6194/5f06cde6Ead240fe8/31082e30a182a5ce.png",
        text: "大鸡腿",
      },
      {
        imagePath:
          "https://img11.360buyimg.com/imagetools/jfs/t1/128607/26/6643/6790/5f06cd27E9b5e15f7/7509bc7ce2da66b8.png",
        text: "VIP",
      },
      {
        imagePath:
          "https://img11.360buyimg.com/imagetools/jfs/t1/105385/19/15140/111093/5e6f1506E48bd0dfb/829a98a8cdb4c27f.png",
        text: "Apple watch",
      },
      {
        imagePath:
          "https://img14.360buyimg.com/imagetools/jfs/t1/90507/38/15165/448364/5e6f15b4E5df0c718/4bd4c3d375eec312.png",
        text: "坚果礼盒",
      },
      {
        imagePath:
          "https://img14.360buyimg.com/imagetools/jfs/t1/104165/34/15186/96522/5e6f1435E46bc0cb0/d4e878a15bfd9362.png",
        text: "手机",
      },
    ]);

    // 中奖的奖品的index(此数据可根据后台返回的值重新赋值)
    const prizeIndex = ref(-1);
    const startFlag = ref(false);
    const startTurns = () => {
      startFlag.value = true;
      console.log("开始抽奖");
    };

    const endTurns = () => {
      startFlag.value = false;
      console.log("抽奖结束");
    };

    const startRole = () => {
      prizeIndex.value = Math.floor(Math.random() * 5);
      lottoRollDom.value.start();
    };
    const startRole2 = () => {
      prizeIndex.value = -1;
      lottoRollDom.value.start();
    };

    return {
      lottoRollDom,
      prizeList,
      prizeIndex,
      startFlag,
      startRole,
      startRole2,
      startTurns,
      endTurns,
    };
  },
});
</script>

<style></style>
<style lang="scss" scoped>
#app .demo {
  padding: 57px 0 0 0;
}
.show-demo {
  background: #ffffff;
  padding: 20px;
}
h2 {
  padding: 0 20px;
}
.btnBtn {
  text-align: center;
}
button {
  margin-top: 20px;
}
.disabledClick {
  pointer-events: none !important;
  cursor: not-allowed !important;
  opacity: 0.6 !important;
}
</style>
