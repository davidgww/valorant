<template>
  <div class="search" id="search">
    <div class="backImba">
        <img src="@/assets/img/global/pic6.png" alt="" class="Img1">
    </div>
    <!-- 搜索 -->
    <div class="sc">
        <!-- <img src="@/assets/img/global/pic7.png" alt="" class="Img2">
         -->
        <input type="text" placeholder="输入游戏ID查询">
        <img src="@/assets/img/global/pic8.png" alt="" class="Img2">
        <span class="tit">数据查询目前仅对注册的职业选手开放</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**/
#search{
    width: 1000px;
    margin: 0 auto;
    height: 50px;
    position: relative;
}
#search .backImba{
    height: 36px;
    width: 147px;
    float: left;
}
#search .backImba .Img1{
    position: absolute;
    top: 0;
    left: -15px;
}
#search input{
    width: 190px;
    height: 24px;
    line-height: 24px;
    position: absolute;
    top: 13px;
    left: 123px;
    border: none;
    z-index: 4;
    background:url(~@/assets/img/global/pic7.png) no-repeat center;   
    cursor:pointer;  
    display:block;
    padding-left:30px;
    font-size: 12px;
}
#search .Img2{
    width: 58px;
    height: 24px;
    display: block;
    position: absolute;
    top: 14px;
    left: 323px;
    border: none;
    z-index: 4;
    cursor: pointer;
}
#search span{
    position: absolute;
    left: 390px;
    top: 21px;
    font-size: 12px;
    color: #b23b44;
}

</style>

