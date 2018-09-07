<template>
  <div class="LoginLanding">
    <div class="header">
      <div class="header-logo">
        <img src="../../assets/img/login_ico.png" alt="logo">
      </div>
      <div class="header-title">{{this.$route.query.phone}}</div>
    </div>
    <div class="content">
      <div class="con-login-box vux-1px-b">
        <group class="phone-box">
          <x-input :type="pwdType" ref="loginPwd" v-model="form.password" :min="8" :max="16" placeholder="输入密码（8-16位数字与字母组合）" :is-type="codeValue" @on-change="keyDown"></x-input>
        </group>
        <div class="pwd-img"><img src="../../assets/img/login_pwd.png" alt=""></div>
        <div class="eye-img" @click="showPwd">
          <img v-if="pwdType==='password'" src="../../assets/img/login_eye.png" alt="">
          <img v-else="pwdType==='text'" src="../../assets/img/login_eye_no.png" alt="">
        </div>
      </div>
      <x-button class="login-btn" type="primary" @click.native="signIn" :disabled="signDis">登陆</x-button>
      <div class="login-forget">
        <a @click="forgetPassword" class="vux-1px-b">忘记密码</a>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group } from 'vux'
  import { validatePassword } from '@/utils/validate'
  import { signIn } from '@/api/login'
  import { setToken } from '@/utils/auth'
  export default {
    data() {
      return {
        pwdType: 'password',
        codeValue: function(value) {
          return {
            valid: validatePassword(value),
            msg: '输入有误'
          }
        },
        signDis: true, // 登陆按钮 是否可点
        form: {
          userChannel: 'dlb',
          phone: this.$route.query.phone,
          password: null
        }
      }
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group
    },
    methods: {
      // 密码 查看
      showPwd() {
        const abc = this.$store.state
        console.log(abc)
        if (this.pwdType === 'password') {
          this.pwdType = 'text'
        } else {
          this.pwdType = 'password'
        }
      },
      // 验证密码  是否允许提交
      keyDown() {
        if (this.$refs.loginPwd.valid === true && this.phone !== '') {
          this.signDis = false
        } else {
          this.signDis = true
        }
      },
      // 登陆 提交
      signIn() {
        signIn(this.form).then(response => {
          if (response) {
            if (response.returnCode === 'SUCCESS') {
              console.log(response)
              setToken(response.data.token)
              this.$store.commit('SET_TOKEN', response.data.token)
              this.$store.commit('SET_PHONE', response.data.phone)
              this.$store.commit('SET_USER_ID', response.data.userId)
              this.signDis = true
              this.$vux.toast.show({
                type: 'success',
                text: '登陆成功'
              })
              setTimeout(() => {
                this.$router.push({ path: '/home' })
              }, 1000)
            } else {
              this.signDis = false
              this.$vux.toast.show({
                type: 'cancel',
                text: '登陆失败'
              })
            }
          }
        }).catch(() => {
          this.signDis = false
          this.$vux.toast.show({
            type: 'cancel',
            text: '网络异常'
          })
        })
        // this.$store.dispatch('Login', this.form).then(response => {
        //   if (response) {
        //     console.log(response)
        //     if (response.returnCode === 'SUCCESS') {
        //       this.signDis = true
        //       this.$vux.toast.show({
        //         type: 'success',
        //         text: '登陆成功'
        //       })
        //       setTimeout(() => {
        //         this.$router.push({ path: '/' })
        //       }, 1500)
        //     } else {
        //       this.signDis = false
        //       this.$vux.toast.show({
        //         type: 'cancel',
        //         text: '登陆失败'
        //       })
        //     }
        //   }
        // }).catch(() => {
        //   this.signDis = false
        //   this.$vux.toast.show({
        //     type: 'cancel',
        //     text: '网络异常'
        //   })
        // })
      },
      forgetPassword() {
        this.$router.push({ name: 'loginForget', query: {}})
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .LoginLanding{
    .header{

    }
    .content{
      .weui-cells{
        background: none;
        font-size:0.8rem;
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
  .LoginLanding{
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
        padding: 2rem 1.5rem 0 1.5rem;

      }
      .login-btn{
        margin-top:5rem;
        border-radius:6px;
        width: 70%;
        background: #41a1fd;
      }
      .login-forget{
        padding: 0 5%;
        margin-top:1rem;
        text-align: center;
        a{
          color:#666;
          font-size:0.8rem;
          padding-bottom:2px;
        }
      }
    }
    .footer{

    }
  }
</style>
