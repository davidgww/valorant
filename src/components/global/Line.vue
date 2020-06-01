<template>
<!--为echarts准备一个具备大小的容器dom-->
<div id="main" style="height: 260px;"></div>
</template>

<script>
import echarts from 'echarts'
// 提示
import 'echarts/lib/component/tooltip'
export default {
  name: '',
  data() {
    return {
      charts: '',
      opinionData: ["0", "1.36", "3", "4", "5", "2", "1.5", "3.5", "1.47", "5.8"]
    }
  },
  methods: {
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['']
        },
        grid: {
          left: '3%',
          right: '6%',
          bottom: '15%',
          too: '3%',
          containLabel: true
        },
        // 是否可以下载
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },

        // 工具提示
      tooltip: {
        trigger: 'item',
        formatter: '{c}'
      },
        xAxis: {
          type: 'category',
          name: "Time",
          nameLocation: "end",
          nameTextStyle: {
            padding: -12,
          },
          boundaryGap: false,
          // data: ["1", "2", "3", "4", "5","1", "2", "3", "4", "5"]
          axisLine: {
            lineStyle: {
              color: '#ccc',
              width: 1, //这里是为了突出显示加上的  
            }
          },

        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 6,
          interval: 2,
          name: "Rating",
          nameLocation: "end",
          splitLine: { show: false },//去掉默认横向分割线  
          nameTextStyle: {
            padding: -8
          },
          axisLine: {
            lineStyle: {
              color: '#ccc',
              width: 1, //这里是为了突出显示加上的  
            }
          },
        },

        series: [{
          name: '击杀',
          type: 'line',
          stack: '总量',
          itemStyle: {  //折线图拐点处是否显示数值
            normal: {
              label: {
                show: true,
                 textStyle : {
                    fontSize : '20',
                    fontFamily : '微软雅黑',
                    fontWeight : 'bold'
                },
              }
            }
          },
          data: this.opinionData
        }]
      })
    }
  },
  //调用
  mounted() {
    this.$nextTick(function () {
      this.drawLine('main')
    })
  }
}
</script>

<style scoped>
#main {
  width: 100%;
  border: 1px solid #1e2d43;
}
</style>
