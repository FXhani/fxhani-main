<template>
  <div class="map" ref="charts"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
// 引入中国地图数据
import chinaJSON from './china.json'

const charts = ref()
// 注册地图数据
echarts.registerMap('china', chinaJSON as any)
onMounted(() => {
  let mychart = echarts.init(charts.value)
  mychart.setOption({
    geo: {
      map: 'china', //中国地图
      roam: true, //鼠标缩放的效果
      //地图的位置调试
      left: 150,
      top: 150,
      right: 150,
      zoom: 1.2,
      bottom: 0,
      //地图上的文字的设置
      label: {
        show: true, //文字显示出来
        color: 'white',
        fontSize: 14,
      },
      itemStyle: {
        //每一个多边形的样式
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'red', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'blue', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        opacity: 0.8,
      },
      //地图高亮的效果
      emphasis: {
        itemStyle: {
          color: 'red',
        },
        label: {
          fontSize: 40,
        },
      },
    },
    //布局位置
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
    series: [
      {
        type: 'lines', //航线的系列
        data: [
          {
            coords: [
              [116.405285, 39.904989], // 起点
              [119.306239, 26.075302], // 终点
            ],
            // 统一的样式设置
            lineStyle: {
              color: 'orange',
              width: 5,
            },
          },
          {
            coords: [
              [116.405285, 39.904989], // 起点
              [114.298572, 30.584355], // 终点
            ],
            // 统一的样式设置
            lineStyle: {
              color: 'yellow',
              width: 5,
            },
          },
        ],
        //开启动画特效
        effect: {
          show: true,
          symbol:
            'path://M995.679767 658.818049c-8.943231-1.490539-23.848617-2.981077-44.716157-4.471615-73.03639-8.943231-207.184862-26.829694-295.126638-38.754003l-19.377001-5.962154h-2.981077l-44.716157-13.414848c-4.471616 90.922853-10.43377 166.94032-17.886463 225.071325v10.43377l22.358078 10.43377 70.055313 32.791849c2.981077 1.490539 4.471616 4.471616 4.471616 7.452693l1.490539 55.149927v4.471615c0 2.981077-1.490539 5.962154-4.471616 4.471616l-114.77147-19.377001c-8.943231 22.358079-17.886463 34.282387-31.30131 35.772925h-1.490539c-13.414847 0-23.848617-11.924309-31.30131-35.772925l-114.77147 17.886463c-2.981077 0-4.471616-1.490539-4.471616-4.471616v-4.471616l1.490539-55.149927c0-2.981077 1.490539-5.962154 4.471615-7.452693l70.055313-32.791849 22.358079-10.43377V819.796215c-5.962154-58.131004-10.43377-134.148472-14.905386-225.071324l-46.206696 13.414847h-4.471615l-19.377002 4.471616c-87.941776 10.43377-222.090247 26.829694-295.126637 35.772925-20.86754 2.981077-35.772926 4.471616-44.716158 4.471616-23.848617 2.981077-25.339156-26.829694-7.452692-37.263464 2.981077-1.490539 56.640466-29.810771 123.714701-67.074236v-38.754003c0-14.905386 11.924309-26.829694 26.829695-26.829694s26.829694 11.924309 26.829694 26.829694v8.943232c40.244541-20.86754 81.979622-43.225619 119.243086-64.093159v-44.716157c0-14.905386 11.924309-26.829694 26.829694-26.829695s26.829694 11.924309 26.829694 26.829695v14.905385c23.848617-11.924309 43.225619-23.848617 56.640466-31.30131-1.490539-174.393013 11.924309-308.541485 61.112082-332.390101 2.981077-1.490539 4.471616-1.490539 7.452693-2.981078 1.490539 0 4.471616 0 5.962154-1.490538h5.962154c1.490539 0 4.471616 0 5.962154 1.490538 2.981077 0 4.471616 1.490539 7.452693 2.981078 49.187773 23.848617 62.60262 157.997089 58.131005 332.390101 13.414847 7.452693 32.791849 17.886463 55.149927 29.810772v-14.905386c0-14.905386 11.924309-26.829694 26.829694-26.829694s26.829694 11.924309 26.829695 26.829694v44.716157c37.263464 20.86754 78.998544 43.225619 119.243085 65.583698V506.783115c0-14.905386 11.924309-26.829694 26.829695-26.829694s26.829694 11.924309 26.829694 26.829694v44.716157c68.564774 37.263464 122.224163 67.074236 123.714702 68.564775 25.339156 10.43377 23.848617 41.73508-1.490539 38.754002z',
          color: '#1296db',
          symbolSize: 30,
        },
      },
    ],
  })
})
</script>

<style lang="scss" scoped></style>
