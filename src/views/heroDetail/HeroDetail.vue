<template>
  <div class="home" id="home" v-cloak>
    <div class="home_page">
      <Search></Search>
      <div class="cn1">
        <img src="@/assets/img/fw/fw5.png" class="lf" alt />
        <iframe
          class="lf"
          width="656"
          height="383"
          src="//player.bilibili.com/player.html?aid=840312568&bvid=BV1y54y197U7&cid=180118604&page=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        ></iframe>
      </div>
      <div class="c1"></div>
      <div class="cn2">
        <h1>phoenix</h1>
        <h2>守卫者</h2>
        <h3>菲尼克斯的明星风范影响了他的战斗风格，他会以耀眼的方式点燃全场。就算没有援军他也会直冲战场。</h3>
        <ul>
          <li>
            <h4>C键，烈焰-200誉币</h4>
            <p>
              装备火焰墙。按射击即可产生一排会
              前移的火焰，形成一道火墙，可阻挡
              视野并伤害穿过它的人。按住射击可
              使火墙朝你准星的方向弯曲。
            </p>
            <div class="img">
              <img src="@/assets/img/fw/fw6.png" alt />
            </div>
            <img src="@/assets/img/detail/C.png" alt class="spc" />
          </li>
          <li>
            <h4>C键，烈焰-200誉币</h4>
            <p>
              装备火焰墙。按射击即可产生一排会
              前移的火焰，形成一道火墙，可阻挡
              视野并伤害穿过它的人。按住射击可
              使火墙朝你准星的方向弯曲。
            </p>
            <div class="img">
              <img src="@/assets/img/fw/fw6.png" alt />
            </div>
            <img src="@/assets/img/detail/Q.png" alt class="spc" />
          </li>
          <li>
            <h4>C键，烈焰-200誉币</h4>
            <p>
              装备火焰墙。按射击即可产生一排会
              前移的火焰，形成一道火墙，可阻挡
              视野并伤害穿过它的人。按住射击可
              使火墙朝你准星的方向弯曲。
            </p>
            <div class="img">
              <img src="@/assets/img/fw/fw6.png" alt />
            </div>
            <img src="@/assets/img/detail/E.png" alt class="spc" />
          </li>
          <li>
            <h4>C键，烈焰-200誉币</h4>
            <p>
              装备火焰墙。按射击即可产生一排会
              前移的火焰，形成一道火墙，可阻挡
              视野并伤害穿过它的人。按住射击可
              使火墙朝你准星的方向弯曲。
            </p>
            <div class="img">
              <img src="@/assets/img/fw/fw6.png" alt />
            </div>
            <img src="@/assets/img/detail/X.png" alt class="spc" />
          </li>
        </ul>
      </div>
      <div class="c1"></div>
      <div class="cn3">
        <Recommend></Recommend> 
        <Game>
            <img src="@/assets/img/detail/pic2.png" alt="">
        </Game>
        <div class="c1" style="height:147px"></div>
        <div class="partner">
             <img src="@/assets/img/detail/pic3.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/common/search.vue";
import Recommend from "@/components/common/recommend.vue";
import Game from "@/components/common/game.vue";
export default {
  name: "Home",
  components: {
    Search,
    Recommend,
    Game
  }
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
#home {
  width: 100%;
  overflow: hidden;
  min-height: 983px;
  background: #121f2b url(~@/assets/img/heroGun/bg.png) no-repeat center top;
}
#home .home_page {
  width: 1000px;
  margin: 0 auto;
  background: #101823;
}
#home .cn1 {
  width: 940px;
  height: 383px;
  margin-left: 14px;
}
#home .cn1 img {
  margin-right: 16px;
}
#home .cn2 {
  width: 870px;
  margin-left: 64px;
  margin-bottom: 42px;
  min-height: 540px;
}
#home .cn2 h1 {
  margin: 0;
  font-size: 36px;
  font-family: "微软雅黑";
  color: white;
  margin: 26px 0 18px;
  display: block;
  font-style: italic;
  font-weight: normal;
}
#home .cn2 h2 {
  margin: 0;
  font-size: 14px;
  font-family: "宋体";
  color: #07d84c;
  margin-bottom: 18px;
  display: block;
}
#home .cn2 h3 {
  margin: 0;
  font-size: 12px;
  font-family: "宋体";
  color: #45556a;
  display: block;
}
#home .cn2 ul {
  margin-top: 36px;
  overflow: hidden;
}
#home .cn2 ul li {
  width: 422px;
  height: 175px;
  background: #182331;
  float: left;
  position: relative;
  margin-bottom: 24px;
}
#home .cn2 ul li:nth-of-type(2n) {
  float: right;
}
#home .cn2 ul li h4 {
  color: white;
  margin: 0;
  margin-left: 78px;
  margin-top: 18px;
}
#home .cn2 ul li p {
  font-size: 12px;
  color: #45556a;
  width: 198px;
  height: 78px;
  overflow: hidden;
  line-height: 20px;
  margin-left: 23px;
  margin-top: 40px;
}
#home .cn2 ul li img.spc {
  position: absolute;
  top: 0;
  left: 0;
}
#home .cn2 ul li .img img {
  position: absolute;
  top: 12px;
  right: 36px;
}
#home .cn3 {
  width: 870px;
  margin-left: 64px;
  min-height: 400px;
}
#home .partner{
    width: 100%;
    text-align: right;
    padding-bottom: 30px;
}
</style>
