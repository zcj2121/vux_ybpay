<template>
  <div class="user-detail">
    <div class="content">
      <group class="cell-box-item">
        <cell title="注册手机" :value='this.telephoneNo'></cell>
        <cell title="姓名" :value='this.trueName'></cell>
        <cell title="身份证号" :value="this.idCardNo"></cell>
      </group>
    </div>
  </div>
</template>

<script>
  import { queryUserPersonalInfo } from '@/api/user'
  import { Cell, Group } from 'vux'
  export default {
    components: {
      Cell,
      Group
    },
    data() {
      return {
        idCardNo:'',
        telephoneNo:'',
        trueName:''
      }
    },
    created(){
      this.queryUserPersonalInfo()
    },
    methods: {
      queryUserPersonalInfo(){
        queryUserPersonalInfo({
          userId: this.$store.state.user.userId,  //用户Id
          sign:"123"  //签名结果
        }).then(res=>{
          console.log(res)
          let date = res.data
          this.idCardNo = date.idCardNo
          this.telephoneNo = date.telephoneNo
          this.trueName = date.trueName
        }).then(err=>{
          console.log(err)
        })
      },
      toNext() {
        this.$router.push({ path: '/tradePwassword' })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .user-detail{
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
      .weui-cell__ft {
        text-align: right;
        color: #333;
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
  .user-detail{
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
