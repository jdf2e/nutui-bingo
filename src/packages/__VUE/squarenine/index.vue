<template>
  <div :class="classes">
    <div
      v-for="(item, index) in gridList"
      class="nine-ninegrid__item"
      :class="[{ active: activeState || (index != 4 && index == currIndex) }]"
      :key="index"
    >
      <template v-if="index == 4 && isHaveSlots('startBtn')">
        <slot name="startBtn"></slot>
      </template>
      <div
        v-if="index == 4 && !isHaveSlots('startBtn')"
        class="nine-ninegrid__item__center"
        @click="isDraw ? startDraw() : returnDraw()"
      >
        <span>{{ drawTitle }}</span>
        <p>{{ drawDesc }}</p>
      </div>
      <template v-if="index != 4">
        <div class="front" @click="isStartDraw ? startFlop(index) : ''">
          <img :src="cardImg" />
        </div>
        <div class="back">
          <p>{{ item.name || "" }}</p>
          <img v-if="item.pictureUrl" :src="item.pictureUrl" />
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { toRefs, watch, onMounted, reactive, ref, computed } from "vue";
import { createComponent } from "../../utils/create";
const { componentName, create } = createComponent("squarenine");

export default create({
  props: {
    prizeList: {
      type: [Object, Array],
      default: () => {
        return [];
      },
    },
    prizeId: {
      type: Number,
      default: 5,
    },
    cardImg: {
      type: String,
      default: "",
    },
  },
  emits: ["click", "start","return"],
  setup(props, { emit, slots }) {
    const state = reactive({
      gridList: [] as any, // 数据list
      oldGridList: [] as any, // 初始数据list
      activeState: true, // 是否可以翻转
      currIndex: 10,
      drawTitle: "开始抽奖",
      drawDesc: "请翻牌",
      isBeginClick: false, //开始游戏是否进行了点击
      arrPos: [] as any, // 每个方块对应下标记录
      isDraw: true, // 是否是抽奖状态
      isStartDraw: false, // 是否可以翻开卡牌
    });
     const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
      };
    });
    const prizeId = ref(props.prizeId);
    watch(
      () => props.prizeList,
      (value) => {
        resResponse(value);
      }
    );
    watch(
      () => props.prizeId,
      (value) => {
        prizeId.value = value;
      }
    );
    const isHaveSlots = (name: string) => {
      return slots[name];
    };
    const resResponse = (sudoku_goodsG: any) => {
      if (!(JSON.stringify(sudoku_goodsG[4]) == "{}")) {
        sudoku_goodsG.splice(4, 0, {});
      }
      state.gridList = sudoku_goodsG;
    };
    /**
     * 更换数据为接口返回
     */
    const prizeData = () => {
      setTimeout(() => {
        [...state.oldGridList] = state.gridList;
        let data = state.gridList.find((item: { id: number }) => {
          return item.id == prizeId.value;
        });
        for (let i = 0; i < state.gridList.length; i++) {
          if (i == 4) {
            state.gridList[i] = {};
          } else {
            state.gridList[i] = data;
          }
        }
      });
    };
    /**
     * 调换数据
     */
    const changeData = (index: number) => {
      //进行数据调换
      var defaultIndex = null; //未知默认的数组所在文本的值
      for (var i in state.oldGridList) {
        if (state.oldGridList[i]["id"] == state.gridList[index]["id"]) {
          defaultIndex = i;
        }
      }
      state.oldGridList[index] = state.oldGridList.splice(
        defaultIndex,
        1,
        state.oldGridList[index]
      )[0];
      [...state.gridList] = state.oldGridList;
    };
    // 点击翻牌
    const startFlop = (index: number) => {
      state.currIndex = index;
      emit("click");
      prizeData();
      setTimeout(() => {
        changeData(index);
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
      emit("start");
      if (state.oldGridList.length > 0) {
        [...state.gridList] = state.oldGridList;
      }
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
     * 打乱顺序
     */
    const reverse = () => {
      var randomsort = function () {
        return Math.random() > 0.5 ? -1 : 1;
      };
      state.gridList.splice(4, 1);
      state.gridList.sort(randomsort);
      state.gridList.splice(4, 0, {});
      resetData();
    };
    /**
     * 洗牌
     */
    const shuffle = (pos: number) => {
      state.arrPos = [];
      reverse();
      
      state.gridList.map((item: any, index: number) => {
        const x = pos * (1 - item.twoArry.x);
        const y = pos * (1 - item.twoArry.y);
        state.arrPos.push({ x, y });
      });
      const itemPos = document.querySelectorAll(".nine-ninegrid__item") as any;
      itemPos.forEach((item: any, index: number) => {
        setTimeout(() => {
          item.style.transform =
            "translate(" +
            state.arrPos[index].x +
            "px," +
            state.arrPos[index].y +
            "px)";
        }, 150 * index);
      });
    };
    /**
     * 返回游戏
     */
    const returnDraw = () => {
      emit("return");
      state.drawTitle = "开始抽奖";
      state.drawDesc = "请翻牌";
      state.activeState = true;
      state.isDraw = true;
    };

    /**
     * 方便处理数据
     */
    const resetData = () => {
      const lineTotal: number = 3; // 单行数
      state.gridList.map((item: any, index: number) => {
        let x = index % lineTotal;
        let y = parseInt((index / lineTotal) as any);
        item.twoArry = { x, y };
      });
    };
    onMounted(() => {
      resResponse(props.prizeList);
    });

    return {
      ...toRefs(state),
      classes,
      resResponse,
      isHaveSlots,
      resetData,
      prizeId,
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

