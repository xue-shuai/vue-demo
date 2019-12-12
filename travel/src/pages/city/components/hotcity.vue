<template>
  <div class="hotcity">
    <div class="title">热门城市</div>
    <div class="city-list" v-for="item in hotcities" :key="item.id">]
      <span class="city-item">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotCity',
  props: {
    hotcities: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.hotcity
  width 100%
  height 10.8rem
  .title
    width 100%
    height 1.8rem
    padding-left .76rem
    line-height 1.8rem
    font-size .55rem
    background #f5f5f5
  .city-list
    float left
    font-size 0
    display flex
    .city-item
      flex 1
      box-sizing border-box
      display inline-block
      height 2.25rem
      width 6rem
      font-size .63rem
      text-align center
      line-height 2.25rem
      border-right 1px solid #ddd
      border-bottom 1px solid #ddd
</style>
