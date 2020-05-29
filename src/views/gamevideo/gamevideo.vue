<template>
  <div class="gundetail" id="gundetail" v-cloak>
    <div class="gundetail_page">
      <Search></Search>
      <div class="cn0">
        <h1>面包屑导航</h1>
      </div>
      <div class="cn1">
        <iframe
          class="lf"
          width="870"
          height="517"
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
        <Game>
          <img src="@/assets/img/detail/pic6.png" alt="">
        </Game>
        <div class="c1" style="height:147px"></div>
        <div class="partner">
          <img src="@/assets/img/detail/pic3.png" alt /> 
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
  name: "gundetail",
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
#gundetail {
  width: 100%;
  overflow: hidden;
  min-height: 983px;
  background: #121f2b url(~@/assets/img/heroGun/bg.png) no-repeat center top;
}
#gundetail .gundetail_page {
  width: 1000px;
  margin: 0 auto;
  background: #101823;
}
#gundetail .cn0{
    width: 870px;
    margin-left: 64px;
    background: red;
}
#gundetail .cn1 {
  width: 898px;
  height: 217px;
  margin-left: 64px;
}

#gundetail .cn2 {
  width: 870px;
  margin-left: 64px;
  min-height: 400px;
}
#gundetail .partner {
  width: 100%;
  text-align: right;
  padding-bottom: 30px;
}
</style>
