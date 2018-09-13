<template>
  <div class="credit-result">
    <div class="header">
    </div>
    <div class="content">
      <div class="result-box">
        <img :src="require('../../../assets/img/'+img)" alt="">
      </div>
      <div class="result-title" :class="{isok:isOk}">
        {{resultTitle}}
      </div>
      <div class="result-name">
        {{resultName}}
      </div>
      <div class="result-info">
        {{resultInfo}}
      </div>
      <x-button v-if="isShow" class="video-btn" type="primary" @click.native="result('ok')">成功</x-button>
      <x-button v-if="isShow" class="video-btn" type="primary" @click.native="result('no')">失败</x-button>
      <x-button v-if="putShow" class="video-btn" type="primary" link="/setTransaction">去提现</x-button>
      <x-button v-if="confirmShow" class="video-btn" type="primary" link="/home">确定</x-button>
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
        resultTitle: '您的申请正在审核中...',
        resultName: '预计1分钟给出结果',
        resultInfo: '(申请结果返回前，请勿关闭页面，以免影响审核结果)',
        isShow: true,
        putShow: false,
        confirmShow: false,
        img: 'credit_ing.png',
        isOk: false
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
      result (val) {
        if (val === 'ok') {
          this.resultTitle = '恭喜，您已获得额度'
          this.resultName = '￥20,000.00'
          this.resultInfo = ''
          this.img = 'credit_yes.png'
          this.isOk = true
          this.isShow = false
          this.putShow = true
          this.confirmShow = false
        } else if (val === 'no') {
          this.resultTitle = '抱歉，申请未通过'
          this.resultName = '您可以重新填写信息后再次提交'
          this.img = 'credit_no.png'
          this.resultInfo = ''
          this.isShow = false
          this.putShow = false
          this.confirmShow = true
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .credit-result{
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
  .credit-result{
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
        font-size: 1rem;
      }
    }
    .footer{

    }
  }
</style>
