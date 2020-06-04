<template>
  <div>
    <input type="text" v-model="search">
    <ul>
      <!-- 注意！注意！注意！这里循环遍历的是items，不再是data里的list数组 -->
      <li v-for="(item,index) in items" :key="index">
        <span>{{item.name}}</span>
        <span>{{item.msg}}</span>
        <span>{{item.age}}</span>
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DataForm", 
  data() {
    return {
      search:'',
      list:[
        {id:0,name:'AAA',msg:'aaa文本介绍1',title:'水电费',age:366},
        {id:1,name:'BBB',msg:'bbb文本介绍2',title:'赵子龙',age:235},
        {id:2,name:'CCC',msg:'ccc文本介绍3',title:'赵性',age:587},
        {id:3,name:'DDD',msg:'ddd文本介绍4',title:'展飞',age:654},
        {id:4,name:'EEE',msg:'eee文本介绍5',title:'收费',age:987},
        {id:5,name:'FFF',msg:'Aa文本介绍6',title:'收费',age:6985},
      ]
    };
  },
  computed:{
    // 筛选指定字段
    items:function(){
      let _search = this.search;
      let reg = new RegExp(_search, 'ig');// 不区分大小写
       if (_search) {
        return this.list.filter(function(product) {
          return Object.keys(product).some(function(key) {
            return String(product[key]).toLowerCase().indexOf(_search) > -1
          })
        })
      }
      return this.list;
    },
    // 筛选所有的字段
    itemss: function() {
      var _search = this.search;
      console.log(_search);
      if(_search){
        // 不区分大小写处理
        var reg = new RegExp(_search, 'ig')
        // es6 filter过滤匹配，有则返回当前，无则返回所有
        return this.list.filter(function(e) {
          // 匹配所有字段
          return Object.keys(e).some(function(key) {
            return e[key].match(reg);
          })
          // 匹配某个字段
          // return e.name.match(reg);
        })
      };
      return this.list;
    }
  }
};
</script>