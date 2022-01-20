<template>
  <div :class="classes" :style="animationStyle">
    <div
      :class="['page', 'page' + (index + 1)]"
      v-for="(item, index) in new Array(dice)"
      :key="index"
    >
      <span v-for="(item, index) in new Array(index + 1)" :key="index"></span>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, ref, watch } from "vue";
import { createComponent } from "../../utils/create";
const { componentName, create } = createComponent("shakedice");
interface props {
  time: string; // 旋转时间
  speed: number; // 旋转速度 几秒一圈
  id: number | string; // 中奖的id
}
export default create({
  props: {
    time: {
      type: Number,
      default: 1,
    },
    speed: {
      type: Number,
      default: 3000,
    },
    id: {
      type: Number,
      default: 4,
    },
  },
  emits: ["end"],
  setup(props: props, { emit }) {
    const dice = ref<number>(6);
    const clickTag = ref<boolean>(false);
    let animationStyle = ref({});
    const isShake = ref(false);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
      };
    });
    watch(
      () => isShake.value,
      (value) => {
        if (value) {
          const params = {
            animation: `rotate ${props.time}s infinite linear`,
          };
          animationStyle.value = { ...animationStyle.value, ...params };
          setTimeout(() => {
            isShake.value = false;
            animationStyle.value = { animation: "none" };
            let posible:any = [
              { value: 1, x: 0, y: 0 },
              { value: 1, x: 0, y: 0 },
              { value: 2, x: 90, y: 0 },
              { value: 3, x: 0, y: -90 },
              { value: 4, x: 0, y: 90 },
              { value: 5, x: -90, y: 0 },
              { value: 6, x: 0, y: 180 },
            ];
            let _result = posible[props.id];
            setTimeout(() => {
              let odice: HTMLElement | null = document.querySelector(
                ".nutbig-shakedice"
              );
              if (odice) {
                odice.style.transform = `rotateX(${_result.x}deg) rotateY(${_result.y}deg)`;
              }
            }, 0);
            emit("end");
          }, props.speed);
        } else {
          animationStyle.value = {};
        }
      }
    );
    const shake = () => {
      if (clickTag.value) return false;
      clickTag.value = true;
      isShake.value = true;
      setTimeout(() => {
        clickTag.value = false;
      }, props.speed);
      
    };
    return {
      classes,
      dice,
      animationStyle,
      shake,
    };
  },
});
</script>

<style lang="scss">
@import "index.scss";
</style>
