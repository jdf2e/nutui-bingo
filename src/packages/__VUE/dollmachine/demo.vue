<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div class="show-demo">
      <nutbig-doll-machine
        :prizeList="prizeList"
        :prizeIndex="1"
        @start-turns="startTurns"
        @end-turns="endTurns"
      >
      </nutbig-doll-machine>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { createComponent } from "../../utils/create";
import { reactive } from "@vue/reactivity";
import { Dialog } from "@nutui/nutui";
const { createDemo } = createComponent("doll-machine");
export default createDemo({
  props: {},
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
          "https://img12.360buyimg.com/imagetools/jfs/t1/221361/4/7410/16458/61c9261eE45802396/27b64caa9e7c9bac.png",
        text: "JOY",
      },
      {
        imagePath:
          "https://img11.360buyimg.com/imagetools/jfs/t1/128607/26/6643/6790/5f06cd27E9b5e15f7/7509bc7ce2da66b8.png",
        text: "VIP",
      },
      {
        imagePath:
          "https://img12.360buyimg.com/imagetools/jfs/t1/221361/4/7410/16458/61c9261eE45802396/27b64caa9e7c9bac.png",
        text: "JOY",
      },
    ]);

    // 中奖的奖品的index(此数据可根据后台返回的值重新赋值)
    const prizeIndex = ref(3);
    const startTurns = () => {
      console.log("开始抽奖");
    };

    const endTurns = () => {
      console.log("抽奖结束");
    };

    return {
      lottoRollDom,
      prizeList,
      prizeIndex,
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
}
h2 {
  padding: 0 20px;
}
</style>
