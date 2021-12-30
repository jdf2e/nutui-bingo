<template>
  <view :class="classes">
    <view class="bowl-item"
      v-for="(item, idx) of [1 ,2, 3]"
      :key="'bowl' + item"
      :ref="setBowlEle"
      @click="raise(idx)"
    >
    </view>
    <view class="gold-bean"></view>
  </view>
</template>
<script lang="ts">
import { computed, onMounted, reactive, ref, watch, watchEffect } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('guess-gift');

export default create({
  props: {
    initPrize: {
      type: Boolean,
      default: true
    },
    turnNumber: {
      type: Number,
      default: 20
    },
    turnsFrequency: {
      type: Number,
      default: 500
    },
    raiseHeight: {
      type: Number,
      default: 50
    }
  },
  emits: ['start-turns', 'end-turns'],

  setup(props, { emit }) {
    const num = ref(0);
    const lock = ref(true);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        "guess-gift": true,
        "disabledClick": lock.value
      };
    });

    const start = () => {
      bowlEle[1].style.top = `-${props.raiseHeight}px`;
      setTimeout(() => {
        bowlEle[1].style.top = 0;
      }, 800);
      setTimeout(() => {
        init();
      }, 1300);
    };

    // 打乱数组顺序
    const shuffle = (ary: Array<any>) => {
      let array = JSON.parse(JSON.stringify(ary));
       for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const timer = ref<any>(null);
    const init = () => {
      clearTimeout(timer);//初始化timeout定时器，防止定时器重叠
      timer.value = setTimeout(function(){
        changePosition();//循环调用函数自身，以达到循环的效果
        if (num.value < props.turnNumber) {
          init();
          num.value++;
        }else {
          clearTimeout(timer);
          num.value = 0;
          lock.value = false;
        }
      }, props.turnsFrequency);
    }

    const changePosition = () => {
      let orginBowl = bowlLocation;
      let orginBowl_copy = shuffle(bowlLocation);
      // 通过对比原始值和打乱顺序后的值，判断哪些元素应该移动
      bowlEle.forEach((element: any, index: number) => {
        let origin_dom = orginBowl[index]['x'];
        let new_dom = orginBowl_copy[index]['x'];
        element.style.left = (origin_dom - new_dom) * (-1) + "px";
      });
    }

    // 存放碗的dom元素
    const bowlEle: any = reactive([]);
    const setBowlEle = (ele: Element) => {
      bowlEle.push(ele);
    };

    // 获取每个碗的位置定位信息
    const bowlLocation: any = reactive([]);
    onMounted(() => {
      bowlEle.forEach((element: Element) => {
        bowlLocation.push(element.getBoundingClientRect());
      });
    })

    const raise = (index: number) => {
      bowlEle[index].style.top = `-${props.raiseHeight}px`;
    }

    return {
      classes,
      init,
      setBowlEle,
      raise,
      start
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
