<template>
  <div class="perfect-information">
    <div class="header vux-1px-b">
      <progress-bar class="vux-1px-b" isActive="3"></progress-bar>
    </div>
    <div class="content">
      <group>
        <div class="weui-cell weui-cell--title"><x-icon type="ios-information" size="30"  class="cell-x-icon"></x-icon> 请填写真实有效信息，以免影响您的申请</div>
        <popup-radio title="学历" :options="educationOptions" v-model="form.education" placeholder="placeholder"></popup-radio>
        <popup-radio title="职业" :options="occupationOptions" v-model="form.occupation" placeholder="placeholder"></popup-radio>
        <popup-radio title="月收入" :options="incomeOptions" v-model="form.income" placeholder="placeholder"></popup-radio>
      </group>
      <group>
        <popup-radio title="有无信用卡" :options="ifcreditOptions" v-model="form.ifcredit" placeholder="placeholder"></popup-radio>
        <x-input title="信用卡号" class="weui-vcode" v-model="form.credit">
          <x-button slot="right" type="primary" mini style="border-radius: 50px;">支持银行</x-button>
        </x-input>
      </group>
      <group>
        <div class="weui-cell other-weui-cell--title"> 紧急联系人1</div>
        <popup-radio title="关系" :options="relationOptions" v-model="form.linkman1.relation" placeholder="placeholder"></popup-radio>
        <x-input title="姓名" placeholder="请输入联系人姓名" v-model="form.linkman1.name"></x-input>
        <x-input title="联系人手机号" placeholder="请输入联系人手机号" v-model="form.linkman1.phone"></x-input>
      </group>
      <group>
        <div class="weui-cell other-weui-cell--title"> 紧急联系人2</div>
        <popup-radio title="关系" :options="relationOptions" v-model="form.linkman2.relation" placeholder="placeholder"></popup-radio>
        <x-input title="姓名" placeholder="请输入联系人姓名" v-model="form.linkman2.name"></x-input>
        <x-input title="联系人手机号" placeholder="请输入联系人手机号" v-model="form.linkman2.phone"></x-input>
      </group>
      <x-button class="next-btn" type="info" link="/creditResult">提交申请</x-button>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import ProgressBar from '@/components/ProgressBar'
  import { Flexbox, FlexboxItem, Divider, XInput, PopupRadio, Group, XButton, Cell, CheckIcon, TransferDom, Popup } from 'vux'
  export default {
    data () {
      return {
        educationOptions: [{
          key: '0',
          value: '硕士及以上'
        }, {
          key: '1',
          value: '本科'
        }, {
          key: '2',
          value: '大专'
        }, {
          key: '3',
          value: '中专/高中及以下'
        }],
        occupationOptions: [{
          key: '0',
          value: '上班族'
        }, {
          key: '1',
          value: '生意人'
        }, {
          key: '2',
          value: '自由职业'
        }, {
          key: '3',
          value: '学生党'
        }, {
          key: '4',
          value: '其他'
        }],
        incomeOptions: [{
          key: '0',
          value: '3000元及以下'
        }, {
          key: '1',
          value: '3001-5000元'
        }, {
          key: '2',
          value: '5001-10000元'
        }, {
          key: '3',
          value: '10001-20000元'
        }, {
          key: '4',
          value: '20001元及以上'
        }],
        ifcreditOptions: [{
          key: '1',
          value: '有信用卡'
        }, {
          key: '2',
          value: '无信用卡'
        }],
        relationOptions: [{
          key: '0',
          value: '配偶'
        }, {
          key: '1',
          value: '父母'
        }, {
          key: '2',
          value: '兄弟姐妹'
        }, {
          key: '3',
          value: '子女'
        }, {
          key: '4',
          value: '同事'
        }, {
          key: '5',
          value: '朋友'
        }, {
          key: '6',
          value: '同学'
        }, {
          key: '7',
          value: '其他'
        }],
        isRead: false,
        showread: false,
        form: {
          education: '1',
          occupation: '1',
          income: '1',
          ifcredit: '1',
          credit: '',
          linkman1: {
            relation: '1',
            name: '',
            phone: ''
          },
          linkman2: {
            relation: '1',
            name: '',
            phone: ''
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
      Popup,
      PopupRadio
    },
    methods: {
      aaa () {
        console.log('123123')
      },
      clickRead () {
        this.showread = true
      },
      onItemClick () {
        console.log('on item click')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .perfect-information{
    .header{
    }
    .content{
      margin-bottom: 15px;
      .weui-cell{
        font-size: 1rem;
      }
      .weui-cell--title{
        font-size:0.8rem;
        color: #888888;
        .cell-x-icon {
          width: 1.5rem;
          height: 1.5rem;
          display: block;
          fill: #ffb400;
        }
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
      .other-group-box{
        .weui-cell:before{
          border-color: #f3f3f3;
        }
        .other-weui-cell--title{
          font-size:1rem;
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
          font-size:1rem;
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
        font-size:0.9rem;
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
        font-size:0.9rem;
        color: #888888;
      }
      .check-read-run{
        font-size:0.9rem;
        color: #888888;
      }
    }
    .next-btn{
      width:80%;
      background: #41a1fd;
      margin-top:15px;
      border-radius: 4px;
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .perfect-information{
    .header{
    }
    .content{
    }
  }
</style>
