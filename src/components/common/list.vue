<template>
  <div class="list" id="list" v-cloak>
    <slot></slot>
    <ul>
     <!--class  hot -->
      <li v-for="(item,index) in list" :key="index" @click="itemClick(item.id)">
        <div class="list_cn">
          <span class="sp1 lf">{{item.title}}</span>
          <span class="sp2 rh">{{item.addtime | filter6}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { apiHomeRecentNews } from "@/request/api";
export default {
  name: "list",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.initdata();
  },
  // 父组件给子组件传得值
   props: {
    url: {
      type: String
    },
  },
  methods: {
    // 获取数据
    initdata() {
      let url = this.url;
      apiHomeRecentNews(url, {
        p: {}
      })
        .then(result => {
          //  根据后台返回数据处理
          console.log(result);
          this.list = result.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 点击进入详情页
    itemClick(id) {
        this.$router.push({
          path: "/HeroDetail",
          query: {
            id: id
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**/
[v-cloak] {
display: none;
}
#list h2 {
  font-size: 20px;
  font-style: italic;
  font-family: "微软雅黑";
  color: white;
  cursor: default;
  margin: 0;
  margin-top: 16px;
  margin-bottom: 10px;
}
#list ul{
  min-height: 144px;
}
#list ul li {
  height: 36px;
  line-height: 36px;
  width: 498px;
  cursor: pointer;
  padding-left: 20px;
}
#list ul li {
  background: url(~@/assets/img/global/pic12.png) no-repeat left center;
}
#list ul li .list_cn {
  width: 498px;
  border-bottom: 1px dashed #323d46;
  margin: 0 auto;
  height: 36px;
  line-height: 36px;
}
#list ul li span {
  font-size: 12px;
  color: #5a646b;
}
#list ul li:hover span {
  color: white;
}
#list ul li:hover {
  background: url(~@/assets/img/global/pic14.png) no-repeat left center;
}
#list ul li.hot span {
  color: #ff4655;
}
#list ul li.hot {
  background: url(~@/assets/img/global/pic13.png) no-repeat left center;
}
</style>
