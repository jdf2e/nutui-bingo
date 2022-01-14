<template>
  <div class="demo">
    <nut-bingo-luckdice ref="dice"></nut-bingo-luckdice>
    <div @click="jump" class="demoBtn">摇动</div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { createComponent } from "../../utils/create";
const { createDemo } = createComponent("luckdice");
export default createDemo({
  props: {},
  setup() {
    const dice = ref();
    const jump = () => {
      dice.value.shake();
    };
    return {
      jump,
      dice,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo {
  text-align: center;
  background: url("//img12.360buyimg.com/imagetools/jfs/t1/95587/33/21814/218186/61e0015aE05e5fa32/e367632953cc3633.png")
    no-repeat bottom !important;
  ::v-deep(.nut-bingo-luckdice) {
    margin: 70px auto;
  }
  .demoBtn {
    margin:200px auto 0;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background: linear-gradient(
      135deg,
      rgba(240, 22, 14, 1) 0%,
      rgba(240, 37, 15, .8) 69.83950099728881%,
      rgba(240, 78, 14, 1) 100%
    );
    border-radius: 20px;
    box-shadow: 0 4px 10px 0 rgba(240, 37, 15, 0.3);
  }
}
</style>
