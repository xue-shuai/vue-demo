<template>
  <div>
    <waimai-header></waimai-header>
    <waimai-search></waimai-search>
    <waimai-swiper
     :listOne="listOne"
     :listTwo="listTwo"
    ></waimai-swiper>
    <waimai-shopping
      :shopping="shopping"
    ></waimai-shopping>
  </div>
</template>

<script>
import WaimaiHeader from './components/header'
import WaimaiSearch from './components/search'
import WaimaiSwiper from './components/swiper'
import WaimaiShopping from './components/shopping'
import axios from 'axios'
export default {
  name: 'Waimai',
  data () {
    return {
      listOne: [],
      listTwo: [],
      shopping: []
    }
  },
  components: {
    WaimaiHeader,
    WaimaiSearch,
    WaimaiSwiper,
    WaimaiShopping
  },
  methods: {
    getWaimaiInfo () {
      axios.get('/static/mock/swiper.json')
        .then(this.getWaimaiInfoSucc)
    },
    getWaimaiInfoSucc (res) {
      res = res.data
      if (res.ret && res) {
        const data = res.data
        this.listOne = data.swiperListOne
        this.listTwo = data.swiperListTwo
      }
    },
    getShoppingInfo () {
      axios.get('/static/mock/shopping.json')
        .then(this.getShoppingInfoSucc)
    },
    getShoppingInfoSucc (res) {
      res = res.data
      if (res.ret && res) {
        const data = res.data
        this.shopping = data.shoppingList
      }
    }
  },
  mounted () {
    this.getWaimaiInfo()
    this.getShoppingInfo()
  }
}
</script>

<style>

</style>
