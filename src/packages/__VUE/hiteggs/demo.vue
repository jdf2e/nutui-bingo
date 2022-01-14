<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nutbig-hiteggs :num="9" @click="hit"></nutbig-hiteggs>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { createComponent } from "../../utils/create";
const { createDemo } = createComponent("hiteggs");
export default createDemo({
  props: {},
  setup() {
    const hit = ()=>{
      console.log('中奖啦');
      
    }
  
   return {
     hit
    };
  },
});
</script>

<style lang="scss" scoped>
.nut-temp {
}
</style>
