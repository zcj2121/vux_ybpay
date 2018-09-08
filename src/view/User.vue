<template>
  <div class="user">
    <div class="header">
      <a class="header-box">
        <div class="weui-media-box__hd">
          <img src="../assets/img/user_null.png" alt="" class="weui-media-box__thumb">
        </div>
        <div class="weui-media-box__bd">
          <div v-if="isLogin">
            <h4 class="weui-media-box__title">15367669076</h4>
            <p class="weui-media-box__desc">张三</p>
          </div>
          <div v-else>
            注册/登录
          </div>
        </div>
        <div class="weui-media-box__rt"></div>
      </a>
    </div>
    <div class="content">
      <group class="cell-box-item">
        <cell title="交易记录" is-link>
          <img slot="icon" src="../assets/img/user_transaction_no.png">
        </cell>
        <cell title="银行卡管理" is-link>
          <img slot="icon" src="../assets/img/user_card.png">
        </cell>
        <cell title="安全中心" is-link>
          <img slot="icon" src="../assets/img/user_security.png">
        </cell>
      </group>
      <group class="cell-box-item">
        <cell title="常见问题与帮助" is-link>
          <img slot="icon" src="../assets/img/user_problem.png">
        </cell>
        <cell title="联系客服" value="400-888-888" is-link>
          <img slot="icon" src="../assets/img/user_contact.png">
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
  import { Cell, CellBox, CellFormPreview, Panel, Group, Radio } from 'vux'
  export default {
    components: {
      Cell,
      CellBox,
      CellFormPreview,
      Panel,
      Group,
      Radio
    },
    data () {
      return {
        isLogin: false
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .user{
    .header{
      .vux-tab{
        .vux-tab-item.vux-tab-selected{
          color: #41a1fd;
        }
      }
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
  .user{
    .header{
      width:100%;
      .header-box{
        color: #333;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        padding: 15px;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        background: #fff;
        .weui-media-box__hd{
          margin-right: .8em;
          width: 4rem;
          height:4rem;
          line-height: 4rem;
          text-align: center;
          img{
            width: 100%;
            max-height: 100%;
            vertical-align: top;
            border: 0;
            border-radius: 50%;
          }
        }
        .weui-media-box__bd{
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          flex: 1;
          min-width: 0;
          .weui-media-box__title{
            font-weight: 400;
            font-size: 17px;
            width: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            word-wrap: break-word;
            word-break: break-all;
          }
          .weui-media-box__desc{
            color: #999999;
            font-size: 13px;
            line-height: 1.2;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        }
        .weui-media-box__rt{
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          flex: 1;
          min-width: 0;
        }
        .weui-media-box__rt:after {
          content: " ";
          display: inline-block;
          height: 6px;
          width: 6px;
          border-width: 2px 2px 0 0;
          border-color: #c8c8cd;
          border-style: solid;
          -webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
          transform: matrix(.71, .71, -.71, .71, 0, 0);
          position: relative;
          top: -2px;
          position: absolute;
          top: 50%;
          margin-top: -4px;
          right: 15px;
        }
      }
    }
    .content{
      width:100%;
      padding-bottom: 70px;
      .cell-box-item{
        margin-top:15px;
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
