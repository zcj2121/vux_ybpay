<template>
  <div class="loan-sucess">
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
        {{resultName}}
      </div>
      <div class="result-info">
        {{resultInfo}}
      </div>
    </div>
    <div class="footer">
      <div class="info-box">
        <div class="info-box-title vux-1px-b">还款须知</div>
        <div class="info-box-con">1、请在下一还款日前确保还款银行卡余额充足</div>
        <div class="info-box-con">2、保持良好信用，有助于提额及费率下调</div>
      </div>
      <x-button class="next-btn" type="primary" link="/home/transaction">查看借款记录</x-button>
      <div class="back-home">
        <span class="vux-1px-b" @click="back">返回首页</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group } from 'vux'
  export default {
    data() {
      return {
        resultTitle: '提现成功',
        resultName: '¥ 20,000.00',
        resultInfo: '请关注招商银行卡(尾号1234）账户余额， 具体到账时间以银行为准  '
      }
    },
    watch: {
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
      back() {
        this.$router.push({path: '/home'})
      }
    },
    mounted() {
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .loan-sucess{
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
  .loan-sucess{
    height: 100%;
    .header{
      width:100%;
    }
    .content{
      background: #fff;
      padding-top:2rem;
      padding-bottom: 2rem;
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
    }
    .footer{
      height:500px;
      overflow-y: auto;
      .info-box{
        background: #fff;
        margin-top:15px;
        padding:15px;
        .info-box-title{
          font-size:0.9rem;
          padding:0.2rem 0;
          color: #333;
        }
        .info-box-title.vux-1px-b:after{
          border-color: #efefef;
        }
        .info-box-con{
          font-size: 0.8rem;
          padding-top:0.2rem;
          color:#888;
        }
      }
      .next-btn{
        width:80%;
        background: #41a1fd;
        margin-top:6rem;
      }
      .back-home{
        margin-top: 1rem;
        span{
          color: #333;
          font-size: 1rem;
        }
        span.vux-1px-b:after{
          border-color:#333;
        }
        text-align: center;
      }
    }
  }
</style>
