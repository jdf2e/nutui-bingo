<template>
  <div class="nutbig-doll-machine">
    <div class="machineBox" ref="machineBox">
      <div class="machineTop">
        <!-- 绳子 -->
        <div class="rope" ref="rope"></div>
        <!--爪子-->
        <div ref="clawBox" :class="['clawBox']">
          <div class="succ" v-if="catchFlag">
            <img :src="winImage" class="prizeBg" />
            <div v-if="$slots.activeClaw" class="clawRender">
              <slot name="activeClaw"></slot>
            </div>
            <img v-else :src="activeClaw" class="succBg" />
          </div>
          <template v-else>
            <div v-if="$slots.defaultClaw" class="clawRender">
              <slot name="defaultClaw"></slot>
            </div>
            <img v-else :src="defaultClaw" class="fail" />
          </template>
          <!-- <div class="succ" v-if="catchFlag">
              <img :src="winImage" />
            </div>
            <img v-else :src="defaultClaw" class="fail" /> -->
        </div>
      </div>
      <div class="activeArea" ref="activeArea">
        <!--奖品-->
        <div id="giftBox" ref="giftBox">
          <div id="gift1" ref="gift1">
            <img
              v-for="(item, index) of prizeList"
              :key="'machine' + index"
              :ref="setGiftimg"
              :src="item.imagePath"
            />
          </div>
          <div id="gift2" ref="gift2">
            <img
              v-for="(item, index) of prizeList"
              :key="'machine' + index"
              :ref="setGiftimg"
              :src="item.imagePath"
            />
          </div>
        </div>
      </div>
      <div class="game_operate">
        <!--点击前-->
        <div class="game_btn game_star" @click="start" v-if="lock"></div>
        <!--点击后-->
        <div class="game_btn game_end" v-if="!lock"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast } from "@nutui/nutui";
import {
  reactive,
  toRefs,
  ref,
  onMounted,
  onUnmounted,
  nextTick,
  watch,
  computed,
  getCurrentInstance,
} from "vue";
import { createComponent } from "../../utils/create";
const { create } = createComponent("doll-machine");

export default create({
  props: {
    defaultClaw: {
      type: String,
      default:
        "https://img14.360buyimg.com/imagetools/jfs/t1/146467/34/22553/4178/61b088afE198f676e/21952e7018d1d141.png",
    },
    activeClaw: {
      type: String,
      default:
        "https://img13.360buyimg.com/imagetools/jfs/t1/218082/28/7092/15914/61b088afEf9c253f7/8392e2b14bd8f43a.png",
    },
    speed: {
      type: Number,
      default: 20,
    },
    prizeList: {
      type: Array,
      default: () => [],
    },
    turnsTime: {
      type: Number,
      default: 0,
    },
    prizeIndex: {
      type: Number,
      default: -1,
    },
  },
  emits: ["click", "start-turns", "end-turns"],
  setup(props, { emit }) {
    const prize = ref(props.prizeIndex);
    watch(
      () => props.prizeIndex,
      (val, prevVal) => {
        prize.value = val;
      }
    );

    const machineBox: any = ref(null);
    const clawBox: any = ref(null);
    const activeArea: any = ref(null);
    var lock = ref(true); //是否已经点击
    // 爪子的位置
    let claw = ref(0);
    // 爪子可以伸到的最大长度，需要减掉下方娃娃的高度,即活动区域的高度
    const maxLong = ref(0);

    // 定时器
    let speed = props.speed;
    const timer: any = ref(null);
    onMounted(() => {
      console.log(props.prizeList);

      claw.value = clawBox.value.offsetLeft + 55;
      // 获取整个可视区域的高度
      let screenHeight = document.documentElement.clientHeight;
      machineBox.value.style.height = screenHeight - 120 + "px";
      maxLong.value = screenHeight - 300;
      // activeArea.value.style.height = maxLong.value + "px";
      if (props.prizeList.length < 4) {
        (Toast as any).text(`本版本目前只支持最少4个奖品`);
      } else {
        timer.value = setInterval(marqueeRun, speed);
      }
    });

    const circle = ref(0);
    const giftBox: any = ref(null);
    const gift1: any = ref(null);
    const gift2: any = ref(null);
    const marqueeRun = () => {
      if (!(giftBox && giftBox.value)) {
        return;
      }
      circle.value++;
      let box_width = giftBox.value.scrollLeft;
      // let giftW1 = gift1.value.offsetWidth;
      let giftW2 = gift2.value.offsetWidth;
      // 保证奖品列表的宽度 大于 当前视图的宽度
      // 待解决问题：动态计算宽度，宽度不足情况下自动添加元素
      if (giftW2 - box_width <= 0) {
        circle.value = 0;
        giftBox.value.scrollLeft = circle.value;
      } else {
        giftBox.value.scrollLeft = circle.value;
      }
    };

    // 绳子
    const rope: any = ref(null);
    const start = () => {
      // if (timer) {
      //   clearInterval(timer.value);
      //   timer.value = null;
      // }
      emit("start-turns");
      lock.value = false;
      // timer.value = setInterval(marqueeRun, speed);
      rope.value.animate({ height: maxLong.value - 60 + "px" }, 2000);
      clawBox.value.animate({ top: maxLong.value - 20 + "px" }, 2000);
      setTimeout(() => {
        rope.value.style.height = maxLong.value - 60 + "px";
        clawBox.value.style.top = maxLong.value - 20 + "px";
        giftCalculation();
      }, 1850);
    };

    //抓住了
    const catchFlag = ref<boolean>(false);
    const winImage = ref("");
    const catchGift = (img: string) => {
      catchFlag.value = true;
      winImage.value = img;
    };

    // 所有的奖品
    const giftimg: any = ref([]);
    const setGiftimg = (ele: Element) => {
      giftimg.value.push(ele);
    };
    const giftCalculation = () => {
      if (prize.value == -1) {
        gameover();
        return false;
      }
      for (var i = 0; i < giftimg.value.length; i++) {
        let item = giftimg.value[i];
        let long = item.offsetLeft + 100;
        if (long - 100 <= claw.value && claw.value <= long + 100) {
          if (prize.value > -1) {
            let img = props.prizeList[prize.value].imagePath;
            setTimeout(() => {
              catchGift(img);
              gameover();
            }, 0);
            return;
          }
        }
      }
      // giftimg.value.forEach((item: any, index: number) => {
      //   let long = item.offsetLeft + 100;
      //   console.log(item.offsetLeft);
      //   if (long - 20 <= claw.value && claw.value <= long + 20) {
      //     let img = item.src;
      //     setTimeout(() => {
      //       catchGift(img);
      //     }, 0);
      //     return;
      //   }
      // });
      // gameover();
    };

    // 游戏结束
    const gameover = () => {
      rope.value.animate({ height: "20px" }, 2000);
      clawBox.value.animate({ top: "70px" }, 2000);
      emit("end-turns");
      setTimeout(() => {
        rope.value.style.height = "20px";
        clawBox.value.style.top = "70px";
        if (timer) {
          clearInterval(timer.value);
          timer.value = null;
        }
        // catchFlag.value = false;
        // lock.value = true;
      }, 2000);
    };

    const init = () => {
      catchFlag.value = false;
      lock.value = true;
      timer.value = setInterval(marqueeRun, speed);
    };

    return {
      machineBox,
      clawBox,
      activeArea,
      giftBox,
      gift1,
      gift2,
      rope,
      catchFlag,
      winImage,
      lock,
      start,
      setGiftimg,
      init,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
