<template>
  <div class="phone-validate">
    <div class="header vux-1px-b">
      <progress-bar class="vux-1px-b" isActive="2"></progress-bar>
    </div>
    <div class="content">
      <div class="phone-box">
        <div class="phone-img">
          <img src="../../../assets/img/home_no.png" alt="">
        </div>
        <div class="phone-title">手机号认证</div>
      </div>
    </div>
    <div class="footer">
      <x-button class="next-btn" type="info" @click.native="toPhoneValidate">去授权</x-button>
    </div>
  </div>
</template>

<script>
  import ProgressBar from '@/components/ProgressBar'
  import { Group, XButton, querystring } from 'vux'
  import { creditMobileCertificate } from '@/api/homeInitial'
  import axios from 'axios'
  export default {
    data() {
      return {
      }
    },
    components: {
      ProgressBar,
      XButton,
      Group
    },
    methods: {
      toPhoneValidate() {
        window.location.href = 'http://tx.tcredit.com/m/contacts/index.html#/?appId=3fbd2a7654564a9b99044117784b2e56&urlType=2&mobile=' + this.$store.state.user.phone + '&name=' + this.$store.state.user.trueName + '&idcard=' + this.$store.state.user.card + '&callBackUrl=' + location.href
      },
      clickRead() {
        this.showread = true
      },
      onItemClick() {
      },
      toNext(val) {
        creditMobileCertificate({
          authOperatorTid: val,
          creditOrderNo: '20180824orderno',
          sign: '123'
        }).then(response => {
          if (response) {
            if (response.returnCode == 'SUCCESS') {
              this.$router.push({ name: 'taoBaoValidate', query: {}})
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
      if (urlData.status) {
        if (urlData.status == '10009') {
          this.toNext(urlData.tid)
        } else {
          this.$vux.toast.show({
            type: 'cancel',
            text: '手机号认证失败，请重试'
          })
        }
      }
      console.log(this.$store.state.user.userId)
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .phone-validate{
    .header{
    }

  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .phone-validate{
    .header{
    }
    .content{
      overflow: hidden;
      .phone-box{
        width: 100%;
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
