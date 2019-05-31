<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px-after">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import vheader from './components/header/vheader'
  const ERR_OK = 0
  export default {
    name: 'App',
    components: {
      'v-header': vheader
    },
    data () {
      return {
        seller: {}
      }
    },
    created () {
      this.$http.get('/api/seller').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.seller = response.data
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display: flex
    width:100%
    height: 100%
    line-height: 40px
    border-1px-after(rgba(1,17,27,0.1))
    .tab-item
      flex:1
      text-align: center
      .active
        color: rgb(240,160,20)
</style>
