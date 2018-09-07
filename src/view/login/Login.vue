<template>
  <div class="login">
    <div class="header">
      <div class="header-logo">
        <img src="../../assets/img/login_ico.png" alt="logo">
      </div>
      <div class="header-title">手机号登录或注册</div>
    </div>
    <div class="content">
      <div class="con-login-box vux-1px-b">
        <group class="phone-box">
          <x-input ref="loginPhone" mask="999 9999 9999" v-model="phone" placeholder="请输入手机号" :max="13" is-type="china-mobile" @on-change="keyDown" required></x-input>
        </group>
      </div>
      <x-button class="login-btn" type="primary" :disabled="disabled" @click.native="toNext">下一步</x-button>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { trim } from '@/utils/validate'
  import { XButton, XInput, GroupTitle, Group } from 'vux'
  import { isUserExist } from '@/api/login'
  // const validateUsername = (rule, value, callback) => {
  //   if (!isvalidUsername(value)) {
  //     callback(new Error('请输入正确的用户名'))
  //   } else {
  //     callback()
  //   }
  // }
  // const validatePass = (rule, value, callback) => {
  //   if (value.length < 5) {
  //     callback(new Error('密码不能小于5位'))
  //   } else {
  //     callback()
  //   }
  // }
  export default {
    data() {
      return {
        phone: '',
        disabled: true,
        userChannel: 'dlb'
      }
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group
    },
    methods: {
      // 验证手机  是否允许提交
      keyDown() {
        if (this.$refs.loginPhone.valid === true && this.phone !== '') {
          this.disabled = false
        } else {
          this.disabled = true
        }
      },
      // 验证是否注册
      toNext() {
        isUserExist({
          phone: trim(this.phone),
          userChannel: this.userChannel
        }).then(response => {
          this.disabled = true
          if (response) {
            if (response.data === true) {
              this.$router.push({ path: '/loginLanding', query: { phone: trim(this.phone) }})
            } else {
              this.$router.push({ path: '/loginRegister', query: { phone: trim(this.phone) }})
            }
          }
        }).catch(() => {
          this.disabled = false
        })
      }
    },
    created() {
      this.$store.commit('SET_USERCHANNEL', this.userChannel)
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .login{
    .header{

    }
    .content{
      .weui-cells{
        background: none;
        font-size:1rem;
        line-height: 1.5rem;
        input{
          text-align: center;
        }
      }
      .weui-cells:before{
        border-top: none;
      }
      .weui-cells:after{
        border-bottom: none;
      }
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
    .header{
      width:100%;
      .header-logo{
        text-align: center;
        margin: auto;
        img{
          margin-top:2rem;
          width: 4rem;
          height: 4rem;
        }
      }
      .header-title{
        color:#333;
        font-size:1.2rem;
        line-height: 1.5rem;
        display: block;
        text-align: center;
        margin-top: 0.5rem;
      }
    }
    .content{
      width:100%;
      .con-login-box{
        width:70%;
        margin: auto;
        /*border-bottom:1px solid red;*/
      }
      .phone-box{
        margin-top:4rem;
      }
      .login-btn{
        margin-top:2rem;
        border-radius:6px;
        width: 70%;
      }
    }
    .footer{

    }
  }
</style>
