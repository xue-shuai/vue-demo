<template>
  <div class="search">
    <input type="text" placeholder="搜索商家、商品名称" class="txt">
  </div>
</template>

<script>
export default {
  name: 'WaimaiSearch'
}
</script>

<style lang="stylus" scoped>
.search
  margin-left .5rem
  .txt
    width 15rem
    height 1.8rem
    background #eaeaea
    border-radius 20px
    text-align center
    padding 0 1rem
    margin-bottom 0.8rem
</style>
