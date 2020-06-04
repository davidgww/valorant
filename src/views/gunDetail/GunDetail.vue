<template>
  <div class="gundetail" id="gundetail" v-cloak>
    <div class="gundetail_page">
      <Search></Search>
      <div class="cn1">
        <iframe
          class="lf"
          width="355"
          height="217"
          src="//player.bilibili.com/player.html?aid=840312568&bvid=BV1y54y197U7&cid=180118604&page=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        ></iframe>
        <div class="con rh">
          <h2 class="tit">{{list}}</h2>
          <ul>
            <li>
              <span class="sp1">价格</span>
              <span class="sp2">{{gunInfo.price}}</span>
            </li>
            <li>
              <span class="sp1">射速</span>
              <span class="sp2">{{gunInfo.shootingrd}}</span>
            </li>
            <li>
              <span class="sp1">弹夹容量</span>
              <span class="sp2">{{gunInfo.clip}}</span>
            </li>
            <li>
              <span class="sp1">射速(备用)</span>
              <span class="sp2">{{gunInfo.shootingspeed}}</span>
            </li>
            <li>
              <span class="sp1">穿墙能力</span>
              <span class="sp2">{{gunInfo.penetrate}}</span>
            </li>
            <li>
              <span class="sp1">0-30M伤害</span>
              <span class="sp2">{{gunInfo.distancebody30}}</span>
              <span class="sp2">{{gunInfo.distancehead30}}</span>
              <span class="sp2">{{gunInfo.distanceleg30}}</span>
            </li>
            <li>
              <span class="sp1">主要开火模式</span>
              <span class="sp2">{{gunInfo.Firemode}}</span>
            </li>
            <li>
              <span class="sp1">30-50M伤害</span>
               <span class="sp2">{{gunInfo.distancebody50}}</span>
              <span class="sp2">{{gunInfo.distancehead50}}</span>
              <span class="sp2">{{gunInfo.distanceleg50}}</span>
            </li>
            <li>
              <span class="sp1">备用开火模式</span>
              <span class="sp2">{{gunInfo.Foremoderd}}</span>
            </li>
            <li>
              <span class="sp1">一句话点评</span>
              <span class="sp2">{{gunInfo.commentary}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="c1"></div>
      <div class="cn2">
        <Game :skinInfo='skinInfo'>
          <img src="@/assets/img/detail/pic4.png" alt="" slot="title">
        </Game>
        <Game>
          <img src="@/assets/img/detail/pic5.png" alt="" slot="title">
           <swiper class="swiper swiper-no-swiping" :options="swiperOption" slot="game" ref="mySwiper">
            <swiper-slide v-for="(item,index) in strategyInfo" :key="index" >
              <div class="skills" @click="itemClick(item.id)">
                 <img :src="'https://images.weserv.nl/?url='+item.image" alt="" >
                  <span>
                    {{item.title}}
                  </span>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Search from "@/components/common/search.vue";
import Recommend from "@/components/common/recommend.vue";
import Game from "@/components/common/game.vue";
import {api} from "@/request/api";
export default {
  name: "gundetail",
  components: {
    Search,
    Recommend,
    Game,
    Swiper,
    SwiperSlide
  },
  data(){
    return{
      list:[],
      gunInfo:[],
      skinInfo:[],
      strategyInfo:[],
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 14,
        pagination: {
          el: ".swiper-pagination",
          clickable: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
       
      }
    }
  },
  created() {
    var self = this;
    self.initdata(self.$route.query.id);
  },
  methods: {
    initdata(id){
        let url0 ="/web2_0/vat_gunDetail"
        let url1 ="/web2_0/getNewsByTags/and?tags=6274&page=0&num=10"
        api(url0,{
        }).then((result) => {
          let newList = result.data.filter(function(n){
            return n.id == id;
          })
          this.list = newList[0].name;
          this.gunInfo = newList[0].info;
          this.skinInfo = newList[0].skin;
        }).catch((err) => {
          console.log(err);
        });

        api(url1,{
        }).then((result) => {
          this.strategyInfo = result.data;
        }).catch((err) => {
          console.log(err);
        });
    },
    itemClick(id){
      alert("枪械攻略"+id);
      this.$router.push({
          path: "/gamevideo",
          query: {
            id: id
          }
      });
    }
  },
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
#gundetail .cn1 {
  width: 898px;
  height: 217px;
  margin-left: 64px;
}
#gundetail .cn1 .con{
  width: 522px;
  height: 217px;
  margin-left: 21px;
}
#gundetail .cn1 .con h2.tit{
  margin: 0;
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 16px;
  margin-top: 2px;
}
#gundetail .cn1 .con ul li{
  float: left;
  margin-right: 6px;
  margin-bottom: 11px;
}
#gundetail .cn1 .con ul li:last-child .sp2{
  width: 242px;
}
#gundetail .cn1 .con ul li:nth-of-type(2n){
  margin-right: 0;
}
#gundetail .cn1 .con ul li span.sp1{
  display: block;
  width: 90px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  border: 1px solid #1e2d43;
  background: #17222f;
  color: #516177;
  font-size: 12px;
  float: left;
  margin-right: 5px;
  cursor: default;
}
#gundetail .cn1 .con ul li span.sp2{
  display: block;
  width: 76px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  border: 1px solid #1e2d43;
  background: #101823;
  font-size: 12px;
  float: left;
  color: white;
  cursor: default;
  margin-right:2px;
}
#gundetail .cn1 .con ul li span.sp2:last-child{
  margin-right: 0;
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
