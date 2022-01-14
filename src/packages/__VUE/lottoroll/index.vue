<template>
  <div class="nutbig-lotto-roll">
    <div class="lotto-roll-wrap" v-for="(s, index) of 3" :key="index">
      <div class="lotto-roll-content">
        <div class="lotto-wrap">
          <div class="lotto-item" v-for="(item, idx) in [...list, ...list]" :key="`'lotto'-${index}-${idx}`">
            <div class="lotto-item-image" v-if="item.imagePath">
              <img
                class="lotto-item-img"
                v-if="item.imagePath"
                :src="item.imagePath"/>
            </div>
            <div class="lotto-item-content" v-if="item.text">{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nut-button type="danger" @click="start">抽奖</nut-button>
</template>

<script>
import { reactive, toRefs, ref, onMounted, onUnmounted, nextTick, watch, computed } from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('lotto-roll');

export default create({
  props: {
    prizeList: {
      type: Array,
      default: () => []
    },
    turnsTime: {
      type: Number,
      default: 0
    },
    turnsNumber: {
      type: Number,
      default: 0
    },
    prizeIndex: {
      type: Number,
      default: -1
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

    // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame 
    const animationFun = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame || function(cb) { window.setTimeout(cb, 1000/60) }

    const list = props.prizeList; // 奖品列表
    const options = ref(null); // 可视区域每列展示的奖品数
    const startTime = ref(null);
    const lock = ref(false); //上锁

    const start = () => {
      if (lock.value) {
        return false;
      }
      emit("start-turns");
      lock.value = true;
      if (options.value) {
        // 增加动画过程中，再次点击开始，立即结束动画，且置为对应中位置
        options.value.forEach(item => {
          item.isFinished = true;
          const v = -item.location;
          item.el.style.transform = "translateY(" + v + "px)";
        })
        return;
      }
      options.value = Array.from(document.getElementsByClassName("lotto-roll-wrap")).map((data, i) => {
        const dom = document.getElementsByClassName("lotto-roll-wrap")[i];
        const itemHeight = document.getElementsByClassName('lotto-item')[0].offsetHeight;
        let prizeIdx = prize.value; // 中奖编号
        if (prizeIdx < 0) {
          prizeIdx = Math.floor(Math.random() * list.length);
        }
        // const prizeIndex = Math.floor(Math.random() * list.length); // 随机生成整数，测试用
        const opts = {
          el: dom.querySelector(".lotto-wrap"), //指向奖项元素的父级
          location: prizeIdx * itemHeight, // 奖品滚动到指定的位置
          rollTimes: 2000 + Math.random() * 500 + i * 500 + 1000 * props.turnsNumber, // 转圈数
          height: list.length * itemHeight, // 总的高度
          duration: 6000 + i * 2000 + props.turnsTime, // 动画时间，毫秒数
          isFinished: false,
        };
        return opts;
      })
      animationFun(animate);
    }

    const animate = (timestamp) => {
      if(!options.value) {
        return false;
      }
      // timestamp 当前的方法持续的毫秒数
      if (startTime.value == null) {
        startTime.value = timestamp; // 动画初始时间
      }
      const timeDiff = timestamp - startTime.value; //动画持续的时间
      options.value.forEach((item) => {
        if (item.isFinished) {
          return;
        }
        const time = Math.max(item.duration - timeDiff, 0); // 总的持续时间 - 动画持续时间 = 剩下的时间, 0 表示结束
        const power = 3;
        // Math.pow(time, power)表示: time 的 3 次幂;
        const offset = (Math.pow(time, power) / Math.pow(item.duration, power)) * item.rollTimes;
        let distance = -1 * Math.floor((offset + item.location) % item.height);
        // 指定到同一个位置中奖
        // if (time == 0) {
          // let oneHeight = item.height / list.length;
          // console.log(-1 * item.height + distance + Math.abs(distance - prize.value * oneHeight));
          // console.log(distance, prize.value * oneHeight);
        // }
        item.el.style.transform = "translateY(" + distance + "px)";
        if (timeDiff > item.duration) {
          item.isFinished = true;
        }
      })
      if (options.value.every((m) => m.isFinished)) {
        emit("end-turns");
        lock.value = false;
        options.value = null;
        startTime.value = null;
      } else {
        animationFun(animate);
      }
    }
    
    return {
      list,
      start,
    }
  }

});
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>

