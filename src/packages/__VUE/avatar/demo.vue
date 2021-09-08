<template>
  <div class="demo full">
    <h2>默认用法 (内置"small","normal","large"三种尺寸规格)</h2>
      <nut-pm-avatar
        size="large"
        icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      >
      </nut-pm-avatar>
  </div>
</template>
<script lang="ts">
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('avatar');
export default createDemo({
  props: {},
  setup() {
    const handleClick = () => {
      console.log('触发点击头像');
    };
    return { handleClick };
  }
});
</script>
<style lang="scss" scoped>
.nut-cell {
  align-items: flex-end;
  border-radius: 0;
}
.demo-avatar {
  color: #fff;
}
</style>
