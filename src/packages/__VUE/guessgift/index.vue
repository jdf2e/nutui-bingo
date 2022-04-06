<template>
  <div :class="classes" ref="bowlBox">
    <div
      class="bowl-item"
      v-for="(item, idx) of bowlList"
      :key="'bowl' + item"
      :ref="setBowlEle"
      @click="raise(idx)"
    ></div>
    <div ref="goldBeanDom" class="gold-bean" v-show="showBean"></div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { createComponent } from "../../utils/create";
const { componentName, create } = createComponent("guess-gift");

export default create({
  props: {
    initPrize: {
      type: Boolean,
      default: true,
    },
    turnNumber: {
      type: Number,
      default: 20,
    },
    turnsFrequency: {
      type: Number,
      default: 500,
    },
    raiseHeight: {
      type: Number,
      default: 50,
    },
    prizeIndex: {
      type: Number,
      default: -1,
    },
  },
  emits: ["start-turns", "end-turns"],

  setup(props, { emit }) {
    const bowlList = reactive([1, 2, 3]);
    const num = ref(0);
    const lock = ref(false);
    // 点击的哪一个碗，index索引
    const bowlRaiseIndex = ref(0);
    // 碗是否可点击
    const bowlLock = ref(true);
    // 豆子的展示与否
    const showBean = ref(false);
    // 3只碗
    let bowlEle: any = reactive([]);
    // 碗父级盒子
    const bowlBox: any = ref(null);

    watch(
      () => showBean.value,
      (n, o) => {
        bowlEle = [];
      }
    );

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        "guess-gift": true,
        disabledClick: bowlLock.value,
      };
    });

    // 打乱数组顺序
    const shuffle = (ary: Array<any>) => {
      const array = JSON.parse(JSON.stringify(ary));
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    // 存放碗的dom元素
    const setBowlEle = (ele: Element) => {
      bowlEle.push(ele);
    };

    // 获取每个碗的位置定位信息
    const bowlLocation: any = reactive([]);
    onMounted(() => {
      bowlEle.forEach((element: Element) => {
        bowlLocation.push(element.getBoundingClientRect());
      });
    });

    const goldBeanDom: any = ref(null);
    let orginBowlCopy: any = reactive([]);
    const changePosition = () => {
      const orginBowl = bowlLocation;
      orginBowlCopy = shuffle(bowlLocation);
      // 通过对比原始值和打乱顺序后的值，判断哪些元素应该移动
      bowlEle.forEach((element: any, index: number) => {
        const originDom = orginBowl[index]["x"];
        const newDom = orginBowlCopy[index]["x"];
        element.style.left = (originDom - newDom) * -1 + "px";
      });
    };

    const timer = ref<any>(null);
    const init = () => {
      showBean.value = false;
      clearTimeout(timer); //初始化timeout定时器，防止定时器重叠
      timer.value = setTimeout(function () {
        changePosition(); //循环调用函数自身，以达到循环的效果
        if (num.value < props.turnNumber) {
          init();
          num.value++;
        } else {
          clearTimeout(timer);
          num.value = 0;
          setTimeout(() => {
            lock.value = false;
            bowlLock.value = false;
          }, 500);
        }
      }, props.turnsFrequency);
    };

    const start = () => {
      const _index = bowlRaiseIndex.value;
      if (lock.value) {
        return false;
      } else {
        if (_index > -1) {
          bowlEle[_index].style.top = 0;
        }
      }
      showBean.value = true;
      lock.value = true;
      const idx = _index + 1 > 2 ? 0 : _index + 1;
      const item = bowlEle[idx];
      setTimeout(() => {
        if (_index > -1) {
          const _item = item.getBoundingClientRect();
          const _itemParentLeft =
            bowlBox.value.getBoundingClientRect().left || 0;
          goldBeanDom.value.style.left =
            _item["left"] +
            _item["width"] / 2 -
            _itemParentLeft -
            goldBeanDom.value.offsetWidth / 2 +
            "px";
        }
        setTimeout(() => {
          item.style.top = `-${props.raiseHeight}px`;
          setTimeout(() => {
            item.style.top = 0;
          }, 800);
          setTimeout(() => {
            init();
          }, 1300);
        }, 400);
      }, 100);
    };

    const raise = (index: number) => {
      if (lock.value) {
        return false;
      }
      if (props.prizeIndex > -1) {
        showBean.value = true;
        const _item = orginBowlCopy[index];
        const _itemParentLeft = bowlBox.value.getBoundingClientRect().left || 0;
        setTimeout(() => {
          goldBeanDom.value.style.left =
            _item["x"] +
            _item["width"] / 2 -
            _itemParentLeft -
            goldBeanDom.value.offsetWidth / 2 +
            "px";
        }, 100);
      } else {
        showBean.value = false;
      }
      bowlRaiseIndex.value = index;
      bowlEle[index].style.top = `-${props.raiseHeight}px`;
      setTimeout(() => {
        emit("end-turns");
        bowlLock.value = true;
      }, 300);
    };

    return {
      bowlList,
      classes,
      goldBeanDom,
      init,
      bowlBox,
      setBowlEle,
      raise,
      showBean,
      start,
    };
  },
});
</script>

<style lang="scss">
@import "index.scss";
</style>
