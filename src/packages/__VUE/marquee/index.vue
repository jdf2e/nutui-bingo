<template>
  <view :class="classes" ref="marqueeDom">
    <view class="bgContent"></view>
    <view class="marqueeBg" :style="bgContentStyle"></view>
    <view :class="['start', {'disabledDraw': lock}]" @click="startDraw" :style="cursorStyle"></view>
    <ul>
        <li v-for="(item, i) in prizeList" :key="'luckmarquee'+i" :class="['gift-' + (i+1), {'active': index == i}]" :style="bgItemStyle">
            <div class="gift-img">
                <img :src="item.prizeImg">
            </div>
            <span class="desc" v-html="item.prizeName"></span>
        </li>
    </ul>
  </view>
</template>
<script lang="ts">
import { ref, toRefs, watch, computed, onMounted, watchEffect, reactive } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('marquee');

export default create({
  props: {
    // 抽奖样式
    styleOpt: {
      default: () => {
        return {
          itemStyle: {},
          startStyle:{},
          bgStyle: {
            background: "rgb(255, 231, 149)"
          }
        }
      }
    },
    // 奖品列表
    prizeList: {
      type: Array,
      required: true
    },
    // 中奖奖品的index
    prizeIndex: {
      type: Number || String,
      default: -1
    },
    // 初始转动速度
    speed: {
      type: Number || String,
      default: 150
    },
    // 预抽奖，转动多少次进入抽奖环节
    circle: {
      type: Number || String,
      default: 30
    }
  },
  emits: ["click", "start-turns", "end-turns"],
  setup(props, { emit }) {
    let { prizeList, styleOpt } = reactive(props);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
      };
    });

    onMounted(() => {
      // init();
    });

    watch(
      () => props.prizeList,
      (list, prevList) => {
        prizeList = list;
      }
    );

    const marqueeDom:any = ref(null);
    // 上锁
    const lock = ref(false);
    // 转动到的商品的index
    const index = ref(0);
    // 转动跑格子次数
    const cellNumber = ref(0);
    // 初始速度
    const velocity = ref(props.speed);
    // 至少需要转动多少次再进入抽奖环节
    const cycle = ref(props.circle);
    // 转动定时器
    const timer = ref<any>(null);

    const bgContentStyle = styleOpt.bgStyle;
    const bgItemStyle = styleOpt.itemStyle;
    const cursorStyle = styleOpt.startStyle;
    
    // 每次转动
    const rollMarquee = () => {
      cellNumber.value += 1;
      let idx = index.value; // 当前转动到哪个位置
      const count = 8; // 总共有多少个位置
      idx += 1;
      if (idx > count - 1) {
        idx = 0;
      }
      index.value = idx;
      getPrize();
    }

    const getPrize = () => {
      // 当前转动次数符合条件 && 转动到中奖位置
      if (cellNumber.value > cycle.value && props.prizeIndex === index.value) {
        clearTimeout(timer.value); // 清除转动定时器
        //恢复默认值和初始值
        timer.value = 0;
        cellNumber.value = 0;
        velocity.value = props.speed;
        cycle.value = props.circle;
        setTimeout(() => {
          index.value = props.prizeIndex;
          emit('end-turns');
          lock.value = false;
        }, 500);
      } else {
        if(cellNumber.value < cycle.value){
          velocity.value -= 4;
        }else{
          velocity.value += 20;
        }
        // 开始转动抽奖
        timer.value = setTimeout(rollMarquee, velocity.value);
      }
    }

    const startDraw = () => {
      if(!lock.value) {
        lock.value = true;
        emit('start-turns');
        rollMarquee();
      }
    }

    return {
      classes,
      marqueeDom,
      prizeList,
      index,
      lock,
      startDraw,
      bgContentStyle,
      bgItemStyle,
      cursorStyle
    };
  }
});
</script>


<style lang="scss">
@import 'index.scss';
</style>

