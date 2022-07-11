<template>
  <div class="demo">
    <nutbig-giftrain ref="rain" width="375px" height="580px" @gameOver="gameOver" @start="start" @click="click">
    </nutbig-giftrain>
     <div v-if="!isStart" class="start" @click="onStart">开始</div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {},
  setup() {
    const rain = ref();
    const isStart = ref(false)
    const gameOver = () => {
      isStart.value = false
    };
    const start=()=>{
      isStart.value = true
    }
    const click=()=>{
      console.log('点击');
    }
    const onStart = ()=>{
      rain.value.startRain()
    }
    return { gameOver ,isStart,start,click,onStart,rain};
  },
};
</script>

<style lang="scss">

.nutbig-giftrain {
  .nutbig-giftrain-content {
    background: url("//img13.360buyimg.com/imagetools/jfs/t1/156139/35/24533/600373/61974f3eEf612507c/88df16bece0b202f.png")
      no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
}
  .start{
    width: 100px;
    height: 30px;
    background: linear-gradient(135deg, rgba(114,60,255,1) 0%,rgba(111,58,255,1) 63.49938195167575%,rgba(150,110,255,1) 87.35307751528254%,rgba(149,117,241,1) 100%); border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255,255,255,1);
    position: absolute;
    bottom: 0;
    left: 40%;
  }
</style>
