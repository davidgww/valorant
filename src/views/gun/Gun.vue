<template>
  <div class="gun" id="gun" @click="showSetting">
    <div class="gun_page">
      <Search></Search>
      <Page></Page>
      <div class="cn_rh">
        <Top>
          <img src="@/assets/img/global/pic11.png" alt="" class="Img1" slot="bg">
          <div class="select-custom" slot="sec" @click="settingEvent($event)">
            <div class="select-tp" @click="selectClick">
              <span>{{select}}</span>
              <img src="@/assets/img/global/pic20.png" alt />
            </div>
            <div class="c1"></div>
            <div class="select-cn animate__animated animate__fadeIn" v-show="showSettingCon">
              <ul>
                <li v-for="(coupon,index) in couponList" :value="coupon.type" :key="index" :class="{'active':index==current}" @click="chooseItem(index,coupon.title,coupon.type)">{{coupon.title}}</li>
              </ul>
            </div>
          </div>
          <div class="search" slot="search">
            <input type="text" placeholder="输入关键字搜索枪械"  v-model="search">
            <img src="@/assets/img/global/pic10.png" alt="">
          </div>
        </Top>
        <div class="c1" style="height:14px;"></div>
        <Cn class="cn_cn">
          <li slot="gun" v-for="(item,index) in items" :key="index" @click="itemClick(item.id)" :mList="item.info">
            <img :src="'https://images.weserv.nl/?url='+item.image" alt="">
            <h1>{{item.name}}</h1>
            <h2>{{item.title}}</h2>
            <h3>{{item.price}}</h3>
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
import {api} from "@/request/api";
export default {
  name: 'gun',
  components: {
   Page,
   Search,
   Top,
   Cn,
  },
  created() {
    this.initdata();
  },
  data(){
    return{
      list:[],
      search:'',
      selectlist:[],
      select:'',
      couponList: [],
      current:0,
      showSettingCon: false
    }
  },
  computed: {
    items:function(){
      let _search = this.search;
      let reg = new RegExp(_search, 'ig');// 不区分大小写
      if (_search) {
        return this.list.filter(function(item){
          if((item.name.toString().indexOf(_search) != -1) || item.name.match(reg) || (item.title.toString().indexOf(_search) != -1)|| (item.price.toString().indexOf(_search) != -1)){
            return item;
          }
        });
      }
      return this.list;
    },
  },
  methods: {
    itemClick(id){
       this.$router.push({
          path: "/gundetail",
          query: {
            id: id
          }
        });
    },
    initdata(){
        let url ="/web2_0/vat_gun"
        api(url,{
        }).then((result) => {
          this.list = result.data;
          this.selectlist = result.data;
        }).catch((err) => {
          console.log(err);
        });

        api("/web2_0/vat_gunsort",{
        }).then((result) => {
          this.couponList = result.data;
          this.select = this.couponList[0].title;
        }).catch((err) => {
          console.log(err);
        });
    },
     showSetting() {
      this.$set(this, "showSettingCon", false);
      //全局区域内点击时showSettingCon均为false
    },
    settingEvent(event) {
      event.stopPropagation(); //此区域不受上面方法的影响
    },
    selectClick() {
      this.$set(this, "showSettingCon", !this.showSettingCon);
    },
    chooseItem(index,selected,type) {
      this.current=index;
      this.select= selected;
      this.showSettingCon = false;
      // console.log(chooseValue);
      if(type != 0){
        let newList = this.selectlist.filter(function(n){
          return n.type == type
        })
        this.list = newList;
      }else{
        this.list = this.selectlist;
      }
    }
  },
}
</script>
<style scoped>
#gun{
  width: 100%;
  overflow: hidden;
  min-height: 983px;
  background:#121f2b url(~@/assets/img/heroGun/bg.png) no-repeat center top;
}
#gun .gun_page{
  width: 1000px;
  margin: 0 auto;
  background: #101823;
}
#gun .cn_rh{
  float: left;
  width: 720px;
  min-height: 983px;
}
#gun .cn_cn{
  margin-left: 35px;
}
#gun .cn_cn li{
  width: 205px;
  height: 121px;
  background: url(~@/assets/img/heroGun/li_bg2.png) no-repeat;
  margin-bottom: 10px;
}
#gun .cn_cn li:hover{
  background: url(~@/assets/img/heroGun/li_bg2_h.png) no-repeat;  
}
#gun .cn_cn li img{
  width: 108px;
  height: 88px;
   position: absolute;
    top: 18px;
    right: 10px;
}
#gun .cn_cn li h1{
    font-size: 22px;
    font-style: italic;
    color:white;
    padding-top: 10px;
    padding-left: 20px;
    margin: 0;
}
#gun .cn_cn li h2{
    font-size: 14px;
    color:white;
    padding-left: 20px;
    font-weight: normal;
    margin: 0;
    padding-top: 10px;
}
#gun .cn_cn li h3{
    color: #62ff96;
    font-size: 42px;
    font-weight: normal;
    margin: 0;
    padding-left: 22px;
    padding-top: 6px;
}
#gun .cn_cn li p{
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
#gun .cn_cn li:hover h1{
    color: #fff;
}
#gun .cn_cn li:hover h2{
    color: #ff4655;
}
#gun .cn_cn li:hover h3{
    color: #ff4655;
}
#gun .cn_cn li:hover p{
    color: #ffb6bc;
}
</style>
