<template>
  <div class="login-forget">
    <div class="header">
    </div>
    <div class="content">
      <div class="con-login-box vux-1px-b">
        <group class="phone-box">
          <x-input mask="999 9999 9999" ref="registerPhone" v-model="form.phone" placeholder="请输入手机号" :max="13" is-type="china-mobile"></x-input>
        </group>
        <div class="pwd-img"><img src="../../assets/img/login_phone.png" alt=""></div>
      </div>
      <div class="other-login-box">
        <div class="con-login-box vux-1px-b">
          <group class="phone-box">
            <x-input type="number" mask="999999" v-model="form.verifyCode" :max="6" placeholder="请输入验证码"></x-input>
          </group>
          <div class="pwd-img"><img src="../../assets/img/login_code.png" alt=""></div>
        </div>
        <span class="reg-btn-box">
          <x-button plain type="primary" @click.native="sendCode" :disabled="sendDis || time > 0">{{text}}</x-button>
        </span>
      </div>
      <x-button class="login-btn" type="primary" @click.native="subNext" :disabled="subDis">下一步</x-button>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group, CheckIcon, Popup } from 'vux'
  import { trim, validatePassword } from '@/utils/validate'
  import { checkCode, sendVerifyCode } from '@/api/login'
  export default {
    data() {
      return {
        sendDis: false,
        subDis: true,
        second: 60,
        time: 0,
        form: {
          userChannel: 'dlb',
          phone: '',
          password: null,
          verifyCode: ''
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
          if (this.$refs.registerPhone.valid === true && this.form.phone !== '' && this.form.verifyCode !== '') {
            this.subDis = false
          } else {
            this.subDis = true
          }
        },
        deep: true
      }
    },
    methods: {
      // 验证 验证码
      subNext() {
        checkCode({
          userChannel: this.form.userChannel,
          phone: trim(this.form.phone),
          verifyCode: this.form.verifyCode
        }).then(response => {
          if (response) {
            if (response.returnCode === 'SUCCESS') {
              this.subDis = true
              this.$vux.toast.show({
                type: 'success',
                text: '验证成功'
              })
              setTimeout(() => {
                this.$router.push({ path: '/loginReset', query: { phone: trim(this.form.phone), verifyCode: this.form.verifyCode, userChannel: this.form.userChannel }})
              }, 1000)
            } else {
              this.subDis = false
              this.$vux.toast.show({
                type: 'cancel',
                text: response.returnMessage
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
          phone: trim(this.form.phone)
        }).then(response => {
          if (response) {
            if (response.returnCode === 'SUCCESS') {
              this.start()
              this.$vux.toast.show({
                type: 'success',
                text: '发送成功'
              })
            } else {
              this.$vux.toast.show({
                type: 'cancel',
                text: response.returnMessage
              })
            }
          }
        }).catch(() => {
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
  .login-forget{
    .header{

    }
    .content{
      .weui-cells{
        background: none;
        font-size:0.8rem;
        line-height: 1.5rem;
        margin-top: 0;
        .weui-cell{
          line-height: 1.5rem;
        }
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
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .login-forget{
    .header{
      width:100%;
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
        padding: 0 0 0 1.5rem;

      }
      .other-login-box{
        width: 70%;
        margin: auto;
        overflow: hidden;
        position: relative;
        margin-top: 1rem;
        .con-login-box{
          width: 65%;
          margin: initial;
          float: left;
        }
        .reg-btn-box{
          float: right;
          width: 33%;
          position: absolute;
          bottom: 0;
          right: 0;
          .weui-btn{
            padding: 10px 5px;
            font-size: 0.4rem;
            line-height: 1rem;
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
    }
    .footer{

    }
  }
</style>
