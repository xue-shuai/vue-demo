<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="请输入你要搜索的城市名称">
    </div>
    <div class="search-content">
      <ul>
        <li class="search-item">西安</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.search
  height 1.83rem
  border-top 1px solid #7ad8e4
  border-bottom 1px solid #7ad8e4
  text-align center
  background $bgcolor
  .search-input
    box-sizing border-box
    margin-top 0.16rem
    padding 0 .1rem
    width 13.48rem
    line-height 1.3rem
    border-radius .1rem
    color #333
    text-indent .3rem
.search-content
  position absolute
  top 3.5rem
  left 0
  bottom 0
  right 0
  z-index 1
  .search-item
    display none
    line-height 1rem
    color #666
    padding-left .5rem
    border-bottom 1px solid #7ad8e4
</style>
