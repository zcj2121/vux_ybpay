<template>
  <div class="login">
    <div class="header">
      <div class="header-logo">
      </div>
      <div class="header-title">18610108888</div>
    </div>
    <div class="content">
      <group class="password-box">
        <x-input type="password" v-model="password" :max="16" placeholder="请输入密码">
          <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
        </x-input>
      </group>
      <group class="code-box">
        <x-input type="text" v-model="code" :max="4" placeholder="请输入验证码">
          <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
          <x-button slot="right" type="primary" mini style="border-radius: 0px">发送验证码</x-button>
        </x-input>
      </group>
      <div class="check-box">
        <check-icon class="check-read" :value.sync="isRead" type="plain">我已阅读并同意 <a href="">《注册协议》</a></check-icon>
      </div>
      <x-button class="login-btn" type="primary" link="/Home">注册</x-button>
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
        .weui-cell__ft{
          .weui-btn:after{
            border-radius: 0px;
          }
        }
      }
      .weui-cells{
        border: 0.005rem solid #D9D9D9;
        font-size: 0.8rem;
      }
    }
    .check-box{
      .check-read{
        font-size:0.8rem;
        .weui-icon:before{
          margin:0;
        }
        .weui-icon{
          font-size:1rem;
        }
        .weui-icon-success{
          font-size:1rem;
        }
      }
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .login{
    height: 100%;
    .header{
      width:100%;
      .header-logo{
        height: 3.5rem;
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
      .password-box{
        padding:0 5%;
        padding-top:2rem;
      }
      .code-box{
        margin-top:5px;
        padding:0 5%;
      }
      .login-btn{
        margin-top:0.5rem;
        border-radius:2px;
        width: 90%;
        background: #41a1fd;
      }
      .check-box{
        margin-top:4rem;
        padding:0 5%;
        .check-read{
          a{
            color:#009DDA;
          }
        }
      }
    }
    .footer{

    }
  }
</style>
