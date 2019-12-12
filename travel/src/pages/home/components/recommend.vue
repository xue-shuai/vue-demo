<template>
  <div class="recommend">
    <p class="recommend-title">
      <span class="iconfont heart-icon">&#xe60c;</span>
      猜你喜欢
    </p>
    <div class="recommend-info" v-for="item in recommends" :key="item.id">
      <span class="recommend-img-desc">{{item.imgDesc}}</span>
      <img class="recommend-img" :src="item.imgUrl">
      <p class="recommend-desc">{{item.title}}</p>
      <p>
        <span class="iconfont star-icon">&#xe64a;&#xe64a;&#xe64a;&#xe64a;&#xe64a;</span>
        <span class="recommend-comment">{{item.desc}}</span>
      </p>
      <div v-show="item.bool">
        <span class="recommend-money">
          <span class="recommend-prize"><em class="recommend-prize-sign">￥</em>{{item.prize}}</span><em class="recommend-prize-fix">起</em>
        </span>
        <span class="recommend-area">{{item.area}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
.recommend
  padding-left .46rem
  .recommend-title
    height 2.03rem
    font-size .66rem
    line-height 2.03rem
    color $darkTextColor
    margin-bottom .13rem
    .heart-icon
      font-size .9rem
      color #f00
  .recommend-info
    float left
    width 100%
    height 5.46rem
    border-bottom 1px solid #eaeaea
    margin-bottom .46rem
    position relative
    .recommend-img-desc
      display inline-block
      padding .18rem .45rem .41rem .13rem
      background #ff8d08
      color #fff
      border-radius 0 0 40% 0
      position absolute
      .recommend-img-desc-active
        background #03c6df
    .recommend-img
      float left
      width 4.58rem
      border-top 1px solid #c2c2c3
      margin-right 0.52rem
    .recommend-desc
      font-size .66rem
      line-height 1.3rem
      margin-top .41rem
      color $darkTextColor
    .star-icon
      color #ffb436
      margin-right 0.66rem
    .recommend-comment
      font-size .53rem
      line-height 1.21rem
    .recommend-money
      width 2.36rem
      margin-right 6.9rem
      .recommend-prize
        font-size .71rem
        line-height 1.71rem
        color #ffb436
        .recommend-prize-sign
          font-size .41rem
      .recommend-prize-fix
        font-size .5rem
        line-height 2rem
        color #686868
    .recommend-area
      display inline-block
      width 2.53rem
      font-size .51rem
      text-align right
</style>
