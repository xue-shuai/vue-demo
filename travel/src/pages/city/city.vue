<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <hot-city :hotcities="hotcities"></hot-city>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import HotCity from './components/hotcity'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      hotcities: []
    }
  },
  components: {
    CityHeader,
    CitySearch,
    HotCity
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/city.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res) {
        const data = res.data
        this.hotcities = data.hotCities
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
