<template>
  <div class="demo">
    <h2>基础用法</h2>
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
    <nutbig-scratch-card content="1000万" ratio="0.2"></nutbig-scratch-card>
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
    const text = ref("");
    const coverImage = ref(
      "https://img14.360buyimg.com/imagetools/jfs/t1/140506/27/29839/718209/6325a027E7fef5e2c/ef47045e8c4faaa9.png"
    );
    const opencard = () => {
      console.log("刮开事件完成");
    };
    onMounted(() => {
      setTimeout(() => {
        text.value = "测试";
      }, 2000);
    });
    return { opencard, text, coverImage };
  },
});
</script>

<style lang="scss" scoped>
.demo {
}
</style>
