<template>
  <view
    :class="classes"
    ref="turntableDom"
    :style="{ width: width, height: height }"
  >
    <view
      class="turntable"
      :style="{ transform: rotateAngle, transition: rotateTransition }"
    >
      <canvas
        id="canvasWx"
        :class="envApp == 'WEAPP' ? '' : 'mlcanvas'"
        canvas-id="canvasWx"
        ref="canvasDom"
        :style="envApp == 'WEAPP' ? '' : getRotateAngle(0)"
      >
      </canvas>
      <!-- <canvas id="canvasWx" canvas-id="canvasWx" ref="canvasDom" type="2d" :style="getRotateAngle(0)">
      </canvas> -->
      <view class="prize" v-if="prizeList.length > 0">
        <view
          v-for="(item, index) of prizeList"
          class="item"
          :style="getRotateAngle(index)"
          :key="index"
        >
          <view class="drawTable-name">{{ item["prizeName"] }}</view>
          <view class="drawTable-img">
            <img :src="item['prizeImg']" />
          </view>
        </view>
      </view>
    </view>
    <view class="pointer" :style="pointerStyle" @click="startTurns"></view>
  </view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";
import { TPrizeItem } from "./type";
import { ref, watch, computed, onMounted, reactive } from "vue";
import { createComponent } from "../../utils/create";
const { componentName, create } = createComponent("turntable");

export default create({
  props: {
    width: {
      required: true,
      default: "300px",
    },
    height: {
      required: true,
      default: "300px",
    },
    prizeList: {
      required: true,
      default: () => [],
    },
    prizeIndex: {
      type: Number,
      default: -1,
    },
    turnsNumber: {
      type: Number,
      default: 5,
    },
    styleOpt: {
      default: () => {
        return {
          // 每一块扇形的背景色,默认值,可通过父组件来改变
          prizeBgColors: [
            "rgb(255, 231, 149)",
            "rgb(255, 247, 223)",
            "rgb(255, 231, 149)",
            "rgb(255, 247, 223)",
            "rgb(255, 231, 149)",
            "rgb(255, 247, 223)",
          ],
          // 每一块扇形的外边框颜色,默认值,可通过父组件来改变
          borderColor: "#ff9800",
        };
      },
    },
    turnsTime: {
      // 转动需要持续的时间(秒)
      default: 5,
    },
    lockTime: {
      // 抽奖间隔(秒)
      default: 0,
    },
    pointerStyle: {
      default: () => {
        return {
          width: "80px",
          height: "80px",
          backgroundImage:
            'url("https://img11.360buyimg.com/imagetools/jfs/t1/89512/11/15244/137408/5e6f15edEf57fa3ff/cb57747119b3bf89.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        };
      },
    },
  },
  emits: ["click", "start-turns", "end-turns", "lock-turns"],
  setup(props, { emit }) {
    const envApp = ref("WEB");

    const {
      width,
      height,
      turnsNumber,
      styleOpt,
      turnsTime,
      pointerStyle,
      lockTime,
    } = reactive(props);

    let prizeList: TPrizeItem[] = reactive(props?.prizeList);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
      };
    });
    // const getRandomColor = function () {
    //   const r = Math.floor(Math.random() * 256);
    //   const g = Math.floor(Math.random() * 256);
    //   const b = Math.floor(Math.random() * 256);
    //   return "rgb(" + r + "," + g + "," + b + ")";
    // };

    // 用来锁定转盘，避免同时多次点击转动
    const lock = ref(false);
    // 是否正在转动
    const rorating = ref(false);
    // 剩余抽奖次数
    // const num = ref(5);
    // 开始转动的角度
    const startRotateDegree = ref(0);
    // 设置指针默认指向的位置,现在是默认指向2个扇形之间的边线上
    const rotateAngle = ref<string>("0");
    const rotateTransition = ref("");

    const turntableDom = ref(null);
    const canvasDom = ref(null);
    const rorateDeg = ref(360 / prizeList.length);

    // 根据index计算每一格要旋转的角度的样式
    const getRotateAngle = (index: number) => {
      const angle = (360 / prizeList.length) * index + 180 / prizeList.length;
      return {
        transform: `rotate(${angle}deg)`,
      };
    };
    // 初始化圆形转盘canvas
    const init = () => {
      const data = styleOpt;
      const prizeNum = prizeList.length;
      const { prizeBgColors } = data;
      // 开始绘画
      // const canvas = canvasDom.value;
      // const luckdraw = turntableDom.value;
      // const ctx = canvas.getContext('2d');
      const ctx = Taro.createCanvasContext("canvasWx");
      // const canvasW = (canvas.width = luckdraw.clientWidth); // 画板的高度
      // const canvasH = (canvas.height = luckdraw.clientHeight); // 画板的宽度
      const canvasW = Number(width.replace(/px/g, "")); // 画板的高度
      const canvasH = Number(height.replace(/px/g, "")); // 画板的宽度
      if (envApp.value == "WEAPP") {
        // translate方法重新映射画布上的 (0,0) 位置
        ctx.translate(0, canvasH);
        // rotate方法旋转当前的绘图，因为文字是和当前扇形中心线垂直的
        ctx.rotate((-90 * Math.PI) / 180);
      }
      // 圆环的外圆的半径,可用来调整圆盘大小来适应外部盒子的大小
      // const outRadius = canvasW / 2 - 1;
      // 圆环的内圆的半径
      // const innerRadius = 0;
      const baseAngle = (Math.PI * 2) / prizeNum; // 每个奖项所占角度数
      // ctx.clearRect(0, 0, canvasW, canvasH); //去掉背景默认色
      // ctx.strokeStyle = borderColor; // 设置画图线的颜色
      for (let index = 0; index < prizeNum; index++) {
        const startAngle = index * baseAngle;
        const endAngle = (index + 1) * baseAngle;
        ctx.beginPath();
        ctx.moveTo(canvasW / 2, canvasH / 2);
        ctx.arc(
          canvasW / 2,
          canvasH / 2,
          canvasH / 2,
          startAngle,
          endAngle,
          false
        );
        /*随机颜色*/
        if (prizeList[index]["prizeColor"]) {
          ctx.fillStyle = prizeList[index]["prizeColor"]; //设置每个扇形区域的颜色,根据每条数据中单独设置的优先
        } else {
          ctx.fillStyle = prizeBgColors[index]; //设置每个扇形区域的颜色
        }
        ctx.fill();
      }
      ctx.draw();
    };

    // 判断是否可以转动
    const canBeRotated = () => {
      // if (num.value <= 0) {
      //   return false;
      // }
      if (lock.value) {
        if (!rorating.value) {
          emit("lock-turns");
        }
        return false;
      }
      return true;
    };
    const startTurns = () => {
      // 如果还不可以转动
      if (!canBeRotated()) {
        return false;
      }
      emit("start-turns");
    };
    // 转动起来
    const changeLock = () => {
      setTimeout(() => {
        lock.value = false;
      }, lockTime * 1000);
    };
    const rotate = (index: number) => {
      const turnsTimeNum = turnsTime;
      const rotateAngleValue =
        startRotateDegree.value +
        turnsNumber * 360 +
        360 -
        (180 / prizeList.length + (360 / prizeList.length) * index) -
        (startRotateDegree.value % 360);
      startRotateDegree.value = rotateAngleValue;
      rotateAngle.value = `rotate(${rotateAngleValue}deg)`;
      rotateTransition.value = `transform ${turnsTimeNum}s cubic-bezier(0.250, 0.460, 0.455, 0.995)`;
      setTimeout(() => {
        emit("end-turns");
        rorating.value = false;
        changeLock();
      }, turnsTimeNum * 1000 + 500);
    };

    const rotateTurn = () => {
      // 开始转动
      // 先上锁
      lock.value = true;
      rorating.value = true;
      setTimeout(() => {
        rotate(props.prizeIndex);
      }, 300);
    };

    watch(
      () => props.prizeList,
      (list) => {
        prizeList = list;
        init();
      }
    );

    // watch(
    //   () => props.prizeIndex,
    //   (nIndex) => {
    //     rotate(nIndex);
    //   }
    // );

    onMounted(() => {
      envApp.value = Taro.getEnv();
      setTimeout(() => {
        init();
      }, 800);
    });

    return {
      classes,
      envApp,
      turntableDom,
      canvasDom,
      rorateDeg,
      getRotateAngle,
      rotateAngle,
      rotateTransition,
      pointerStyle,
      startTurns,
      rotateTurn,
    };
  },
});
</script>

<style lang="scss">
@import "index.scss";
</style>
