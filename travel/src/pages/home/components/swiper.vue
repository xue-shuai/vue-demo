<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showList">
    <!-- slides -->
    <swiper-slide v-for="item in list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true// 是否循环轮播
      }
    }
  },
  computed: {
    showList () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// 穿透
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  width 100%
  height 0
  overflow hidden
  padding-bottom 30.6%
  .swiper-img
    width 100%
</style>
