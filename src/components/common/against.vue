<template>
  <div class="against" id="against">
    <div class="against_tp">
        <img src="@/assets/img/global/pic15.png" alt="">
    </div>
    <ul>
        <li v-for="(item,index) in list" :key="index">
          <div class="m1 lf">
            <div class="m1_1 m01">
              <img :src="'https://images.weserv.nl/?url='+item.team_logo_A" alt=""  class="lf">
              <span class="lf">{{item.team_name_A}}</span>
            </div>
            <div class="m1_2 m01">
              <img :src="'https://images.weserv.nl/?url='+item.team_logo_B" alt=""  class="lf">
              <span class="lf">{{item.team_name_B}}</span>
            </div>
          </div>
          <div class="m2 rh">
              <!--分好几种情况 -->
            <div class="classify1" v-if="item.score!='-'">
                <div class="m2_1 m02">
                <span>{{item.score | filter2}}</span>
              </div>
              <div class="m2_2 m02 win">
                <span>{{item.score | filter5}}</span>
              </div>
            </div>
              <div class="classify2" v-else>
                  <div class="m2_3">{{item.matchtime | filter1}}</div>
              </div>
          </div>
        </li>
    </ul>
    <div class="against_bt">
        <img src="@/assets/img/global/pic16.png" alt="">
    </div>
  </div>
</template>

<script>
import { apiHomeTAgainst } from "@/request/api";
export default {
  name: 'against',
  data(){
    return {
      list:[]
    }
  },
  created() {
    this.initdata();
  },
  methods: {
  // 获取数据
   initdata(){
    apiHomeTAgainst({                                
    }).then((result) => {
       this.list = result.data;
     }).catch((err) => {
       console.log(err);
     });
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**/
#against .against_tp img{
    display: block;
}
#against ul li{
    width: 100%;
    height: 48px;
    background: #ffffff;
    border:1px solid #101823;
    border-left: none;
    border-right: none;
}
#against ul li .m1{
width: 74px;
height: 48px;
}
#against ul li .m1 .m01{
  height: 24px;
  width: 100%;
}
#against ul li .m1 .m01 img{
  width: 14px;
  height: 14px;
  margin: 5px 4px 5px 10px;
}
#against ul li .m1 .m01 span{
  display: block;
  text-align: left;
  color: #101823;
  width: 45px;
  height:14px;
  margin-top: 5px;
  margin-bottom: 5px;
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#against ul li .m2{
  width: 76px;
  height: 48px;
}
#against ul li .m2 .m02{
  height: 24px;
  width: 100%;
}
#against ul li .m2 .m02 span{
  display: block;
  width: 38px;
  height: 17px;
  line-height: 17px;
  text-align: center;
  margin: 0 auto;
  font-size: 12px;
  color: #000;
}
#against ul li .m2 .m2_1 span{
  padding-top: 7px;
}
#against ul li .m2 .win span{
  background: url(~@/assets/img/global/pic17.png) no-repeat;
  color: #fff;
}
#against ul li .m2 .m2_3{
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  text-align: center;
  font-family: "微软雅黑";
  background: url(~@/assets/img/global/pic18.png) no-repeat center;
}
#against .against_bt img{
    cursor: pointer;
    display: block;
}
</style>
