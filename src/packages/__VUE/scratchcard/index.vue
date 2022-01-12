<template>
  <div
    :class="classes"
    :style="{ height: height + 'px', width: width + 'px' }"
    ref="scratchcard"
    id="scratchcard"
  >
    <div
      class="scratchcard-content"
      v-html="result"
      :style="{ backgroundColor: backgroundColor, fontSize: fontSize + 'px' }"
    ></div>
  </div>
</template>
<script lang="ts">
import { ref, computed, nextTick, onMounted, reactive ,watch} from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('scratch-card');
import LuckyCard from './luckycard.js';
export default create({
  props: {
    content: {
      type: String,
      default: ''
    },
    height: {
      type: [String, Number],
      default: 50
    },
    width: {
      type: [String, Number],
      default: 300
    },
    coverColor: {
      type: String,
      default: '#C5C5C5'
    },
    coverImg: {
      type: String,
      default: ''
    },
    fontSize: {
      type: [String, Number],
      default: 20
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    ratio: {
      type: [String, Number],
      default: 0.5
    }
  },
  components: {},
  emits: ['click', 'open'],

  setup(props, { emit }) {
    const scratchcard = ref<HTMLElement | null>(null);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
      };
    });
    const result=ref(props.content)
    const state:any = reactive({
      luckcard: null,
    });
    const clearCover = () => {
      state.luckcard.clearCover();
    };
    onMounted(() => {
      console.log(scratchcard.value);
      nextTick(() => {
        state.luckcard = LuckyCard(
          {
            scratchDiv: scratchcard.value,
            coverColor: props.coverColor,
            coverImg: props.coverImg,
            ratio: Number(props.ratio),
            callback: function () {
              //console.log(this);
              clearCover();
              emit('open', this);
            }
          },
          () => {}
        ) as any;
      });
    });
   watch(
      () => props.content,
      (val) => {
        result.value=val;
      }
    );
    return {
      ...state,
      result,
      classes,
      scratchcard
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
