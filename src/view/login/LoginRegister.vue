<template>
  <div class="LoginRegister">
    <div class="header">
      <div class="header-logo">
        <img src="../../assets/img/login_ico.png" alt="logo">
      </div>
      <div class="header-title">{{this.$route.query.phone}}</div>
    </div>
    <div class="content">
      <div class="con-login-box vux-1px-b">
        <group class="phone-box">
          <x-input :type="pwdType" ref="registerPwd" v-model="form.password" :min="8" :max="16" placeholder="输入密码（8-16位数字与字母组合）" :is-type="codeValue"></x-input>
        </group>
        <div class="pwd-img"><img src="../../assets/img/login_pwd.png" alt=""></div>
        <div class="eye-img" @click="showPwd">
          <img v-if="pwdType==='password'" src="../../assets/img/login_eye.png" alt="">
          <img v-else="pwdType==='text'" src="../../assets/img/login_eye_no.png" alt="">
        </div>
      </div>
      <div class="other-login-box">
        <div class="con-login-box vux-1px-b">
          <group class="phone-box">
            <x-input type="number" mask="999999" v-model="form.verifyCode" :max="6" placeholder="请输入验证码" :disabled="codeDis"></x-input>
          </group>
          <div class="pwd-img"><img src="../../assets/img/login_code.png" alt=""></div>
        </div>
        <span class="reg-btn-box">
          <x-button plain type="primary" @click.native="sendCode" :disabled="sendDis || time > 0">{{text}}</x-button>
        </span>
      </div>
      <div class="check-box">
        <check-icon class="check-read" :value.sync="form.isRead" type="plain">我已阅读并同意 <a href="">《注册协议》</a></check-icon>
      </div>
      <x-button class="login-btn" type="primary" @click.native="subNext" :disabled="subDis">注册</x-button>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group, CheckIcon, Popup } from 'vux'
  import { register, sendVerifyCode } from '@/api/login'
  import { validatePassword } from '@/utils/validate'
  export default {
    data() {
      return {
        pwdType: 'password',
        sendDis: false,
        codeDis: true,
        subDis: true,
        second: 60,
        time: 0,
        form: {
          userChannel: 'dlb',
          userSource: 'dlb',
          phone: this.$route.query.phone,
          password: null,
          verifyCode: '',
          customType: '1',
          isRead: false
        },
        codeValue: function(value) {
          return {
            valid: validatePassword(value),
            msg: '输入有误'
          }
        }
      }
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group,
      CheckIcon,
      Popup
    },
    watch: {
      // 监听
      form: {
        handler(val) {
          // 验证 是否提交
          if (this.$refs.registerPwd.valid === true && this.form.password !== '' && this.form.verifyCode !== '' && this.form.isRead === true) {
            this.subDis = false
          } else {
            this.subDis = true
          }
        },
        deep: true
      }
    },
    methods: {
      // 查看密码
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = 'text'
        } else {
          this.pwdType = 'password'
        }
      },
      // 提交 注册
      subNext() {
        register(this.form).then(response => {
          if (response) {
            if (response.returnCode === 'SUCCESS') {
              this.subDis = true
              this.$vux.toast.show({
                type: 'success',
                text: '注册成功'
              })
              setTimeout(() => {
                this.$router.push({ path: '/loginLanding', query: { phone: this.form.phone }})
              }, 1000)
            } else {
              this.subDis = false
              this.$vux.toast.show({
                type: 'cancel',
                text: '注册失败'
              })
            }
          }
        }).catch(() => {
          this.subDis = false
          this.$vux.toast.show({
            type: 'cancel',
            text: '网络异常'
          })
        })
      },
      // 发送验证码
      sendCode() {
        sendVerifyCode({
          userChannel: 'dlb',
          phone: this.form.phone
        }).then(response => {
          if (response) {
            if (response.returnCode === 'SUCCESS') {
              this.start()
              this.codeDis = false
              this.$vux.toast.show({
                type: 'success',
                text: '发送成功'
              })
            } else {
              this.$vux.toast.show({
                type: 'cancel',
                text: '发送失败'
              })
            }
          }
        }).catch(() => {
          this.codeDis = false
          this.$vux.toast.show({
            type: 'cancel',
            text: '网络异常'
          })
        })
      },
      start() {
        this.time = this.second
        this.timer()
      },
      timer() {
        if (this.time > 0) {
          this.time--
          setTimeout(this.timer, 1000)
        } else {
          this.sendDis = false
        }
      }
    },
    computed: {
      text() {
        return this.time > 0 ? this.time + 's后重试' : '发送验证码'
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .LoginRegister{
    .header{

    }
    .content{
      .weui-cells{
        background: none;
        font-size:0.8rem;
        line-height: 1.5rem;
        margin-top: 0;
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
    }
    .check-box{
      .check-read{
        font-size:0.8rem;
        span{
          color: #888888;
        }
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
  .LoginRegister{
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
        font-size:1.5rem;
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
        position: relative;
        margin-top: 2rem;
        .pwd-img{
          position: absolute;
          bottom:0px;
          width:1.5rem;
          img{
            width:100%;
            height: auto;
          }
        }
        .eye-img{
          position: absolute;
          bottom:0px;
          right:0px;
          width:1.5rem;
          img{
            width:100%;
            height: auto;
          }
        }
      }
      .phone-box{
        padding: 0 1.5rem;

      }
      .other-login-box{
        width: 70%;
        margin: auto;
        overflow: hidden;
        position: relative;
        margin-top: 1rem;
        .con-login-box{
          width: 70%;
          margin: initial;
          float: left;
        }
        .reg-btn-box{
          float: right;
          width: 28%;
          position: absolute;
          bottom: 0;
          right: 0;
          .weui-btn{
            font-size: 0.4rem;
            padding:0;
          }
        }
        .phone-box{
          padding: 0 0 0 1.5rem;

        }
      }

      .password-box{
        padding:0 5%;
        padding-top:2rem;
      }
      .code-box{
        margin-top:5px;
        padding:0 5%;
      }
      .login-btn{
        margin-top:4rem;
        border-radius:6px;
        width: 70%;
      }
      .check-box{
        margin: auto;
        margin-top:1rem;
        width: 70%;
        font-size: 0.5rem;
        color: #888888;
        .check-read{
          a{
            color:#333;
          }
        }
      }
    }
    .footer{

    }
  }
</style>
