<template>
  <div class="page" id="page">
    <div class="top">
        <img src="@/assets/img/global/pic1.png" alt="" class="Img1">
        <img src="@/assets/img/global/pic2.png" alt="" class="Img2">
    </div>
     <div class="c1"></div>
     <ul class="recommend">
        <li v-for="(item,index) in list" :key="index" @click="itemClick(item.id)">
            <img :src="'https://images.weserv.nl/?url='+item.image" alt="">
            <span>{{item.title}}</span>
        </li>
     </ul>
     <div class="c1"></div>
     <!--  -->
     <div class="download">
         <img src="@/assets/img/global/pic5.png" alt="" class="Img3">
         <img src="@/assets/img/global/pic4.png" alt="" class="Img4">
         <img src="@/assets/img/global/pic3.png" alt="" class="Img5">
     </div>
  </div>
</template>

<script>
import { apiHomeHotNews } from "@/request/api";
export default {
  name: 'page',
  created() {
    this.initdata();
  },
  methods: {
    // 获取数据
   initdata(){
    apiHomeHotNews({                                
    }).then((result) => {
        console.log(result);
        
       this.list = result.data;
     }).catch((err) => {
       console.log(err);
     });
   },
    // 点击进入详情页
    itemClick(id) {
        this.$router.push({
          path: "/newsdetail",
          query: {
            id: id
          }
        });
    }
  },
  data(){
      return{
          list:[]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**/
#page{
    width: 280px;
    float: left;
}
#page .top img{
    margin-left: 22px;
    display:block;
    cursor: pointer;
}
#page img.Img2{
    margin-top: 16px;
    margin-bottom: 24px;
}
#page .recommend{
    min-height: 611px;
}
#page .recommend li{
    width: 247px;
    height: 193px;
    background: #050e19;
    margin-left: 22px;
    margin-bottom: 16px;
    cursor: pointer;
}
#page .recommend li:last-child{
    margin-bottom: 0;
}
#page .recommend li img{
    width: 225px;
    height: 124px;
    display: block;
    margin: 0 auto;
    padding-top: 12px;
    margin-bottom: 7px;
}
#page .recommend li span{
    width: 225px;
    height: 50px;
    display: block;
    margin: 0 auto;
    font-size: 12px;
    color: #516279;
    line-height: 22px;
    overflow: hidden;
}
#page .recommend li:hover img{
    transition: all 0.6s; 
     -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
}
#page .recommend li:hover span{
    color: #ff4655;
}
#page .download{
   position: relative;
   width: 100%;
   height: 150px;
   position: relative;
}
#page .download img.Img3{
    position: absolute;
    top: 30px;
    left: -18px;
    cursor: pointer;
}
#page .download img.Img4{
    position: absolute;
    top: 70px;
    left: -18px;
    cursor: pointer;
}
#page .download img.Img5{
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>
