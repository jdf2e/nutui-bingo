<template>
  <div class="demo">
    <h2>基础用法1</h2>
    <nut-bingo-lucknine :data="dataArr"></nut-bingo-lucknine>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('lucknine');
export default createDemo({
  setup() {
    const dataArr =reactive( [
        {
          name: '商品名称名称',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/174906/19/10256/188436/60a242afE89a800c9/801b64e5b80fde9a.jpg!q70.jpg'
        },
        {
          name: '商品名称名称',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/133995/36/19954/205635/60ccc436E19f8b69b/8fc0a468ac037d2e.jpg!q70.jpg'
        },
        {
          name: '商品名称名称',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/17279/28/13940/140479/60b984f4E723b9981/d007711aa1cdc358.jpg!q70.jpg'
        },
        {
          name: '商品名称名称',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/190452/2/84/116077/608627ecEef11d11e/e0a93f09eca31ddf.jpg!q70.jpg'
        },
        {
          name: '商品名称名称',
          price: '199',
          pictureUrl: 'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg'
        },
        {
          name: '祥禾饽饽铺京东自营旗舰店',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s66x66_jfs/t1/195378/33/9432/145698/60d0400eE0520ca9f/2283995f6c6176e7.jpg!q50.jpg'
        },
        {
          name: '鲜花4+1束 鲜花速递 ',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/185809/36/6800/181830/60b4fdaaEa74ddfdf/7f3776e9a493ec20.jpg!q70.jpg'
        },
        {
          name: '大连萨米托爱心樱桃',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/191656/26/7699/116921/60c1ed9eE933be59e/5c77c8eabda19d0d.jpg!q70.jpg'
        },
      ])
    return {
      dataArr
    };
  }
});
</script>

<style lang="scss" scoped>

</style>
