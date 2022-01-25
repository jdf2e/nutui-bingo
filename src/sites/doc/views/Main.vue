<template>
  <doc-header></doc-header>
  <div class="doc-content" :class="themeName()">
    <div class="doc-content-index">
      <div class="content-left">
        <div class="content-title"> NutUI-Bingo </div>
        <div class="content-smile"> </div>
        <div class="content-subTitle">基于 NutUI 的抽奖组件库，助力营销活动和小游戏场景。</div>
        <div class="content-button">
          <div class="leftButton" @click="toIntro">
            <div class="leftButtonText">开始使用</div>
          </div>
          <div class="rightButton">
            <div class="rightButtonText">扫码体验</div>
            <div class="qrcodepart">
              <div class="qrcode-text"> 请使用手机扫码体验 </div>
              <div class="qrcode"> </div>
            </div>
          </div>
          <iframe
            style="margin-left: 20px"
            src="https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui-bingo&type=star&count=true&size=large"
            frameborder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </div>
      </div>
      <!-- <div class="content-right">
        <div class="image-demo"></div>
      </div> -->
    </div>
    <div class="title">组件库案例</div>
    <!-- <div class="title">赋能案例</div> -->
    <div class="doc-content-cases-content__list">
      <swiper
        :autoplay="swiper_options.autoplay"
        :loop="swiper_options.loop"
        :speed="swiper_options.speed"
        :pagination="swiper_options.pagination"
        :navigation="swiper_options.navigation"
        :spaceBetween="swiper_options.spaceBetween"
        :coverflowEffect="swiper_options.coverflowEffect"
        :centeredSlides="swiper_options.centeredSlides"
        :slidesPerView="swiper_options.slidesPerView"
        class="swiper"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in casesImages"
          :key="index"
        >
          <img :src="item.img" />
          <div class="desc">
            <span class="desc-tit">{{item.title}}</span>
            <span class="desc-txt">
              {{item.desc}}
            </span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <doc-footer></doc-footer>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  computed,
  ref
} from 'vue';
import Header from '@/sites/doc/components/Header.vue';
import Footer from '@/sites/doc/components/Footer.vue';
import router from '../router';
import { RefData } from '@/sites/assets/util/ref';
import { ApiService } from '@/sites/service/ApiService';

import SwiperCore, { Autoplay, Pagination, EffectCoverflow,Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/swiper-bundle.css';
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Autoplay, Pagination, EffectCoverflow,Navigation]);

export default defineComponent({
  name: 'main',
  components: {
    [Header.name]: Header,
    [Footer.name]: Footer,
    Swiper,
    SwiperSlide
  },
  setup() {
    const data = reactive({
      // theme: 'white',
      articleList: new Array(),
      casesImages: [
        {
          img: "https://img13.360buyimg.com/imagetools/jfs/t1/6407/16/20895/121076/61ee7758Efa48a526/5a6164476a6f67a8.png",
          title: "幸运大转盘",
          desc: "大转盘滚动抽奖，可配置奖品、样式等"
        },
        {
          img: "https://img11.360buyimg.com/imagetools/jfs/t1/175841/32/26077/118716/61ee77c8E63f68506/3617992ff001f5da.png",
          title: "跑马灯",
          desc: "跑马灯转动抽奖，可配置奖品、样式等"
        },
        {
          img: "https://img14.360buyimg.com/imagetools/jfs/t1/208183/30/16424/24043/61ee7b25E5daf8f0c/54b6e0b0370c27dd.png",
          title: "九宫格",
          desc: "九宫格抽奖，可配置奖品、图片等"
        },
        {
          img: "https://img13.360buyimg.com/imagetools/jfs/t1/109423/18/21052/53432/61ee7795Ec3a96057/79650b95c77200aa.png",
          title: "刮刮卡",
          desc: "多种场景模式，支持比例、背景等配置"
        },
        {
          img: "https://img13.360buyimg.com/imagetools/jfs/t1/133881/34/22453/133525/61ee77b1Ed1a9aa5e/158026b920f2e368.png",
          title: "幸运大礼盒",
          desc: "开箱子场景，支持图片、事件回调等"
        },
        {
          img: "https://img14.360buyimg.com/imagetools/jfs/t1/90480/31/20134/56354/61ee7ba4Ea361b3f4/51576de0c39ef352.png",
          title: "摇奖机",
          desc: "可配置转动圈数、时间、事件回调等"
        },
        {
          img: "https://img12.360buyimg.com/imagetools/jfs/t1/14463/11/20040/131653/61ee7c2aE91adee7d/2d8a8b832dbe8da8.png",
          title: "砸金蛋",
          desc: "可配置金蛋数量、图片大小等"
        },
        {
          img: "https://img12.360buyimg.com/imagetools/jfs/t1/117915/35/27960/112048/61ee77ebE233c034a/245773ac197c6903.png",
          title: "红包雨",
          desc: "可配置红包雨数量，事件回调等"
        },
        {
          img: "https://img12.360buyimg.com/imagetools/jfs/t1/122265/15/21771/169708/61ee7827E55a62803/f4155486b089fa12.png",
          title: "摇一摇",
          desc: "可配置红包，手机震动，回调函数等"
        },
        // {
        //   img: "https://img12.360buyimg.com/imagetools/jfs/t1/126785/39/21940/107005/61ee7c7dE889de475/6dc701e563f68d1d.png",
        //   title: "娃娃机",
        //   desc: "可配置奖品列表、速度，指定奖品等"
        // },
        {
          img: "https://img13.360buyimg.com/imagetools/jfs/t1/6981/39/21101/49425/61ee7cc3E505cf90b/239c85be06a89759.png",
          title: "摇骰子",
          desc: "可配置骰子速度，指定中奖数字等"
        },
        {
          img: "https://img10.360buyimg.com/imagetools/jfs/t1/214388/21/11592/35437/61ee7d01E7ea1eff3/8ec26d395947a556.png",
          title: "你藏我猜",
          desc: "可配置交换次数、速度、回调函数等"
        },
      ],
      currentCaseItem: {},
      currentCaseIndex: 0,
      localTheme: localStorage.getItem('nutui-theme-color'),
      showAwait: false
    });
    let swiper_options = reactive({
      autoplay: {
        disableOnInteraction: false, // 鼠标滑动后继续自动播放
        delay: 4000, //4秒切换一次
      },
      speed: 500, //切换过渡速度
      loop: true,
      slidesPerView: 4, //解决最后一张切换到第一张中间的空白
      // centeredSlides: true, //设置slide居中
      spaceBetween: 25,
      coverflowEffect: {
        // rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
        stretch: 50, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
        depth: 100, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        modifier: 1, //depth和rotate和stretch的倍率，相当于            depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        // slideShadows: false, //开启slide阴影。默认 true。
      },
      observer: true,
      observeParents: true,
      // navigation: {
      //   nextElRef: ".swiper-button-next",
      //   prevElRef: ".swiper-button-prev",
      // },
      pagination: {
        clickable: true,
      },
    });
    // let mySwiper = computed(() => {
    //   return this.$refs.mySwiper.swiper;
    // })
    let caseSwiper: any = null;
    onMounted(() => {
      // 文章列表接口
      // const apiService = new ApiService();
      // apiService.getArticle().then((res) => {
      //   if (res?.state == 0) {
      //     data.articleList = (res.value.data.arrays as any[])
      //       .map((item) => {
      //         if (item.type == 1) {
      //           return item;
      //         }
      //       })
      //       .filter((i) => i);
      //   }
      // });
      // apiService.getCases().then((res) => {
      //   if (res?.state == 0) {
      //     data.casesImages = (res.value.data.arrays as any[]).map((item) => {
      //       if (item.cover_image?.length) {
      //         item.cover_image = item.cover_image.split(',')[0];
      //       }
      //       return item;
      //     });
      //     if (data.casesImages?.length) {
      //       data.currentCaseItem = data.casesImages[data.currentCaseIndex];
      //     }

      //     setTimeout(() => {
      //       caseSwiper = new Swiper('.doc-content-cases-content__list', {
      //         direction: 'horizontal',
      //         slidesPerView: '5',
      //         initialSlide: 1,
      //         loop: true,
      //         on: {
      //           slideChange: function () {
      //             let realIndex = (this as any).realIndex;
      //             data.currentCaseIndex =
      //               realIndex === 0
      //                 ? data.casesImages.length - 1
      //                 : realIndex - 1;
      //             setTimeout(() => {
      //               data.currentCaseItem =
      //                 data.casesImages[data.currentCaseIndex];
      //             }, 230);
      //           }
      //         }
      //       });
      //     }, 500);
      //   }
      // });

    });
    const goAwait = () => {
      data.showAwait = true;
    };
    const hideAwait = () => {
      data.showAwait = false;
    };
    const onLeft = () => {
      caseSwiper.slidePrev();
    };

    const onRight = () => {
      caseSwiper.slideNext();
    };

    const themeName = computed(() => {
      return function () {
        return `doc-content-${RefData.getInstance().themeColor.value}`;
      };
    });
    const themeNameValue = computed(() => {
      return function () {
        return RefData.getInstance().themeColor.value;
      };
    });
    const toLink = (id: number) => {
      window.open('//jelly.jd.com/article/' + id);
    };
    function toIntro() {
      router.push({ path: '/intro' });
    }
    const toDetail = () => {
      window.open('/cat');
    };
    return {
      // mySwiper,
      swiper_options,
      toIntro,
      ...toRefs(data),
      themeName,
      themeNameValue,
      toLink,
      onLeft,
      onRight,
      toDetail,
      goAwait,
      hideAwait
    };
  }
});
</script>
<style lang="scss">
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.doc-content {
  background: linear-gradient(130.16deg, rgba(219,210,255,1) 0%,rgba(247,239,247,1) 26.666302447552447%,rgba(241,240,246,1) 66.69307255244755%,rgba(255,236,203,1) 100%);
}
.doc-content-index {
  .content-left {
    .content-title {
      animation: fadeInLeft 1s both;
    }
    .content-smile {
      animation: fadeInLeft 1s both 0.5s;
    }
    .content-subTitle {
      animation: fadeInLeft 1s both 0.5s;
    }
    .content-button {
      iframe {
        animation: fadeInLeft 1s both 1.2s;
      }
      .leftButton {
        animation: fadeInLeft 1s both 1.2s;
      }
      .rightButton {
        animation: fadeInLeft 1s both 1.2s;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.doc-content-index {
  display: flex;
  height: 550px;
  // background-color: #070505;
  min-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  padding: 0 0 2%;
  // justify-content: space-around;
  align-items: center;
  background: url('../../assets/images/picture-demo.png') no-repeat;
  background-size: 726px 523px;
  background-position: right 0;
  .content-left {
    // padding: 5%;
    // margin: auto 0;
    // flex: 1;
    // min-width: 550px;
    width: 100%;
    // height: 100%;
    .content-title {
      // line-height: 36px;
      font-size: 42px;
      color: #1A1A1A;
      font-weight: 700;
    }
    .content-subTitle {
      margin-top: 15px;
      font-size: 20px;
      // font-weight: 800;
      color: #5F50FB;
    }
    .content-button {
      position: relative;
      display: flex;
      margin-top: 40px;
      color: white;
      iframe {
        align-self: center;
      }
      .leftButton {
        display: flex;
        .leftButtonText {
          align-self: center;
          margin: auto;
          font-size: 20px;
          color: rgba(255, 255, 255, 1);
        }
        width: 200px;
        height: 50px;
        // background: linear-gradient(135deg, rgba(114,60,255,1) 0%,rgba(111,58,255,1) 63.49938195167575%,rgba(150,110,255,1) 87.35307751528254%,rgba(149,117,241,1) 100%);
        border-radius: 29px;
        background: url("../../assets/images/btn-bg.png") no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }
      .rightButton {
        display: flex;
        position: relative;
        .rightButtonText {
          align-self: center;
          margin: auto;
          font-size: 20px;
          color: #723CFF;
        }
        margin-left: 26px;
        width: 200px;
        height: 50px;
        border: 3px solid rgba(114,60,255,1);
        border-radius: 29px;
        cursor: pointer;
        &:hover {
          .qrcodepart {
            display: block;
          }
        }
      }
      .qrcodepart {
        display: none;
        position: absolute;
        right: 13px;
        top: 50px;
        padding: 4px;
        width: 166px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.11);
        .qrcode-text {
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          text-align: center;
        }
        .qrcode {
          width: 160px;
          height: 160px;
          margin: 0 auto;
          background: url(https://img11.360buyimg.com/imagetools/jfs/t1/167199/15/24963/2648/61ea6b4dE7bcc7a55/bccecb56cb063dff.png)
            no-repeat;
          background-size: cover;
        }
      }
    }
  }
  .content-right {
    .image-demo {
      width: 726px;
      height: 523px;
      background: url('../../assets/images/picture-demo.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
.title {
  font-size: 26px;
  // font-weight: 800;
  margin: 130px 0 50px;
  text-align: center;
  color: rgba(26,26,26,0.73);
}
.doc-content-cases-content__list {
  width: 1200px;
  margin: 20px auto 100px;
}
::v-deep(.swiper-container){
  .swiper-pagination {
    bottom: 0;
    .swiper-pagination-bullet-active {
      background: rgba(0,0,0,0.6);
    }
  }
  .swiper-button-prev{
    width: 30px;
    height: 30px;
    background:url("https://img13.360buyimg.com/imagetools/jfs/t1/222242/19/4512/4563/61a871c4E8bd649da/34621f6e83220600.png") no-repeat;
    background-size: 100% 100%;
    &::after {
      display: none;
    }
  }
  .swiper-button-next{
    width: 30px;
    height: 30px;
    background:url("https://img13.360buyimg.com/imagetools/jfs/t1/205759/28/17284/4603/61a871c4E74e815ac/9247fb41d5871179.png") no-repeat;
    background-size: 100% 100%;
    &::after {
      display: none;
    }
  }
}
::v-deep(.swiper-wrapper){
  display: flex;
  transform: translate3d(0, 0, 0);
  transition: all 0.6s ease;
  align-items: center;
  .swiper-slide {
    width: 280px;
    height: 390px;
    padding: 30px 28px;
    flex-shrink: 0;
    background: rgba(255,255,255,1);
    border-radius: 19px;
    text-align: center;
    font-size: 18px;
    background: #fff;
    justify-content: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
    > img {
      width: 220px;
      height: 220px;
    }
  }
  .swiper-slide-active {
    // transform: scale(1);
  }
  .desc {
    span {
      color: rgba(26,26,26,1);
    }
    .desc-tit {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 18px;
      margin: 20px 0 10px;
      font-weight: 900;
    }
    .desc-txt {
      display: block;
      margin: 0 auto;
      width: 80%;
      font-size: 14px;
    }
  }
  &.noShadow {
    .swiper-slide {
      box-shadow: none !important;
    }
  }
}

.a-l {
  text-align: center;
}
</style>
