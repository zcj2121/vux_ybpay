<template>
  <div class="home-face">
    <div class="header">
    </div>
    <div class="content">
      <div class="video-box" @click="upBtnFileFace">
        <img src="../../../assets/img/validata_face.png" alt="">
      </div>
      <div class="video-explain">点击进行人脸验证</div>
      <div class="video-info">按照提示完成相关动作</div>
      <x-button class="video-btn" type="primary" @click.native="upBtnFileFace">刷脸验证</x-button>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group } from 'vux'
  import { liteGetToken, liteGetResult } from '@/api/homeInitial'
  export default {
    data() {
      return {
        calltoken: '',
        bizId: ''
      }
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group
    },
    methods: {
      // 获取 face++ token
      callToken() {
        liteGetToken({
          userId: '20180824userid',
          returnUrl: 'http://localhost:8080',
          sign: '123'
        }).then(response => {
          if (response) {
            if (response.returnCode == 'SUCCESS') {
              this.calltoken = response.data.token
              this.bizId = response.data.bizId
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
      upBtnFileFace() {
        window.location.href = 'https://api.megvii.com/faceid/lite/do?token=' + this.calltoken
      },
      toNext(val) {
        liteGetResult({
          userId: '20180824userid',
          bizId: this.bizId,
          sign: '123'
        }).then(response => {
          if (response) {
            if (response.returnCode == 'SUCCESS') {
              this.$router.push({ name: 'loginForget', query: {}})
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
      this.callToken()
      let urlData = querystring.parse(window.location.search)
      if (urlData.next) {
        if (urlData.next == 'ok') {
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
  .home-face{
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
  .home-face{
    height: 100%;
    .header{
      width:100%;
      .header-logo{
        height: 8.5rem;
        text-align: center;
        margin: auto;
      }
      .header-title{
        color:#333;
        font-size:1.5rem;
        line-height: 1.7rem;
        font-weight: bold;
        display: block;
        text-align: center;
      }
    }
    .content{
      padding-top:5rem;
      width:100%;
      .video-box{
        margin: auto;
        width:12rem;
        height:12rem;
        img{
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
        font-size: 1rem;
      }
    }
    .footer{

    }
  }
</style>
