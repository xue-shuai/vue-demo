<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <img class="icon-img" :src="item.imgUrl">
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  props: {
    icons: Array
  },
  computed: {// 根据其他属性计算并生成一组新的值，并且带有缓存
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)// 当前展示的数据应该在第几页
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';
.icons >>> .swiper-container
  height: 8.7rem
  padding-top .4rem
  .icon
    float left
    height 3.58rem
    width 25%
    text-align center
  .icon-img
    height 2.41rem
  .icon-desc
    height 1rem
    line-height 1rem
    font-size .58rem
    color $darkTextColor
    ellipsis()
</style>
