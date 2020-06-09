<template>
  <div class="hero" id="hero" @click="showSetting">
    <div class="hero_page">
      <Search></Search>
      <Page></Page>
      <div class="cn_rh">
        <Top>
          <img src="@/assets/img/global/pic9.png" alt class="Img1" slot="bg" />

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
            <input type="text" placeholder="输入关键字搜索英雄" v-model="search" />
            <img src="@/assets/img/global/pic10.png" alt />
          </div>
        </Top>
        <div class="c1" style="height:14px;"></div>
        <Cn class="cn_cn">
          <li slot="hero" v-for="(item,index) in items" :key="index" @click="itemClick(item.id)">
            <img :src="'https://images.weserv.nl/?url='+item.image" alt />
            <h1>{{item.name}}</h1>
            <h2>{{item.title}}</h2>
            <p>{{item.desc}}</p>
          </li>
        </Cn>
      </div>
    </div>
  </div>
</template>
<script>
import Page from "@/components/common/page.vue";
import Search from "@/components/common/search.vue";
import Top from "@/components/common/Top.vue";
import Cn from "@/components/common/cn.vue";
import { api } from "@/request/api";
export default {
  name: "hero",
  components: {
    Page,
    Search,
    Top,
    Cn
  },
  data() {
    return {
      search: "",
      list: [],
      selectlist: [],
      select: "",
      couponList: [],
      current:0,
      showSettingCon: false
    };
  },
  created() {
    this.initdata();
  },
  computed: {
    items: function() {
      let _search = this.search;
      let reg = new RegExp(_search, "ig"); // 不区分大小写
      if (_search) {
        return this.list.filter(function(item) {
          if (
            item.name.toString().indexOf(_search) != -1 ||
            item.name.match(reg) ||
            item.title.toString().indexOf(_search) != -1 ||
            item.desc.toString().indexOf(_search) != -1
          ) {
            return item;
          }
        });
      }
      return this.list;
    }
  },
  methods: {
    initdata() {
      let url = "/web2_0/vat_hero";
      api(url, {})
        .then(result => {
          this.list = result.data;
          this.selectlist = result.data;
        })
        .catch(err => {
          console.log(err);
        });

      api("/web2_0/vat_herosort", {})
        .then(result => {
          this.couponList = result.data;
          this.select = this.couponList[0].title;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // select
    itemClick(id) {
      console.log(id);
      this.$router.push({
        path: "/HeroDetail",
        query: {
          id: id
        }
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
  }
};
</script>
<style scoped>
#hero {
  width: 100%;
  overflow: hidden;
  min-height: 983px;
  background: url(~@/assets/img/global/bg.png) no-repeat center top;
}
#hero .hero_page {
  width: 1000px;
  margin: 0 auto;
}
#hero .cn_rh {
  float: left;
  width: 720px;
  min-height: 983px;
}
#hero .cn_cn li img {
  width: 103px;
  height: 99px;
  position: absolute;
  top: -10px;
  right: 10px;
}
#hero .cn_cn li h1 {
  font-size: 29px;
  font-style: italic;
  color: white;
  padding-top: 10px;
  padding-left: 20px;
  margin: 0;
}
#hero .cn_cn li h2 {
  font-size: 14px;
  color: white;
  padding-left: 20px;
  font-weight: normal;
  margin: 0;
  padding-top: 10px;
  color: #07d84c;
}
#hero .cn_cn li h3 {
  color: #62ff96;
  font-size: 42px;
  font-weight: normal;
  margin: 0;
  padding-left: 22px;
  padding-top: 12px;
}
#hero .cn_cn li p {
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
#hero .cn_cn li:hover h1 {
  color: #ff4655;
}
#hero .cn_cn li:hover h2 {
  color: #fff;
}
#hero .cn_cn li:hover p {
  color: #ffb6bc;
}
</style>
