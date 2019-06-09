<template>
    <div class='cartcontroll'>
      <transition name="fade">
        <div class="cart-decrease" v-if="food.count > 0" @click="decreaseFood">
          <span class="inner icon-remvoe_circle_outline"></span>
        </div>
      </transition>
      <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click="addFood"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default {
    name: 'cartcontroll',
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addFood() {
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
      },
      decreaseFood() {
        if (this.food.count > 0) {
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontroll
    font-size 0
    .fade-enter-active,.fade-leave-active
      transition all .5s linear
    .fade-enter-to, .fade-leave /* .fade-leave-active below version 2.1.8 */
      opacity 1
      transform translate3D(0,0,0)
      .inner
        transform rotate(180deg)
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
      opacity 0
      transform translate3D(24px,0,0)
      .inner
        transform rotate(0)
    .cart-decrease
      display inline-block
      padding 6
      .inner
        line-height 24px
        font-size 24px
        color rgb(0,160,220)
    .cart-count
      display inline-block
      line-height 24px
      vertical-align top
      width 12px
      padding-top 6px
      text-align center
      font-size 10px
      color rgb(147,153,159)
    .cart-add
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0,160,220)
</style>
