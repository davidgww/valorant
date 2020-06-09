<template>
  <div class="foot" id="foot">
    <div class="footCn">
        <div class="cn_lf lf">
            <ul>
                <li>关于网站</li>
                <li>游戏介绍</li>
                <li>合作伙伴</li>
                <li>商业合作</li>
            </ul>
          <div class="c1" style="height:29px;"></div>
          <share :config="config"></share>
        </div>
        <div class="cn_cn lf"></div>
        <div class="cn_rh lf">
           <span>沪ICP备14018690号-1沪网文[2016]0206-106号</span>
            <span>沪公网安备 31010802001185号监督举报热线:12318</span>
            <span>All Rights Reserved. 上海映霸文化传播有限公司 版权所有</span>
            <span>Powered by imbatv.cn</span>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'foot',
  data() {
    return {
      config:{
       sites: ['weibo','wechat',"twitter","facebook","linkedin"],
          wechatQrcodeTitle   : '微信扫一扫：分享',
          wechatQrcodeHelper  : '<p>扫一扫</p><p>二维码分享至朋友圈。</p>'
      }
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#foot{
    height: 247px;
    width: 100%;
    background: #010915;
    color:rgb(45, 189, 88);
    font-size: 48px;
}
.footCn{
  width: 1000px;
  margin: 0 auto;
  height: 247px;
}
.cn_lf{
  width: 500px;
  height: 100%;
  margin-right: 43px;
}
.cn_lf ul{
  overflow: hidden;
  margin-top: 29px;
}
.cn_lf ul li{
  float: left;
  height: 35px;
  margin-left: 42px;
  width: 58px;
  line-height: 35px;
  text-align: center;
  font-size: 14px;
  color: #364861;
  cursor: pointer;
}
.cn_cn{
  width: 1px;
  height: 100px;
  background: #1a2739;
  margin: 37px 0 0px;
}
.cn_rh{
  width: 410px;
  height: 100%;
  margin-left: 46px;
}
.cn_rh span{
  display: block;
  font-size: 12px;
  color: #364861;
}
.cn_rh span:nth-child(1){
  margin-top: 37px;
  margin-bottom: 6px;
}
.cn_rh span:nth-child(3){
  margin-top: 33px;
  margin-bottom: 8px;
}
</style>
