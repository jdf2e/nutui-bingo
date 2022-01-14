<template>
  <div :class="classes">
    <div v-for="(item, index) in num" :key="index" class="nut-eggs-item" :style="{width:width,height:height}">
      <img
        class="intactImg"
        :src="intactImg"
        alt=""
        @click="hitEggs(index)"
       v-if="!(arr.indexOf(index) > -1)" 
      />
      <img
        v-if="arr.indexOf(index) > -1"
        class="splitImg"
        :src="splitImg"
        alt=""
      />
      <img
        v-show="index == hitIndex"
        class="hammer"
        style="animation: shake-rotate 0.5s linear 0s infinite"
        :src="hammer"
        alt=""
      />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, reactive, ref, toRefs } from "vue";
import { createComponent } from "../../utils/create";
const { componentName, create } = createComponent("luckeggs");
interface propsType {
  num: number;
  intactImg: string;
  hammer: string;
  splitImg: string;
  width: string;
  height: number;
}
export default create({
  props: {
    num: {
      type: Number,
      default: 9,
    },
    intactImg: {
      type: String,
      default:
        "//img10.360buyimg.com/imagetools/jfs/t1/217651/2/1901/114207/617770f2E74551438/5342f7b949e7bec3.png",
    },
    hammer: {
      type: String,
      default:
        "//img13.360buyimg.com/imagetools/jfs/t1/95159/30/17834/9845/61444874E0f463263/924741cae55efb85.png",
    },
    splitImg: {
      type: String,
      default:
        "//img13.360buyimg.com/imagetools/jfs/t1/219949/29/1870/75442/61776f7aE5d1a8e07/a8de5321e4e8071e.png",
    },
    width:{
      type:String,
      default:'80px'
    },
    height:{
      type:String,
      default:'80px'
    }
  },
  emits: ["click"],

  setup(props:propsType, { emit }) {
    const hitIndex = ref();
    const hitClick = ref(false);
    const arr = reactive<any>([]);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
      };
    });
    const hitEggs = (index: number) => {
      if (hitClick.value) return;
      hitClick.value = true;
      hitIndex.value = index;
      setTimeout(() => {
        arr.push(index);
        hitIndex.value = props.num + 1;
        hitClick.value = false;
         emit('click');
      }, 1500);
    };

    return {
      classes,
      hitIndex,
      hitEggs,
      arr,
    };
  },
});
</script>

<style lang="scss">
@import "index.scss";
</style>
