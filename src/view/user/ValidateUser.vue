<template>
  <div class="validate-user">
    <div class="content">
      <group class="cell-box-item">
        <x-input title="姓名" placeholder="请输入完整姓名" placeholder-align="right" v-model="form.name"></x-input>
        <x-input title="身份证号" placeholder="请输入完整身份证号" placeholder-align="right" v-model="form.identityCard"></x-input>
        <x-input title="银行卡" placeholder="请输入完整卡号" placeholder-align="right" v-model="form.bankCard"></x-input>
        <x-input title="手机号" placeholder="请输入银行预留手机号" placeholder-align="right" v-model="form.callPhone"></x-input>
      </group>
      <div class="btn-box">
        <x-button class="next-btn" type="primary" @click.native="toNext">下一步</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { validUserIdentity } from '@/api/user'
  import { Cell, Group, XInput, XButton } from 'vux'
  export default {
    components: {
      Cell,
      Group,
      XInput,
      XButton
    },
    data() {
      return {
        form: {
          name:'', //姓名
          identityCard:'',  //身份证号
          bankCard:'',  //银行卡号
          callPhone:'' //手机号
        }
      }
    },
    methods: {
      toNext() {
        validUserIdentity({
          userId: this.$store.state.user.userId,  //用户Id
          trueName:this.form.name,  //真实姓名
          idCardNo:this.form.identityCard,  //身份证号
          bankCardNo:this.form.bankCard,  //银行卡号
          bankPhone:this.form.callPhone,  //银行预留手机号
          sign:"123"  //签名结果
        }).then(res=>{
          console.log(res.returnMessage)
          if(res.returnCode=='SUCCESS'){
            this.$router.push({ path: '/tradePwassword' })
          }else{
            this.$vux.toast.show({
              type: 'cancel',
              text: res.returnMessage
            })
          }
        }).then(err=>{

        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .validate-user{
    .header{
    }
    .content{
      .weui-cells{
        margin-top: 0px;
        .weui-cell{
          font-size:0.9rem;
          color: #333;
          input{
            text-align: right;
          }
          .vux-cell-primary {
            line-height: 1.5rem;
          }
        }
        .weui-cell--info{
          font-size:0.8rem;
          color: #888;
        }
      }
      .weui-cells:before{
        border-top:none;
      }
      .weui-cells:after{
        border-bottom:none;
      }
    }
    .vux-swiper{
      /*height:100% !important;*/
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .validate-user{
    .content{
      width:100%;
      padding-bottom: 70px;
      .cell-box-item{
        margin-bottom:15px;
      }
      .btn-box{
        button{
          margin-top:4rem;
          border-radius:6px;
          width: 80%;
          font-size: 1rem;
        }
      }
    }
    .footer{
    }
  }
</style>
