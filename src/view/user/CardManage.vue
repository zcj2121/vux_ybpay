<template>
  <div class="card-manage">
    <div class="header">
      <div class="header-info">
        <img src="../../assets/img/user_bank_info.png" alt="">
        <span class="header-info-con">需持卡人本人银行卡（主卡默认收/还款）</span>
      </div>
    </div>
    <div class="content">
      <group class="cell-box-item">
        <cell :title = "this.cartList">
          <img slot="icon" src="../../assets/img/user_bank_zs.png">
          <div>
            <span class="cell-btn vux-1px" v-if="this.mainCard==1">主卡</span>
            <span class="cell-btn vux-1px" v-if="this.mainCard==2">非主卡</span>
          </div>
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
  import { queryUserBindCardList } from '@/api/user'
  import { Cell, Group } from 'vux'
  export default {
    components: {
      Cell,
      Group
    },
    data() {
      return {
        cartList:'',
        cartFoot:'',
        mainCard:0
      }
    },
    created(){
      this.queryUserBindCardList()
    },
    methods: {
      queryUserBindCardList(){
        queryUserBindCardList({
          userId: this.$store.state.user.userId,  //用户Id
          sign:"123"  //签名结果
        }).then(res=>{
          console.log(res.data)
          res.data.map((item,index)=>{
            this.cutFoot = item.bankCardNo.substring(15,19)
            this.cartList = item.bankName + "(尾号"+this.cutFoot+")"
            this.mainCard = item.mainCard
          })
        }).then(err=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .card-manage{
    .header{
    }
    .content{
      .weui-cells{
        margin-top: 0px;
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
  .card-manage{
    .header{
      width:100%;
      margin-bottom: 15px;
      background: #fff;
      .header-info{
        padding: 0 15px;
        height: 2.5rem;
        line-height: 2.5rem;
        img{
          width: 1.2rem;
          height: 1.2rem;
          vertical-align: middle;
        }
        .header-info-con{
          font-size:0.7rem;
          color: #aaa;
        }
      }
    }
    .content{
      width:100%;
      padding-bottom: 70px;
      .cell-box-item{
        margin-top:15px;
        .cell-btn{
          color: #41a1fd;
          padding: 0.1rem 0.5rem;
        }
        .cell-btn.vux-1px:before{
          border-color: #41a1fd;
        }
      }
      .item-box{
        background: #fff;
        .weui-cells{
          margin-top: 0px;
          .weui-cell{
            font-size:0.9rem;
            color: #333;
          }
          .weui-cell--info{
            font-size:0.8rem;
            color: #888;
          }
        }
      }
      .null-info{
        width:4rem;
        height:4rem;
        margin: auto;
        position: absolute;
        top: 40%;
        width: 100%;
        text-align: center;
        img{
          width:5rem;
          height: auto;
        }
        div{
          font-size:0.8rem;
          color: #888888;
        }
      }


      .result-box{
        margin: auto;
        width:4rem;
        height:4rem;
        img {
          width:100%;
          height:100%;
        }
      }
      .result-title{
        font-size:1.2rem;
        color:#ffb400;
        margin:auto;
        text-align: center;
        margin-top: 2rem;
      }
      .result-name{
        font-size:1.2rem;
        color:#333;
        margin:auto;
        text-align: center;
        margin-top: 0.4rem;
      }
      .result-info{
        font-size:0.8rem;
        color:#949494;
        margin:auto;
        text-align: center;
        margin-top: 2rem;
        min-height: 1.5rem;
        width: 15rem;
      }
    }
    .footer{
      .info-box{
        background: #fff;
        margin-top:15px;
        padding:15px;
        .info-box-title{
          font-size:0.9rem;
          padding:0.2rem 0;
          color: #333;
        }
        .info-box-title.vux-1px-b:after{
          border-color: #efefef;
        }
        .info-box-con{
          font-size: 0.8rem;
          padding-top:0.2rem;
          color:#888;
        }
      }
      .next-btn{
        width:80%;
        background: #41a1fd;
        margin-top:6rem;
      }
      .back-home{
        margin-top: 1rem;
        span{
          color: #333;
          font-size: 1rem;
        }
        span.vux-1px-b:after{
          border-color:#333;
        }
        text-align: center;
      }
    }
  }
</style>
