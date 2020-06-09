<template>
  <div class="top" id="top">
    <slot name="bg"></slot>
    <slot name="sec"></slot>
    <slot name="search"></slot>
  </div>
</template>

<script>
export default {
  name: "top",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**/
#top {
  width: 700px;
  height: 64px;
  position: relative;
}
#top select{
    width: 100px;
    height: 28px;
    line-height: 28px;
    border-color: #fff;
    padding-left: 12px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 414px;
}
#top .search{
    position: absolute;
    top: 20px;
    left: 522px;
}
#top .search input{
    width: 126px;
    height: 26px;
    line-height: 26px;
    border: none;
    font-size: 12px;
    padding-left: 10px;
    margin-right: 10px;
    float: left;
}
#top .search img{
    float: left;
    margin-top: 7px;
    cursor: pointer;
}
</style>
