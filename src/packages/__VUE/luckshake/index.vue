<template>
  <view :class="classes">
    <view class="shake-box" :style="styles">
      <view class="shake-box-img" :class="[loading ? 'animation': 'rockit']">
        <img class="img-top" :src="luckImgTop" />
        <img class="img-bottom" :src="luckImgBottom" />
      </view>
    </view>
    <slot name="shake-num"></slot>
    <view v-if="clickPoint" class="pointer" :class="[loading ? '' : 'clickShake']" :style="pointerStyle" @click="clickShake">
      <img :src="clickPoint" />
    </view>
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { ref, computed, onMounted, onUnmounted, reactive } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('luckshake');
import Vconsole from 'vconsole'
// let vConsole = new Vconsole()


export default create({
  props: {
    luckWidth: {
      type: String,
      default: '200px'
    },
    luckHeight: {
      type: String,
      default: '106px'
    },
    luckImgTop: {
      type: String,
      default: '//img13.360buyimg.com/imagetools/jfs/t1/203344/20/16885/31149/61a07610E2520903c/899a906f039535b0.png'
    },
    luckImgBottom: {
      type: String,
      default: '//img13.360buyimg.com/imagetools/jfs/t1/208979/10/10371/28087/61a07610Ee1e2f1b4/5b6fa12658906939.png'
    },
    luckImgLeft: {
      type: String,
      default: '//img10.360buyimg.com/imagetools/jfs/t1/155853/24/24382/2453/61a088d9Eea945287/8e952421cb2ce208.png'
    },
    luckImgRight: {
      type: String,
      default: '//img10.360buyimg.com/imagetools/jfs/t1/135987/21/24696/2463/61a088d9Ebff19f9c/10d756c1d75ee03f.png'
    },
    clickPoint: {
      type: String,
      default: '//img11.360buyimg.com/ling/jfs/t1/104643/13/16899/24402/5e830316E70f93784/3f9e9b0d6e11db14.png'
    },
    shakeNum: {
      type: Number,
      default: 3
    },
    durationTime: {
      type: Number,
      default: 1000
    },
    durationAnimation: {
      type: Number,
      default: 1000
    },
    pointerStyle: {
      default:() => {
        return {
          width: '90px',
          height: '90px'
        }
      }
    }
  },
  emits: ["click-shake", "shake-event"],
  setup(props: any, { emit }: any) {
    let { luckWidth, luckHeight, shakeNum, durationTime, durationAnimation } = reactive(props);

    let loading = ref(false);

    let shakeInfo = ref({
      openFlag: false,  // 是否开启摇一摇，如果是小程序全局监听摇一摇，这里默认为true
      shakeSpeed: 110,  // 设置阈值，越小越灵敏
      lastTime: 0,  // 此变量用来记录上次摇动的时间
      x: 0,
      y: 0,
      z: 0, // 记录对应 x、y、z 三轴的数值
      lastX: 0,
      lastY: 0,
      lastZ: 0, // 记录对应 x、y、z 三轴上次的数值
    });

    onMounted(() => {
      openShakeEvent();  // 打开摇一摇功能
      shakeChange()  //开启摇一摇
    });

    // 页面销毁时，取消监听
    onUnmounted(() => {
      window.removeEventListener("devicemotion", shake, false);
      closeShakeEvent()  // 关闭摇一摇功能
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
      };
    });

    const styles = computed(()=>{
      return {
        width: luckWidth,
        height: luckHeight,
      }
    })

    // 开启摇一摇
    const openShakeEvent = () => {
      shakeInfo.value.openFlag = true;
    }

    // 关闭摇一摇
    const closeShakeEvent = () => {
      shakeInfo.value.openFlag = false;
    }

    //摇一摇成功
    const shakeOk = () => {
      // closeShakeEvent();
      loading.value = true;
    }

    // 开启摇一摇
    const shakeChange = () => {
      // 防止多次点击触发
      if(loading.value) return
      // loading.value = true;
      if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', shake, false) //devicemotion:获取设备的运动状态
      }
    }

    // 判断是否为摇一摇
    const shake = (eventData: any) => {
      if (!shakeInfo.value.openFlag) {
        return;
      }
      let acceleration = eventData.accelerationIncludingGravity;
      let nowTime = new Date().getTime();// 当前时间戳
      if (nowTime - shakeInfo.value.lastTime > 100) {//手机抖动的时间要大于100ms,防止用户拿手机时，突然抖动而触发摇一摇功能
        let diffTime = nowTime - shakeInfo.value.lastTime;
        shakeInfo.value.lastTime = nowTime;
        shakeInfo.value.x = acceleration.x;// 表示x轴（西到东）上的加速度
        shakeInfo.value.y = acceleration.y;// 表示y轴（南到北）上的加速度
        shakeInfo.value.z = acceleration.z;// 表示z轴（下到上）上的加速度
        // 计算摇一摇的速度
        let speed =
          (Math.abs(
            shakeInfo.value.x + shakeInfo.value.y + shakeInfo.value.z - shakeInfo.value.lastX - shakeInfo.value.lastY - shakeInfo.value.lastZ
          ) /
            diffTime) *
          10000;
        if (speed > shakeInfo.value.shakeSpeed) { // 速度要大于设置的阈值，证明用户是在快速摇手机
          shakeOk();
          // 使手机震动
          mobileShake(durationTime);
          setTimeout(() => {
            emit('shake-event');
            loading.value = false;
            console.log('loading.value', loading.value)
          }, durationAnimation)
        }
        // 赋值，为下一次计算做准备
        shakeInfo.value.lastX = shakeInfo.value.x;
        shakeInfo.value.lastY = shakeInfo.value.y;
        shakeInfo.value.lastZ = shakeInfo.value.z;
      }
    }
    
    const clickShake = () => {
      // 防止多次点击触发
      if(loading.value) return
      loading.value = true;
      // 使手机震动
      mobileShake(durationTime);
      setTimeout(() => {
        emit('click-shake');
        loading.value = false;
      }, durationAnimation)
    };

    // 使手机震动
    const mobileShake = (duration: any) => {
      if (navigator.vibrate) {
        navigator.vibrate(duration);
      }
    }

    return {
      classes,
      styles,
      mobileShake,
      clickShake,
      loading,
    };
  }
});
</script>


<style lang="scss">
@import 'index.scss';
</style>