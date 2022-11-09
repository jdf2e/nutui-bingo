<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nutbig-scratch-card content="1000万"></nutbig-scratch-card>
    <h2>内容异步</h2>
    <nutbig-scratch-card :content="text"></nutbig-scratch-card>
    <h2>刮开层和背景层都支持自定义颜色，奖品信息支持HTML</h2>
    <nutbig-scratch-card
      coverColor="#F9CC9D"
      backgroundColor="#C3D08B"
      content="<em>1000<em><strong>元</strong>"
    ></nutbig-scratch-card>
    <h2>刮开层支持图片</h2>
    <nutbig-scratch-card
      content="1000万"
      :coverImg="coverImage"
    ></nutbig-scratch-card>
    <h2>事件回调</h2>
    <nutbig-scratch-card
      content="1000万"
      @open="opencard"
    ></nutbig-scratch-card>
    <h2>设置刮开比列</h2>
    <nutbig-scratch-card
      content="1000万"
      @open="opencard"
      ratio="0.2"
    ></nutbig-scratch-card>
    <p></p>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { createComponent } from "../../utils/create";
const { createDemo } = createComponent("scratch-card");
export default createDemo({
  props: {},
  setup() {
    const opencard = () => {
      console.log("刮开事件完成");
    };
    return { opencard };
  },
});
</script>

<style lang="scss" scoped>
.demo {
}
</style>
