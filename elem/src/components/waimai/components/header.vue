<template>
  <div class="header">
    <span class="address"><i class="iconfont header-dingwei">&#59217;</i>{{LocationCity}}</span>
    <router-link to="/scal">
      <span class="sweep"><i class="iconfont header-saoma">&#59215;</i>扫码</span>
    </router-link>
    <span class="weather"><i class="iconfont header-yangguang">&#59317;</i>26℃</span>
  </div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'WaimaiHeader',
  data () {
    return {
      LocationCity: '正在定位'// 给渲染层定义一个初始值
    }
  },
  mounted () {
    this.city()// 触发获取城市方法
  },
  methods: {
    city () { // 定义获取城市方法
      const geolocation = new BMap.Geolocation()
      var _this = this
      geolocation.getCurrentPosition(function getinfo (position) {
        let city = position.address.city// 获取城市信息
        // let province = position.address.province// 获取省份信息
        _this.LocationCity = city
        // _this.LocationProvince = province
      }, function (e) {
        _this.LocationCity = '定位失败'
      }, {provider: 'baidu'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 17.5rem
  height 3.15rem
  display flex
  font .9rem/2.25rem '微软雅黑'
  padding-left 0.5rem
  .address
    width 9.2rem
    margin-right 2rem
    font-weight 700
    .iconfont
      color #0cabff
      font-weight normal
  .sweep
    width 3.15rem
    color #0cabff
  .weather
    color #0cabff
</style>
