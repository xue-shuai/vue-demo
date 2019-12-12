<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe632;</span>
      输入城市/景点/游玩/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
// @import '../../../assets/styles/variables.styl';
// @import '~@/assets/styles/variables.styl';
@import '~styles/variables.styl'
.header
  display flex
  height 2rem
  background $bgColor
  color #fff
  font-size .57rem
  .header-left
    float left
    width 1.38rem
    line-height 2rem
    .back-icon
      font-size .48rem
      text-align center
      font-weight 700
  .header-input
    float left
    flex 1
    background #fff
    border-radius .1rem
    margin-top .33rem
    margin-left .45rem
    height 1.37rem
    line-height 1.37rem
    color #ccc
    padding-left .47rem
    .search-icon
      float left
      margin-right .23rem
  .header-right
    color #fff
    float left
    width 3rem
    line-height 2rem
    text-align center
    .arrow-icon
      font-size .57rem
      margin-left -.1rem
</style>
