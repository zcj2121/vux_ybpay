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
      <x-button class="next-btn" type="info" link="/perfectInformation">去授权</x-button>
    </div>
  </div>
</template>

<script>
  import ProgressBar from '@/components/ProgressBar'
  import { Group, XButton } from 'vux'
  export default {
    data () {
      return {
      }
    },
    components: {
      ProgressBar,
      XButton,
      Group
    },
    methods: {
      clickRead () {
        this.showread = true
      },
      onItemClick () {
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
      }
    }
  }
</style>
