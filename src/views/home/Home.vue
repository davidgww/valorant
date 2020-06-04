<template>
  <div class="home" id="home" v-cloak>
    <div class="home_page">
      <Search></Search>
      <Page></Page>
      <div class="cn_rh">
      <!-- 左边部分 -->
        <div class="cn1 lf">
            <div class="cn1_tp">
                <img src="@/assets/img/home/home1.png" alt="">
                <!-- 最新动态 -->
                <List url='/web2_0/getNewsByTags/and?tags=6418&page=0&num=4'>
                    <h2 class="title">最新动态</h2>
                </List>
                <!-- 开发日志 -->
                <List url='/web2_0/getNewsByTags/and?tags=6417&page=0&num=4'>
                    <h2 class="title">开发日志</h2>
                </List>
                <!-- 测评报告 -->
                <List url='/web2_0/getNewsByTags/and?tags=6416&page=0&num=4'>
                    <h2 class="title">测评报告</h2>
                </List>
            </div>
        </div>
      <!-- 右边部分 -->
        <div class="cn2 lf">
            <Against></Against>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Page from '@/components/common/page.vue'
import Search from '@/components/common/search.vue'
import List from '@/components/common/list.vue'
import Against from '@/components/common/against.vue'
export default {
  name: 'Home',
  components: {
   Page,
   Search,
   List,
   Against,
  }
}
</script>
<style scoped>
[v-cloak] {
display: none;
}
#home{
  width: 100%;
  overflow: hidden;
  min-height: 983px;
  background:#121f2b url(~@/assets/img/global/bg.png) no-repeat center top;
}
#home .home_page{
  width: 1000px;
  margin: 0 auto;
}
#home .cn_rh{
  float: left;
  width: 720px;
  min-height: 983px;
}
#home .cn_rh .cn1{
    width: 540px;
    min-height: 778px;
}
#home .cn_rh .cn2{
    width: 150px;
    min-height: 778px;
    margin-left: 10px;
}
</style>
