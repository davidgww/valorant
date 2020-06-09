<template>
  <div class="Info" id="Info">
    <v-chart :options="options" :auto-resize="true"/>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
// 饼状图
import 'echarts/lib/chart/pie'
// 折线
import 'echarts/lib/chart/line'
// 柱状图
import 'echarts/lib/chart/bar'

// 提示
import 'echarts/lib/component/tooltip'
// 图例
import 'echarts/lib/component/legend'
// 标题
import 'echarts/lib/component/title'
export default {
  components: { 'v-chart': ECharts }, //局部注册
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    var self = this;
    self.options = {
      // 标题
      title: {
        x: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 'normal'
        }
      },
      // 工具提示
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      // 图例说明
      legend: {
        show: true,
        x: 'center',
        bottom: 0,
        itemWidth: 8,
        itemHeight: 8,
        y: 'bottom',
        data: ['Sheriff 警长1', 'Sheriff 警长2', 'Sheriff 警长3', 'Sheriff 警长4'],
        textStyle: { //底部一排按钮
          color: '#516177',
          fontSize: 12
        },
        // 底部增加百分比
        formatter: function(name) {
              // 获取legend显示内容
              let data = self.options.series[0].data;
              let total = 0;
              let tarValue = 0;
              for (let i = 0, l = data.length; i < l; i++) {
                  total += data[i].value;
                  if (data[i].name == name) {
                      tarValue = data[i].value;
                  }
              }
              let p = (tarValue / total * 100).toFixed(2);
              return name + ' ' + ' ' + p + '%';
          },
      },
      // 各个部分的颜色
      color: ['#ff4655', '#1a2635', '#45b29d', '#fff'],
      // 拖拽的时候重新渲染  默认关闭
      calculable: true,
      // 工具箱
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          // dataView: { show: true, readOnly: false },
          magicType: {
            show: true,
            type: ['pie', 'funnel'],
            option: {
              funnel: {
                x: '25%',
                width: '50%',
                funnelAlign: 'left',
                max: 1548
              }
            }
          },
          // restore: { show: true },
          // saveAsImage: { show: true }
        }
      },
      label: {
        show: true,
        fontSize: 14
      },
      series: [
        {
          itemStyle: {
            normal: {
              // label: {
              //   show: true,
              //   formatter: '{b} : {c} ({d}%)'
              // },
              // labelLine: {
              //   show: true
              // }

              //隐藏标示文字
                label : {
                    show : false   
                },
                //隐藏标示线
                labelLine : {
                    show : false   
                }

            }
          },
          name: '枪械胜率',
          // 类型：这里是饼图
          type: 'pie',
          radius: '90%', //修改饼图大小
          center: ['50%', '32%'],
          // 数据
          data: [
            { value: 335, name: 'Sheriff 警长1' },
            { value: 310, name: 'Sheriff 警长2' },
            { value: 234, name: 'Sheriff 警长3' },
            { value: 135, name: 'Sheriff 警长4' },
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
.Info >>> .echarts {
  width: 155px;
  height: 260px;
  border:1px solid #1e2d43;
}
</style>