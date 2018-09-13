<template>
  <div class="set-transaction">
    <div class="header">{{pwdTitle}}</div>
    <div class="content">
      <div class="set-box" v-if="setShow">
        <input ref="pwd" type="password" maxlength="6" v-model="password"  style="position: absolute;z-index: -1;left:-100%;opacity: 0"/>
        <ul class="pwd-wrap" @click="focus">
          <li><i v-if="msgLength > 0"></i></li>
          <li><i v-if="msgLength > 1"></i></li>
          <li><i v-if="msgLength > 2"></i></li>
          <li><i v-if="msgLength > 3"></i></li>
          <li><i v-if="msgLength > 4"></i></li>
          <li><i v-if="msgLength > 5"></i></li>
        </ul>
      </div>
      <div class="confirm-box" v-if="confirmShow">
        <input ref="conpwd" type="password" maxlength="6" v-model="confirmpwd"  style="position: absolute;z-index: -1;left:-100%;opacity: 0"/>
        <ul class="pwd-wrap" @click="confocus">
          <li><i v-if="msgconLength > 0"></i></li>
          <li><i v-if="msgconLength > 1"></i></li>
          <li><i v-if="msgconLength > 2"></i></li>
          <li><i v-if="msgconLength > 3"></i></li>
          <li><i v-if="msgconLength > 4"></i></li>
          <li><i v-if="msgconLength > 5"></i></li>
        </ul>
      </div>
      <div v-transfer-dom>
        <popup v-model="errorShow" position="top" :show-mask="false">
          <div class="position-vertical-demo">
            两次输入不一致，重新输入
          </div>
        </popup>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group, TransferDom, Popup } from 'vux'
  import { setTradePwd } from '@/api/homeInitial'

  export default {
    data () {
      return {
        pwdTitle: '为了保证交易安全，请设置交易密码',
        setShow: true,
        confirmShow: false,
        password: '',
        confirmpwd: '',
        msgLength: 0,
        msgconLength: 0,
        errorShow: false
      }
    },
    created () {
    },
    directives: {
      TransferDom
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group,
      Popup
    },
    watch: {
      password (curVal) {
        if (/[^\d]/g.test(curVal)) {
          this.password = this.password.replace(/[^\d]/g, '')
        } else {
          this.msgLength = curVal.length
        }
        if (curVal.length === 6) {
          this.setShow = false
          this.confirmShow = true
          this.pwdTitle = '再次填写，以确认'
        }
      },
      confirmpwd (curVal) {
        if (/[^\d]/g.test(curVal)) {
          this.confirmpwd = this.confirmpwd.replace(/[^\d]/g, '')
        } else {
          this.msgconLength = curVal.length
        }
        if (curVal.length === 6) {
          if (curVal === this.password) {
            this.toNext()
          } else {
            this.errorShow = true
            this.pwdTitle = '为了保证交易安全，请设置交易密码'
            this.password = ''
            this.confirmpwd = ''
            this.setShow = true
            this.confirmShow = false
          }
        }
      },
      errorShow (val) {
        if (val) {
          setTimeout(() => {
            this.errorShow = false
          }, 1200)
        }
      }
    },
    methods: {
      toNext() {
        setTradePwd({
          userId: this.$store.state.user.userId,
          tradePwd: this.confirmpwd,
          sign: '123'
        }).then(response => {
          if (response) {
            if (response.returnCode == 'SUCCESS') {
              this.$router.push({ name: 'accreditBook', query: {}})
            } else {
              this.$vux.toast.show({
                type: 'cancel',
                text: response.returnMessage
              })
              this.errorShow = true
              this.pwdTitle = '为了保证交易安全，请设置交易密码'
              this.password = ''
              this.confirmpwd = ''
              this.setShow = true
              this.confirmShow = false
            }
          }
        }).catch(() => {
          this.pwdTitle = '为了保证交易安全，请设置交易密码'
          this.password = ''
          this.confirmpwd = ''
          this.setShow = true
          this.confirmShow = false
          this.$vux.toast.show({
            type: 'cancel',
            text: '网络异常'
          })
        })
      },
      focus () {
        this.$refs.pwd.focus()
      },
      confocus () {
        this.$refs.conpwd.focus()
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .set-transaction{
    .header{

    }
    .content{
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .set-transaction{
    height: 100%;
    .header{
      font-size: 1rem;
      padding-top: 4rem;
      text-align: center;
    }
    .content{
      padding-top:2rem;
      width:100%;
      .video-box{
        margin: auto;
        width:12rem;
        height:12rem;
        border: 0.4rem solid #41a1fd;
        border-radius: 0.2rem;
        #video{
          width:100%;
          height:100%;
        }
      }
      .video-explain{
        margin-top: 2rem;
        color:#41a1fd;
        text-align: center;
        font-size:1rem;
      }
      .video-info{
        margin-top: 0.5rem;
        color:#949494;
        text-align: center;
        font-size: 0.8rem;
      }
      .video-btn{
        width:80%;
        background: #41a1fd;
        margin-top:6rem;
      }
      .pwd-wrap{
        width: 16rem;
        height: 2.5rem;
        margin: 0 auto;
        background: #fff;
        border:1px solid #ddd;
        border-radius: 4px;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        cursor: pointer;
        li{
          list-style-type:none;
          text-align: center;
          width: 2.5rem;
          line-height: 2.5rem;
          -webkit-box-flex: 1;
          flex: 1;
          -webkit-flex: 1;
          border-right:1px solid #ddd;
          i{
            height: 10px;
            width: 10px;
            border-radius:50% ;
            background: #000;
            display: inline-block;
          }
        }
        li:last-child{
          border-right: 0;
        }
      }

    }
    .footer{

    }
  }
  .position-vertical-demo {
    background-color: #ffe26d;
    color: #000;
    text-align: center;
    padding: 0.5rem;
    font-size: 0.8rem;
  }
</style>
