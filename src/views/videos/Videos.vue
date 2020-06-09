<template>
  <div class="body" @click="showSetting">
      <div class="select-custom" @click="settingEvent($event)">
          <div class="select-tp" @click="selectClick">
            <span>全部</span>
            <img src="@/assets/img/global/pic20.png" alt="">
          </div>
          <div class="c1"></div>
          <div class="select-cn animate__animated animate__fadeIn" v-show="showSettingCon">
            <ul>
              <li>守卫者1</li>
              <li>守卫者2</li>
              <li>守卫者3</li>
              <li>守卫者4</li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>
import animate from 'animate.css'
export default {
  name: "DataForm", 
  data() {
    return {
      selected:0,
      showSettingCon:false, 
    };
  },
  methods: {
    showSetting(){
      this.$set(this, 'showSettingCon', false);
      //全局区域内点击时showSettingCon均为false
    },
    settingEvent(event){
      event.stopPropagation(); //此区域不受上面方法的影响
    },
    selectClick(){
      this.$set(this, 'showSettingCon', !this.showSettingCon)
    },
    chooseItem(chooseKey,chooseValue){
        let self=this
    }
  },
};
</script>
<style scoped>
.body{
  height: 2000px;
  width: 1000px;
  margin: 0 auto;
  background: red;
}
.select-custom{
  width: 100px;
  height: 28px;
}
.select-tp{
  width: 100px;
  height: 28px;
  background: #000;
  border: 1px solid #ffffff;
  cursor: pointer;
}
.select-tp span{
  font-size: 12px;
  line-height: 28px;
  display: block;
  color: white;
  padding-left: 30px;
  float: left;
}
.select-tp img{
  float: right;
  margin-right: 15px;
  margin-top: 10px;
}
.select-cn ul li{
  width: 100px;
  height: 26px;
  line-height: 26px;
  background: #000;
  color: white;
  text-align: center;
  font-size: 12px;
  border: 1px solid #ffffff;
  cursor: pointer;
  border-top: none;
}
.select-cn ul li:hover{
  background: #fff;
  color: #000;
}
</style>