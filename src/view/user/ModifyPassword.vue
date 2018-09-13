<template>
  <div class="modify-password">
    <div class="content">
      <div class="con-login-box vux-1px-b" style="margin-bottom:15px;">
        <group class="phone-box">
          <x-input :type="pwdType" title="原交易密码" ref="registerPwd" v-model="form.oldPassword" :min="6" :max="6" placeholder="请输入6位数字密码"  placeholder-align="right" :is-type="codeValue"></x-input>
        </group>
        <div class="eye-img" @click="showPwd()">
          <img v-if="pwdType==='password'" src="../../assets/img/login_eye.png" alt="">
          <img v-else="pwdType==='text'" src="../../assets/img/login_eye_no.png" alt="">
        </div>
      </div>
      <div class="con-login-box vux-1px-b">
        <group class="phone-box">
          <x-input :type="pwdType1" title="新交易密码" ref="registerPwd" v-model="form.newPassword" :min="6" :max="6" placeholder="请输入6位数字密码"  placeholder-align="right" :is-type="codeValue"></x-input>
        </group>
        <div class="eye-img" @click="showPwd('1')">
          <img v-if="pwdType1==='password'" src="../../assets/img/login_eye.png" alt="">
          <img v-else="pwdType1==='text'" src="../../assets/img/login_eye_no.png" alt="">
        </div>
      </div>
      <div class="con-login-box">
        <group class="phone-box">
          <x-input :type="pwdType2" title="再次输入" ref="registerPwd" v-model="form.confirmPassword" :min="6" :max="6" placeholder="请输入6位数字密码"  placeholder-align="right" :is-type="codeValue"></x-input>
        </group>
        <div class="eye-img" @click="showPwd('2')">
          <img v-if="pwdType2==='password'" src="../../assets/img/login_eye.png" alt="">
          <img v-else="pwdType2==='text'" src="../../assets/img/login_eye_no.png" alt="">
        </div>
      </div>
      <div class="btn-box">
        <x-button class="next-btn" type="primary" @click.native="subNext">确认修改</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Cell, Group, XInput, XButton } from 'vux'
  import { validateSixCode } from '@/utils/validate'
  import { modifyTradePwd } from '@/api/user'
  export default {
    components: {
      Cell,
      Group,
      XInput,
      XButton
    },
    data() {
      return {
        state: '2',
        pwdType: 'text',
        pwdType1: 'password',
        pwdType2: 'password',
        codeValue: function(value) {
          return {
            valid: validateSixCode(value),
            msg: '输入有误'
          }
        },
        form: {
          oldPassword: '', // 旧密码resetTradePwassword
          newPassword: '', // 新密码
          confirmPassword: '' // 确认密码
        }
      }
    },
    methods: {
      // 查看密码
      showPwd(e) {
        if (e === '1') {
          this.pwdType1 === 'password' ? this.pwdType1 = 'text' : this.pwdType1 = 'password'
        } else if (e === '2') {
          this.pwdType2 === 'password' ? this.pwdType2 = 'text' : this.pwdType2 = 'password'
        } else {
          this.pwdType === 'password' ? this.pwdType = 'text' : this.pwdType = 'password'
        }
      },
      subNext() {
          // 修改交易密码
        modifyTradePwd({
          userId: this.$store.state.user.userId,  //用户Id
          tradePwd:this.form.newPassword,  //交易密码
          originalTradePwd:this.form.oldPassword,  //原交易密码
          sign:"123"  //签名结果
        }).then(res=>{
          console.log(res)
          if(res.returnCode=="SUCCESS"){
            this.$router.push({ path: '/userSecurity' })
          }else{
            this.$vux.toast.show({
              type: 'cancel',
              text: '原始密码错误'
            })
          }
        }).then(err=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .modify-password{
    .content{
      .weui-cells{
        margin-top: 0px;
        .weui-cell{
          font-size:0.9rem;
          color: #333;
          line-height: 1.5rem;
          input{
            text-align: right;
          }
          img{
            display:block;
            margin-right:10px;
            vertical-align: middle;
            width: 2rem;
          }
          .vux-cell-primary {
            line-height: 1.5rem;
          }
        }
        .weui-cell--info{
          font-size:0.8rem;
          color: #888;
        }
      }
      .weui-cells:before{
        border-top:none;
      }
      .weui-cells:after{
        border-bottom:none;
      }
    }
    .vux-swiper{
      /*height:100% !important;*/
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .modify-password{
    .content{
      width:100%;
      padding-bottom: 70px;
      .con-login-box{
        margin: auto;
        position: relative;
        background: #fff;
        padding-right: 15px;
        .eye-img{
          position: absolute;
          bottom:0px;
          right:0px;
          width:1.5rem;
          padding-right: 15px;
          img{
            width:100%;
            height: auto;
          }
        }
      }
      .phone-box{
        padding-right: 1.5rem;

      }
      .cell-box-item{
        margin-bottom:15px;
      }
      .item-box{
        background: #fff;
        .weui-cells{
          margin-top: 0px;
          .weui-cell{
            font-size:0.9rem;
            color: #333;
          }
          .weui-cell--info{
            font-size:0.8rem;
            color: #888;
          }
        }
      }
      .null-info{
        width:4rem;
        height:4rem;
        margin: auto;
        position: absolute;
        top: 40%;
        width: 100%;
        text-align: center;
        img{
          width:5rem;
          height: auto;
        }
        div{
          font-size:0.8rem;
          color: #888888;
        }
      }
      .result-box{
        margin: auto;
        width:4rem;
        height:4rem;
        img {
          width:100%;
          height:100%;
        }
      }
      .result-title{
        font-size:1.2rem;
        color:#ffb400;
        margin:auto;
        text-align: center;
        margin-top: 2rem;
      }
      .result-name{
        font-size:1.2rem;
        color:#333;
        margin:auto;
        text-align: center;
        margin-top: 0.4rem;
      }
      .result-info{
        font-size:0.8rem;
        color:#949494;
        margin:auto;
        text-align: center;
        margin-top: 2rem;
        min-height: 1.5rem;
        width: 15rem;
      }
      .btn-box{
        button{
          margin-top:4rem;
          border-radius:6px;
          width: 80%;
          font-size: 1rem;
        }
      }
    }
    .footer{
    }
  }
</style>
