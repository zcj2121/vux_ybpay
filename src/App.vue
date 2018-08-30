<template>
  <div id="app">
    <transition name="transitionRouter" class="router">
      <router-view class="r"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';

  body {
    background-color: #f4f4f4;
  }
  html, body, #app {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  @media screen and (min-width: 320px) {
    html {font-size: 14px;}
  }

  @media screen and (min-width: 360px) {
    html {font-size: 16px;}
  }

  @media screen and (min-width: 400px) {
    html {font-size: 18px;}
  }

  @media screen and (min-width: 440px) {
    html {font-size: 20px;}
  }

  @media screen and (min-width: 480px) {
    html {font-size: 22px;}
  }

  @media screen and (min-width: 640px) {
    html {font-size: 28px;}
  }
  /*.transitionRouter-enter-active,*/
  /*.transitionRouter-leave-active {*/
    /*transition: all 0.4s;*/
  /*}*/

  /*.transitionRouter-enter,*/
  /*.transitionRouter-leave{*/
    /*transform: translate3d(100%, 0, 0);*/
  /*}*/
</style>
