<template>
  <div class="screen">
    <div class="screen_container" ref="screen">
      <div class="header">
        <Head></Head>
      </div>
      <div class="footer">
        <div class="left">
          <Tourist class="box1"></Tourist>
          <Sex class="box2"></Sex>
          <Age class="box3"></Age>
        </div>
        <div class="center">
          <Map class="box4"></Map>
          <Line class="box5"></Line>
        </div>
        <div class="right">
          <Rank class="box6"></Rank>
          <Year class="box7"></Year>
          <Counter class="box8"></Counter>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Head from './components/head/index.vue'

import Tourist from './components/tourist/index.vue'
import Sex from './components/sex/index.vue'
import Age from './components/age/index.vue'

import Map from './components/map/index.vue'
import Line from './components/line/index.vue'

import Rank from './components/rank/index.vue'
import Year from './components/year/index.vue'
import Counter from './components/counter/index.vue'

const screen = ref()
onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})
//定义大屏缩放比例
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w
  const wh = window.innerHeight / h
  return ww < wh ? ww : wh
}
//监听视口变化
window.onresize = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
</script>

<style lang="scss" scoped>
.screen {
  width: 100vw;
  height: 100vh;
  background: url('./images/bg.png') no-repeat;
  background-size: cover;

  &_container {
    position: fixed;
    width: 1920px;
    height: 1080px;
    left: 50%;
    top: 50%;
    transform-origin: left top;

    .header {
      width: 100%;
      height: 40px;
    }

    .footer {
      width: 100%;
      display: flex;
      color: #fff;
      font-size: 24px;

      .left {
        flex: 1;
        height: 1040px;
        display: flex;
        flex-direction: column;

        .box1 {
          flex: 1.2;
        }

        .box2 {
          flex: 1;
        }

        .box3 {
          flex: 1;
        }
      }

      .center {
        flex: 2;
        display: flex;
        flex-direction: column;

        .box4 {
          flex: 4;
        }

        .box5 {
          flex: 1;
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;

        .box6 {
          flex: 1.5;
        }

        .box7 {
          flex: 1;
        }

        .box8 {
          flex: 1;
        }
      }
    }
  }
}
</style>
