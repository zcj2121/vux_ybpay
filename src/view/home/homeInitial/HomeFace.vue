<template>
  <div class="home-face">
    <div class="header">
    </div>
    <div class="content">
      <div class="video-box">
        <video id="video" autoplay></video>
      </div>
      <div class="video-explain">请正对手机，进行人脸验证</div>
      <div class="video-info">按照提示完成相关动作</div>
      <x-button class="video-btn" type="primary" link="/SetTransaction">刷脸验证</x-button>
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
        maskValue: ''
      }
    },
    created () {
      navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia // 获取媒体对象（这里指摄像头）
      navigator.getUserMedia({
        video: true
      }, this.gotStream, this.noStream) // 参数1获取用户打开权限；参数二成功打开后调用，并传一个视频流对象，参数三打开失败后调用，传错误信息
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group
    },
    methods: {
      gotStream (stream) {
        let video = document.getElementById('video')
        video.src = URL.createObjectURL(stream)
        video.onerror = function () {
          stream.stop()
        }
        stream.onended = this.noStream()
      },
      noStream () {

      },
      forgetPassword () {
        this.$router.push({name: 'LoginForget', query: {}})
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
    }
    .footer{

    }
  }
</style>
