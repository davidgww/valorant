<template>
  <div class="pie" id="pie">
    <div class="lf">
      <span class="sp1">5月</span>
      <span class="sp2">87%</span>
    </div>
    <v-chart :options="options" :auto-resize="true"/>
    <div class="rh">
      <span class="sp1">胜 132</span>
      <span class="sp2">负 8</span>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
// 饼状图
import 'echarts/lib/chart/pie'
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
      // tooltip: {
      //   trigger: 'item',
      //   formatter: '{a} ({d}%)'
      // },
      // 图例说明
      legend: {
        show: true,
        x: 'center',
        bottom: 0,
        itemWidth: 8,
        itemHeight: 8,
        y: 'bottom',
        // data: ['Sheriff 警长1', 'Sheriff 警长2', 'Sheriff 警长3', 'Sheriff 警长4'],
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
      color: ['#ff4655', '#1a2635'],
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
                // x: '25%',
                width: '50%',
                funnelAlign: 'left',
                max: 45
              }
            }
          },
          // restore: { show: true },
          // saveAsImage: { show: true }
        }
      },
      label: {
        show: true,
        fontSize: 12
      },
      series: [
        {
          itemStyle: {
            normal: {
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
          radius: '70%', //修改饼图大小
          center: ['50%', '50%'],
          // 数据
          data: [
            { value: 335,  },
            { value: 310,  },
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
.pie{
  width: 149px;
  height: 67px;
  position: relative;
  margin: 0 auto;
  margin-top: 6px;
}
.pie .lf{
  width:46px;
  position: absolute;
  left: 15px;
  top:18px;
  text-align: left;
}
.pie .lf span{
  font-size: 14px;
  font-family: "微软雅黑";
  font-weight: bold;
}
.pie .lf span.sp1{
  color: #ffffff;
  margin-bottom: 5px;
}
.pie .lf span.sp2{
  color: #ff4655;
  font-size: 12px;
}
.pie .rh{
  width:46px;
   position: absolute;
   right: 5px;
  top:18px;
  text-align: right;
}
.pie .rh span{
  font-size: 12px;
  font-family: "微软雅黑";
}
.pie .rh span.sp1{
  color: #ffffff;
  margin-bottom: 5px;
}
.pie .rh span.sp2{
  color: #ff4655;
}
.pie >>> .echarts {
  width: 147px;
  height: 65px;
  border:1px solid #1e2d43;
}
</style>