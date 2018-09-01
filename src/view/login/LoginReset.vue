<template>
  <div class="login">
    <div class="header">
    </div>
    <div class="content">
      <group class="password-box">
        <x-input type="password" v-model="password" :max="16" placeholder="请输入密码">
          <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
        </x-input>
      </group>
      <x-button class="login-btn" type="primary" link="/Login">确认修改</x-button>
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
      .login-btn{
        margin-top:5rem;
        border-radius:2px;
        width: 90%;
        background: #41a1fd;
      }
    }
    .footer{

    }
  }
</style>
