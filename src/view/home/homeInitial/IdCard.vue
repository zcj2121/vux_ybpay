<template>
  <div class="home-idcard">
    <div class="header vux-1px-b">
      <progress-bar class="vux-1px-b" isActive="1"></progress-bar>
      <div class="idcard-box">
        <div class="pic-box">
          <flexbox :gutter="15">
            <flexbox-item>
              <div class="pic-card">
                <img v-if="imgs.face" :src="imgs.face" width=100% alt="">
                <img v-else src="../../../assets/img/idcard_face.png" width=100% alt="">
                <div class="pic-scan" @click="upBtnFileFace">
                  <input class="file" ref="dicardFace" name="file" type="file" accept="image/*" @change="updateFace" style="display: none" />
                  <img src="../../../assets/img/scan.png" width=100% height=100% alt="">
                </div>
              </div>
              <div class="pic-name">点击开始识别正面 <a>照片面</a></div>
            </flexbox-item>
            <flexbox-item>
              <div class="pic-card">
                <img v-if="imgs.back" :src="imgs.back" width=100% alt="">
                <img v-else src="../../../assets/img/idcard_back.png" width=100% alt="">
                <div class="pic-scan" @click="upBtnFileBack">
                  <input class="file" ref="dicardBack" name="file" type="file" accept="image/*" @change="updateBack" style="display: none" />
                  <img src="../../../assets/img/scan.png" width=100% height=100% alt="">
                </div>
              </div>
              <div class="pic-name">点击开始识别背面 <a>照片面</a></div>
            </flexbox-item>
          </flexbox>
          <div class="pic-box-info"><x-icon type="ios-information"></x-icon><span>应国家监管要求，办理信贷业务需上传身份证照片，拍摄时请保证 身份证边框完整、字迹清晰、亮度均衡。 </span></div>
        </div>
      </div>
    </div>
    <div class="content">
      <group>
        <x-input title="姓名" ref="verName" v-model="form.trueName" placeholder="请输入姓名" is-type="china-name" required></x-input>
        <x-input title="身份证" ref="verCard" v-model="form.idCardNo" :min="15" :max="18" placeholder="请输入身份证号" :is-type="idCardValue" required></x-input>
        <x-input title="收款银行卡" ref="verBank" class="weui-vcode" :min="14" :max="19" placeholder="请输入银行卡号" v-model="form.bankCardNo" :is-type="cardValue" required>
          <x-button slot="right" type="primary" mini style="border-radius: 50px;" @click.native="supportBank">支持银行</x-button>
        </x-input>
        <x-input title="预留手机号" name="mobile" ref="verPhone" placeholder="请输入银行预留手机号" is-type="china-mobile" :min="11" :max="11" keyboard="number" v-model="form.bankPhone" required></x-input>
        <x-input title="验证码" class="ver-input" ref="verCode" :min="6" :max="6"  v-model="form.validateCode" :is-type="codeValue" required>
          <x-button slot="right" type="primary" mini style="border-radius: 50px;" @click.native="sendCode" :disabled="sendDis || time > 0">{{text}}</x-button>
        </x-input>
      </group>
      <div class="check-box">
        <check-icon class="check-read" :value.sync="isRead" type="plain"></check-icon><span class="check-read-name">我已经阅读并同意 </span> <a class="check-read-run" @click="clickRead">《委托授权划扣协议》</a>
      </div>
      <x-button class="next-btn" type="primary" @click.native="toNext">下一步</x-button>
    </div>
    <div class="footer">
    </div>
    <div v-transfer-dom class="alert-read">
      <popup v-model="showread" position="bottom">
        <group>
          <cell v-for="i in 10" :key="i" :title="i"></cell>
        </group>
        <div style="padding: 15px;">
          <x-button @click.native="showread = false" plain type="primary">关闭</x-button>
        </div>
      </popup>
    </div>
    <div v-transfer-dom class="alert-cardlist">
      <popup v-model="showBank" position="bottom">
        <div class="bank-title">
          支持银行
        </div>
        <div>
          <group class="cell-box-item">
            <cell title="工商银行">
              <img slot="icon" src="../../../assets/img/bank_gongshang.png">
            </cell>
            <cell title="农业银行">
              <img slot="icon" src="../../../assets/img/bank_nongye.png">
            </cell>
            <cell title="建设银行">
              <img slot="icon" src="../../../assets/img/bank_jianshe.png">
            </cell>
          </group>
        </div>
        <div style="padding: 15px;">
          <x-button @click.native="showBank = false" plain type="primary">关闭</x-button>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import ProgressBar from '@/components/ProgressBar'
  import { Flexbox, FlexboxItem, Divider, XInput, Group, XButton, Cell, CheckIcon, TransferDom, Popup } from 'vux'
  import { ocrIdCard, queryCardBin, authUserIdentityBindCard, authUserIdentity, bindCardResend } from '@/api/homeInitial'
  import { luhnCheck, validateIdCard, validateSixCode } from '@/utils/validate'
  export default {
    data() {
      return {
        maskValue: '',
        isRead: false,
        showread: false,
        showBank: false,
        imgs: {
          face: '',
          back: ''
        },
        form: {
          trueName: '',
          idCardNo: '',
          bankCardNo: '',
          bankPhone: '',
          validateCode: '',
          bankName: '',
          bankCode: '',
          cardType: '',
          orderNo: ''
        },
        sendDis: false,
        second: 60,
        time: 0,
        cardValue: function(value) {
          return {
            valid: luhnCheck(value),
            msg: '输入有误'
          }
        },
        idCardValue: function(value) {
          return {
            valid: validateIdCard(value),
            msg: '输入有误'
          }
        },
        codeValue: function(value) {
          return {
            valid: validateSixCode(value),
            msg: '输入有误'
          }
        }
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
    // watch: {
    //   form: {
    //     handler(val) {
    //
    //     },
    //     deep: true
    //   }
    // },
    methods: {
      // 银行卡列表 弹框
      supportBank() {
        this.showBank = true
      },
      // 是否 已读
      clickRead() {
        this.showread = true
      },
      // 点击按钮触发 正面input file
      upBtnFileFace() {
        const event = new MouseEvent('click')
        this.$refs.dicardFace.dispatchEvent(event)
      },
      // 上传正面 身份证
      updateFace(e) {
        const file = e.target.files[0] || e.dataTransfer.files[0]
        this.upFileFun(file, 'face')
        if (file) {
          // 本地预览
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onloadend = () => {
            this.imgs.face = reader.result
          }
        }
      },
      // 点击按钮触发 背面input file
      upBtnFileBack() {
        const event = new MouseEvent('click')
        this.$refs.dicardBack.dispatchEvent(event)
      },
      // 上传背面 身份证
      updateBack(e) {
        const file = e.target.files[0] || e.dataTransfer.files[0]
        this.upFileFun(file, 'back')
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
          this.imgs.back = reader.result
        }
      },
      // 上传
      upFileFun(file, type) {
        const fd = new FormData()
        fd.append('userId', this.$store.state.user.userId)
        fd.append('idCardImage', file)
        fd.append('returnPortrait', '0')
        fd.append('sign', '123')
        ocrIdCard(fd).then(response => {
          if (response) {
            if (type === 'face') {
              if (response.returnCode == 'SUCCESS') {
                const data = Object.assign({}, response.data.idCardFront)
                this.form.trueName = data.name
                this.form.idCardNo = data.idCardNo
                this.$vux.toast.show({
                  type: 'success',
                  text: '正面识别成功'
                })
              } else {
                this.form.trueName = ''
                this.form.idCardNo = ''
                this.$vux.toast.show({
                  type: 'cancel',
                  text: response.returnMessage
                })
              }
            } else if (type === 'back') {
              if (response.returnCode == 'SUCCESS') {
                this.$vux.toast.show({
                  type: 'success',
                  text: '背面识别成功'
                })
              } else {
                this.$vux.toast.show({
                  type: 'cancel',
                  text: response.returnMessage
                })
              }
            }
          }
        }).catch(() => {
        })
      },
      // 发送验证码
      sendCode() {
        if (this.$refs.verBank.valid === true && this.form.bankCardNo !== '' && this.$refs.verPhone.valid === true && this.form.bankPhone !== '') {
          this.bankVerFun()
        } else {
          this.$vux.toast.show({
            type: 'cancel',
            text: '填写异常'
          })
        }
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
      },
      // 验证 银行卡
      bankVerFun() {
        queryCardBin({
          userId: this.$store.state.user.userId,
          bankCardNo: this.form.bankCardNo,
          sign: '123'
        }).then(response => {
          if (response) {
            if (response.returnCode == 'SUCCESS') {
              if (response.data) {
                this.form.bankName = response.data.bankName
                this.form.bankCode = response.data.bankCode
                this.form.cardType = response.data.cardType
              }
              this.codeVerFun()
            } else {
              this.$vux.toast.show({
                type: 'cancel',
                text: response.returnMessage
              })
            }
          }
        }).catch(() => {
          this.$vux.toast.show({
            type: 'cancel',
            text: '网络异常'
          })
        })
      },
      // 发送验证码
      codeVerFun() {
        if (this.form.orderNo) {
          bindCardResend({
            orderNo: this.form.orderNo,
            sign: '123'
          }).then(response => {
            if (response) {
              if (response.returnCode == 'SUCCESS') {
                this.start()
                this.$vux.toast.show({
                  type: 'success',
                  text: '发送成功'
                })
              } else {
                this.$vux.toast.show({
                  type: 'cancel',
                  text: response.returnMessage
                })
              }
            }
          }).catch(() => {
            this.$vux.toast.show({
              type: 'cancel',
              text: '网络异常'
            })
          })
        } else {
          authUserIdentityBindCard({
            userId: this.$store.state.user.userId,
            trueName: this.form.trueName,
            idCardNo: this.form.idCardNo,
            bankPhone: this.form.bankPhone,
            bankCardNo: this.form.bankCardNo,
            bankName: this.form.bankName,
            bankCode: this.form.bankCode,
            cardType: this.form.cardType,
            sign: '123'
          }).then(response => {
            if (response) {
              if (response.returnCode == 'SUCCESS') {
                this.start()
                this.$vux.toast.show({
                  type: 'success',
                  text: '发送成功'
                })
                if (response.data) {
                  this.form.orderNo = response.data.orderNo
                }
              } else {
                this.$vux.toast.show({
                  type: 'cancel',
                  text: response.returnMessage
                })
              }
            }
          }).catch(() => {
            this.$vux.toast.show({
              type: 'cancel',
              text: '网络异常'
            })
          })
        }
      },
      // 下一步 用户授权身份认证
      toNext() {
        if (
          this.$refs.verName.valid === true && this.form.trueName &&
          this.$refs.verCard.valid === true && this.form.idCardNo &&
          this.$refs.verBank.valid === true && this.form.bankCardNo &&
          this.$refs.verPhone.valid === true && this.form.bankPhone &&
          this.$refs.verCode.valid === true && this.form.validateCode
        ) {
          authUserIdentity({
            userId: this.$store.state.user.userId,
            orderNo: this.form.orderNo,
            trueName: this.form.trueName,
            idCardNo: this.form.idCardNo,
            bankCardNo: this.form.bankCardNo,
            bankPhone: this.form.bankPhone,
            validateCode: this.form.validateCode,
            sign: '123'
          }).then(response => {
            if (response) {
              if (response.returnCode == 'SUCCESS') {
                this.$vux.toast.show({
                  type: 'success',
                  text: '验证成功'
                })
                this.$router.push({ path: '/homeFace' })
              } else {
                this.$vux.toast.show({
                  type: 'cancel',
                  text: response.returnMessage
                })
              }
            }
          }).catch(() => {
            this.$vux.toast.show({
              type: 'cancel',
              text: '网络异常'
            })
          })
        } else {
          this.$vux.toast.show({
            type: 'cancel',
            text: '填写异常'
          })
        }
      }
    },
    computed: {
      text() {
        return this.time > 0 ? this.time + 's后重试' : '发送验证码'
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
            border-radius: 0.5rem;
            background: #f4f4f4;
            overflow: hidden;
            border: 0.05rem solid #efefef;
            img{
              width:100%;
              height: auto;
            }
            .pic-scan{
              position: absolute;
              width:25%;
              right:10%;
              bottom:0%;
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
          font-size:0.7rem;
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
        font-size: 0.9rem;
        line-height: 1.5rem;
      }
      .weui-cells{
        margin-top:15px;
        .vux-x-input.disabled .weui-input {
          text-fill-color: #333;
          -webkit-text-fill-color: #333;
          opacity: 1;
        }
      }
      .weui-cell__ft{
        .weui-btn{
          margin-left: 5px;
          background:#ffb400 !important;
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
          background:transparent !important;
        }
        .weui-btn:after{
          border:none;
          border-radius: 50px;
        }
        .weui-btn_mini{
          padding:0px 0px 0px 0.1rem;
          font-size:0.8rem;
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
        font-size:0.8rem;
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
        font-size:0.8rem;
        color: #888888;
      }
      .check-read-run{
        font-size:0.8rem;
        color: #888888;
      }
    }
    .next-btn{
      width:80%;
      margin-top:15px;
      border-radius: 6px;
      font-size: 1rem;
    }
  }
  .alert-read{
    button{
      font-size: 0.8rem;
    }
  }
  .alert-cardlist{
    background: #fff;
    .bank-title{
      font-size: 1rem;
      text-align: center;
      padding: 0.5rem 0;
      color: #333;
    }
    .weui-cells{
      margin-top:0rem;
    }
    .weui-cell{
      font-size:0.9rem;
      color: #333;
      img{
        display:block;
        margin-right:10px;
        vertical-align: middle;
        width: 1.5rem;
      }
      .vux-cell-primary {
        line-height: 1.5rem;
      }
    }
    button{
      font-size: 0.8rem;
    }
    .cell-box-item{
      .cell-btn{
        color: #41a1fd;
        padding: 0.1rem 0.5rem;
      }
      .cell-btn.vux-1px:before{
        border-color: #41a1fd;
      }
    }
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
</style>

<style lang="less" scoped rel="stylesheet/less">
  .home-idcard{
    .header{
      .vux-flexbox-item{
        width:4rem;
        height: 8rem;
        .pic-card{
          width:100%;
          height: 90%;
          img{
            width:100%;
            height: 100%;
          }
          .pic-scan{
            img{
              width:100%;
              height: 100%;
            }
          }
        }
      }
    }
    .content{
      .ver-input{
        button{
          border-radius: 50px;
          line-height: 0.8rem;
          padding: 5px;
          font-size: 0.6rem;
        }
      }
    }
  }
</style>
