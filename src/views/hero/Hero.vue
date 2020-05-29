<template>
  <div class="hero" id="hero">
    <div class="hero_page">
      <Search></Search>
      <Page></Page>
      <div class="cn_rh">
        <Top>
          <img src="@/assets/img/global/pic9.png" alt="" class="Img1" slot="bg">
        </Top>
        <div class="c1" style="height:14px;"></div>
        <Cn class="cn_cn">
          <li slot="hero" @click="itemClick(1)">
            <img  src="@/assets/img/fw/fw2.png" alt="">
            <h1>phoenix</h1>
            <h2>守卫者</h2>
            <p>菲尼克斯的明星风范影响了他的战斗
  风格，他会以耀眼的方式点燃全场。
  就算没有援军他也会直冲战场。</p>
          </li>
          
        </Cn>
      </div>
    </div>
  </div>
</template>

<script>
import Page from '@/components/common/page.vue'
import Search from '@/components/common/search.vue'
import Top from '@/components/common/Top.vue'
import Cn from '@/components/common/cn.vue'
export default {
  name: 'hero',
  components: {
   Page,
   Search,
   Top,
   Cn,
  },
   methods: {
    itemClick(id){
      console.log(id);
       this.$router.push({
          path: "/HeroDetail",
          query: {
            id: id
          }
        });
    }
  },
}
</script>
<style scoped>
#hero{
  width: 100%;
  overflow: hidden;
  min-height: 983px;
  background:#121f2b url(~@/assets/img/heroGun/bg.png) no-repeat center top;
}
#hero .hero_page{
  width: 1000px;
  margin: 0 auto;
  background: #101823;
}
#hero .cn_rh{
  float: left;
  width: 720px;
  min-height: 983px;
}
#hero .cn_cn li img{
    width: 103px;
    height: 99px;
    position: absolute;
    top: -10px;
    right: 10px;
}
#hero .cn_cn  li h1{
    font-size: 29px;
    font-style: italic;
    color:white;
    padding-top: 10px;
    padding-left: 20px;
    margin: 0;
}
#hero .cn_cn li h2{
    font-size: 14px;
    color:white;
    padding-left: 20px;
    font-weight: normal;
    margin: 0;
    padding-top: 10px;
    color: #07d84c;
}
#hero .cn_cn li h3{
    color: #62ff96;
    font-size: 42px;
    font-weight: normal;
    margin: 0;
    padding-left: 22px;
    padding-top: 12px;
}
#hero .cn_cn li p{
    padding-top: 12px;
    padding-left: 20px;
    padding-right: 10px;
    margin: 0;
    font-size: 12px;
    color: #7f79a2;
    line-height: 22px;
    height: 84px;
    overflow: hidden;
}
#hero .cn_cn li:hover h1{
    color: #ff4655;
}
#hero .cn_cn li:hover h2{
    color: #fff;
}
#hero .cn_cn li:hover p{
    color: #ffb6bc;
}
</style>
