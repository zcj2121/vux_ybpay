<template>
  <div class="repayment-detail">
    <div class="header">
      <div class="header-title">按期还款金额 (元) </div>
      <div class="header-money">{{repaymentDetail.repayAmount}}</div>
      <div class="header-info">对应<span>{{repaymentDetail.loanTimes}}笔</span>交易</div>
    </div>
    <div class="content">
      <div class="form-box" v-for="(item, index) in repaymentDetail.repayInfoList" :key="index">
        <div class="form-box-item">
          <div class="item-header">
            <label for="">本次已还
            </label>
            <span v-text="`${item.repayAmount}(第${item.term}期)`"></span>
          </div>
          <div class="item-list">
            <div class="item-list-box">
              <label for="">借款金额</label>
              <span>{{item.loanAmount}}</span>
            </div>  
            <div class="item-list-box">
              <label for="">借款期限</label>
              <span>{{loanTimeRange(item.loanLimit)}}</span>
            </div>
          </div>
        </div>
        <group class="list-item">
          <cell title="借款详情" is-link @click.native="toDetailSee(item.loanOrderNo)">
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
import { XButton, XInput, GroupTitle, Group, Cell, FormPreview } from "vux";
import { queryRepaymentInfo } from "@/api/transaction";
import * as filters from "@/filters";
export default {
  data() {
    return {
      repaymentDetail: {}
    };
  },
  watch: {},
  created() {
    if (!this.$route.query.orderNo) {
      this.$router.back(-1)
      return false
    }
    this.queryRepaymentInfo();
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
      this.$router.push({ path: "/onRepayment" });
    },
    toDetailSee(loanOrderNo) {
      if (!loanOrderNo) { // 当没有loanOrderNo的时候 禁止跳转
        return false;
      }
      this.$router.push({ path: "/loanDetail", query: { loanOrderNo } });
    },
    // 还款详情
    queryRepaymentInfo() {
      queryRepaymentInfo({
        orderNo: this.$route.query.orderNo,
        sign: "123"
      })
        .then(res => {
          if (res.success) {
            this.repaymentDetail = res.data;
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
  mounted() {}
};
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
