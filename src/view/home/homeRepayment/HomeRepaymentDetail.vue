<template>
  <div class="repayment-detail">
    <div class="header">
      <div class="header-title">{{planRepayTime}}应还 (元) </div>
      <div class="header-money">{{totalAmount}}</div>
      <div class="header-info">还款日当天将对您尾号{{date}}的银行卡进行扣款,也可主动还款</div>
    </div>
    <div class="content">
      <div class="form-box">
        <div class="form-box-item" v-for="(item,index) in repayDetails" :key="index">
          <div class="item-header">
            <label for="">
              <div>{{item.repayAmount}}</div>
              <div>{{item.loanDate}}日借{{item.loanAmount}}元 | 共{{item.totalTerms}}期</div>
            </label>
            <span>第{{item.termNo}}期</span>
          </div>
          <div class="item-list">
            <div class="item-list-box">
              <label for="">本金</label>
              <span>{{item.capitalAmount}}</span>
            </div>
            <div class="item-list-box">
              <label for="">利息</label>
              <span>{{item.interestAmount}}</span>
            </div>
            <div class="item-list-box">
              <label for="">平台管理费</label>
              <span>{{item.platformFee}}</span>
            </div>
            <div class="item-list-box">
              <label for="">还款方式</label>
              <span v-if="item.repayModel==1">等额本金</span>
              <span v-if="item.repayModel==2">等额本息</span>
            </div>
          </div>
        </div>
        <!-- <div class="form-box-item">
          <div class="item-header">
            <label for="">
              <div>8,888.88</div>
              <div>2018年01月29日借1000元 | 共3期</div>
            </label>
            <span>第一期</span>
          </div>
          <div class="item-list">
            <div class="item-list-box">
              <label for="">本金</label>
              <span>333.33</span>
            </div>
            <div class="item-list-box">
              <label for="">利息</label>
              <span>3.33</span>
            </div>
            <div class="item-list-box">
              <label for="">平台管理费</label>
              <span>2.55</span>
            </div>
            <div class="item-list-box">
              <label for="">还款方式</label>
              <span>等额本息</span>
            </div>
          </div>
        </div> -->
        <!-- <div class="form-box-item">
          <div class="item-header">
            <label for="">
              <div>8,888.88</div>
              <div>2018年01月29日借1000元 | 共3期</div>
            </label>
            <span>第一期</span>
          </div>
          <div class="item-list">
            <div class="item-list-box">
              <label for="">本金</label>
              <span>333.33</span>
            </div>
            <div class="item-list-box">
              <label for="">利息</label>
              <span>3.33</span>
            </div>
            <div class="item-list-box">
              <label for="">平台管理费</label>
              <span>2.55</span>
            </div>
            <div class="item-list-box">
              <label for="">还款方式</label>
              <span>等额本息</span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="footer">
      <x-button class="next-btn" type="primary" @click.native="toNext">立即还款</x-button>
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group, Cell, FormPreview } from 'vux'
  import { latestOnePlanOfLoan } from '@/api/homeRepayment'
  export default {
    data() {
      return {
        payList:[],
        repaymentDetail: {},
        loanOrderNo:"",
        planRepayTime:"",
        totalAmount:0,
        date:this.$route.query.date,
        repayDetails:[],
        capital:0,
        capitalAmount:0,
        repayAmount:0
      }
    },
    watch: {},
    created() {
      this.orderNum()
      this.amountPay()
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
      amountPay(){
        latestOnePlanOfLoan({
          loanOrderNo: this.loanOrderNo,
          sign: '123'
        }).then(res => {
          if (res.returnCode == 'SUCCESS') {
            this.repayDetails = res.data.repayDetails
            this.planRepayTime = res.data.planRepayTime
            this.totalAmount = res.data.totalAmount
            res.data.repayDetails.map((item,index)=>{
              this.capitalAmount = item.capitalAmount
              this.repayAmount = item.repayAmount
            })
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      orderNum(){
        this.payList = this.$route.query.toRepayList
        this.payList.map((item,index)=>{
          this.loanOrderNo = item.loanOrderNo
        })
        this.date = this.$route.query.date
      },
      toNext() {
        this.$router.push({ 
          path: '/repaymentCard',
          query: { 
            capitalAmount:this.capitalAmount,
            loanOrderNo:this.loanOrderNo,
            repayAmount:this.repayAmount
          }
        })
      }
    },
    mounted() {}
  }
</script>

<style lang="less" rel="stylesheet/less">
  .repayment-detail {
    .header {
    }
    .content {
      .form-box {
        .weui-cells {
          margin-top: 0px;
          .weui-cell {
            font-size: 0.9rem;
            .vertical-middle {
              color: #333;
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
  .repayment-detail {
    height: 100%;
    .header {
      width: 100%;
      background: #fff;
      text-align: center;
      color: #333;
      padding-top: 2rem;
      padding-bottom: 2rem;
      .header-title {
        font-size: 1rem;
      }
      .header-money {
        padding-bottom: 0.6rem;
        font-size: 1.8rem;
      }
      .header-info {
        font-size: 0.8rem;
        color: #888;
        span {
          color: #ffb400;
        }
      }
    }
    .content {
      width: 100%;
      margin: auto;
      .form-box {
        .form-box-item{
          margin-top: 15px;
          background: #fff;
        }
      }
      .result-box {
        margin: auto;
        width: 4rem;
        height: 4rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .result-title {
        font-size: 1.2rem;
        color: #ffb400;
        margin: auto;
        text-align: center;
        margin-top: 2rem;
      }
      .result-name {
        font-size: 1.2rem;
        color: #333;
        margin: auto;
        text-align: center;
        margin-top: 0.4rem;
      }
      .result-info {
        font-size: 0.8rem;
        color: #949494;
        margin: auto;
        text-align: center;
        margin-top: 2rem;
        min-height: 1.5rem;
        width: 15rem;
      }
    }
    .footer {
      padding: 15px;
      .next-btn{
        width:80%;
        font-size: 1rem;
        margin-top: 2rem;
        border-radius: 6px;
      }
    }
  }
</style>
