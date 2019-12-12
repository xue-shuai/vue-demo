<template>
  <div class="shopping">
    <h1 class="title">推荐商家</h1>
    <div class="option">
      <span>综合排序</span>
      <span>距离</span>
      <span>销量</span>
      <span class="fr">筛选</span>
    </div>
    <div class="list">
      <div class="item" v-for="item in shopping" :key="item.id">
        <div class="pic">
          <img :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-sale">
            <span class="star">{{item.star}}</span>
            <span>{{item.sales}}</span>
            <span class="fr"><i>准时达</i><i class="bg">蜂鸟专送</i></span>
          </div>
          <div class="info-delivery">
            <span>{{item.delivery}}<strike>{{item.del}}</strike></span>
            <span class="fr">{{item.time}}</span>
          </div>
          <div class="info-commit">
            <span v-for="itemCommit in item.commit" :key="itemCommit">{{itemCommit}}</span>
          </div>
          <div class="info-discount">
            <span v-for="itemDiscount in item.discount" :key="itemDiscount">{{itemDiscount}}</span>
          </div>
          <p class="info-hear">{{item.hear}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaimaiShopping',
  props: {
    shopping: Array
  }
}
</script>

<style lang="stylus" scoped>
.shopping
  margin-left 0.5rem
  .title
    font 700 .65rem/1.45rem '微软雅黑'
  .option
    font .5rem/1.33rem '微软雅黑'
    margin-bottom 0.83rem
    span
      margin-right 1.25rem
    .fr
      float right
  .list
    .item
      display flex
      .pic
        width 3rem
        height 6rem
        flex 1
        img
          width 3rem
      .info
        flex 3
        .info-title
          font 700 .67rem '微软雅黑'
          margin-bottom 0.3rem
        .info-sale
          font .42rem/.9rem '微软雅黑'
          color #7f7f7f
          .star
            color #ff6300
          .fr
            box-sizing border-box
            float right
            margin-right 0.37rem
            border 1px solid #01a6ff
            border-radius 3px
            font .3rem '微软雅黑'
            color #01a6ff
            .bg
              background #01a6ff
              color #fff
        .info-delivery
          font .4rem/.77rem '微软雅黑'
          color #7f7f7f
          margin-bottom 0.2rem
          .fr
            float right
            margin-right 0.37rem
        .info-commit
          margin-bottom .3rem
          span
            padding .1rem .3rem
            background #fef4eb
            color #ff871c
        .info-discount
          span
            padding .1rem .1rem
            color #d25d4c
            border 1px solid #ecd0cd
        .info-hear
          font .42rem/1.8rem '微软雅黑'
          color #7f7f7f
</style>
