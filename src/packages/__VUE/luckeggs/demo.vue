<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-bingo-luckeggs :num="9" @click="hit"></nut-bingo-luckeggs>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { createComponent } from "../../utils/create";
const { createDemo } = createComponent("luckeggs");
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
