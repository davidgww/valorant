<template>
  <div id="recommend">
    <div class="tp">
      <img src="@/assets/img/detail/pic1.png" alt="">
    </div>
    <swiper class="swiper" :options="swiperOption" >
      <swiper-slide v-for="(item,index) in list" :key="index">
        <div class="cn"  @click="itemClick(item.id)">
         <img :src="'https://images.weserv.nl/?url='+item.image" alt="" >
          <span>{{item.title}}</span>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import {api} from "@/request/api";
export default {
  name: "swiper-example-slides-per-column",
  title: "Multi row slides layout",
  components: {
    Swiper,
    SwiperSlide
  },
  created() {
    this.initdata();
  },
  data() {
    return {
      list:[],
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 14,
        pagination: {
          el: "#recommend .swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: "#recommend .swiper-button-next",
          prevEl: "#recommend .swiper-button-prev"
        }
      }
    };
  },
   methods: {
    initdata(id){
      api("/web2_0/getNewsByTags/and?tags=6274&page=0&num=10",{
        }).then((result) => {
          this.list = result.data;
        }).catch((err) => {
          console.log(err);
        });
    }, 
     itemClick(id){
      alert("英雄攻略新闻ID:"+id);
    }
  } 
};
</script>

<style  scoped>
#recommend {
  position: relative;
}
#recommend .tp {
  height: 64px;
}
#recommend .tp h1 {
  margin: 0;
}
.swiper {
  height: 336px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  height: 161px;
  background: #1a2635;
  cursor: pointer;
}
.swiper-slide:hover img{
     transition: all 0.6s; 
     -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
}
.swiper-slide:hover span{
    color: #ff4655;
}
.swiper-slide img{
    width: 195px;
    height: 103px;
    display: block;
    margin: 0 auto;
    margin-top: 6px;
}
.swiper-slide span{
    display: block;
    width: 185px;
    padding: 0 5px;
    height: 44px;
    font-size: 12px;
    color: #45556a;
    margin:0 auto;
    line-height: 20px;
    margin-top: 6px;
}
.swiper-button-prev {
  right: 65px;
  left: auto;
  top: 33px;
  width: 56px;
  height: 28px;
  background: url("~@/assets/img/global/b_left.png") no-repeat;
}
.swiper-container {
  position: unset;
}
.swiper-button-next {
  right: 0px;
  left: auto;
  top: 33px;
  width: 56px;
  height: 28px;
  background: url("~@/assets/img/global/b_right.png") no-repeat;
}
.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after{
    content:none;
}
.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after{
  content:none; 
}
</style>