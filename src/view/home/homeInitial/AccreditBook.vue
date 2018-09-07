<template>
  <div class="accredit-book">
    <div class="header vux-1px-b">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
    </div>
    <div class="content">
      <group>
        <x-input title="姓名" name="username" placeholder="请输入姓名"></x-input>
        <x-input title="身份证" name="mobile" placeholder="请输入身份证号"></x-input>
        <datetime
          v-model="date"
          @on-change="dateChange"
          title="日期"
          @on-cancel="log('cancel')"
          @on-confirm="onConfirm"
          @on-hide="log('hide', $event)"></datetime>
        <x-input title="电子签章" name="mobile" placeholder="请签署签章"></x-input>
      </group>
      <x-button class="next-btn" type="info" link="/phoneValidate">阅读并签署</x-button>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import ProgressBar from '@/components/ProgressBar'
  import { Flexbox, FlexboxItem, Divider, XInput, Group, XButton, Cell, CheckIcon, TransferDom, Popup, Datetime } from 'vux'
  export default {
    data () {
      return {
        date: '2018-01-01',
        isRead: false,
        showread: false
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
      onConfirm (val) {
        console.log('on-confirm arg', val)
        console.log('current value', this.date)
      },
      log (str1, str2 = '') {
        console.log(str1, str2)
      },
      dateChange () {

      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .accredit-book{
    .header{
      background: #FFFFFF;
      padding: 15px;
      font-size: 1rem;
    }
    .content{
      margin-bottom: 15px;
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
      .weui-vcode{
        .weui-btn{
          padding-right: 0px;
          color: #ffb400;
          margin-left: 5px;
          background:transparent;
        }
        .weui-btn:after{
          border:none;
          border-radius: 50px;
        }
        .weui-btn_mini{
          padding:0px 0px 0px 0.1rem;
          font-size:1rem;
          line-height: 1rem;
        }
      }
      .weui-input{
        text-align: right;
      }
    }
    .next-btn{
      width:90%;
      background: #41a1fd;
      margin-top:4rem;
      border-radius: 4px;
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
