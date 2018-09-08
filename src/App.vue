<template>
  <div id="app">
    <transition name="transitionRouter" class="router">
      <router-view class="r"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      aaa: '123'
    }
  }
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
  #app{
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
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
  .transitionRouter-enter-active,
  .transitionRouter-leave-active {
    opacity:0;
    transition: opacity 0.4s;
  }

  .transitionRouter-enter,
  .transitionRouter-leave{
    opacity:0;
    transform: translate3d(0, 0, 0);
  }
  //borm-box 的样式
  .form-box-item{
    position: relative;
    background-color: #FFFFFF;
    overflow: hidden;
    label{
      float: left;
      margin-right: 1em;
      min-width: 4em;
      color: #333;
      text-align: left;
      text-align-last: inherit;
      div{
        font-size: 1rem;
        line-height: 1.5rem;
      }
      div:last-child{
        font-size: 0.9rem;
        line-height: 1.2rem;
      }
    }
    span{
      display: block;
      overflow: hidden;
      word-break: normal;
      word-wrap: break-word;
    }
    .item-header{
      position: relative;
      padding: 10px 15px;
      text-align: right;
      line-height: 2.5em;
      overflow: hidden;
    }
    .item-header:after{
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #D9D9D9;
      color: #D9D9D9;
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      left: 15px;
    }
    .item-list{
      padding: 10px 15px;
      font-size: .9rem;
      text-align: right;
      color: #999999;
      line-height: 2;
      .item-list-box{
        overflow: hidden;
        label{
          float: left;
          margin-right: 1em;
          min-width: 4em;
          color: #999999;
          text-align: left;
          text-align-last: inherit;
        }
        span{
          display: block;
          overflow: hidden;
          word-break: normal;
          word-wrap: break-word;
        }
      }
    }
  }
  //borm-box 的样式
</style>
