<template>
  <div class="home-loan">
    <div class="header">
      <div class="header-box">
        <span>最高可借{{allmoney}}元</span>
        <span class="loan-btn" @click="form.money = allmoney">全部借出</span>
      </div>
      <div class="money-box">
        <group>
          <x-input title="￥" placeholder="请输入一百整数倍金额" v-model="form.money"></x-input>
        </group>
      </div>
      <div class="header-info">
        <div class="weui-cell weui-cell--title"><x-icon type="ios-information" size="30"  class="cell-x-icon"></x-icon> 单笔最低借款5000</div>
      </div>
    </div>
    <div class="content">
      <div>
        <group>
          <popup-radio title="借款期数" :options="periodsOptions" v-model="form.periods" placeholder="请选择"></popup-radio>
          <popup-radio title="借款用途" :options="purposeOptions" v-model="form.purpose" placeholder="请选择"></popup-radio>
          <popup-radio title="还款方式" :options="modeOptions" v-model="form.mode" placeholder="请选择"></popup-radio>
          <div class="weui-cell weui-cell--title" v-if="homeAmount"><span>首期需还 {{homeAmount}} （{{homeRepayDate | dateTime}}）</span><span class="right-btn" @click="supportBank">还款详情</span></div>
          <popup-radio title="收款账户" :options="accountOptions" v-model="form.account" placeholder="请选择"></popup-radio>
        </group>
        <div v-transfer-dom class="alert-detail">
          <popup v-model="showBank" position="bottom">
            <div class="detail-all">
              <div class="detail-all-name">共需还款 {{resData.totalRepayAmount}}元</div>
              <div class="detail-all-title">含本金：<span>{{resData.loanAmount}}</span>，利息：<span>{{resData.allInsterest}}</span>，平台服务费：<span>{{resData.allserviceFee}}</span></div>
            </div>
            <group>
              <div v-for="(item, index) in resData.repaymentPlanList" :key="index" class="weui-cell-other vux-1px-b" @click="toggle(index+1)" :class="{open:isopen === index+1}">
                <div class="detail-item">
                  <span class="code">{{index+1}}</span><span class="money">￥{{item.everyLoanAmount}}</span><span class="time">{{item.everyRepayDate | dateTime}}</span>
                </div>
                <div class="show-box">
                  含本金{{item.everyLoanAmount}}，利息{{item.everyInsterest}}，平台服务费{{item.everyServiceFee}}
                </div>
              </div>
            </group>
            <div style="padding: 15px;">
              <x-button @click.native="showBank = false" plain type="warn">关闭</x-button>
            </div>
          </popup>
        </div>
        <div v-transfer-dom class="alert-pwdbox">
          <popup v-model="showPwd" position="bottom">
            <div class="pwd-box">
              <div class="pwd-box-top">
                <div class="pwd-box-title">请输入交易密码</div>
                <input ref="pwd" type="password" maxlength="6" v-model="tradePwd"  style="position: absolute;z-index: -1;left:-100%;opacity: 0"/>
                <ul class="pwd-wrap" id="pwdclick" @click="focus">
                  <li><i v-if="msgLength > 0"></i></li>
                  <li><i v-if="msgLength > 1"></i></li>
                  <li><i v-if="msgLength > 2"></i></li>
                  <li><i v-if="msgLength > 3"></i></li>
                  <li><i v-if="msgLength > 4"></i></li>
                  <li><i v-if="msgLength > 5"></i></li>
                </ul>
              </div>
              <div class="forget-pwd-box"><a href="">忘记密码?</a></div>
              <x-button class="next-btn" type="primary" link="/loanResults">确定</x-button>
            </div>
          </popup>
        </div>
        <div class="check-box">
          <check-icon class="check-read" :value.sync="form.isRead" type="plain">我已阅读并同意 <a href="">《借款合同及服务协议》</a></check-icon>
        </div>
        <x-button class="next-btn" type="primary" @click.native="showPwdbox">确定借款</x-button>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group, PopupRadio, Popup, CheckIcon, TransferDom, Cell } from 'vux'
  import { applyLoan, testRepaymentPlan, queryUserBindCardList, validTradePwd } from '@/api/home'
  import { debounce } from '@/utils/validate'
  export default {
    data() {
      return {
        allmoney: this.$route.query.money,
        showBank: false,
        showPwd: false,
        isopen: '',
        tradePwd: '',
        msgLength: 0,
        periodsOptions: [{
          key: '3',
          value: '3个月'
        }, {
          key: '6',
          value: '6个月'
        }],
        purposeOptions: [{
          key: '',
          value: '请选择'
        }, {
          key: '1',
          value: '个人日常消费'
        }, {
          key: '2',
          value: '装修'
        }, {
          key: '3',
          value: '旅游'
        }, {
          key: '4',
          value: '教育'
        }, {
          key: '5',
          value: '医疗'
        }, {
          key: '6',
          value: '资金周转'
        }, {
          key: '7',
          value: '经营投资'
        }, {
          key: '8',
          value: '其他'
        }],
        modeOptions: [{
          key: '1',
          value: '等额本息'
        }],
        accountOptions: [],
        form: {
          periods: '3',
          purpose: '',
          mode: '1',
          account: '',
          money: '',
          isRead: true
        },
        resData: {},
        homeAmount: '',
        homeRepayDate: ''
      }
    },
    directives: {
      TransferDom
    },
    filters: {
    },
    created() {
      // 延迟 输入金额 请求 还款计划
      this.$watch('form.money', debounce((val) => {
        if (parseInt(val) > parseInt(this.allmoney)) {
          this.form.money = ''
          this.$vux.toast.show({
            type: 'cancel',
            text: '请输入有效金额'
          })
        } else {
          this.repaymentPlan()
        }
      }, 500))
      this.bankCard()
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group,
      PopupRadio,
      Popup,
      CheckIcon,
      Cell
    },
    watch: {
      tradePwd(curVal) {
        if (/[^\d]/g.test(curVal)) {
          this.tradePwd = this.tradePwd.replace(/[^\d]/g, '')
        } else {
          this.msgLength = curVal.length
        }
        if (curVal.length === 6) {
          this.validTradePwd()
        }
      },
      'form.purpose': {
        handler: function(val) {
          this.repaymentPlan()
        },
        deep: true
      },
      'form.mode': {
        handler: function(val) {
          this.repaymentPlan()
        },
        deep: true
      },
      'form.periods': {
        handler: function(val) {
          this.repaymentPlan()
        },
        deep: true
      },
      showPwd: {
        handler: function(val) {
          if (val === false) {
            this.tradePwd = ''
          }
        },
        deep: true
      }
    },
    methods: {
      // 验证交易密码
      validTradePwd() {
        validTradePwd({
          userId: this.$store.state.user.userId,
          tradePwd: this.tradePwd,
          sign: '123'
        }).then(response => {
          if (response) {
            if (response.returnCode === 'SUCCESS') {
              this.applyLoanFun()
              this.showPwd = false
            } else {
              this.tradePwd = ''
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
      // 银行卡 列表
      bankCard() {
        this.accountOptions = []
        queryUserBindCardList({
          userId: this.$store.state.user.userId,
          sign: '1'
        }).then(response => {
          if (response) {
            if (response.returnCode === 'SUCCESS') {
              let data = response.data
              if (data.length > 0) {
                for (let val of data) {
                  this.accountOptions.push({
                    key: val.bindIdNo,
                    value: val.bankName + '(尾号' + val.bankCardNo.substr(val.bankCardNo.length - 4) + ')'
                  })
                }
              }
            }
          }
        }).catch(() => {
          this.disabled = false
        })
      },
      // 还款计划
      repaymentPlan() {
        if (this.form.money && this.form.purpose && this.form.mode && this.form.periods) {
          testRepaymentPlan({
            userId: this.$store.state.user.userId,
            productCode: this.$store.state.user.productCode, // 产品code
            loanAmount: this.form.money, // 借款金额
            loanProposite: this.form.purpose, // 借款用途
            repayModel: this.form.mode, // 还款方式
            repayTotalNum: this.form.periods // 还款期数
          }).then(response => {
            if (response) {
              if (response.returnCode === 'SUCCESS') {
                let data = response.data
                this.resData = data
                if (data.repaymentPlanList.length > 0) {
                  this.homeAmount = data.repaymentPlanList[0].everyLoanAmount
                  this.homeRepayDate = data.repaymentPlanList[0].everyRepayDate
                }
              }
            }
          }).catch(() => {
            this.disabled = false
          })
        } else {
          this.resData = {}
          this.homeAmount = ''
          this.homeRepayDate = ''
        }
      },
      supportBank() {
        this.showBank = true
      },
      toggle(val) {
        this.isopen = val
      },
      // 借款
      applyLoanFun() {
        if (this.form.money && this.form.purpose && this.form.mode && this.form.periods) {
          // if (this.form.money % 100 === 0 && this.form.money >= 500) {
          if (true) {
            applyLoan({
              userId: this.$store.state.user.userId,
              productCode: this.$store.state.user.productCode, // 产品code
              loanAmount: this.form.money, // 借款金额
              loanProposite: this.form.purpose, // 借款用途
              repayModel: this.form.mode, // 还款方式
              repayTotalNum: this.form.periods, // 还款期数
              bindIdNo: this.form.account, // 还款银行
              callbackUrl: 'http://www.baidu.com', // 放款成功回调地址
              sign: 'sign' // 签名结果
            }).then(response => {
              this.disabled = true
              if (response) {
                if (response.returnCode === 'SUCCESS') {
                  this.$router.push({ path: '/loanResults', query: { order: response.data.orderId }})
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
          } else {
            this.$vux.toast.show({
              type: 'cancel',
              text: '请输入有效金额'
            })
          }
        }
      },
      showPwdbox() {
        this.showPwd = true
        this.focus()
      },
      focus() {
        this.$refs['pwd'].focus()
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .home-loan{
    .header{
      .money-box{
        .weui-cells:before{
          border-top:none;
        }
        .weui-cell__hd{
          .weui-label{
            width: 1.1em !important;
            font-size: 2rem;
            font-weight: bold;
          }
        }
        .weui-cell{
          padding-left:0px;
          padding-top:0px;
          padding-bottom:0px;
          font-size: 1rem;
        }
      }
      .header-info{
        font-size: 0.7rem;
        overflow: hidden;
        .weui-cell--title{
          .cell-x-icon{
            width: 1.3rem;
            height: 1.3rem;
            display: block;
            fill: #ffb400;
          }
        }
      }
    }
    .content{
      .weui-cells{
        margin-top:0px;
        .weui-cell--title:before{
          border-color:#eee;
        }
      }
    }
    .check-box{
      padding: 15px 15px 0px;
      .check-read{
        font-size:0.8rem;
        .weui-icon:before{
          margin:0;
        }
        .weui-icon{
          font-size:1rem;
        }
        .weui-icon-success{
          font-size:1rem;
        }
      }
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .home-loan{
    height: 100%;
    .header{
      width:100%;
      background: #FFFFFF;
      .header-box{
        padding:15px;
        font-size: 0.9rem;
        overflow: hidden;
        span{
          float: left;
        }
        .loan-btn{
          float: right;
          color: #ffb400;
        }
      }
      .money-box{
        color: #333;
        padding:0px 30% 0 15px;
        .weui-cells:before{
          border-top:none;
        }
      }
      .header-info{
        padding: 0px;
        font-size: 0.9rem;
        overflow: hidden;
        color: #888888;
      }
    }
    .content{
      padding-top:15px;
      width:100%;
      margin: auto;
      padding-bottom: 15px;
      .weui-cell{
        font-size: 1rem;
      }
      .weui-cell--title{
        font-size: 0.9rem;
        .right-btn{
          position: absolute;
          right: 15px;
          color: #ffb400;
        }
      }
      .check-box{
        .check-read{
          font-size:0.8rem;
          .weui-icon:before{
            margin:0;
          }
          .weui-icon{
            font-size:1rem;
          }
          .weui-icon-success{
            font-size:1rem;
          }
          a{
            color: #009DDA;
          }
        }
      }
      .next-btn{
        width:80%;
        background: #41a1fd;
        margin-top:6rem;
        font-size: 1rem;
      }
    }
    .footer{
    }
  }
  .alert-detail{
    .detail-all{
      .detail-all-name{
        text-align: center;
        font-size: 1.2rem;
        margin-top: 1rem;
      }
      .detail-all-title{
        text-align: center;
        font-size:0.8rem;
        margin-top: 0.5rem;
      }
    }
    .weui-cell-other{
      overflow: hidden;
      padding: 10px 15px;
      .detail-item{
        width:100%;
        font-size: 0.8rem;
        overflow: hidden;
        span{
          float:left;
          display: inline-block;
        }
        .code{
          width:10%;
        }
        .money{
          width:60%;
        }
        .time{
          width:30%;
          text-align: right;
        }
      }
      .show-box{
        overflow: hidden;
        height: 0px;
        text-align: center;
        font-size: 0.6rem;
        color:#888888;
        margin-top:0.5rem;
      }
    }
    .weui-cell-other.open{
      .show-box{
        height:auto;
      }
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
      padding-bottom: 2rem;
      overflow: hidden;
      .pwd-box-title{
        text-align: center;
        font-size:1rem;
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
      .next-btn{
        width: 70%;
        margin-top:2rem;
        font-size: 1rem;
      }
    }
  }
</style>
