<template>
  <div :class="classes">
    <div
      class="nutbig-giftrain-content"
      ref="rainContent"
      :style="{ width: width, height: height }"
    >
      <img
        :class="[
          'nutbig-giftrain-content-rainimg',
          item.hasSelected ? '' : 'noselected',
        ]"
        :style="
          item.hasSelected
            ? seclected(item.width, item.height)
            : rainImgStyle(item.width, item.height, item.x, item.y)"
        @touchstart="touchStart($event, item.id)"
        v-for="(item, index) in rainList"
        :key="index"
        ref="img"
        :src="item.img"
        alt=""
      />
      <slot name="customize" :onStart="()=>startRain()"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, toRefs, computed, ref, Ref, reactive, watch } from "vue";
import { createComponent } from "../../utils/create";
const { componentName, create } = createComponent("giftrain");
interface props {
  width: string; // 容器宽度
  height:string // 容器高度
  rainTime: number; // 持续时间
  rainNum: number; // 一页最多展示多少红包
  rainImg: string; // 红包图片
  rainWidth:number; // 红包宽度
  rainHeight:number; // 红包高度
}
export default create({
  props: {
    width: {
      type: String,
      default: "375px",
    },
    height: {
      type: String,
      default: "500px",
    },
    rainWidth: {
      type: Number,
      default: 50,
    },
    rainHeight: {
      type: Number,
      default: 50,
    },
    // 红包雨时间
    rainTime: {
      type: Number,
      default: 30000,
    },
    // 红包数量
    rainNum: {
      type: Number,
      default: 4,
    },
    // 红包图片
    rainImg: {
      type: String,
      default:
        "//img13.360buyimg.com/imagetools/jfs/t1/199416/7/16633/40527/618c8bebEb03467d8/6af8bde529c5cf61.png",
    },
  },
  emits: ['start','gameOver','click'],
  setup(props: props, { emit }) {
    const rainContent: Ref<HTMLElement | null> = ref(null);
    const img: Ref<HTMLElement | null> = ref(null);
    const rainTime: Ref<number> = ref(props.rainTime);
    const rainNum: Ref<number> = ref(props.rainNum);
    const rainImg: Ref<string> = ref(props.rainImg);
    const rainList: Ref<any> = ref([]); // 红包的数组
    const isOver: Ref<boolean> = ref(false); // 标记游戏是否结束
    const rainScore: Ref<number> = ref(0); // 标记游戏是否结束
    const arr :any=reactive([])
    let timeout_gameTime = ref();
    let requestAnimationFrame = ref();

    const startRain = () => {
      init();
      rainList.value = [];
      addRainList();
      timeout_gameTime.value = setTimeout(() => {
        rainOver();
      }, rainTime.value);
      render();
      emit("start")
    };
    const init = () => {
      rainScore.value = 0;
      rainList.value = [];
      isOver.value = false;
      clearTimeout(timeout_gameTime.value);
      window.cancelAnimationFrame(requestAnimationFrame.value);
      timeout_gameTime.value = null;
    };
    const rainOver = () => {
      emit("gameOver")
      isOver.value = true;
      init();
    };
    const render = () => {
      if (isOver.value) return;
      let redPacketWarp: any = rainContent.value;
      let height = redPacketWarp.clientHeight;
      let x = (redPacketWarp.clientWidth ? redPacketWarp.clientWidth : 340) - props.rainWidth;
      rainList.value &&
        rainList.value.map((item: any) => {
          if (item.y > height + 80) {
            item.y = 0;
            item.x = Math.floor(x * Math.random());
            arr.push(item)
          }
          item.y += item.speed;
        });
      requestAnimationFrame.value = window.requestAnimationFrame(render);
    };
    const addRainList = () => {
      let redPacketWarp: any = rainContent.value;
      // let x = redPacketWarp.clientWidth - props.rainWidth;
      let x = (redPacketWarp.clientWidth ? redPacketWarp.clientWidth : 340) - props.rainWidth;
      let timeout = setInterval(() => {
        let state = reactive({
          width: props.rainWidth, // 红包宽度
          height: props.rainHeight, // 红包高度
          id: new Date().getTime().toString(), // 红包的id 作为唯一标识
          img: rainImg.value,
          hasSelected: false, // 红包是否被选中
          y: 0, // 用于标记红包下落的距离
          x: Math.floor(x * Math.random()),
          speed: Math.floor(Math.random() * 1 + 4), // 红包下落的速度
        });
        if (rainList.value.length <= rainNum.value) {
          rainList.value.push(state);
        } else {
          clearInterval(timeout);
        }
      }, 1000);
    };
    const touchStart = (e: TouchEvent, id: string) => {
      if (isOver.value) return;
      let redPacketWarp: any = rainContent.value;
      let x = redPacketWarp.clientWidth - props.rainWidth;
      rainList.value.map((item: any) => {
        if (item.id == id) {
          item.hasSelected = true;
          item.width = 0
          arr.push(item)
          emit('click')
          setTimeout(() => {
            item.x = x * Math.random();
            item.y = 0;
            item.width = props.rainWidth
            item.hasSelected = false;
          }, 300);
        }
      });
    };
    // 未选中红包样式
    const rainImgStyle = (w: number, h: number, x: number, y: number) => {
      return {
        width: w + "px",
        height: h + "px",
        left: x + "px",
        top: -(h + 10) + "px",
        transform: `translateY(${y}px)`,
      };
    };
    // 选中红包样式
    const seclected = (w: number, h: number) => {
      return {
        width: w+"px",
      };
    };
    // const bgStyle = computed(()=>{
    //   return{
    //     // background:'red',
    //     background:"url('https://img14.360buyimg.com/imagetools/jfs/t1/207041/30/10130/26915/619748b2E7baf3a7e/87e638df2fcf9f85.png')",
    //   }
    // })

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
      };
    });
    return {
      classes,
      rainContent,
      rainTime,
      rainNum,
      rainImg,
      init,
      rainList,
      rainOver,
      startRain,
      touchStart,
      rainImgStyle,
      seclected,
      isOver,
      img,
      // bgStyle,
    };
  },
});
</script>

<style lang="scss">
@import "index.scss";
</style>
