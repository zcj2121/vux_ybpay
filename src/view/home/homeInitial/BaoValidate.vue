<template>
  <div class="taobao-validate">
    <div class="header vux-1px-b">
      <progress-bar class="vux-1px-b" isActive="2"></progress-bar>
    </div>
    <div class="content">
      <div class="phone-box">
        <div class="phone-img">
          <img src="../../../assets/img/home_no.png" alt="">
        </div>
        <div class="phone-title">淘宝认证</div>
      </div>
    </div>
    <div class="footer">
      <x-button class="next-btn" type="info" @click.native="toValidate" link="/perfectInformation">去授权</x-button>
    </div>
  </div>
</template>

<script>
  import ProgressBar from '@/components/ProgressBar'
  import { Group, XButton, querystring } from 'vux'
  import { getGxbToken, creditDsCertificate } from '@/api/homeInitial'
  export default {
    data () {
      return {
        calltoken: ''
      }
    },
    components: {
      ProgressBar,
      XButton,
      Group
    },
    methods: {
      // 获取 公信宝 token
      callToken() {
        getGxbToken({
          userId: this.$store.state.user.userId,
          authItem: '1',
          sign: '123'
        }).then(response => {
          if (response) {
            if (response.returnCode == 'SUCCESS') {
              this.calltoken = response.data.token
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
      toValidate() {
        if (this.callToken) {
          window.location.href = 'https://prod.gxb.io/v2/auth?token=' + this.calltoken + '&returnUrl=' + encodeURIComponent(((location.href).split('?'))[0] + '?calltoken=' + this.calltoken)
        }
      },
      toNext(val) {
        creditDsCertificate({
          authDsToken: val,
          creditOrderNo: '20180824orderno',
          sign: '123'
        }).then(response => {
          if (response) {
            if (response.returnCode == 'SUCCESS') {
              this.$router.push({ name: 'perfectInformation', query: { creditOrderNo: response.data.creditOrderNo }})
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
      }
    },
    created() {
      let urlData = querystring.parse(window.location.search)
      if (urlData.success) {
        if (urlData.success == '1') {
          this.toNext(urlData.calltoken)
        } else {
          this.callToken()
          this.$vux.toast.show({
            type: 'cancel',
            text: '电商认证失败，请重试'
          })
        }
      } else {
        this.callToken()
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .taobao-validate{
    .header{
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .taobao-validate{
    .header{
    }
    .content{
      .phone-box{
        padding-top:5rem;
        margin:auto;
        text-align: center;
        .phone-img{
          width:2.5rem;
          height:2.5rem;
          margin: auto;
          padding:1rem;
          background: #41a1fd;
          border-radius: 50%;
          border: 0.5rem solid #bddefe;
          img {
            width: 100%;
            height:100%;
          }
        }
        .phone-title{
          color:#333;
          margin-top:20px;
          font-size:1rem;
        }
      }
    }
    .footer{
      padding-top:4rem;
      .next-btn{
        width:80%;
        background: #41a1fd;
        margin-top:15px;
        border-radius: 4px;
        font-size: 1rem;
      }
    }
  }
</style>
