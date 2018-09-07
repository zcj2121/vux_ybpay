<template>
  <div class="home-idcard">
    <div class="header vux-1px-b">
      <progress-bar class="vux-1px-b" isActive="1"></progress-bar>
      <div class="idcard-box">
        <div class="pic-box">
          <flexbox :gutter="15">
            <flexbox-item>
              <div class="pic-card">
                <img src="../../../assets/img/idcard_face.png" width=100% height=100% alt="">
                <div class="pic-scan">
                  <img src="../../../assets/img/scan.png" width=100% height=100% alt="">
                </div>
              </div>
              <div class="pic-name">点击开始识别正面 <a href="">照片面</a></div>
            </flexbox-item>
            <flexbox-item>
              <div class="pic-card">
                <img src="../../../assets/img/idcard_back.png" width=100% height=100% alt="">
                <div class="pic-scan">
                  <img src="../../../assets/img/scan.png" width=100% height=100% alt="">
                </div>
              </div>
              <div class="pic-name">点击开始识别背面 <a href="">照片面</a></div>
            </flexbox-item>
          </flexbox>
          <div class="pic-box-info"><x-icon type="ios-information"></x-icon><span>应国家监管要求，办理信贷业务需上传身份证照片，拍摄时请保证 身份证边框完整、字迹清晰、亮度均衡。 </span></div>
        </div>
      </div>
    </div>
    <div class="content">
      <group>
        <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
        <x-input title="身份证" name="mobile" placeholder="请输入身份证号"></x-input>
        <x-input title="收款银行卡" class="weui-vcode">
          <x-button slot="right" type="primary" mini style="border-radius: 50px;">支持银行</x-button>
        </x-input>
        <x-input title="预留手机号" name="mobile" placeholder="请输入银行预留手机号" keyboard="number"></x-input>
        <x-input title="验证码">
          <x-button slot="right" type="primary" mini style="border-radius: 50px;">发送验证码</x-button>
        </x-input>
      </group>
      <div class="check-box">
        <div>

        </div>
        <check-icon class="check-read" :value.sync="isRead" type="plain"></check-icon><span class="check-read-name">我已经阅读并同意 </span> <a class="check-read-run" @click="clickRead">《委托授权划扣协议》</a>
        <div v-transfer-dom>
          <popup v-model="showread" position="bottom">
            <group>
              <cell v-for="i in 10" :key="i" :title="i"></cell>
            </group>
            <div style="padding: 15px;">
              <x-button @click.native="showread = false" plain type="warn">关闭</x-button>
            </div>
          </popup>
        </div>
      </div>
      <x-button class="next-btn" type="info" link="/homeFace">下一步</x-button>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import ProgressBar from '@/components/ProgressBar'
  import { Flexbox, FlexboxItem, Divider, XInput, Group, XButton, Cell, CheckIcon, TransferDom, Popup } from 'vux'
  export default {
    data () {
      return {
        maskValue: '',
        isRead: false,
        showread: false
      }
    },
    directives: {
      TransferDom
    },
    components: {
      ProgressBar,
      Flexbox,
      FlexboxItem,
      Divider,
      XInput,
      XButton,
      Group,
      Cell,
      CheckIcon,
      Popup
    },
    methods: {
      clickRead () {
        this.showread = true
      },
      onItemClick () {
        console.log('on item click')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .home-idcard{
    .header{
      .idcard-box{
        background: #fff;
        padding:15px;
        .pic-box{
          .pic-card{
            position: relative;
            border-radius: 0.4rem;
            background: #f4f4f4;
            .pic-scan{
              position: absolute;
              width:25%;
              right:15%;
              bottom:20%;
            }
          }
        }
        .pic-name{
          color: #555;
          margin-top:5px;
          text-align: center;
          font-size:0.8rem;
          a{
            color:#41a1fd;
          }
        }
        .pic-box-info{
          margin-top:15px;
          font-size:0.6rem;
          color: #888888;
          .vux-x-icon {
            vertical-align: top;
            fill: #ffb400;
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }
    .content{
      margin-bottom: 15px;
      .weui-cell{
        font-size: 1rem;
      }
      .weui-cells{
        margin-top:15px;
      }
      .weui-cell__ft{
        .weui-btn{
          margin-left: 5px;
          background:#ffb400;
        }
        .weui-btn:after{
          border-radius: 50px;
        }
        .vux-x-input-right-full{
          div{
            height:100%;
            vertical-align: middle;
            display: table-cell;
            span{
              vertical-align: middle;
            }
          }
        }
      }
      .weui-vcode{
        .weui-btn{
          padding-right: 0px;
          color: #ffb400;
          margin-left: 5px;
          background:transparent;
        }
        .weui-btn:after{
          border:none;
          border-radius: 50px;
        }
        .weui-btn_mini{
          padding:0px 0px 0px 0.1rem;
          font-size:1rem;
          line-height: 1rem;
        }
      }
      .weui-input{
        text-align: right;
      }
    }
    .check-box{
      padding:0 15px;
      margin-top:5px;
      .check-read{
        font-size:0.9rem;
        .weui-icon:before{
          margin:0;
        }
        .weui-icon{
          vertical-align: text-bottom;
          font-size:1rem;
        }
        .weui-icon-success{
          font-size:1rem;
        }
      }
      .check-read-name{
        font-size:0.9rem;
        color: #888888;
      }
      .check-read-run{
        font-size:0.9rem;
        color: #888888;
      }
    }
    .next-btn{
      width:80%;
      background: #41a1fd;
      margin-top:15px;
      border-radius: 4px;
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .home-idcard{
    .header{
    }
    .content{
    }
  }
</style>
