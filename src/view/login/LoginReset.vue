<template>
  <div class="LoginReset">
    <div class="header">
    </div>
    <div class="content">
      <div class="con-login-box vux-1px-b">
        <group class="phone-box">
          <x-input :type="pwdType" ref="registerRestPwd" v-model="form.password" :min="8" :max="16" placeholder="输入密码（8-16位数字与字母组合）" :is-type="codeValue"></x-input>
        </group>
        <div class="pwd-img"><img src="../../assets/img/login_pwd.png" alt=""></div>
        <div class="eye-img" @click="showPwd">
          <img v-if="pwdType==='password'" src="../../assets/img/login_eye.png" alt="">
          <img v-else="pwdType==='text'" src="../../assets/img/login_eye_no.png" alt="">
        </div>
      </div>
      <x-button class="login-btn" type="primary" @click.native="subNext" :disabled="subDis">确认修改</x-button>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group, CheckIcon } from 'vux'
  import { validatePassword } from '@/utils/validate'
  import { resetPassword } from '@/api/login'
  export default {
    data() {
      return {
        subDis: true,
        form: {
          userChannel: this.$route.query.userChannel,
          phone: this.$route.query.phone,
          password: null,
          verifyCode: this.$route.query.verifyCode
        },
        pwdType: 'password',
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
      CheckIcon
    },
    watch: {
      // 监听
      form: {
        handler(val) {
          // 验证 是否提交
          if (this.$refs.registerRestPwd.valid === true && this.form.password !== '' && this.form.verifyCode !== '' && this.form.phone !== '' && this.form.userChannel !== '') {
            this.subDis = false
          } else {
            this.subDis = true
          }
        },
        deep: true
      }
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = 'text'
        } else {
          this.pwdType = 'password'
        }
      },
      // 验证 验证码
      subNext() {
        resetPassword({
          userChannel: this.form.userChannel,
          phone: this.form.phone,
          password: this.form.password,
          verifyCode: this.form.verifyCode
        }).then(response => {
          if (response) {
            if (response.returnCode === 'SUCCESS') {
              this.subDis = true
              this.$vux.toast.show({
                type: 'success',
                text: '修改成功'
              })
              this.$router.push({ path: '/loginLanding', query: { phone: this.form.phone }})
            } else {
              if (response.returnCode === 'VERIFY_CODE_ERR') {
                this.$vux.toast.show({
                  type: 'success',
                  text: response.returnMessage
                })
                this.$router.push({ path: '/loginForget' })
              }
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
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .LoginReset{
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
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .LoginReset{
    .header{
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
