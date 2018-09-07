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
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group, Cell, FormPreview, PopupPicker, CellBox, Selector, PopupRadio } from 'vux'
  export default {
    data() {
      return {
        list: [{key: 'gd', value: '招商银行(尾号8888)'}, {key: 'gx', value: '招商银行(尾号6666)'}],
        option1: ''
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
      Group,
      Cell,
      FormPreview,
      PopupPicker,
      CellBox,
      Selector,
      PopupRadio
    },
    methods: {
      toNext() {
        this.$router.push({ path: '/onRepayment' })
      }
    },
    mounted() {
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
        .weui-cell__ft:after{
          content: " ";
          display: inline-block;
          height: 6px;
          width: 6px;
          border-width: 2px 2px 0 0;
          border-color: #C8C8CD;
          border-style: solid;
          -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
          position: relative;
          top: -2px;
          position: absolute;
          top: 50%;
          margin-top: -6px;
          right: 17px;
        }
        .item-info{
          padding: 10px 15px;
          font-size: 0.8rem;
          color:#888;
        }
      }
    }
    .footer{

    }
  }
</style>
