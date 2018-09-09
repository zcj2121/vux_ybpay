<template>
  <div class="loan-detail">
    <div class="header">
      <div class="header-title" v-text="`${loanDetail.isPayOff === 0 ? '剩余未还本金 (元)':'已结清本金 (元)'}`"></div>
      <div class="header-money" v-text="`${loanDetail.isPayOff === 0 && remainAmount ? (remainAmount > 0? remainAmount : '数据错误') : (loanDetail.loanAmount > 0 ? loanDetail.loanAmount : 0)}`"></div>
      <div class="header-info" v-if="loanDetail.isPayOff===0">该笔交易还<span>剩{{loanDetail.remainTerm}}期</span>未还</div>
      <cell class="header-tosee" v-if="loanDetail.isPayOff===0" title="还款计划" is-link @click.native="toOnRepayment">
        <div class="badge-value">
          <span class="vertical-middle"></span>
        </div>
      </cell>
    </div>
    <div class="content">
      <div class="form-box">
        <div class="form-box-item">
          <div class="item-header">
            <label for="">借款明细</label>
            <span></span>
          </div>
          <div class="item-list">
            <div class="item-list-box">
              <label for="">借款金额</label>
              <span>{{loanDetail.loanAmount}}</span>
            </div>
            <div class="item-list-box">
              <label for="">借款期限</label>
              <span>{{loanTimeRange(loanDetail.loanLimit)}}</span>
            </div>
            <div class="item-list-box">
              <label for="">还款方式</label>
              <span v-text="`${loanDetail.repayModel === 1 ? '等额本金': '等额本息'}`"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-box">
        <div class="form-box-item">
          <div class="item-header">
            <label for="">还款汇总
            </label>
            <span></span>
          </div>
          <div class="item-list">
            <div class="item-list-box">
              <label for="">已还本金</label>
              <span v-text="`${(loanDetail.capitalAmount && loanDetail.capitalAmount>0) ? loanDetail.capitalAmount : 0}`"></span>
            </div>
            <div class="item-list-box">
              <label for="">已还利息</label>
              <span v-text="`${(loanDetail.interestAmount && loanDetail.interestAmount>0) ? loanDetail.interestAmount : 0}`"></span>
            </div>
            <div class="item-list-box">
              <label for="">平台管理费</label>
              <span v-text="`${(loanDetail.platformFee && loanDetail.platformFee>0) ? loanDetail.platformFee : 0}`"></span>
            </div>
            <div class="item-list-box">
              <label for="">滞纳金</label>
              <span v-text="`${(loanDetail.penalty && loanDetail.penalty>0) ? loanDetail.penalty : 0}`"></span>
            </div>
          </div>
        </div>
        <group class="list-item">
          <cell title="还款明细" is-link @click.native="toDetailSee">
            <div class="badge-value">
              <span class="vertical-middle" :class="{'no-pay': (loanDetail.repayDetails && loanDetail.repayDetails.length > 0)}">查看</span>
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
import { XButton, XInput, GroupTitle, Group, Cell, FormPreview } from "vux"
import { queryLoanInfo } from "@/api/transaction"
import * as filters from "@/filters"
export default {
  data() {
    return {
      loanDetail: {}
    };
  },
  watch: {},
  created() {
    if (!this.$route.query.loanOrderNo) {
      this.$router.back(-1);
      return false;
    }
    this.queryLoanInfo();
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
      this.$router.push({ path: "/home" });
    },
    toOnRepayment() {
      this.$router.push({
        path: "/onRepayment",
        query: { loanOrderNo: this.$route.query.loanOrderNo }
      });
    },
    toDetailSee() {
      if (
        this.loanDetail.repayDetails &&
        this.loanDetail.repayDetails.length > 0
      ) {
        // 本地存储 判断兼容
        try {
          if (window.sessionStorage) {
            let _obj = {
              loanOrderNo: this.$route.query.loanOrderNo,
              repayDetails: this.loanDetail.repayDetails
            };
            window.sessionStorage.setItem("repayDetails", JSON.stringify(_obj));
          }
        } catch (error) {}
        // 跳转
        this.$router.push({
          path: "/loanDetailSee",
          query: { loanOrderNo: this.$route.query.loanOrderNo }
        });
      }
    },
    // 借款详情
    queryLoanInfo() {
      queryLoanInfo({
        loanOrderNo: this.$route.query.loanOrderNo,
        sign: "123"
      })
        .then(res => {
          if (res.success) {
            this.loanDetail = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 借款期限
    loanTimeRange(dateRange) {
      if (!dateRange) {
        return "";
      }
      let _arr = dateRange.split("至");
      return `${filters.dateTime(_arr[0])} 至 ${filters.dateTime(_arr[1])}`;
    }
  },
  mounted() {},
  computed: {
    // 未还金额
    remainAmount() {
      if (this.loanDetail.isPayOff === 0) {
        return this.loanDetail.loanAmount - this.loanDetail.repayedAmount;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less">
.loan-detail {
  .header {
  }
  .content {
    .form-box {
      .weui-cells {
        margin-top: 0px;
        .weui-cell {
          font-size: 0.9rem;
          .vertical-middle {
            color: #999;
            &.no-pay {
              color: #333;
            }
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
.loan-detail {
  height: 100%;
  .header {
    width: 100%;
    background: #fff;
    text-align: center;
    color: #333;
    padding-top: 2rem;
    padding-bottom: 0.1rem;
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
    .header-tosee {
      margin-top: 1rem;
      text-align: left;
      font-size: 1rem;
    }
  }
  .content {
    width: 100%;
    margin: auto;
    .form-box {
      margin-top: 15px;
      background: #fff;
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
  }
}
</style>
