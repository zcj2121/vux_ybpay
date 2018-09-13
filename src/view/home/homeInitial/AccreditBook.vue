<template>
  <div class="accredit-book">
    <div class="header vux-1px-b" v-html="content">
      {{content}}
    </div>
    <div class="content">
      <x-button class="next-btn" type="info" @click.native="toSave" link="/phoneValidate">阅读并签署</x-button>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import ProgressBar from '@/components/ProgressBar'
  import { Flexbox, FlexboxItem, Divider, XInput, Group, XButton, Cell, CheckIcon, TransferDom, Popup, Datetime } from 'vux'
  import { getCreditAuthHtmlContract, signCreditAgreement } from '@/api/homeInitial'
  export default {
    data() {
      return {
        content: ''
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
      Popup,
      Datetime
    },
    methods: {
      // 获取 合同数据
      readData() {
        getCreditAuthHtmlContract({
          userId: this.$store.state.user.userId,
          sign: '123'
        })
          .then(res => {
            if (res) {
              const data = res.data
              this.content = data.content
              console.log(this.content)
            }
          })
          .catch(err => {
            console.log(err)
          })
      },
      // 阅读 签署
      toSave() {
        signCreditAgreement({
          userId: this.$store.state.user.userId,
          creditOrderNo: '20180824orderno',
          sign: '123'
        })
          .then(res => {
            if (res) {
              const data = res.data
              this.content = data.content
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    mounted() {
      this.readData()
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .accredit-book{
    background: #FFFFFF;
    .header{
      background: #FFFFFF;
      padding: 15px;
      font-size: 1rem;
    }
    .content{
      padding-bottom:4rem;
      .weui-cell{
        font-size: 1rem;
      }
      .weui-cells{
        margin-top:15px;
      }
      .weui-cell__ft{
        .weui-btn{
          margin-left: 5px;
          background:#ffb400;
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
    }
    .next-btn{
      width:80%;
      background: #41a1fd;
      margin-top:4rem;
      border-radius: 4px;
      font-size: 1rem;
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .accredit-book{
    .header{
    }
    .content{
    }
  }
</style>
