<template>
  <div class="hepayment-results">
    <div class="header">
    </div>
    <div class="content">
      <div class="result-box">
        <img v-if="statu" src="../../../assets/img/hepayment_yes.png" alt="">
        <img v-else src="../../../assets/img/loan_no.png" alt="">
      </div>
      <div class="result-title">
        {{statu? '还款成功': '还款失败'}}
      </div>
      <div class="result-name" v-if="!statu">
        失败原因：  {{returnMessage}}
      </div>
      <x-button v-if="statu" class="video-btn" type="primary" @click.native="backHome">完成</x-button>
      <x-button v-else class="video-btn" type="primary" @click.native="back">再次还款</x-button>
      <div class="back-box" v-if="statu">
        <span class="vux-1px-b" @click="toTransaction">查看还款记录</span>
      </div>
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
        statu: true,
        returnMessage:""
      }
    },
    created () {
      this.succOrErr()
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group
    },
    methods: {
      succOrErr(){
        if(this.$route.query.returnCode == 'DEDUCT_MONEY_FAIL'){
          this.returnMessage = this.$route.query.returnMessage
          this.statu = false
        }
        else if(this.$route.query.returnCode == 'SUCCESS'){
          this.statu = true
        }
      },
      toTransaction() {
        this.$router.push({ path: '/home/transaction' })
      },
      backHome() {
        this.$router.push({ path: '/home' })
      },
      back() {
        this.$router.push({ path: '/repaymentCard' })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .hepayment-results{
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
  .hepayment-results{
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
      .result-title.isok{
        color:#ffb400;
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
        margin-top:4rem;
      }
      .back-box{
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
    .footer{

    }
  }
</style>
