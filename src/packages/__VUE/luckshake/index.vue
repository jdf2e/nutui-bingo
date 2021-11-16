<template>
  <view :class="classes">
    <view class="shake-box" :style="styles">
      <view class="shake-box-img">
        <img :src="luckImg" />
      </view>
    </view>
    <slot name="shake-num"></slot>
    <view v-if="clickPoint" class="pointer" :style="pointerStyle" @click="clickShake">
      <img :src="clickPoint" />
    </view>
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { ref, toRefs, watch, computed, onMounted, onUnmounted, watchEffect, reactive } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('luckshake');
import { Toast } from "@nutui/nutui";
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
    luckImg: {
      type: String,
      default: '//img10.360buyimg.com/imagetools/jfs/t1/170552/22/23757/62926/6184db02Ef8e39eb2/d75b18ebfc850ff0.png'
    },
    clickPoint: {
      type: String,
      default: '//img11.360buyimg.com/ling/jfs/t1/104643/13/16899/24402/5e830316E70f93784/3f9e9b0d6e11db14.png'
    },
    durationTime: {
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
    let { luckWidth, luckHeight, durationTime } = reactive(props);

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

    onMounted(() => {
      init();
    });

    // 页面销毁时，取消监听
    onUnmounted(() => {
      
    });

    // 摇一摇抽奖次数
    let shakeIndex = ref(0);

    let isStartShake = ref(false);
    
    const init = () => {
      console.log('00')
      // 监听震动事件
      // IOS 13.3 需要用户触发，再能开启摇一摇 
      if (isStartShake.value) return;
      console.log('11')
      isStartShake.value = true;
      shakeIndex.value = addShake(() => {
        console.log('22')
        emit('shake-event');
      })
    };

    const clickShake = () => {
      // IOS 13.3 需要用户触发，再能开启摇一摇 
      mobileShake(durationTime);
      
    };

    /*
      addShake 添加摇一摇功能
      参数：cbShake 类型 fn 当用户进行了摇一摇之后要做的事情
      返回值：shakeIndex 开启的第几个摇一摇功能的索引，用来删除监听
    */
    const addShake = (cbShake: { (): void; (arg0: any): void; }) => {
      const maxRange = 60; // 当用户的两次加速度差值大于这个幅度，判定用户进行了摇一摇功能
      const minRange = 10; // 当用户的两次加速度差值小于这个幅度，判定用户停止摇动手机
      let isShake = false; // 记录用户是否摇动手机
      let lastX = 0,
          lastY = 0,
          lastZ = 0;
      let toShake = (e: any) => {
        let motion = e.acceleration;
        let { x, y, z } = motion;
        let range = Math.abs(x - lastX) + Math.abs(y - lastY) + Math.abs(z - lastZ);
        if (range > maxRange) { // 用户进行了摇一摇
          isShake = true;
        }
        if (range < minRange && isShake) { // 停止摇一摇
          cbShake(e);
          isShake = false;
        }
        lastX = x;
        lastY = y;
        lastZ = z;
      }
      const _window = window as any;
      if (!_window.shakeEvent) { // 建立 shakeEvent 存储所有的摇一摇的处理函数，方便一会取消
        _window.shakeEvent = [];
      }
      console.log('33')
      // toShake = throttle(toShake);
      _window.shakeEvent.push(toShake);
      setDeviceMotion(toShake, (errMessage: any) => {
        (Toast as any).text(errMessage);
      })
      return _window.shakeEvent.length - 1;//返回该次摇一摇处理的索引
    }
    
    /*
      setDeviceMotion 添加陀螺仪监控
      参数： cb devicemotion的事件处理函数; errCb 不支持devicemotion时的处理回调
    */
    const setDeviceMotion = (cb: { (e: any): void; (this: Window, ev: DeviceMotionEvent): any; (this: Window, ev: DeviceMotionEvent): any; }, errCb: { (errMessage: any): void; (arg0: string): void; }) => {
      console.log('55')
      if (!window.DeviceMotionEvent) {
        console.log('66')
        errCb("设备不支持DeviceMotion");
        return;
      }
      console.log('77')
      if (typeof DeviceMotionEvent.requestPermission === 'function') {
        // IOS13 设备
        console.log('88')
        DeviceMotionEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              console.log('888')
              window.addEventListener('devicemotion', cb);
            }
          })
          .catch((err: any) => {
            console.log('889')
            errCb("用户未允许权限");
          });
      } else {
        console.log('99')
        // 其他支持加速度检测的系统
        let timer = setTimeout(function () {
          errCb("用户未开启权限");
        }, 1000);
        window.addEventListener("devicemotion", (e) => {
          clearTimeout(timer);
        }, { once: true });
        window.addEventListener("devicemotion", cb);
      }
    }

    // 开始震动
    const mobileShake = (duration: number) => {
      if (navigator.vibrate) {
        navigator.vibrate(duration);
      }
      // console.log("摇一摇成功");
      emit('click-shake');
    }
    
    /*
        throttle 节流函数
        参数：
            fn 要节流的函数
            interval 节流间隔时间
            start 是否在节流开始时执行 (true在开始时执行，false在结束时执行)
        返回值：
            经过节流处理的函数
    */
    const throttle = (fn: { (e: any): void; apply?: any; }, interval = 200, start = true) => {
      if (typeof fn !== "function") {
        return console.error("请传入一个函数");
      }
      let timer = 0;
      return  (...arg: any) => {
        let _this = this;
        if (timer) {
          return;
        }
        start && fn.apply(_this, arg);
        timer = setTimeout(() => {
          (!start) && fn.apply(_this, arg);
          timer = 0;
        }, interval);
      }
    }


    return {
      classes,
      styles,
      shakeIndex,
      isStartShake,
      mobileShake,
      clickShake
    };
  }
});
</script>


<style lang="scss">
@import 'index.scss';
</style>