<template>
  <div>
    <!-- 父组件给子组件传值，自组件通过props属性接收 -->
      <home-header :city="city"></home-header>
      <home-swiper :list="list"></home-swiper>
      <home-icons :icons="iconList"></home-icons>
      <home-recommend :recommends="recommendList"></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import axios from 'axios'
export default{
  name: 'Home',
  data () {
    return {
      city: '',
      list: [],
      iconList: [],
      recommendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res) {
        const data = res.data
        this.city = data.city
        this.list = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
