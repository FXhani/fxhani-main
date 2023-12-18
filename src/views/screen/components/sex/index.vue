<template>
  <div class="sex">
    <div class="title">
      <p>男女比例</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="content">
      <div>
        <div class="man content_img">
          <img src="../../images/man.png" alt="" />
        </div>
        <p>男士58%</p>
      </div>
      <div>
        <div class="women content_img">
          <img src="../../images/woman.png" alt="" />
        </div>
        <p>女士42%</p>
      </div>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const charts = ref()
onMounted(() => {
  //初始化echarts实例
  let mycharts = echarts.init(charts.value)
  //设置配置项
  mycharts.setOption({
    //组件标题
    title: {
      text: '男女比例', //主标题
      textStyle: {
        //主标题颜色
        color: 'skyblue',
      },
      left: '40%',
    },
    //x|y
    xAxis: {
      show: false,
      min: 0,
      max: 100,
    },
    yAxis: {
      show: false,
      type: 'category',
    },
    series: [
      {
        type: 'bar',
        data: [58],
        barWidth: 20,
        z: 100,
        itemStyle: {
          color: 'skyblue',
          borderRadius: 20,
        },
      },
      {
        type: 'bar',
        data: [100],
        barWidth: 20,
        //调整女士柱条位置
        barGap: '-100%',
        itemStyle: {
          color: 'pink',
          borderRadius: 20,
        },
      },
    ],
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
  })
})
</script>

<style lang="scss" scoped>
.sex {
  width: 100%;
  height: 100%;
  background: url('../../images/dataScreen-main-lc.png') no-repeat;
  background-size: 100% 100%;
  margin: 20px 0;

  .title {
    margin-left: 20px;

    p {
      color: white;
      font-size: 20px;
    }
  }

  .content {
    display: flex;
    justify-content: center;

    &_img {
      margin: 20px 20px 10px;
      width: 111px;
      height: 115px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .man {
      background: url('../../images/man-bg.png') no-repeat;
    }

    .women {
      background: url('../../images/woman-bg.png') no-repeat;
    }

    p {
      text-align: center;
    }
  }

  .charts {
    margin-top: 10px;
    height: 100px;
  }
}
</style>
