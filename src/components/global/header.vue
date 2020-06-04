<template>
  <div class="site_head" id="site_head">
    <div class="header">
      <div class="logo lf">
        <img src="@/assets/img/header/logo.png" alt="" class="Imglogo" @click="itemClick('/')">
      </div>
      <ul class="nav lf">
        <li
          v-for="(item,index) in navList"
          :key="index" 
          :class="[active == index ? 'active':'']"
          @click="itemClick(item.link)"
        >
        <!-- <img :src="item.img" alt="" class="nav"> -->
        </li>
      </ul>
      <div class="login rh">
        <img src="@/assets/img/header/login.png" alt="" class="Imglogin">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "site_head",
  data() {
    return {
      active:0,
      navList: [
        {
          name: "英雄",
          link: "/hero"
        },
        {
          name: "枪械",
          link: "/gun"
        },
        {
          name: "数据",
          link: "/info"
        },
        {
          name: "视频",
          link: "/videos"
        },
        {
          name: "教学",
          link: "/education"
        },
        {
          name: "社区",
          link: "/community"
        },
        {
          name: "Liquipedia",
          link: "/Liquipedia"
        }
      ]
    };
  },
  watch: {
    // 按需加载路由，监听路由变化
    $route(to, from) {
      let _this = this; //这里注意一下记得缓存this
      _this.path = to.path;
      if (_this.path == "/hero") {
        _this.active = 0;
      } else if (_this.path == "/gun" || _this.path == "/gundetail") {
        _this.active = 1;
      } else if (_this.path == "/info") {
        _this.active = 2;
      } else if (_this.path == "/videos") {
        _this.active = 3;
      }else if (_this.path == "/education") {
        _this.active = 4;
      }else if (_this.path == "/community") {
        _this.active = 5;
      }else if (_this.path == "/Liquipedia") {
        _this.active = 6;
      }else if (_this.path == "/"){
        _this.active = 7;
      }
    }
  },
  methods: {
    itemClick(link) {
      console.log(link);
      this.$router.replace(link);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#site_head {
  height: 76px;
  width: 100%;
  background: #ff4655;
}
#site_head .header {
  width: 1000px;
  height: 76px;
  margin: 0 auto;
}
#site_head .logo{
  margin: 24px 56px 0 32px;
}
#site_head .logo img{
  cursor: pointer;
}
#site_head .nav {
  overflow: hidden;
}
#site_head .nav li {
  float: left;
  width: 60px;
  text-align: center;
  height: 76px;
  line-height: 76px;
  color: white;
  font-family: "微软雅黑";
  cursor: pointer;
  font-size: 18px;
  margin-right: 18px;
}
#site_head .nav li:last-child{
  margin-right: 0;
  width: 84px;
}
#site_head .nav li:nth-child(1){
  background:url(~@/assets/img/header/nav1.png) no-repeat left center;
}
#site_head .nav li:nth-child(2){
  background:url(~@/assets/img/header/nav2.png) no-repeat left center;
}
#site_head .nav li:nth-child(3){
  background:url(~@/assets/img/header/nav3.png) no-repeat left center;
}
#site_head .nav li:nth-child(4){
  background:url(~@/assets/img/header/nav4.png) no-repeat left center;
}
#site_head .nav li:nth-child(5){
  background:url(~@/assets/img/header/nav5.png) no-repeat left center;
}
#site_head .nav li:nth-child(6){
  background:url(~@/assets/img/header/nav6.png) no-repeat left center;
}
#site_head .nav li:nth-child(7){
  background:url(~@/assets/img/header/nav7.png) no-repeat left center;
}


#site_head .nav li:nth-child(1):hover{
  background:url(~@/assets/img/header/nav1_h.png) no-repeat left 25px;
}
#site_head .nav li:nth-child(2):hover{
  background:url(~@/assets/img/header/nav2_h.png) no-repeat left 25px;
}
#site_head .nav li:nth-child(3):hover{
  background:url(~@/assets/img/header/nav3_h.png) no-repeat left 25px;
}
#site_head .nav li:nth-child(4):hover{
  background:url(~@/assets/img/header/nav4_h.png) no-repeat left 25px;
}
#site_head .nav li:nth-child(5):hover{
  background:url(~@/assets/img/header/nav5_h.png) no-repeat left 25px;
}
#site_head .nav li:nth-child(6):hover{
  background:url(~@/assets/img/header/nav6_h.png) no-repeat left 25px;
}
#site_head .nav li:nth-child(7):hover{
  background:url(~@/assets/img/header/nav7_h.png) no-repeat left 25px;
}




#site_head .nav li:nth-child(1).active{
  background:url(~@/assets/img/header/nav1_h.png) no-repeat left 25px;
}
#site_head .nav li:nth-child(2).active{
  background:url(~@/assets/img/header/nav2_h.png) no-repeat left 25px;
}
#site_head .nav li:nth-child(3).active{
  background:url(~@/assets/img/header/nav3_h.png) no-repeat left 25px;
}
#site_head .nav li:nth-child(4).active{
  background:url(~@/assets/img/header/nav4_h.png) no-repeat left 25px;
}
#site_head .nav li:nth-child(5).active{
  background:url(~@/assets/img/header/nav5_h.png) no-repeat left 25px;
}
#site_head .nav li:nth-child(6).active{
  background:url(~@/assets/img/header/nav6_h.png) no-repeat left 25px;
}
#site_head .nav li:nth-child(7).active{
  background:url(~@/assets/img/header/nav7_h.png) no-repeat left 25px;
}
#site_head .nav li img{
  margin: 25px 0;
}
#site_head .nav li.active{
    color: black;
}
#site_head .login{
  margin-right: 12px;
}
#site_head .login img{
  margin-top: 29px;
  cursor: pointer;
}
</style>
