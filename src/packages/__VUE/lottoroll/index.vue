<template>
  <view class="nut-bingo-lotto-roll">
    <view class="lotto-roll-content">
      <view class="lotto-list"
        v-for="(m, x) of rollList"
        :key="m+x"
        :style="{left: calLeft(x), transitionDelay: (500 * x) + 'ms', ...eleStyle[x]}"
      >
        <view class="lotto-item" v-for="(item, index) of prizeList" :key="'lottoroll' + index">
          <img
            class="lotto-item-img"
            :src="item || 'https://img13.360buyimg.com/imagetools/jfs/t1/199182/28/5762/5964/612d8fc1E1b0ca970/036488ce58b4ae90.png'"
          >
        </view>
        <view class="lotto-item" :key="'lottoroll-last'">
          <img
            class="lotto-item-img" 
            :src="prizeList[0] || 'https://img13.360buyimg.com/imagetools/jfs/t1/199182/28/5762/5964/612d8fc1E1b0ca970/036488ce58b4ae90.png'"/>
        </view>
      </view>
    </view>
    <nut-button type="danger" @click="startRole">抽奖</nut-button>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, ref, onMounted, onUnmounted, nextTick, watch, computed } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('lotto-roll');

export default create({
  props: {
    prizeList: {
      required: true,
      type: Array,
      default: () => []
    },
    turnsTime: {
      type: Number,
      default: 200
    },
    prizeIndex: {
      type: Number,
      default: -1
    },
  },
  components: {},
  emits: ["click", "start-turns", "end-turns"],
  setup(props, { emit }) {
    const lock = ref(false);

    const rollList = reactive([
      'rollList1', 'rollList2', 'rollList3'
    ])

    const prize = ref(props.prizeIndex);
    watch(
      () => props.prizeIndex,
      (val, prevVal) => {
        prize.value = val;
      }
    );

    const eleStyle = reactive<any>([]);

    const run1 = ref(0);
    const run2 = ref(0);
    const run3 = ref(0);
    watch(
      () => run1.value,
      (val, prevVal) => {
        eleStyle[0] = {
          transition: val == 0 ? 'none' : `all linear ${props.turnsTime}ms`,
          transform: `translateY(-${100 * val}px)`,
        };
        // 保证图片重置后再次进行循环滚动
        setTimeout(() => {
          if (val == 0) {
            runStep1();
          }
        }, 20)
      }
    );
    watch(
      () => run2.value,
      (val, prevVal) => {
        eleStyle[1] = {
          transition: val == 0 ? 'none' : `all linear ${props.turnsTime}ms`,
          transform: `translateY(-${100 * val}px)`,
        };
        // 保证图片重置后再次进行循环滚动
        setTimeout(() => {
          if (val == 0) {
            runStep2();
          }
        }, 20)
      }
    );
    watch(
      () => run3.value,
      (val, prevVal) => {
        eleStyle[2] = {
          transition: val == 0 ? 'none' : `all linear ${props.turnsTime}ms`,
          transform: `translateY(-${100 * val}px)`,
        };
        // 保证图片重置后再次进行循环滚动
        setTimeout(() => {
          if (val == 0) {
            runStep3();
          }
        }, 20)
      }
    );

    onMounted(() => {
    });

    onUnmounted(() => {
    });

    const calLeft = (index:number) => {
      return `${index * 100 + 10 * index}px`;
    }

    const startRole = () => {
      if(lock.value) {
        return;
      }
      lock.value = true;
      emit('start-turns');
      nextTick(() => {
        rollList.forEach((ele: string, index: number) => {
          eleStyle.push({
            transition: `all linear ${props.turnsTime}ms`,
            transform: `translateY(-${100 * run1.value}px)`,
          });
        });
        runStep1();
        setTimeout(() => {
          runStep2();
        }, 300);
        setTimeout(() => {
          runStep3();
        }, 700);
      })
    }

    const runStep1 = () => {
      run1.value++;
      let timer:any = null;
      clearInterval(timer);
      timer = setInterval(() => {
        if(run1.value > 4) {
          run1.value = 0;
          clearInterval(timer);
        }else{
          run1.value++;
        }
      }, props.turnsTime);
    }

    const runStep2 = () => {
      run2.value++;
      let timer:any = null;
      clearInterval(timer);
      timer = setInterval(() => {
        if(run2.value > 4) {
          run2.value = 0;
          clearInterval(timer);
        }else{
          run2.value++;
        }
      }, props.turnsTime);
    }

    const runStep3 = () => {
      run3.value++;
      let timer:any = null;
      clearInterval(timer);
      timer = setInterval(() => {
        if(run3.value > 4) {
          run3.value = 0;
          clearInterval(timer);
        }else{
          run3.value++;
        }
      }, props.turnsTime);
    }

    return {
      rollList,
      eleStyle,
      calLeft,
      startRole,
      run1
    };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
