<template>
  <div class="Info" id="Info">
   <Search></Search>
   <div class="c1" style="height:19px"></div>
  <!-- 选项卡 -->
  <div class="info_tab">
    <ul>
      <li @click="tabClick(0)" :class="[{active:current==0}]">个人数据</li>
      <li @click="tabClick(1)" :class="[{active:current==1}]">对战数据</li>
      <li @click="tabClick(2)" :class="[{active:current==2}]">战队数据</li>
    </ul>
  </div>
   <div class="c1" style="height:38px"></div>
  <!-- 个人数据 -->
  <div class="tab1 animate__animated animate__fadeIn" v-show='show0'>
    <Personal></Personal>
  </div>
  <!-- 个人数据 -->
  <!-- 对战数据 -->
  <div class="tab2 animate__animated animate__fadeIn" v-show='show1'>
    <Fight></Fight>
  </div>
  <!-- 对战数据 -->
  <!-- 战队数据 -->
  <div class="tab3 animate__animated animate__fadeIn" v-show='show2'>
    <Team></Team>
  </div>
  <!-- 战队数据 -->
    
  </div>
</template>

<script>
import animate from 'animate.css'
import Personal from "@/views/info/Personal_data.vue"
import Team from "@/views/info/Team_data.vue"
import Fight from "@/views/info/Fight.vue"
import Search from '@/components/common/search.vue'
export default {
 name:"Info",
 components:{
   Search,
   Personal,
   Fight,
   Team,
 },
 data(){
   return{
     current:0,
     show0:true,
     show1:false,
     show2:false,
   }
 },
 methods:{
    tabClick:function(num){
      this.current = num;
        // $('#f').addClass('animated bounceOutLeft')
        if(num == 0){
           this.show0=true;
           this.show1=false;
           this.show2=false;
           
        }else if(num == 1){
           this.show1=true;
           this.show0=false;
           this.show2=false;
        }else if(num == 2){
           this.show2=true;
           this.show0=false;
           this.show1=false;
        }
    }
}
}
</script>
<style scoped>
#Info{
  width: 100%;
  overflow: hidden;
  min-height: 1000px;
  background:#121f2b url(~@/assets/img/global/bg.png) no-repeat center top;
}
#Info .info_tab{
  width: 1000px;
  margin: 0 auto;
  height: 28px;

}
#Info .info_tab ul li{
  float: left;
  width: 99px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  color: white;
  font-size: 12px;
  border: 1px solid #fff;
  margin-right: 7px;
  cursor: pointer;
}
#Info .info_tab ul li:first-child{
  margin-left: 34px;
}
#Info .info_tab ul li.active{
  background: #fff;
  color: #000;
}
.match{
  width:1000px;
  margin: 0 auto;
  overflow: hidden;
  background: #101823;
}
.match .match_cn{
  width:915px;
  height: 657px;
  border: 1px solid #1e2d43;
  margin-left: 34px;
}
.match .match_cn .cn1{
  width: 157px;
  height: 295px;
  margin-right:11px;
  margin-left: 13px;
}
.match .match_cn .cn2{
  width: 553px;
  height: 295px;
  margin-right:11px;
}
.match .match_cn .cn3{
  width: 157px;
  height: 295px;
}
.match .match_cn .lf{
  margin-top: 12px;

}
.match .match_cn .lf h1{
  margin:0;
  height: 27px;
    margin-bottom: 5px;
  line-height: 27px;
  text-align: center;
  background: #17222f;
  border:1px solid #1e2d43;
  color: #516177;
  font-weight: normal;
  font-size: 12px;
}
.tab1{
  min-height: 1000px;
}
</style>