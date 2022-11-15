<template>
  <div
    class="online-code"
    ref="onlineCode"
    :class="{ scroll: scroll, isExpand: expand, win: win }"
  >
    <div class="expand fixed" @click="expand = !expand" title="展开全部代码">
      <img
        class="icon-expand"
        :style="{ display: expand ? 'block' : 'none' }"
        src="../../../assets/images/icon-expand.svg"
      />
      <img
        class="icon-unexpand"
        :style="{ display: expand ? 'none' : 'block' }"
        src="../../../assets/images/icon-unexpand.svg"
      />
    </div>
    <slot></slot>
    <div class="online-part">
      <div class="list" @click="copyCode">
        <img
          class="online-icon"
          src="https://img10.360buyimg.com/imagetools/jfs/t1/142615/10/25537/3671/61c31e6eE3ba7fb90/d1953e2b47e40e86.png"
        />
        <div class="online-tips">复制代码</div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, getCurrentInstance, onMounted, computed } from "vue";
import { compressText, copyCodeHtml, decompressText } from "./basedUtil";

export default {
  setup(props, ctx) {
    const expand = ref(false); // 展开收起态
    const scroll = ref(false); // 代码块是否滚动
    const win = ref(false); // 判断是否是windows系统
    const onlineCode = ref(null);
    const codeType = ref(``);

    onMounted(() => {
      OSnow();
      const sourceValue = decompressText(onlineCode.value.dataset.value);
      codeType.value = onlineCode.value.dataset.type;
      const Oheight = onlineCode.value.childNodes[2].childNodes[0].offsetHeight;
      if (Oheight > 400) {
        scroll.value = true;
      }
    });
    // const copyCode = () => {
    //   const sourceValue = decompressText(onlineCode.value.dataset.value);
    //   copyCodeHtml(sourceValue, () => {
    //     alert("复制成功");
    //   });
    // };
    /* 判断系统类型 */
    const OSnow = () => {
      const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
      if (!isMac) {
        win.value = true;
      }
    };
    return {
      onlineCode,
      // copyCode,
      codeType,
      expand,
      scroll,
      win,
    };
  },
};
</script>
