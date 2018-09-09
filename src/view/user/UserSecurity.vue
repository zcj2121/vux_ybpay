<template>
  <div class="card-manage">
    <div class="header">
    </div>
    <div class="content">
      <group class="cell-box-item">
        <cell title="修改交易密码" is-link>
        </cell>
        <cell title="重置交易密码" is-link>
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
  import { Cell, Group } from 'vux'
  export default {
    components: {
      Cell,
      Group
    },
    data() {
      return {
      }
    },
    methods: {
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
            width: 2rem;
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
    .content{
      width:100%;
      padding-bottom: 70px;
      .cell-box-item{
        margin-bottom:15px;
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
    }
  }
</style>
