  <!-- 个人数据 -->
<template>
    <div class="match" id="p-match">
        <div class="match_cn1">
            <div class="cn1 lf">
                <h1 class="name">ascvjdjjd</h1>
                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                <img class="more" src="@/assets/img/global/more1.png" alt="">
            </div>
            <div class="cn2 lf">
                <div class="cn2_1">
                    <ul>
                        <li class="t1">所属战队</li>
                        <li class="t2 t_spc">Vitality</li>
                        <li class="t1">Rating</li>
                        <li class="t2">Vitality</li>
                    </ul>
                </div>
                <div class="cn2_1 cn2_2">
                    <ul>
                        <li class="t1">加入日期</li>
                        <li class="t2 t_spc">Vitality</li>
                        <li class="t1">不白给概率</li>
                        <li class="t2">Vitality</li>
                    </ul>
                </div>
                <div class="c1" style="height:32px"></div>
                <div class="cn2_3">
                    <ul>
                        <li>
                            <span class="t1">总击杀</span>
                            <span class="t2">
                                <i class="i1">12345</i>
                                <i class="i2">Kills</i>
                            </span>
                        </li>
                         <li>
                            <span class="t1">游戏时长</span>
                            <span class="t2">
                                <i class="i1">12345</i>
                                <i class="i2">Total Time</i>
                            </span>
                        </li>
                         <li>
                            <span class="t1">场均伤害</span>
                            <span class="t2">
                                <i class="i1">12345</i>
                                <i class="i2">ADR</i>
                            </span>
                        </li>
                         <li>
                            <span class="t1">场均治疗</span>
                            <span class="t2">
                                <i class="i1">12345</i>
                                <i class="i2">AKR</i>
                            </span>
                        </li>
                         <li>
                            <span class="t1">场均击杀</span>
                            <span class="t2">
                                <i class="i1">12345</i>
                                <i class="i2">AKR</i>
                            </span>
                        </li>
                         <li>
                            <span class="t1">游戏场次</span>
                            <span class="t2">
                                <i class="i1">12345</i>
                                <i class="i2">GAME</i>
                            </span>
                        </li>
                    </ul>
                </div>
                 <div class="c1" style="height:32px"></div>
                <div class="cn2_4">
                    <ul>
                        <li>
                            <span class="t1">胜率</span>
                            <span class="t2">
                                <i class="i0">Lorem Ipsum</i>
                                <i class="i1">76%</i>
                                <i class="i2">Win Rate</i>
                            </span>
                        </li>
                         <li>
                            <span class="t1">英雄胜率（TOP 5）</span>
                            <div class="hero_w">
                                <div class="w">
                                                   <span>
                                    <i class="i0">Phoenix</i>
                                    <i class="i1">76%</i>
                                </span>
                                <span>
                                    <i class="i0">Phoenix</i>
                                    <i class="i1">76%</i>
                                </span>
                                <span>
                                    <i class="i0">Phoenix</i>
                                    <i class="i1">76%</i>
                                </span>
                                <span>
                                    <i class="i0">Phoenix</i>
                                    <i class="i1">76%</i>
                                </span>
                                <span>
                                    <i class="i0">Phoenix</i>
                                    <i class="i1">76%</i>
                                </span>
                                </div>
                                <span class="t3">Hero Win Rate</span>
                            </div>
                            
                        </li>
                         <li>
                            <span class="t1">赛事奖金</span>
                            <span class="t2">
                                <i class="i1" style="margin-top:18px">12345</i>
                                <i class="i2">Match Bonus</i>
                            </span>
                        </li>
           
                        <li>
                            <span class="t1">参赛次数</span>
                            <span class="t2">
                                <i class="i1" style="margin-top:18px">12345</i>
                                <i class="i2">Matchs</i>
                            </span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        <div class="c1" style="height:40px"></div>
        <div class="match_cn2">
            <div class="cn2_1">
                <div class="cn1 lf">
                    <h1>枪械胜率</h1>
                    <Pie></Pie>
                </div>
                <div class="cn2 lf"> 
                    <h1>状态起伏</h1>
                    <LineChart id="main"></LineChart>
                </div>
                <div class="cn3 lf">
                    <h1>地图胜率</h1>
                    <MapWin id="map1"></MapWin>
                </div>
            </div>
            <div class="c1" style="height:13px"></div>
            <div class="cn2_2">
                <div class="cn1 lf">
                    <h1>荣誉数量</h1>
                    <div class="m0 m1">
                        <span>323</span>
                        <span>ACE次数</span>
                    </div>
                    <div class="m0 m2">
                        <span>323</span>
                        <span>ACE次数</span>
                    </div>
                </div>
                <div class="cn2 lf"> 
                    <h1>英雄时长</h1>
                    <div class="hero_t">
                        <ul>
                            <li>
                                <span>12<i>hrs</i>11<i>min</i></span>
                                <span>rate <i>1.45</i></span>
                                <img src="@/assets/img/fw/fw6.png" alt="">
                            </li>
                            <li>
                                <span>12<i>hrs</i>11<i>min</i></span>
                                <span>rate <i>1.45</i></span>
                                <img src="@/assets/img/fw/fw6.png" alt="">
                            </li>
                            <li>
                                <span>12<i>hrs</i>11<i>min</i></span>
                                <span>rate <i>1.45</i></span>
                                <img src="@/assets/img/fw/fw6.png" alt="">
                            </li>
                             <li>
                                <span>12<i>hrs</i>11<i>min</i></span>
                                <span>rate <i>1.45</i></span>
                                <img src="@/assets/img/fw/fw6.png" alt="">
                            </li>
                             <li>
                                <span>12<i>hrs</i>11<i>min</i></span>
                                <span>rate <i>1.45</i></span>
                                <img src="@/assets/img/fw/fw6.png" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="cn3 lf">
                    <h1>冠军数量</h1>
                    <div class="champion_n">
                        3
                    </div>
                </div>
            </div>
            <div class="c1" style="height:18px"></div>
            <div class="cn2_3">
                <p>ZywOo在2019年具有统治地位。五枚MVP奖牌和五个EVP是他在2019年交出的满意答卷，这放在CSGO历史上也是优秀的数据。他的ADR

                ZywOo排名第一的另一个关键因素是他的稳定性，他的KAST（74.5%）排名第六，令人难以置信的是他从未有过被认为糟糕发挥失常

                考虑到所有因素，ZywOo超越了当年21岁的coldzera，成为了历史上HLLV TOP1最年轻的天才选手。他在将来还可以和GeT_RiGhT以

                “apEX在面对HLTV时谈到：‘毫无疑问，ZywOo是
                </p>
                <img class="read_m" src="@/assets/img/global/more2.png" alt="">
            </div>
             <div class="c1" style="height:26px"></div>
        </div>
        <div class="c1" style="height:46px"></div> 
         <!-- 战队队员 -->
        <div class="match_cn3">
            <div class="tp">
                 <img src="@/assets/img/detail/pic7.png" alt="">
            </div>
            <div class="c1" style="height:26px"></div>
            <div class="team_p">
                <ul>
                    <li>
                        <div class="photo">
                            <img src="@/assets/img/fw/fw1.png" alt="">
                        </div>
                        <div class="p_name">桂维维</div>
                        <div class="p_rating">Rating 2.24</div>
                    </li><li>
                        <div class="photo">
                            <img src="@/assets/img/fw/fw1.png" alt="">
                        </div>
                        <div class="p_name">桂维维</div>
                        <div class="p_rating">Rating 2.24</div>
                    </li>
                    <li>
                        <div class="photo">
                            <img src="@/assets/img/fw/fw1.png" alt="">
                        </div>
                        <div class="p_name">桂维维</div>
                        <div class="p_rating">Rating 2.24</div>
                    </li>
                    <li>
                        <div class="photo">
                            <img src="@/assets/img/fw/fw1.png" alt="">
                        </div>
                        <div class="p_name">桂维维</div>
                        <div class="p_rating">Rating 2.24</div>
                    </li>
                    <li>
                        <div class="photo">
                            <img src="@/assets/img/fw/fw1.png" alt="">
                        </div>
                        <div class="p_name">桂维维</div>
                        <div class="p_rating">Rating 2.24</div>
                    </li>
                    <li>
                        <div class="photo">
                            <img src="@/assets/img/fw/fw1.png" alt="">
                        </div>
                        <div class="p_name">桂维维</div>
                        <div class="p_rating">Rating 2.24</div>
                    </li>
                    
                </ul>
            </div>
        </div>
         <div class="c1" style="height:56px"></div> 
        <!-- 历史战绩 -->
         <div class="match_cn4">
            <div class="tp">
                 <img src="@/assets/img/detail/pic8.png" alt="">
            </div>
            <div class="c1" style="height:16px"></div>
            <div class="record">
                <div class="record_tp">
                    <ul>
                        <li>时间</li>
                        <li>战队</li>
                        <li>对手</li>
                        <li>使用英雄</li>
                        <li>地图</li>
                        <li>KDA</li>
                        <li>比分</li>
                        <li>胜负</li>
                    </ul>
                </div>
                <div class="record_cn">
                    <ul>
                        <li>
                            <div>2012-12-12</div>
                            <div>IG</div>
                            <div>asg</div>
                            <div class="hero_p">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                            </div>
                            <div>deset</div>
                            <div>23/23/21</div>
                            <div>22:11</div>
                            <div>胜</div>
                        </li>
                        <li>
                            <div>2012-12-12</div>
                            <div>IG</div>
                            <div>asg</div>
                            <div class="hero_p">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                            </div>
                            <div>deset</div>
                            <div>23/23/21</div>
                            <div>22:11</div>
                            <div>胜</div>
                        </li>
                        <li>
                            <div>2012-12-12</div>
                            <div>IG</div>
                            <div>asg</div>
                            <div class="hero_p">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                            </div>
                            <div>deset</div>
                            <div>23/23/21</div>
                            <div>22:11</div>
                            <div>胜</div>
                        </li>
                        <li>
                            <div>2012-12-12</div>
                            <div>IG</div>
                            <div>asg</div>
                            <div class="hero_p">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                            </div>
                            <div>deset</div>
                            <div>23/23/21</div>
                            <div>22:11</div>
                            <div>胜</div>
                        </li>
                        <li>
                            <div>2012-12-12</div>
                            <div>IG</div>
                            <div>asg</div>
                            <div class="hero_p">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                                <img class="spc" src="@/assets/img/fw/fw6.png" alt="">
                            </div>
                            <div>deset</div>
                            <div>23/23/21</div>
                            <div>22:11</div>
                            <div>胜</div>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
         <div class="c1" style="height:68px"></div> 
         <div class="partner">
             <img class="spc" src="@/assets/img/global/partner.png" alt="">
         </div>
         <div class="c1" style="height:30px"></div> 
    </div>
</template>

<script>
import Pie from "@/components/global/Pie.vue"
import LineChart from "@/components/global/Line.vue"
import MapWin from "@/views/info/mapWin.vue"
import Search from '@/components/common/search.vue'
export default {
 name:"Info",
 components:{
   Pie,
   LineChart,
   MapWin,
   Search
 }
}
</script>
<style scoped>
#Info{
width: 100%;
  overflow: hidden;
  background:#121f2b url(~@/assets/img/global/bg.png) no-repeat center top;
}
#p-match{
  width:1000px;
  margin: 0 auto;
  overflow: hidden;
  background: #101823;
}
.match .match_cn1{
    margin-left: 34px;
    overflow: hidden;
    height: 335px;
    position: relative;
    text-align: center;
}
.match .match_cn1 h1{
    width: 141px;
    height: 62px;
    line-height: 62px;
    text-align: center;
    color: white;
    font-size: 24px;
    font-family: "微软雅黑";
    display: block;
    margin: 0 auto;
    background: #ff4655;
}
.match .match_cn1 img.spc{
    width: 141px;
    height: 144px;
    position: absolute;
    top: 50px;
    left: 17px;
}
.match .match_cn1 img.more{
    margin-top: 190px;
    text-align: center;
    cursor: pointer;
}
.match .match_cn1 .cn1{
    width: 173px;
    height: 335px;
    margin-right: 17px;
}
.match .match_cn1 .cn2{
    width: 750px;
    height: 335px;
}
.match .match_cn1 .cn2 .cn2_1{
    overflow: hidden;
}
.match .match_cn1 .cn2 .cn2_1 ul{
    overflow: hidden;
}
.match .match_cn1 .cn2 .cn2_1 ul li{
    float: left;
    height: 27px;
    line-height: 27px;
    text-align: center;
    font-size: 12px;
    color: #516177;
    border: 1px solid #1e2d43;
    cursor: default;
}

.match .match_cn1 .cn2 .cn2_1 ul li.t_spc{
    margin-right: 32px;
    color: white;
}
.match .match_cn1 .cn2 .cn2_2{
    margin-top: 4px;
}
.match .match_cn1 .cn2 .cn2_3{
    height: 98px;
}
.match .match_cn1 .cn2 .cn2_3 ul li{
    float: left;
    width: 105px;
    height: 98px;
}
.match .match_cn1 .cn2 .cn2_3 ul li span.t1{
    display: block;
    width: 103px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    color: #516177;
    border: 1px solid #1e2d43;
    font-size: 12px;
}
.match .match_cn1 .cn2 .cn2_3 ul li span.t2{
    display: block;
    width: 103px;
    height: 63px;
    line-height: 26px;
    text-align: center;
    color: #516177;
    border: 1px solid #1e2d43;
    font-size: 12px;
    margin-top: 5px;
}
.match .match_cn1 .cn2 .cn2_1 ul li.t1{
    width: 76px;
    margin-right: 4px;
}

.match .match_cn1 .cn2 .cn2_1 ul li.t2{
    width: 85px;
    
}
.match .match_cn1 .cn2 .cn2_3 ul li{
    margin-right: 13px;
}
.match .match_cn1 .cn2 .cn2_3 ul li:first-child span.t2 .i1{
    color: #ff4655;
}
.match .match_cn1 .cn2 .cn2_3 ul li:last-child{
    margin-right: 0;
}
.match .match_cn1 .cn2 .cn2_3 ul li:nth-child(2){
    width: 148px;
}
.match .match_cn1 .cn2 .cn2_3 ul li:nth-child(2) span{
    width: 146px;
}
.match .match_cn1 .cn2 .cn2_3 ul li span.t2 .i1{
    width: 100%;
    height: 42px;
    line-height: 42px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    font-style: normal;
    text-align: center;
    display:block;
}
.match .match_cn1 .cn2 .cn2_3 ul li span.t2 .i2{
    width: 100%;
    height: 21px;
    line-height: 21px;
    color: #516177;
    font-size: 12px;
    font-style: normal;
    text-align: center;
    display:block;
}


.match .match_cn1 .cn2 .cn2_4{
    height: 114px;
}
.match .match_cn1 .cn2 .cn2_4 ul li{
    float: left;
    width: 105px;
    height: 112px;
}
.match .match_cn1 .cn2 .cn2_4 ul li span.t1{
    display: block;
    width: 103px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    color: #516177;
    border: 1px solid #1e2d43;
    font-size: 12px;
}
.match .match_cn1 .cn2 .cn2_4 ul li span.t2{
    display: block;
    width: 103px;
    height: 76px;
    line-height: 26px;
    text-align: center;
    color: #516177;
    border: 1px solid #1e2d43;
    font-size: 12px;
    margin-top: 5px;
}
.match .match_cn1 .cn2 .cn2_4 ul li{
    margin-right: 13px;
}
.match .match_cn1 .cn2 .cn2_4 ul li:first-child span.t2 .i1{
    color: #ff4655;
}
.match .match_cn1 .cn2 .cn2_4 ul li:last-child{
    margin-right: 0;
}
.match .match_cn1 .cn2 .cn2_4 ul li:nth-child(2){
    width: 148px;
}
.match .match_cn1 .cn2 .cn2_4 ul li span.t2 .i0{
    width: 100%;
    height: 24px;
    line-height: 24px;
    color: #516177;
    font-size: 12px;
    font-style: normal;
    text-align: center;
    display:block;
}
.match .match_cn1 .cn2 .cn2_4 ul li span.t2 .i1{
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    font-style: normal;
    text-align: center;
    display:block;
}

.match .match_cn1 .cn2 .cn2_4 ul li:nth-child(2){
    width: 384px;
}
.match .match_cn1 .cn2 .cn2_4 ul li:nth-child(2) span.t1{
    width: 382px;
}

.match .match_cn1 .cn2 .cn2_4 ul li:nth-child(2) .hero_w{
    width: 382px;
    height: 76px;
    border: 1px solid #1e2d43;
    margin-top: 5px;
}
.match .match_cn1 .cn2 .cn2_4 ul li span.t3{
    width: 100%;
    text-align: center;
    color:#516177;
    font-size: 12px;
    height: 10px;
}
.hero_w span{
    float: left;
    width: 20%;
    height: 59px;
}
.hero_w span i{
    font-style: normal;
    display: block;
}
.hero_w span i.i0{
    font-size: 12px;
    margin-top: 15px;
    margin-bottom: 5px;
}
.hero_w span i.i1{
    font-size: 18px;
    font-weight: bold;
    color:#fff;
}
.match .match_cn2{
  width:915px;
  height: 657px;
  border: 1px solid #1e2d43;
  margin-left: 34px;
}
.match .match_cn2 .cn2_1{
    width:100%;
}
.match .match_cn2 .cn1{
  width: 157px;
  height: 295px;
  margin-right:11px;
  margin-left: 13px;
}
.match .match_cn2 .cn2{
  width: 553px;
  height: 295px;
  margin-right:11px;
}
.match .match_cn2 .cn2_2 .cn1{
    height: 168px;
}
.match .match_cn2 .cn2_2 .cn2{
    height: 168px;
}
.match .match_cn2 .cn2_2 .cn3{
    height: 168px;
}
.match .match_cn2 .cn3{
  width: 157px;
  height: 295px;
}
.match .match_cn2 .lf{
  margin-top: 12px;

}
.match .match_cn2 .lf h1{
  margin:0;
  height: 27px;
  margin-bottom: 5px;
  line-height: 27px;
  text-align: center;
  background: #17222f;
  border:1px solid #1e2d43;
  color: #516177;
  font-weight: normal;
  font-size: 12px;
}

.match .match_cn2 .cn2_2{
    width:100%;
}
.match .match_cn2 .cn2_2 .m0{
    width: 155px;
    border: 1px solid #1e2d43;
    height: 62px;
}
.match .match_cn2 .cn2_2 .m0 span{
    display: block;
    width: 100%;
}
.match .match_cn2 .cn2_2 .m0 span:nth-child(1){
    font-size: 18px;
    font-weight: bold;
    color: white;
    height: 42px;
    line-height: 42px;
    text-align: center;
}
.match .match_cn2 .cn2_2 .m0 span:nth-child(2){
    font-size: 12px;
    font-weight: bold;
    color: #516177;
    text-align: center;
}
.match .match_cn2 .cn2_2 .m1{
    margin-bottom: 6px;
}
.match .match_cn2 .cn2_2 .cn2 .hero_t{
    width: 551px;
    height: 132px;
    border: 1px solid #1e2d43;
}
.match .match_cn2 .cn2_2 .cn2 .hero_t ul{
    width: 544px;
    overflow: hidden;
    margin:0 auto;
}
.match .match_cn2 .cn2_2 .cn2 .hero_t ul li{
    float: left;
    width: 102px;
    height: 118px;
    text-align: center;
    border: 1px solid #1e2d43;
    margin-top: 5px;
    margin-right: 6px;
}
.match .match_cn2 .cn2_2 .cn2 .hero_t ul li:last-child{
    margin-right: 0;
}
.match .match_cn2 .cn2_2 .cn2 .hero_t ul li img{
    width: 60px;
    height: 60px;
}
.match .match_cn2 .cn2_2 .cn2 .hero_t ul li span{
    display: block;
    width: 100%;
}
.match .match_cn2 .cn2_2 .cn2 .hero_t ul li span:nth-child(1){
    font-size: 14px;
    font-family: "微软雅黑";
    color: white;
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
}
.match .match_cn2 .cn2_2 .cn2 .hero_t ul li span:nth-child(1) i{
    color: #516177;
    font-size: 12px;
    font-weight: normal;
}
.match .match_cn2 .cn2_2 .cn2 .hero_t ul li span:nth-child(2){
    font-family: "微软雅黑";
    color: #516177;
    font-size: 12px;
    text-align: center;
    margin-bottom: 9px;
}
.match .match_cn2 .cn2_2 .cn2 .hero_t ul li span:nth-child(2) i{
    color: #ff4655;
    font-size: 12px;
    font-weight: bold;
    font-weight: normal;
}
.match .match_cn2 .cn2_2 .cn3 .champion_n{
    width: 157px;
    height: 62px;
    line-height:62px;
    text-align: center;
    border: 1px solid #1e2d43;
    font-weight: bold;
    color: white;
    font-size: 30px;
}
.match .match_cn2 .cn2_2{
    overflow: hidden;
}
.match .match_cn2 .cn2_3{
    width: 719px;
    height: 119px;
    border: 1px solid #1e2d43;
    margin-left: 13px;
    position: relative;
}.match .match_cn2 .cn2_3 p{
    font-size: 12px;
    line-height: 22px;
    color: #516177;
    padding: 0 10px;
}
.match .match_cn2 .cn2_3 .read_m{
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
}
.match_cn3 {
    margin-left: 34px;
    overflow: hidden;
}
.match_cn3 ul{
    overflow: hidden;
}
.match_cn3 ul li{
    width: 122px;
    overflow: hidden;
    float: left;
    margin-right: 23px;
}
.match_cn3 ul li:last-child{
    margin-right: 0;
}
.match_cn3 .photo{
    width: 120px;
    height: 148px;
    text-align: center;
    border: 1px solid #1e2d43;
    margin-bottom: 7px;
}
.match_cn3 .photo img{
    width: 106px;
    height: 134px;
    margin: 7px 0;
}
.match_cn3 .p_name{
     width: 120px;
     height: 25px;
     line-height: 25px;
     font-size: 14px;
     color: white;
     border: 1px solid #1e2d43;
     text-align: center;
}
.match_cn3 .p_rating{
     width: 120px;
     height: 25px;
     line-height: 25px;
     font-size: 12px;
     color: #516177;
     border: 1px solid #1e2d43;
     border-top:  none;
     text-align: center;
}
.match_cn4{
    margin-left: 34px;
    overflow: hidden;
    width: 915px;
}
.match_cn4 .record{
    width: 913px;
    overflow: hidden;
}
.match_cn4 .record .record_tp{
    height: 26px;
    border: 1px solid #1e2d43;
}
.match_cn4 .record .record_tp ul li{
    float: left;
    line-height: 26px;
    text-align: center;
    font-size: 12px;
    color: #516177;
    border-right: 1px solid #1e2d43;
    width: 96px;
}
.match_cn4 .record .record_tp ul li:last-child{
    border-right: none;
}
.match_cn4 .record .record_tp ul li:nth-child(4){
    width: 230px;
}
.record_cn {
    overflow: hidden;
    margin-top: 6px;
}
.record_cn ul li{
    height: 58px;
    border: 1px solid #1e2d43;
    border-top: none;
}
.record_cn ul li:nth-child(1){
    border-top: 1px solid #1e2d43;
}
.record_cn ul li div{
    float: left;
    width: 97px;
    text-align: center;
    height: 58px;
    line-height: 58px;
    color: white;
    font-size: 12px;
}
.record_cn ul li div.hero_p{
    width: 231px;
}
.record_cn ul li div.hero_p img{
    float: left;
    width: 40px;
    height: 40px;
    margin: 9px 0;
    margin-left:4px;
}
.partner{
    text-align: right;
    margin-right: 40px;
}
</style>
