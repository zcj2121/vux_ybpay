<template>
  <div class="transaction">
    <div class="header">
      <tab :line-width="2" custom-bar-width="4rem" bar-active-color="#41a1fd" v-model="index">
        <tab-item class="vux-center" selected>借款记录</tab-item>
        <tab-item class="vux-center">还款记录</tab-item>
      </tab>
    </div>
    <div class="content">
      <div v-show="index=='0'">
        <div class="item-box">
          <group class="list-item" v-for="(item, index) in 3" :key="index">
            <cell title="1,000.00" is-link @click.native="toDetail(index)">
              <div class="badge-value">
                <span class="vertical-middle">剩2期</span>
              </div>
            </cell>
            <div class="weui-cell weui-cell--info">2018年51月08日借1000元 | 共3期 </div>
          </group>
        </div>
        <div class="null-info" v-show="false">
          <img src="../assets/img/no-record.png" alt="">
          <div>暂时没有借款记录</div>
        </div>
      </div>
      <div v-show="index=='1'">
        <div class="item-box">
          <group class="list-item" v-for="(item, index) in 20" :key="index">
            <cell title="1,000.00" is-link @click.native="toDetailRep(index)">
              <div class="badge-value">
                <span class="vertical-middle">按时还款</span>
              </div>
            </cell>
            <div class="weui-cell weui-cell--info">2018年51月08日  </div>
          </group>
        </div>
        <div class="null-info" v-if="false">
          <img src="../assets/img/no-record.png" alt="">
          <div>暂时没有还款记录</div>
        </div>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem, GroupTitle, Group, Swiper, SwiperItem, Card, Cell } from 'vux'
  export default {
    data() {
      return {
        index: 0
      }
    },
    watch: {
    },
    created() {
    },
    components: {
      Tab,
      TabItem,
      GroupTitle,
      Group,
      Swiper,
      SwiperItem,
      Card,
      Cell
    },
    methods: {
      back() {
        this.$router.push({ path: '/home' })
      },
      toDetail() {
        this.$router.push({ path: '/loanDetail' })
      },
      toDetailRep() {
        this.$router.push({ path: '/repaymentDetail' })
      }
    },
    mounted() {
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .transaction{
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
        }
        .weui-cell--info{
          font-size:0.8rem;
          color: #888;
        }
      }
      .weui-cells:before{
        border-top:none;
      }
      .list-item:last-child .weui-cells:after{
        border-bottom:none;
      }
    }
    .vux-swiper{
      /*height:100% !important;*/
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .transaction{
    .header{
      width:100%;
    }
    .content{
      margin-top:15px;
      width:100%;
      padding-bottom: 70px;
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
