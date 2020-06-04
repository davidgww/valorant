<template>
  <swiper class="swiper" id="fx" :options="swiperOption">
    <swiper-slide>
      <div class="map-img lf">
        <img src="@/assets/img/fw/fw1.png" alt />
      </div>
      <div class="map-cn lf">
        <span>
          223
          <i>场</i>
        </span>
        <span>
          23%
          <i>胜</i>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="map-img lf">
        <img src="@/assets/img/fw/fw1.png" alt />
      </div>
      <div class="map-cn lf">
        <span>
          223
          <i>场</i>
        </span>
        <span>
          23%
          <i>胜</i>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="map-img lf">
        <img src="@/assets/img/fw/fw1.png" alt />
      </div>
      <div class="map-cn lf">
        <span>
          223
          <i>场</i>
        </span>
        <span>
          23%
          <i>胜</i>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="map-img lf">
        <img src="@/assets/img/fw/fw1.png" alt />
      </div>
      <div class="map-cn lf">
        <span>
          223
          <i>场</i>
        </span>
        <span>
          23%
          <i>胜</i>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="map-img lf">
        <img src="@/assets/img/fw/fw1.png" alt />
      </div>
      <div class="map-cn lf">
        <span>
          223
          <i>场</i>
        </span>
        <span>
          23%
          <i>胜</i>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="map-img lf">
        <img src="@/assets/img/fw/fw1.png" alt />
      </div>
      <div class="map-cn lf">
        <span>
          223
          <i>场</i>
        </span>
        <span>
          23%
          <i>胜</i>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="map-img lf">
        <img src="@/assets/img/fw/fw1.png" alt />
      </div>
      <div class="map-cn lf">
        <span>
          223
          <i>场</i>
        </span>
        <span>
          23%
          <i>胜</i>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="map-img lf">
        <img src="@/assets/img/fw/fw1.png" alt />
      </div>
      <div class="map-cn lf">
        <span>
          223
          <i>场</i>
        </span>
        <span>
          23%
          <i>胜</i>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="map-img lf">
        <img src="@/assets/img/fw/fw1.png" alt />
      </div>
      <div class="map-cn lf">
        <span>
          223
          <i>场</i>
        </span>
        <span>
          23%
          <i>胜</i>
        </span>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="map-img lf">
        <img src="@/assets/img/fw/fw1.png" alt />
      </div>
      <div class="map-cn lf">
        <span>
          223
          <i>场</i>
        </span>
        <span>
          23%
          <i>胜</i>
        </span>
      </div>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
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
  props: {
    id: String
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        slidesPerColumn: 4,
        spaceBetween: 4,
        observer: true,
        observerParents: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        
        navigation: {
          nextEl: "#fx .swiper-button-next",
          prevEl: "#fx .swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style scoped>
#fx {
  height: 262px;
  margin: 0 auto;
  position: relative;
}
.swiper-slide {
  width: 155px !important;
  height: 52px;
  text-align: center;
  line-height: 52px;
  background: #101823;
  border: 1px solid #1e2d43;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0 !important;
}
.swiper-button-prev {
  right: 65px;
  left: 18px;
  top: 256px;
  width: 56px;
  height: 28px;
  background: url("~@/assets/img/global/b_left.png") no-repeat;
}
.swiper-container {
  position: unset;
}
.swiper-button-next {
  right: 18px;
  top: 256px;
  width: 56px;
  height: 28px;
  background: url("~@/assets/img/global/b_right.png") no-repeat;
}
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: none;
}
.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
  content: none;
}
#fx .map-img img {
  width: 76px;
  height: 46px;
  display: block;
  margin: 3px 0 3px 3px;
}
#fx .map-cn {
  width: 76px;
  height: 52px;
}
#fx .map-cn span {
  display: block;
  height: 27px;
  line-height: 27px;
}
#fx .map-cn span:nth-child(1) {
  font-size: 18px;
  font-weight: bold;
  color: white;
}

#fx .map-cn span:nth-child(1) i {
  font-style: normal;
  color: #516177;
  font-size: 12px;
}
#fx .map-cn span:nth-child(2) {
  font-size: 14px;
  font-weight: bold;
  color: #ff4655;
}

#fx .map-cn span:nth-child(2) i {
  font-style: normal;
  color: #516177;
  font-size: 12px;
}
</style>