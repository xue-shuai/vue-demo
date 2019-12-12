<template>
  <div class="swiper">
    <swiper :options="swiperOption" class="swiper-menu">
      <!-- slides -->
      <swiper-slide class="slide-one">
        <div class="slide-one">
          <span class="slide-one-item" v-for="item in listOne" :key="item.id">
            <img :src="item.imgUrl" :alt="item.desc">
            <p>{{item.desc}}</p>
          </span>
        </div>
      </swiper-slide>
      <swiper-slide class="slide-two">
        <div class="slide-two">
          <span class="slide-two-item" v-for="item in listTwo" :key="item.id">
            <img :src="item.imgUrl" :alt="item.desc">
            <p>{{item.desc}}</p>
          </span>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'WaimaiSwiper',
  props: {
    listOne: Array,
    listTwo: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
        // loop: true
      }
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" scoped>
.swiper-menu
  width 17rem
  height 7.3rem
  .slide-one
    width 18rem
    .slide-one-item
      display inline-block
      width 2.33rem
      height 3.13rem
      margin-right 1.15rem
      img
        width 2.33rem
        margin-bottom 0.32rem
      p
        text-align center
  .slide-two
    width 18rem
    .slide-two-item
      display inline-block
      width 2.33rem
      height 3.13rem
      margin-right 1.15rem
      img
        width 2.33rem
        margin-bottom 0.32rem
      p
        text-align center
</style>
