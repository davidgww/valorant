<template>
  <div class="fight" id="fight">
      <div class="f1 f0">
        <div class="f1_tab">
          <ul>
              <li>第一场</li>
              <li>第二场</li>
              <li>第三场</li>
          </ul>
        </div>
        <div class="c1" style="height:15px"></div>
        <div class="f1_con">
          <FightCn></FightCn>
        </div>
      </div>
      <div class="c1" style="height:50px"></div>
      <div class="f2">
        <div class="f2_tp">
          <img src="@/assets/img/global/pic19.png" alt  />
        </div>
        <div class="c1" style="height:15px"></div>
        <div class="sch">
            <Sch></Sch>
        </div>
      </div>
      <div class="c1" style="height:422px"></div> 
         <div class="partner">
             <img class="spc" src="@/assets/img/global/partner.png" alt="">
         </div>
         <div class="c1" style="height:30px"></div> 
  </div>
</template>
<script>
import FightCn from "@/views/info/FightCn.vue"
import Sch from "@/views/info/Sch.vue"
export default {
  name: 'fight',
  components: {
   FightCn,
   Sch
  }
}
</script>
<style scoped>
.fight{
  width: 1000px;
  overflow: hidden;
  margin: 0 auto;
}
.f0{
  margin-left: 34px;
  overflow: hidden;
}
.f1_tab ul li{
  float: left;
  width: 103px;
  height: 26px;
  border: 1px solid #1e2d43;
  background: #17222f;
  font-size: 12px;
  color: #516177;
  text-align: center;
  line-height: 26px;
  margin-right: 6px;
  cursor: pointer;
}
.f1_tab ul li.active{
  background: #293647;
  border-color: #36455a;
  color: white;
}
.f2_tp{
  text-align: center;
}
.sch{
  margin-left: 34px;
  width: 928px;
  height: 558px;
  border: 1px solid #1e2d43;
}
.partner{
      margin-right: 40px;
      text-align: right;
}
</style>