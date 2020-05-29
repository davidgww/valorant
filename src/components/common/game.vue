<template>
  <div id="game">
    <div class="tp">
      <slot></slot>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide @click="itemClick(1)">
        <img src="@/assets/img/fw/fw1.png" alt="">
        <span>1即可操纵闪光球向左拐，引爆后会
使所有望向它的玩家眩目</span>
      </swiper-slide>
       <swiper-slide @click="itemClick(1)">
        <img src="@/assets/img/fw/fw1.png" alt="">
        <span>即可操纵闪光球向左拐，引爆后会
使所有望向它的玩家眩目</span>
      </swiper-slide>
       <swiper-slide>
        <img src="@/assets/img/fw/fw1.png" alt="">
        <span>即可操纵闪光球向左拐，引爆后会
使所有望向它的玩家眩目</span>
      </swiper-slide>
       <swiper-slide @click="itemClick(1)">
        <img src="@/assets/img/fw/fw1.png" alt="">
        <span>即可操纵闪光球向左拐，引爆后会
使所有望向它的玩家眩目</span>
      </swiper-slide>
       <swiper-slide @click="itemClick(1)">
        <img src="@/assets/img/fw/fw1.png" alt="">
        <span>即可操纵闪光球向左拐，引爆后会
使所有望向它的玩家眩目</span>
      </swiper-slide>
       <swiper-slide @click="itemClick(1)">
        <img src="@/assets/img/fw/fw1.png" alt="">
        <span>即可操纵闪光球向左拐，引爆后会
使所有望向它的玩家眩目</span>
      </swiper-slide>
       <swiper-slide @click="itemClick(1)">
        <img src="@/assets/img/fw/fw1.png" alt="">
        <span>即可操纵闪光球向左拐，引爆后会
使所有望向它的玩家眩目</span>
      </swiper-slide>
       <swiper-slide @click="itemClick(1)">
        <img src="@/assets/img/fw/fw1.png" alt="">
        <span>即可操纵闪光球向左拐，引爆后会
使所有望向它的玩家眩目</span>
      </swiper-slide>
       <swiper-slide @click="itemClick(1)">
        <img src="@/assets/img/fw/fw1.png" alt="">
        <span>即可操纵闪光球向左拐，引爆后会
使所有望向它的玩家眩目</span>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-slides-per-column",
  title: "Multi row slides layout",
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    itemClick(id){
      console.log(id);
      this.$router.push({
        path: "/gamevideo",
        query: {
          id: id
        }
      });
    }
  },
  created(){
   var _this = this 
    _this.swiperOption={
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 14,
        pagination: {
          el: "#game .swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: "#game .swiper-button-next",
          prevEl: "#game .swiper-button-prev"
        },
        on:{
          click(){
            _this.itemClick(0);
          }
        }
    }
},
  data() {
    return {
      swiperOption:{},
    };
  }
};
</script>

<style  scoped>
#game {
  position: relative;
  margin-top: 46px;
}
#game .tp {
  height: 64px;
}
#game .tp h1 {
  margin: 0;
}
.swiper {
  height: 165px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  height: 161px;
  background: #1a2635;
  cursor: pointer;
}
.swiper-slide img{
    width: 185px;
    height: 103px;
    display: block;
    margin: 0 auto;
    margin-top: 6px;
    padding: 0 5px;
}
.swiper-slide span{
    display: block;
    width: 195px;
    height: 44px;
    font-size: 12px;
    color: #45556a;
    margin:0 auto;
    line-height: 20px;
    margin-top: 6px;
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