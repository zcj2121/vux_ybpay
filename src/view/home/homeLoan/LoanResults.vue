<template>
  <div class="loan-results">
    <div class="header">
    </div>
    <div class="content">
      <div class="result-box">
        <img src="../../../assets/img/home.png" alt="">
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
      <x-button v-if="isShow" class="video-btn" type="primary" @click.native="result('ok')">无款</x-button>
      <x-button v-if="isShow" class="video-btn" type="primary" @click.native="result('no')">失败</x-button>
      <x-button v-if="putShow" class="video-btn" type="primary" link="/home">返回首页</x-button>
      <x-button v-if="confirmShow" class="video-btn" type="primary" @click.native="retry">重试</x-button>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group } from 'vux'
  export default {
    data () {
      return {
        resultTitle: '您的借款正在处理中',
        resultName: 's 后将返回结果，请耐心等待',
        resultInfo: '',
        isShow: true,
        putShow: false,
        confirmShow: false,
        second: 30
      }
    },
    watch: {
      second (val) {
        if (val === 22) {
          this.$router.push({path: '/loanSuccess'})
        }
      }
    },
    created () {
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group
    },
    methods: {
      clearTime () {
        clearInterval(this.intIime)
      },
      intIime () {
        if (this.second && this.second>0) {
          this.second = this.second - 1
        } else {
          this.second = ''
        }
      },
      result (val) {
        this.second = ''
        this.clearTime()
        if (val === 'ok') {
          this.resultTitle = '手速不够快啊，好几亿被抢走了'
          this.resultName = '明日请早哦'
          this.resultInfo = ''
          this.isShow = false
          this.putShow = true
          this.confirmShow = false
        } else if (val === 'no') {
          this.resultTitle = '提现失败'
          this.resultName = '失败原因：  XXXXX'
          this.resultInfo = ''
          this.isShow = false
          this.putShow = false
          this.confirmShow = true
        }
      },
      retry () {
        this.second = 30
        this.resultTitle = '您的借款正在处理中'
        this.resultName = 's 后将返回结果，请耐心等待'
        this.resultInfo = ''
        this.isShow = true
        this.putShow = false
        this.confirmShow = false
      }
    },
    mounted () {
      setInterval(this.intIime, 1000)
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
      padding-top:2rem;
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
        margin-top: 2rem;
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
      }
    }
    .footer{

    }
  }
</style>
