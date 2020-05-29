<template>
  <div class="cn" id="cn">
    <ul>
        <slot name="hero"></slot>
        <slot name="gun"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cn',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**/
#cn{
    width: 700px;
    overflow: hidden;
}
#cn ul li{
    width: 228px;
    height: 160px;
    background: url(~@/assets/img/heroGun/li_bg.png) no-repeat;
    position: relative;
    cursor: pointer;
    float: left;
    margin-right: 8px;
    margin-bottom: 20px;
}
#cn ul li:nth-of-type(3n){
    margin-right: 0;
}
#cn ul li:hover{
  background: url(~@/assets/img/heroGun/li_bg_h.png) no-repeat;  
}
</style>
