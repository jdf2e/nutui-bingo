<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nutbig-squarenine
      :prize-list="dataArr"
      :prize-id="prizeId"
      :cardImg="cardImg"
      @click="click"
    >
    </nutbig-squarenine>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import { createComponent } from "../../utils/create";
const { createDemo } = createComponent("squarenine");
export default createDemo({
  setup() {
    const dataArr = reactive([
      {
        name: "商品名称名称",
        id: 1,
        price: "199",
        pictureUrl:
          "//m.360buyimg.com/babel/s180x180_jfs/t1/174906/19/10256/188436/60a242afE89a800c9/801b64e5b80fde9a.jpg!q70.jpg",
      },
      {
        name: "没有中奖哦",
        price: "199",
        id: 2,
        pictureUrl:
          "https://img14.360buyimg.com/imagetools/jfs/t1/213369/13/5346/13899/619b60e5E2761162e/dca9b64e09bb2fed.png",
      },
      {
        name: "商品名称名称",
        price: "199",
        id: 3,
        pictureUrl:
          "//m.360buyimg.com/babel/s180x180_jfs/t1/17279/28/13940/140479/60b984f4E723b9981/d007711aa1cdc358.jpg!q70.jpg",
      },
      {
        name: "商品名称名称",
        price: "199",
        id: 4,
        pictureUrl:
          "//m.360buyimg.com/babel/s180x180_jfs/t1/190452/2/84/116077/608627ecEef11d11e/e0a93f09eca31ddf.jpg!q70.jpg",
      },
      {
        name: "商品名称名称",
        price: "199",
        id: 5,
        pictureUrl:
          "https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg",
      },
      {
        name: "祥禾饽饽铺京东自营旗舰店",
        price: "199",
        id: 6,
        pictureUrl:
          "//m.360buyimg.com/babel/s66x66_jfs/t1/195378/33/9432/145698/60d0400eE0520ca9f/2283995f6c6176e7.jpg!q50.jpg",
      },
      {
        name: "鲜花4+1束 鲜花速递 ",
        price: "199",
        id: 7,
        pictureUrl:
          "//m.360buyimg.com/babel/s180x180_jfs/t1/185809/36/6800/181830/60b4fdaaEa74ddfdf/7f3776e9a493ec20.jpg!q70.jpg",
      },
      {
        name: "大连萨米托爱心樱桃",
        price: "199",
        id: 8,
        pictureUrl:
          "//m.360buyimg.com/babel/s180x180_jfs/t1/191656/26/7699/116921/60c1ed9eE933be59e/5c77c8eabda19d0d.jpg!q70.jpg",
      },
    ]);
    const prizeId: any = ref();
    const cardImg: any = ref(
      "//img11.360buyimg.com/imagetools/jfs/t1/73511/35/17197/9388/613852cdE75dc6822/ddb31e0f3cfdcb81.png"
    );
    const click = () => {
      prizeId.value = 2;
    };
    return {
      dataArr,
      prizeId,
      cardImg,
      click,
    };
  },
});
</script>

<style lang="scss">
.nut-ninegrid {
  background-image: url("//img10.360buyimg.com/imagetools/jfs/t1/182262/4/21143/406696/6126fceeEccce5223/61a6b338777fd857.png");
  background-size: 100% 100%;
}
</style>
