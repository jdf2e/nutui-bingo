<template>
  <doc-header></doc-header>
  <div class="doc-content" :class="themeName()">
    <div class="doc-content-index">
      <div class="content-left">
        <div class="content-title"> NutUI-bingo </div>
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
      <div class="content-right">
        <div class="image-demo"></div>
      </div>
    </div>
    <div class="title">组件库样例</div>
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
          img: "https://img14.360buyimg.com/imagetools/jfs/t1/202547/29/20143/263706/61cc1eaaEb4636005/a46c8d158437d052.jpg",
          title: "幸运大转盘",
          desc: "大转盘滚动抽奖，可配置奖品、样式等"
        },
        {
          img: "https://img13.360buyimg.com/imagetools/jfs/t1/202404/35/20107/279950/61cc1eaaE574c3eb8/39cf24a482d01e97.jpg",
          title: "跑马灯",
          desc: "跑马灯转动抽奖，可配置奖品、样式等"
        },
        {
          img: "https://img11.360buyimg.com/imagetools/jfs/t1/202949/13/20432/93032/61cc1eaaE27e30ed5/b1f9de2f68bed73e.jpg",
          title: "红包雨",
          desc: "可配置红包雨数量，事件回调等"
        },
        {
          img: "https://img11.360buyimg.com/imagetools/jfs/t1/223840/32/1825/143367/61cc1eabE5fa7e5b4/09da1e2b7c384459.jpg",
          title: "刮刮卡",
          desc: "多种场景模式，支持比例、背景等配置"
        },
        {
          img: "https://img11.360buyimg.com/imagetools/jfs/t1/172470/9/24728/128195/61cc1eaaE492cee7e/0ea9532c0cccd8f7.jpg",
          title: "幸运大礼盒",
          desc: "开箱子场景，支持图片、事件回调等"
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
      slidesPerView: 5, //解决最后一张切换到第一张中间的空白
      centeredSlides: true, //设置slide居中
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
      navigation: {
        nextElRef: ".swiper-button-next",
        prevElRef: ".swiper-button-prev",
      },
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
  // height: 926px;
  // background-color: #070505;
  min-width: 1200px;
  padding: 2% 15%;
  justify-content: space-around;
  align-items: center;
  .content-left {
    padding: 5%;
    // margin: auto 0;
    // flex: 1;
    min-width: 550px;
    .content-title {
      // line-height: 36px;
      font-size: 42px;
      color: #1A1A1A;
    }
    .content-subTitle {
      margin-top: 12px;
      font-size: 20px;
      font-weight: 800;
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
        background: linear-gradient(135deg, rgba(114,60,255,1) 0%,rgba(111,58,255,1) 63.49938195167575%,rgba(150,110,255,1) 87.35307751528254%,rgba(149,117,241,1) 100%);
        border-radius: 29px;
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
          background: url(https://img10.360buyimg.com/imagetools/jfs/t1/144370/21/26680/3050/61e90c2eEcc91650b/5a9c979e0b0624e9.png)
            no-repeat;
          background-size: cover;
        }
      }
    }
  }
  .content-right {
    .image-demo {
      width: 550px;
      height: 330px;
      background: url('../../assets/images/picture-demo.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
.title {
  font-size: 20px;
  font-weight: 800;
  margin: 130px 0 50px;
  text-align: center;
  color: rgba(26,26,26,0.73);
}
.doc-content-cases-content__list {
  width: 1400px;
  margin: 20px auto 100px;
}
::v-deep(.swiper-container ){
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
    width: 273px;
    height: 441px;
    padding: 40px 60px 126px;
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
      width: 100%;
      height: 100%;
    }
  }
  .swiper-slide-active {
    transform: scale(1);
  }
  .desc {
    span {
      color: rgba(26,26,26,1);
    }
    .desc-tit {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 14px;
      margin: 20px 0 10px;
      font-weight: 900;
    }
    .desc-txt {
      font-size: 12px;
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
