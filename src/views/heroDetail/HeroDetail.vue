<template>
  <div class="home" id="home" v-cloak>
    <div class="home_page">
      <Search></Search>
      <div class="cn1">
      <div class="img lf">
        <img :src="'https://images.weserv.nl/?url='+list.photo" alt="" >
      </div>
      
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
        <h1>{{list.name}}</h1>
        <h2>{{list.title}}</h2>
        <h3>{{list.desc}}</h3>
        <ul>
          <li v-for="(item,index) in skillInfo" :key="index">
            <h4>{{item.price}}</h4>
            <p>
              {{item.detail}}
            </p>
            <div class="img">
              <img :src="'https://images.weserv.nl/?url='+item.image" />
            </div>
            <img v-if="index==0" src="@/assets/img/detail/C.png" alt class="spc" />
            <img v-if="index==1" src="@/assets/img/detail/Q.png" alt class="spc" />
            <img v-if="index==2" src="@/assets/img/detail/E.png" alt class="spc" />
            <img v-if="index==3" src="@/assets/img/detail/X.png" alt class="spc" />
          </li>
        </ul>
      </div>
      <div class="c1"></div>
      <div class="cn3">
      <!-- 英雄攻略 -->
      <Recommend></Recommend>
      <!-- 游戏集锦 --> 
        <Vid class="game">
           <img src="@/assets/img/detail/pic2.png" alt="" slot="title">
        </Vid>
        <div class="c1" style="height:147px"></div>
        <div class="partner">
             <img src="@/assets/img/detail/pic3.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Search from "@/components/common/search.vue";
import Recommend from "@/components/common/recommend.vue";
import Vid from "@/components/common/Vid.vue";
import {api} from "@/request/api";
export default {
  name: "home",
  components: {
    Search,
    Recommend,
    Vid,
    Swiper,
    SwiperSlide
  },
   created() {
    var self = this;
    self.initdata(self.$route.query.id);
  },
  data(){
    return{
      list:[],
      skillInfo:[],
      gameInfo:[],
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 14,
        pagination: {
          el: ".game .swiper-pagination",
          clickable: false,
        },
        navigation: {
          nextEl: ".game .swiper-button-next",
          prevEl: ".game .swiper-button-prev"
        },
       
      }
    }
  },
  methods: {
    initdata(id){
        let url ="/web2_0/vat_heroDetail"
        api(url,{
        }).then((result) => {
          let newList = result.data.filter(function(n){
            return n.id == id;
          })
          this.list = newList[0];
          this.skillInfo = newList[0].skill;
        }).catch((err) => {
          console.log(err);
        });

         api("/web2_0/getNewsByTags/and?tags=6274&page=0&num=10",{
        }).then((result) => {
          this.gameInfo = result.data;
        }).catch((err) => {
          console.log(err);
        });
    }, 

     itemClick(id){
      alert("游戏集锦视频ID:"+id);
    }
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
  background: url(~@/assets/img/global/bg.png) no-repeat center top;
}
#home .home_page {
  width: 1000px;
  margin: 0 auto;
}
#home .cn1 {
  width: 940px;
  height: 383px;
  margin-left: 14px;
}
#home .cn1 .img{
  width: 250px;
  height: 383px;
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
