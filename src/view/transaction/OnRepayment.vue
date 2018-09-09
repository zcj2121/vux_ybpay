<template>
  <div class="on-repayment">
    <div class="header" v-if="bankNnum">
      <div class="header-info">
        <img src="../../assets/img/home_int_info.png" alt="">
        <span class="header-info-con">还款日当天将对您尾号<span>{{bankNnum}}</span>的银行卡进行扣款,也可主动还款</span>
      </div>
    </div>
    <div class="content">
      <div class="form-box" v-for="(item,index) in repayPlan" :key="index">
        <div class="form-box-item">
          <div class="item-header">
            <label for="">{{item.planRepayTime}}</label>
            <span v-text="`${(item.totalAmount && item.totalAmount>0) ? item.totalAmount : 0}`"></span>
          </div>
          <div class="item-list">
            <div class="item-list-box">
              <label for="">本金</label>
              <span v-text="`${(item.capitalAmount && item.capitalAmount>0) ? item.capitalAmount : 0}`"></span>
            </div>
            <div class="item-list-box">
              <label for="">利息</label>
              <span v-text="`${(item.interestAmount && item.interestAmount>0) ? item.interestAmount : 0}`"></span>
            </div>
            <div class="item-list-box">
              <label for="">平台管理费</label>
              <span v-text="`${(item.platformFee && item.platformFee>0) ? item.platformFee : 0}`"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
import { XButton, XInput, GroupTitle, Group, Cell, FormPreview } from "vux";
import { mapState } from "vuex";
import { queryPlansToRepay, queryBankNum } from "@/api/transaction";
export default {
  data() {
    return {
      repayPlan: [],
      bankNnum: ""
    };
  },
  watch: {},
  created() {
    if (!this.$route.query.loanOrderNo) {
      this.$router.back(-1);
      return false;
    }
    this.queryPlansToRepay();
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
    // 获取银行卡尾号
    queryBankNum() {
      queryBankNum({
        // userId: this.userId,
        userId: "userId001",
        sign: "123"
      })
        .then(res => {
          if (res.success) {
            this.bankNnum = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 还款计划列表查询
    queryPlansToRepay() {
      queryPlansToRepay({
        loanOrderNo: this.$route.query.loanOrderNo,
        sign: "123"
      })
        .then(res => {
          this.queryBankNum();
          if (res.success) {
            this.repayPlan = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  computed: {
    ...mapState({
      userId: state => state.user.userId
    })
  }
};
</script>

<style lang="less" rel="stylesheet/less">
.on-repayment {
  .header {
  }
  .content {
    .form-box {
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
.on-repayment {
  height: 100%;
  .header {
    width: 100%;
    margin-bottom: 15px;
    background: #fff;
    .header-info {
      padding: 0 15px;
      height: 2.5rem;
      line-height: 2.5rem;
      img {
        width: 1.2rem;
        height: 1.2rem;
        vertical-align: middle;
      }
      .header-info-con {
        font-size: 0.7rem;
        color: #ffb400;
      }
    }
  }
  .content {
    width: 100%;
    margin: auto;
    .form-box {
      margin-bottom: 15px;
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
