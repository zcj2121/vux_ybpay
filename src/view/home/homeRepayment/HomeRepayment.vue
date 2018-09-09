<template>
  <div class="repayment-detail">
    <div class="header">
      <div class="header-title">剩余未还本金(元)</div>
      <div class="header-money">1,000.00</div>
      <div class="header-info">共<span>1笔借款</span>未结清</div>
    </div>
    <div class="content">
      <div class="form-box">
        <div class="form-box-item">
          <a @click="toNext">
            <div class="item-header">
              <label for="">
                <div class="other-title">05月20日应还 (元)</div>
                <div class="other-money">888.88</div>
              </label>
              <span>
              <div class="weui-cell__ft"></div>
            </span>
            </div>
          </a>
        </div>
        <div class="item-info">还款日当天将对您尾号8888的银行卡进行扣款 </div>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group, Cell, FormPreview } from 'vux'
  import { latestPlansOfLoans } from '@/api/homeRepayment'
  export default {
    data() {
      return {
      }
    },
    watch: {
    },
    created() {
      this.latestPlansOfLoan()
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group,
      Cell,
      FormPreview
    },
    methods: {
      latestPlansOfLoan() {
        latestPlansOfLoans({
          userId: this.$store.state.user.userId,
          sign: '123'
        }).then(response => {
          if (response) {
            if (response.returnCode === 'SUCCESS') {
              this.applyLoan()
            } else {
              this.$vux.toast.show({
                type: 'cancel',
                text: response.returnMessage
              })
            }
          }
        }).catch(() => {
          this.disabled = false
        })
      },
      toNext() {
        this.$router.push({ path: '/repaymentCard' })
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
      background: #41a1fd;
      text-align: center;
      color: #fff;
      padding-top:2rem;
      padding-bottom: 2rem;
      .header-title{
        font-size:1rem;
      }
      .header-money{
        padding-bottom: 0.6rem;
        font-size:1.8rem;
      }
      .header-info{
        font-size:0.8rem;
        color:#fff;
        span{
          color:#ffb400;
        }
      }
    }
    .content{
      width:100%;
      margin: auto;
      .form-box{
        margin-top: 15px;
        background: #fff;
        .item-header{
          .other-title{
            font-size:0.9rem;
          }
          .other-money{
            font-size:1.3rem;
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
          margin-top: -4px;
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
