<template>
  <div class="demo">
    <nutbig-shakedice ref="dice" :id="id"></nutbig-shakedice>
    <div @click="jump" class="demoBtn">摇动</div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { createComponent } from "../../utils/create";
const { createDemo } = createComponent("shakedice");
export default createDemo({
  props: {},
  setup() {
    const dice = ref();
    const id = ref()
    const jump = () => {
      id.value = 5
      dice.value.shake();
    };
    return {
      jump,
      dice,
      id
    };
  },
});
</script>

<style lang="scss" scoped>
.demo {
  text-align: center;
  background: url("//img12.360buyimg.com/imagetools/jfs/t1/95587/33/21814/218186/61e0015aE05e5fa32/e367632953cc3633.png")
    no-repeat bottom !important;
  ::v-deep(.nutbig-shakedice) {
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
