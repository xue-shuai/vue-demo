<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-city">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  height 1.57rem
  line-height 1.57rem
  background $bgColor
  text-align center
  color #fff
  position relative
  .back-city
    position absolute
    top 0
    left 0
    color #fff
    width 2.47rem
</style>
