<template>
  <div class="repayment-detail">
    <div class="header">
      <div class="header-title">按期还款金额 (元) </div>
      <div class="header-money">1,000.00</div>
      <div class="header-info">对应<span>1笔</span>交易</div>
    </div>
    <div class="content">
      <div class="form-box">
        <div class="form-box-item">
          <div class="item-header">
            <label for="">本次已还
            </label>
            <span>500.00(第2期)</span>
          </div>
          <div class="item-list">
            <div class="item-list-box">
              <label for="">借款金额</label>
              <span>1,000.00</span>
            </div>
            <div class="item-list-box">
              <label for="">借款期限</label>
              <span>2018-05-02至2018-08-01</span>
            </div>
          </div>
        </div>
        <group class="list-item">
          <cell title="还款明细" is-link @click.native="toDetailSee(index)">
            <div class="badge-value">
              <span class="vertical-middle">查看</span>
            </div>
          </cell>
        </group>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group, Cell, FormPreview } from 'vux'
  export default {
    data() {
      return {
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
      FormPreview
    },
    methods: {
      back() {
        this.$router.push({ path: '/home' })
      },
      toOnRepayment() {
        this.$router.push({ path: '/onRepayment' })
      },
      toDetailSee() {
        this.$router.push({ path: '/loanDetail' })
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
      background: #fff;
      text-align: center;
      color: #333;
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
        color:#888;
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
      }
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

    }
  }
</style>
