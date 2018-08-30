<template>
  <div class="login">
    <div class="header">
      <div class="header-title">登陆</div>
      <group>
        <x-input mask="999 9999 9999" v-model="maskValue" :max="11" placeholder="请输入手机号"></x-input>
      </group>
      <x-button type="primary" style="border-radius:99px;width: 60%;background: #41a1fd;" link="/home">登    陆</x-button>
    </div>
    <div class="content">

    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, Flexbox, FlexboxItem, Divider, XInput, Grid, GridItem, GroupTitle, Group } from 'vux'
  export default {
    data () {
      return {
        maskValue: ''
      }
    },
    components: {
      XButton,
      Flexbox,
      FlexboxItem,
      Divider,
      XInput,
      Grid,
      GridItem,
      GroupTitle,
      Group
    },
    methods: {
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .login{
    .header{
      .weui-cells{
        border:none;
        background:transparent;
        .vux-x-input.weui-cell{
          border-radius: 2.5rem;
          background: #fff;
          margin: 0 15px;
          .weui-cell__hd{
            display: none;
          }
        }
      }
      .weui-cells:before, .weui-cells:after{
        border:none;
      }
      .weui-cell__bd.weui-cell__primary{
        background: #fff;
        border-radius: 2.5rem;
        height: 1.5rem;
        line-height: 1.5rem;
        padding: 0 15px;
        font-size: 0.8rem;
        input{
          text-align: center;
        }
      }
      .weui-cell__ft {
        position: absolute;
        right: 20px;
        bottom: 0.8rem;
      }
      .weui-cell:before{
        border-top:none;
      }
      button.weui-btn, input.weui-btn{
        margin-top: 2rem;
      }
    }
    .content{

    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .login{
    height: 100%;
    .header{
      height:100%;
      width:100%;
      background: #ccc;
      .header-title{
        color:#333;
        font-size:1.2rem;
        padding-top:10%;
        line-height: 1.5rem;
        display: block;
        text-align: center;
      }
    }
    .content{

    }
    .footer{

    }
  }
</style>
