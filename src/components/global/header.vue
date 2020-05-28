<template>
  <div class="site_head" id="site_head">
    <div class="header">
      <div class="logo lf">lphlplplp</div>
      <ul class="nav lf">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="[active == index ? 'active':'']"
          @click="itemClick(item.link)"
        >{{item.name}}</li>
      </ul>
      <div class="login lf">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "site_head",
  data() {
    return {
      active:0,
      navList: [
        {
          name: "英雄",
          link: "/"
        },
        {
          name: "枪械",
          link: "/gun"
        },
        {
          name: "数据",
          link: "/info"
        },
        {
          name: "视频",
          link: "/videos"
        },
        {
          name: "教学",
          link: "/education"
        },
        {
          name: "社区",
          link: "/community"
        },
        {
          name: "Liquipedia",
          link: "/Liquipedia"
        }
      ]
    };
  },
  watch: {
    // 按需加载路由，监听路由变化
    $route(to, from) {
      let _this = this; //这里注意一下记得缓存this
      _this.path = to.path;
      if (_this.path == "/") {
        _this.active = 0;
      } else if (_this.path == "/gun") {
        _this.active = 1;
      } else if (_this.path == "/info") {
        _this.active = 2;
      } else if (_this.path == "/videos") {
        _this.active = 3;
      }else if (_this.path == "/education") {
        _this.active = 4;
      }else if (_this.path == "/community") {
        _this.active = 5;
      }else if (_this.path == "/Liquipedia") {
        _this.active = 6;
      }
    }
  },
  methods: {
    itemClick(link) {
      console.log(link);
      this.$router.replace(link);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#site_head {
  height: 76px;
  width: 100%;
  background: #ff4655;
}
#site_head .header {
  width: 1200px;
  height: 76px;
  margin: 0 auto;
}
#site_head .nav {
  overflow: hidden;
}
#site_head .nav li {
  float: left;
  width: 100px;
  text-align: center;
  height: 76px;
  line-height: 76px;
  color: white;
  font-family: "微软雅黑";
  cursor: pointer;
  font-size: 18px;
}
#site_head .nav li.active{
    color: black;
}
</style>
