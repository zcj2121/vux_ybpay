<template>
  <div class="loan-results">
    <div class="header">
    </div>
    <div class="content">
      <div class="result-box">
        <img :src="require('../../../assets/img/'+img)" alt="">
      </div>
      <div class="result-title">
        {{resultTitle}}
      </div>
      <div class="result-name">
        {{second}}{{resultName}}
      </div>
      <div class="result-info">
        {{resultInfo}}
      </div>
      <x-button v-if="putShow" class="video-btn" type="primary" link="/home">返回首页</x-button>
      <x-button v-if="confirmShow" class="video-btn" type="primary" link="/home">重新申请</x-button>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group } from 'vux'
  import { queryLoanResult } from '@/api/home'
  export default {
    data() {
      return {
        resultTitle: '您的借款正在处理中',
        resultName: 's 后将返回结果，请耐心等待',
        resultInfo: '',
        isShow: true,
        putShow: false,
        confirmShow: false,
        img: 'loan_ing.png',
        second: 60
      }
    },
    watch: {
      second(val) {
        // console.log(val)
        if (val === 1) {
          this.result('ok')
        }
      }
    },
    created() {
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group
    },
    methods: {
      backResults() {
        queryLoanResult({
          orderId: this.$route.query.order
        }).then(response => {
          if (response) {
            if (response.returnCode === 'SUCCESS') {
              if (response.data.status === '4') {
                clearInterval(this._inter)
                clearInterval(this._backinter)
                this.$router.push({ path: '/loanSuccess', query: { money: response.data.loanAmount, card: response.data.eccbankNo }})
              } else if (response.data.status === '2') {
                // this.result('ok')
              } else if (response.data.status === '3') {
                clearInterval(this._inter)
                clearInterval(this._backinter)
                this.result('no')
                this.resultName = `失败原因：  ${response.returnMessage}`
              }
            } else {
              this.result('no')
              this.$vux.toast.show({
                type: 'cancel',
                text: response.returnMessage
              })
            }
          }
        }).catch(() => {
          this.disabled = false
        })
      },
      clearTime() {
        clearInterval(this.intIime)
      },
      intIime() {
        if (this.second && this.second > 0) {
          this.second = this.second - 1
        } else {
          this.second = ''
        }
      },
      result(val) {
        this.second = ''
        this.clearTime()
        if (val === 'ok') {
          this.second = 60
          this.resultTitle = '您的借款正在处理中'
          this.resultName = 's 后将返回结果，请耐心等待'
          this.img = 'loan_ing.png'
          this.resultInfo = ''
          this.isShow = true
          this.putShow = false
          this.confirmShow = false
        } else if (val === 'no') {
          this.resultTitle = '提现失败'
          // this.resultName = '失败原因：  XXXXX'
          this.img = 'loan_no.png'
          this.resultInfo = ''
          this.isShow = false
          this.putShow = false
          this.confirmShow = true
        }
      },
      interval() {
        this._inter = setInterval(() => {
          this.intIime()
        }, 1000)
      },
      backInterval() {
        this._backinter = setInterval(() => {
          this.backResults()
        }, 5000)
      }
    },
    mounted() {
      this.interval()
      this.backInterval()
    },
    beforeDestroy() {
      clearInterval(this._inter)
      clearInterval(this._backinter)
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .loan-results{
    .header{

    }
    .content{
      /*.weui-cell__ft {*/
      /*position: absolute;*/
      /*right: 20px;*/
      /*bottom: 0.8rem;*/
      /*}*/
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .loan-results{
    height: 100%;
    .header{
      width:100%;
    }
    .content{
      padding-top:1.5rem;
      width:100%;
      margin: auto;
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
        color:#41a1fd;
        margin:auto;
        text-align: center;
        margin-top: 1.5rem;
      }
      .result-name{
        font-size:1rem;
        color:#333;
        margin:auto;
        text-align: center;
        margin-top: 0.6rem;
      }
      .result-info{
        font-size:0.8rem;
        color:#949494;
        margin:auto;
        text-align: center;
        margin-top: 2rem;
        min-height: 1.5rem;
      }
      .video-btn{
        width:80%;
        background: #41a1fd;
        margin-top:6rem;
        font-size: 1rem;
      }
    }
    .footer{

    }
  }
</style>
