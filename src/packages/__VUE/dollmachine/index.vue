<template>
  <div class="nutbig-doll-machine">
    <div class="machine-box" ref="machineBoxDom">
      <div class="machine-tools" ref="machineToolsDom" :style="toolsStyle">
        <div class="machine-rope" id="machine-rope" ref="machineRopeDom"></div>
        <div class="machine-claw" ref="machineClawDom" :style="clawStyle">
          <img
            v-if="giftPrize"
            :src="giftPrize"
            alt="加载失败"
            class="gift-prize"
          />
        </div>
      </div>
      <div class="machine-gift-box">
        <div class="box-glass">
          <img
            v-for="(item, index) of prizeList"
            :src="item.imagePath"
            :key="index"
            class="gift-img"
            :ref="setGiftEle"
          />
        </div>
        <div class="machine-operate" ref="machineOperateDom">
          <div
            :class="['machine-direction', machineLock ? 'disabledClick' : '']"
          >
            <!-- <span
              class="direction-block direction-block-top"
              @click="moveTools('top')"
            ></span> -->
            <span
              class="direction-block direction-block-left"
              @click="moveTools('left')"
            ></span>
            <span
              class="direction-block direction-block-right"
              @click="moveTools('right')"
            ></span>
            <!-- <span
              class="direction-block direction-block-bottom"
              @click="moveTools('bottom')"
            ></span> -->
          </div>
          <div
            :class="[
              'machine-btn',
              machineLock ? 'machine-disabled disabledClick' : 'machine-start',
            ]"
            @click="startGame"
          ></div>
          <div
            :class="['machine-reset-btn', initLock ? 'disabledClick' : '']"
            @click="init"
          >
            重置
          </div>
        </div>
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
    prizeIndex: {
      type: Number,
      default: -1,
    },
  },
  emits: ["click", "start-turns", "end-turns"],
  setup(props: any, { emit }) {
    const giftPrize = ref();
    const machineBoxDom = ref();
    const machineToolsDom = ref();
    const toolsStyle = reactive({
      left: "50%",
      marginLeft: "0",
    });

    const leftCenter = () => {
      toolsStyle.left = "50%";
      const toolDomW = machineToolsDom.value.offsetWidth;
      toolsStyle.marginLeft = "-" + toolDomW / 2 + "px";
    };
    const leftRightMove = (flag: string) => {
      const toolDomLeft = machineToolsDom.value.offsetLeft;
      const boxDomW = machineBoxDom.value.offsetWidth;
      const toolDomW = machineToolsDom.value.offsetWidth;
      const max = boxDomW - toolDomW;
      if (
        (flag == "left" && toolDomLeft == 0) ||
        (flag == "right" && toolDomLeft == max)
      ) {
        return false;
      }

      const distance = flag == "left" ? -30 : 30;
      const left: number = toolDomLeft + distance;

      if (flag == "left") {
        toolsStyle.left = (left < 0 ? 0 : left) + "px";
      } else {
        toolsStyle.left = (left > max ? max : left) + "px";
      }
    };

    // const topBottomMove = (flag: string) => {
    //   if (flag == "top") {
    //   } else {
    //   }
    // };

    const moveTools = (flag: string) => {
      // toolsStyle.transform = "none";
      toolsStyle.marginLeft = "0";
      if (flag == "left" || flag == "right") {
        leftRightMove(flag);
      } else {
        // topBottomMove(flag);
      }
    };

    const clawStyle = ref({
      "background-image": `url(${props.defaultClaw})`,
      "background-size": "100% 100%",
      "background-position": "center",
      "background-repeat": "no-repeat",
    });

    const machineRopeDom = ref();
    const machineClawDom = ref();
    const machineOperateDom = ref();
    const machineLock = ref(false);
    const initLock = ref(false);

    const startGame = () => {
      emit("start-turns");
      giftPrize.value = "";
      machineLock.value = true;
      initLock.value = true;
      clawStyle.value["background-image"] = `url(${props.activeClaw})`;
      const heightBox = machineBoxDom.value.offsetHeight;
      const heightTools = machineToolsDom.value.offsetHeight;
      const heightOpe = machineOperateDom.value.offsetHeight;
      machineRopeDom.value.style.height = `${
        heightBox - heightOpe - heightTools - 20
      }px`;
    };
    const initGame = () => {
      machineRopeDom.value.style.height = "20px";
    };
    const removeListen = () => {
      const rope: HTMLElement = document.getElementById(
        "machine-rope"
      ) as HTMLElement;
      rope.removeEventListener("webkitTransitionEnd", function () {});
    };
    const ropeHeightEnd = () => {
      const machineRope: HTMLElement = document.getElementById(
        "machine-rope"
      ) as HTMLElement;
      machineRope.addEventListener("webkitTransitionEnd", function (e) {
        initLock.value = false;
        if (machineRopeDom.value.offsetHeight == 20) {
          machineLock.value = false;
          emit("end-turns");
        }
        removeListen();
        clawStyle.value["background-image"] = `url(${props.defaultClaw})`;
        giftPrize.value = props.prizeList[props.prizeIndex]["imagePath"];
        setTimeout(() => {
          initGame();
        }, 200);
      });
    };
    const giftEle: any = reactive([]);
    const setGiftEle = (ele: Element) => {
      giftEle.push(ele);
    };
    const giftPosition = () => {
      giftEle.forEach((element: any, index: number) => {
        const left = Math.floor(Math.random() * 325);
        const top = Math.floor(Math.random() * (150 - 70) + 70);
        const angle = Math.floor(Math.random() * 90);
        //   left: left + "px",
        //   top: top + "px",
        //   transform: "rotate(" + angle + "deg)",
        //   "-moz-transform": "rotate(" + angle + "deg)",
        //   "-webkit-transform": "rotate(" + angle + "deg)",
        //   "-o-transform": "rotate(" + angle + "deg)",
        element.style.left = left + "px";
        element.style.top = top + "px";
        element.style.transform = "rotate(" + angle + "deg)";
      });
    };
    const init = () => {
      giftPrize.value = "";
      leftCenter();
      initGame();
    };

    onMounted(() => {
      leftCenter();
      ropeHeightEnd();
      giftPosition();
    });

    watch(
      () => initLock.value,
      (newval, oldval) => {
        // ropeHeightEnd();
      }
    );
    return {
      clawStyle,
      setGiftEle,
      giftPrize,
      machineBoxDom,
      machineOperateDom,
      machineToolsDom,
      machineRopeDom,
      machineClawDom,
      toolsStyle,
      moveTools,
      machineLock,
      initLock,
      startGame,
      init,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
