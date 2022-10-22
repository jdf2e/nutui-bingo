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
      <canvas id="canvas" ref="canvasDom"> 浏览器版本过低 </canvas>
      <view class="prize">
        <view
          v-for="(item, index) of prizeList"
          class="item"
          :style="getRotateAngle(index)"
          :key="item.id"
        >
          <view class="drawTable-name">{{ item.prizeName }}</view>
          <view class="drawTable-img">
            <img :src="item.prizeImg" />
          </view>
        </view>
      </view>
    </view>
    <view class="pointer" :style="pointerStyle" @click="startTurns"></view>
  </view>
</template>
<script lang="ts">
import { ref, watch, computed, onMounted, reactive, PropType } from "vue";
import { TPrizeItem } from "./type";
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
      type: Array as PropType<TPrizeItem[]>,
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
  setup(props: any, { emit }) {
    let { prizeList } = reactive(props);
    const { styleOpt, turnsTime, pointerStyle, turnsNumber, lockTime } =
      reactive(props);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
      };
    });

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
      const { prizeBgColors, borderColor } = data;

      // 开始绘画
      const canvas: any = canvasDom.value;
      const luckdraw = turntableDom.value as unknown as HTMLElement;
      const ctx = canvas.getContext("2d");

      const canvasW = (canvas.width = luckdraw.clientWidth); // 画板的高度
      const canvasH = (canvas.height = luckdraw.clientHeight); // 画板的宽度
      // translate方法重新映射画布上的 (0,0) 位置
      ctx.translate(0, canvasH);
      // rotate方法旋转当前的绘图，因为文字是和当前扇形中心线垂直的
      ctx.rotate((-90 * Math.PI) / 180);
      // 圆环的外圆的半径,可用来调整圆盘大小来适应外部盒子的大小
      const outRadius = canvasW / 2 - 1;
      // 圆环的内圆的半径
      const innerRadius = 0;
      const baseAngle = (Math.PI * 2) / prizeNum; // 每个奖项所占角度数
      ctx.clearRect(0, 0, canvasW, canvasH); //去掉背景默认色
      ctx.strokeStyle = borderColor; // 设置画图线的颜色
      for (let index = 0; index < prizeNum; index++) {
        const angle = index * baseAngle;
        if (prizeList[index]["prizeColor"]) {
          ctx.fillStyle = prizeList[index]["prizeColor"]; //设置每个扇形区域的颜色,根据每条数据中单独设置的优先
        } else {
          ctx.fillStyle = prizeBgColors[index]; //设置每个扇形区域的颜色
        }
        ctx.beginPath(); //开始绘制
        // 标准圆弧：arc(x,y,radius,startAngle,endAngle,anticlockwise)
        ctx.arc(
          canvasW * 0.5,
          canvasH * 0.5,
          outRadius,
          angle,
          angle + baseAngle,
          false
        );
        ctx.arc(
          canvasW * 0.5,
          canvasH * 0.5,
          innerRadius,
          angle + baseAngle,
          angle,
          true
        );
        ctx.stroke();
        ctx.fill();
        ctx.save();
      }
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
    const startTurns = () => {
      // 如果还不可以转动
      if (!canBeRotated()) {
        return false;
      }
      // 设置在哪里停下，应该与后台交互，这里随机抽取0~5 ,这里应该是后台返回的中奖信息,现在是测试
      // const index = Math.floor(Math.random() * prizeList.length);
      // 成功后次数减少一次
      // num.value--;
      // prizeIndex = index;
      emit("start-turns");
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

    onMounted(() => {
      init();
    });

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

    return {
      classes,
      turntableDom,
      canvasDom,
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
