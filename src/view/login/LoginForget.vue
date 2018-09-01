<template>
  <div class="login">
    <div class="header">
    </div>
    <div class="content">
      <group class="password-box">
        <x-input type="number" v-model="password" :max="11" placeholder="请输入手机号码">
          <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
        </x-input>
      </group>
      <group class="code-box">
        <x-input type="text" v-model="code" :max="4" placeholder="请输入验证码">
          <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
          <x-button slot="right" type="primary" mini style="border-radius: 0px">发送验证码</x-button>
        </x-input>
      </group>
      <x-button class="login-btn" type="primary" link="/LoginReset">下一步</x-button>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group, CheckIcon } from 'vux'
  export default {
    data () {
      return {
        password: '',
        code: '',
        isRead: true
      }
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group,
      CheckIcon
    },
    methods: {
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .login{
    .header{

    }
    .content{
      .code-box{
        margin-top:5px;
        padding:0 5%;
        .weui-cells{
          margin-top:0px;
        }
      }
      .weui-cells{
        border: 0.005rem solid #D9D9D9;
        font-size: 0.8rem;
      }
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .login{
    height: 100%;
    .header{
      width:100%;
    }
    .content{
      width:100%;
      .password-box{
        padding:0 5%;
        padding-top:0.5rem;
      }
      .code-box{
        margin-top:5px;
        padding:0 5%;
      }
      .login-btn{
        margin-top:4rem;
        border-radius:2px;
        width: 90%;
        background: #41a1fd;
      }
    }
    .footer{

    }
  }
</style>
