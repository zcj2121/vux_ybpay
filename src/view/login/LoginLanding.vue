<template>
  <div class="login">
    <div class="header">
      <div class="header-logo">
      </div>
      <div class="header-title">18610108888</div>
    </div>
    <div class="content">
      <group class="phone-box">
        <x-input type="password" v-model="maskValue" :max="13" placeholder="请输入密码">
        </x-input>
      </group>
      <x-button class="login-btn" type="primary" link="/Home">登陆</x-button>
      <div class="login-forget">
        <a @click="forgetPassword">忘记密码</a>
      </div>

    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group } from 'vux'
  export default {
    data () {
      return {
        maskValue: ''
      }
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group
    },
    methods: {
      forgetPassword () {
        this.$router.push({name: 'LoginForget', query: {}})
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .login{
    .header{

    }
    .content{
      /*.weui-cell__ft {*/
        /*position: absolute;*/
        /*right: 20px;*/
        /*bottom: 0.8rem;*/
      /*}*/
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .login{
    height: 100%;
    .header{
      width:100%;
      .header-logo{
        height: 8.5rem;
        text-align: center;
        margin: auto;
      }
      .header-title{
        color:#333;
        font-size:1.5rem;
        line-height: 1.7rem;
        font-weight: bold;
        display: block;
        text-align: center;
      }
    }
    .content{
      width:100%;
      .phone-box{
        padding-top:4rem;
      }
      .login-btn{
        margin-top:2rem;
        border-radius:2px;
        width: 90%;
        background: #41a1fd;
      }
      .login-forget{
        padding: 0 5%;
        margin-top:1rem;
        text-align: right;
        a{
          color:#666;
        }
      }
    }
    .footer{

    }
  }
</style>
