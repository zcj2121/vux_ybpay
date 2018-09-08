<template>
  <div class="repayment-detail">
    <div class="header">
      <div class="header-title">剩余未还本金(元)</div>
      <div class="header-money">888.88</div>
    </div>
    <div class="content">
      <div class="con-title">请选择还款方式</div>
      <div class="form-box">
        <div class="form-box-item">
          <div class="item-header">
            <label for="">
              <img src="../../../assets/img/card.png" alt="">
            </label>
            <label for="">
              <div class="other-title">银行卡支付</div>
              <div class="other-money">支持储蓄卡 无需开通网银</div>
            </label>
            <span>
            <div class="item-right-box">
              <popup-radio title="" :options="list" v-model="option1" placeholder="请选择"></popup-radio>
            </div>
          </span>
          </div>
        </div>
      </div>
      <x-button class="next-btn" type="primary" @click.native="showPwdbox">确定还款</x-button>
      <div v-transfer-dom class="alert-pwdbox">
        <popup v-model="showPwd" position="bottom">
          <div class="pwd-box">
            <div class="pwd-box-top">
              <div class="pwd-box-title">验证码已发送到186****0908，请注意查收 </div>
              <div class="other-login-box">
                <div class="con-login-box">
                  <group class="phone-box">
                    <x-input type="number" mask="999999" v-model="verifyCode" :max="6" placeholder="请输入验证码"></x-input>
                  </group>
                </div>
                <span class="reg-btn-box">
                  <x-button plain type="primary" @click.native="sendCode" :disabled="sendDis || time > 0">{{text}}</x-button>
                </span>
              </div>
            </div>
            <div class="next-btn-box vux-1px-t">
              <div class="next-btn-item" @click="showPwd = false">
                取消
              </div>
              <div class="next-btn-item vux-1px-l" @click="toNext">
                确定
              </div>
            </div>
          </div>
        </popup>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group, Cell, FormPreview, PopupPicker, CellBox, Selector, PopupRadio, Popup, TransferDom } from 'vux'
  export default {
    data() {
      return {
        second: 60,
        time: 0,
        list: [{key: 'gd', value: '招商银行(尾号8888)'}, {key: 'gx', value: '招商银行(尾号6666)'}],
        option1: '',
        showPwd: false,
        sendDis: false,
        verifyCode: ''
      }
    },
    watch: {
    },
    created() {
    },
    directives: {
      TransferDom
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group,
      Cell,
      FormPreview,
      PopupPicker,
      CellBox,
      Selector,
      PopupRadio,
      Popup
    },
    methods: {
      toNext() {
        this.$router.push({ path: '/repaymentResults' })
      },
      showPwdbox() {
        this.showPwd = true
      },
      // 发送验证码
      sendCode() {
        this.start()
      },
      start() {
        this.time = this.second
        this.timer()
      },
      timer() {
        if (this.time > 0) {
          this.time--
          setTimeout(this.timer, 1000)
        } else {
          this.sendDis = false
        }
      }
    },
    mounted() {
    },
    computed: {
      text() {
        return this.time > 0 ? this.time + 's' : '获取验证'
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .repayment-detail{
    .header{

    }
    .content{
      .form-box{
        .weui-cells{
          margin-top:0px;
          .weui-cell{
            font-size:0.9rem;
            .vertical-middle{
              color:#333;
            }
          }
        }
        .item-header{
          .vux-cell-value{
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            font-size: 0.9rem;
          }
          .item-right-box{
            .weui-cell{
              padding: 0px;
            }
          }
        }
      }
      /*.weui-cell__ft {*/
      /*position: absolute;*/
      /*right: 20px;*/
      /*bottom: 0.8rem;*/
      /*}*/
    }
  }
  .alert-pwdbox{
    .other-login-box{
      .weui-cells{
        background: none;
        font-size:0.8rem;
        line-height: 1.5rem;
        margin-top: 0;
        input{
          text-align: center;
        }
        .weui-cell{
          line-height: 1.5rem;
        }
      }
      .weui-cells:before{
        border-top: none;
      }
      .weui-cells:after{
        border-bottom: none;
      }
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .repayment-detail{
    height: 100%;
    .header{
      width:100%;
      background: #fff;
      text-align: center;
      color: #333;
      padding-top:2rem;
      padding-bottom: 2rem;
      .header-title{
        font-size:1rem;
      }
      .header-money{
        font-size:1.8rem;
      }
      .header-info{
        font-size:0.8rem;
        color:#333;
        span{
          color:#ffb400;
        }
      }
    }
    .content{
      width:100%;
      margin: auto;
      margin-top: 15px;
      .con-title{
        padding:0 15px 5px 15px;
        font-size:0.9rem;
        color:#888;
      }
      .form-box{
        background: #fff;
        .item-header{
          .other-title{
            font-size:0.9rem;
          }
          .other-money{
            font-size:0.6rem;
            color:#888;
          }
        }
        .item-header:after{
          border-bottom:none;
        }
        .item-header label:first-child{
          text-align: center;
          margin: auto;
          min-width: 2rem !important;
          margin-right: 10px;
          img{
            vertical-align: middle;
            width:2rem;
            height:auto;
          }
        }
        .weui-cell__ft{
          span{
            padding-right: 15px;
            color:#888;
            font-size:0.8rem;
          }
        }
        /*.weui-cell__ft:after{*/
          /*content: " ";*/
          /*display: inline-block;*/
          /*height: 6px;*/
          /*width: 6px;*/
          /*border-width: 2px 2px 0 0;*/
          /*border-color: #C8C8CD;*/
          /*border-style: solid;*/
          /*-webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);*/
          /*transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);*/
          /*position: relative;*/
          /*top: -2px;*/
          /*position: absolute;*/
          /*top: 50%;*/
          /*margin-top: -6px;*/
          /*right: 17px;*/
        /*}*/
        .item-info{
          padding: 10px 15px;
          font-size: 0.8rem;
          color:#888;
        }
      }
      .next-btn{
        width: 70%;
        margin-top:4rem;
        font-size: 1rem;
      }
    }
    .footer{

    }
  }
  .alert-pwdbox{
    .vux-popup-dialog{
      background: none;
    }
    .pwd-box{
      width:20rem;
      margin: auto;
      border-radius: 15px;
      background: #fff;
      margin-bottom:5rem;
      overflow: hidden;
      .other-login-box{
        width: 70%;
        margin: auto;
        overflow: hidden;
        position: relative;
        margin-top: 1rem;
        .con-login-box{
          width: 58%;
          margin: initial;
          float: left;
          border-radius: 8px;
          border: 1px solid #e5e3e3;
        }
        .reg-btn-box{
          float: right;
          width: 38%;
          position: absolute;
          bottom: 0;
          right: 0;
          .weui-btn{
            border-radius: 8px;
            padding: 10px 15px;
            font-size: 0.4rem;
            line-height: 1.5rem;
          }
        }
        .phone-box{
        }
      }
      .pwd-box-title{
        text-align: center;
        font-size:0.8rem;
        margin-bottom:0.5rem;
      }
      .pwd-box-top{
        margin-top:2rem;
        .pwd-wrap{
          width: 16rem;
          height: 3rem;
          margin: 0 auto;
          background: #fff;
          border:1px solid #e5e3e3;
          border-radius: 4px;
          display: flex;
          display: -webkit-box;
          display: -webkit-flex;
          cursor: pointer;
          li{
            list-style-type:none;
            text-align: center;
            width: 2.5rem;
            line-height: 3rem;
            -webkit-box-flex: 1;
            flex: 1;
            -webkit-flex: 1;
            border-right:1px solid #e5e3e3;
            i{
              height: 10px;
              width: 10px;
              border-radius:50% ;
              background: #000;
              display: inline-block;
            }
          }
          li:last-child{
            border-right: 0;
          }
        }
      }
      .forget-pwd-box{
        text-align: right;
        width: 16rem;
        margin: auto;
        margin-top:0.5rem;
        a{
          color:#41a1fd;
          text-align: right;
          font-size: 0.8rem;
        }
      }
      .next-btn-box{
        width: 100%;
        margin: auto;
        margin-top: 2rem;
        .next-btn-item{
          float: left;
          width: 50%;
          margin: auto;
          text-align: center;
          line-height: 2rem;
          font-size: 0.9rem;
          color: #888;
        }
        .next-btn-item:last-child{
          float: right;
          color: #41a1fd;
        }
      }

    }
  }
</style>
