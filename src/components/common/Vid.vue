<template>
  <div id="Vid">
    <div class="tp">
      <slot name="title"></slot>
    </div>
       <swiper class="swiper swiper-no-swiping" :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in VidList" :key="index" >
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
    var _this = this;
    _this.initdata();
  },
  methods: {
    initdata(){
       let url ="/web2_0/getNewsByTags/and?tags=6274&page=0&num=10"
       api(url,{
        }).then((result) => {
          this.VidList = result.data;
        }).catch((err) => {
          console.log(err);
        });
    },
    itemClick(id) {
      alert("跳转的视频ID"+id);
      this.$router.push({
        path: "/gamevideo",
        query: {
          id: id
        }
      });
    }
  },
  data() {
    return {
      VidList:[],
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 14,
        pagination: {
          el: "#Vid .swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: "#Vid .swiper-button-next",
          prevEl: "#Vid .swiper-button-prev"
        },
      }
    };
  }
};
</script>

<style  >
#Vid {
  position: relative;
  margin-top: 46px;
}
#Vid .tp {
  height: 64px;
}
#Vid .tp h1 {
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
.swiper-slide img {
  width: 185px;
  height: 103px;
  display: block;
  margin: 0 auto;
  margin-top: 6px;
  padding: 0 5px;
}
.swiper-slide span {
  display: block;
  width: 195px;
  height: 44px;
  font-size: 12px;
  color: #45556a;
  margin: 0 auto;
  line-height: 20px;
  margin-top: 6px;
}
.swiper-slide:hover img {
  transition: all 0.6s;
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  -o-transform: scale(1.05);
  transform: scale(1.05);
}
.swiper-slide:hover span {
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
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: none;
}
.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
  content: none;
}
</style>