<template>
  <!-- { shake: shakeIndexs.includes(index + 1) } -->
  <div class="nut-ninegrid">
    <div
      v-for="(item, index) in gridList"
      class="nine-ninegrid_item"
      :style="itemStyle[index]"
      :class="[{ active: activeState || (index != 4 && index == currIndex) }]"
      :key="index"
    >
      <div
        v-if="index == 4"
        class="center"
        @click="isDraw ? startDraw() : returnDraw()"
      >
        <img
          :class="{ rotate: loadingDataState }"
          src="//img13.360buyimg.com/imagetools/jfs/t1/190805/24/20092/1136/6126fce9E6c61cf21/acd44eec9fc694bd.png"
          alt="refresh.png"
        />
        <span>{{ drawTitle }}</span>
        <p>{{ drawDesc }}</p>
      </div>
      <template v-else>
        <div class="front" @click="isStartDraw ? startFlop(index) : ''">
          <img
            src="//img11.360buyimg.com/imagetools/jfs/t1/73511/35/17197/9388/613852cdE75dc6822/ddb31e0f3cfdcb81.png"
          />
        </div>
        <div class="back">
          <p>{{ item.back.name }}</p>
          <img :src="item.back.pictureUrl" />
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { toRefs, watch, onMounted, reactive } from "vue";
import { createComponent } from "../../utils/create";
const { componentName, create } = createComponent("lucknine");
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro';

export default create({
  props: {
    data: {
      type: [Object, Array],
      default: () => {
        return [];
      },
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      gridList: [], // 数据list
      activeState: true, // 是否可以翻转
      shakeIndexs: [] as any, // 动画抖一抖的下标
      loadingDataState: false, // 换一换的小图标是否旋转  并且等它旋转完才可以再次点击
      countDown: 10, // 倒计时时间
      currIndex: 10,
      drawTitle: "开始抽奖",
      drawDesc: "请翻牌",
      isBeginClick: false, //开始游戏是否进行了点击
      arrPos: [] as any, // 每个方块对应下标记录
      isDraw: true, // 是否是抽奖状态
      isStartDraw: false, // 是否可以翻开卡牌
      query: Taro.createSelectorQuery(),
      itemStyle:[] as any,
    });
    watch(
      () => props.data,
      (value) => {
        resResponse(value);
      }
    );
    const resResponse = (sudoku_goodsG: []) => {
      let front = [0, 1, 2, 3, 4, 5, 6, 7];
      let back = sudoku_goodsG;
      let filterData: any = [];
      front.forEach((element: any, index: number) => {
        filterData.push({
          front: element,
          back: back[index],
        });
      });
      filterData.splice(4, 0, {});
      state.gridList = filterData;
    };
    const beginTimeIntervar = () => {
      const timeIntervar = setInterval(() => {
        state.countDown--;
        if (state.countDown == 0) {
          refresh();
        }
        if (state.countDown == 7) {
          state.shakeIndexs = [2, 4, 6, 8];
        } else if (state.countDown == 3) {
          state.shakeIndexs = [1, 3, 7, 9];
        }
      }, 1000);
    };
    const refresh = () => {
      if (state.loadingDataState) return;
      state.countDown = 10;
      state.shakeIndexs = [];
    };
    const startFlop = (index: number) => {
      state.currIndex = index;
      setTimeout(() => {
        state.activeState = true;
        state.isDraw = true;
        state.drawTitle = "开始抽奖";
        state.drawDesc = "请翻牌";
      }, 1500);
    };
    /**
     * 开始游戏
     */
    const startDraw = () => {
      if (state.isBeginClick) return;
      state.isBeginClick = true;
      state.isStartDraw = false;
      state.currIndex = 10;
      state.drawTitle = "返回";
      state.drawDesc = "";
      state.activeState = !state.activeState;
      let timer = setTimeout(() => {
        clearTimeout(timer);
        shuffle(110);
        timer = setTimeout(() => {
          clearTimeout(timer);
          shuffle(0);
        }, 1500);
      }, 1000);
      setTimeout(() => {
        state.isStartDraw = true;
        state.isDraw = false;
        state.isBeginClick = false;
      }, 3900);
    };
    /**
     * 洗牌
     */
    const shuffle = (pos: number) => {
      state.arrPos = [];
      state.gridList.map((item: any, index: number) => {
        const x = pos * (1 - item.twoArry.x);
        const y = pos * (1 - item.twoArry.y);
        state.arrPos.push({ x, y });
      });
      // console.log(state.gridList);
     state.gridList.forEach((item: any, index: number) => {
        //  state.itemStyle=[]
        setTimeout(() => {
          if(pos!=0){
            const transform:any= "translate(" + state.arrPos[index].x + "px," + state.arrPos[index].y + "px)"
            state.itemStyle.push({transform})
          }else{
            const transform:any= "translate(0px,0px)"
            state.itemStyle[index] = transform
          }
        }, 150 * index);
      });
    };
    /**
     * 返回游戏
     */
    const returnDraw = () => {
      state.drawTitle = "开始抽奖";
      state.drawDesc = "请翻牌";
      state.activeState = true;
      state.isDraw = true;
    };

    /**
     * 方便处理数据
     */
    const resetData = () => {
      const total = 9; // 总数
      const lineTotal: number = 3; // 单行数
      state.gridList.map((item: any, index: number) => {
        let x = index % lineTotal;
        let y = parseInt((index / lineTotal) as any);
        item.twoArry = { x, y };
      });
    };
    onMounted(() => {
      resResponse(props.data);
      beginTimeIntervar();
      resetData();
    });

    return {
      ...toRefs(state),
      resResponse,
      beginTimeIntervar,
      refresh,
      resetData,
      startFlop,
      startDraw,
      returnDraw,
    };
  },
});
</script>


<style lang="scss">
@import "index.scss";
</style>

