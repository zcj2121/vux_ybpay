<template>
  <div class="home-initial">
    <div class="header">
      <div class="header-con" v-if="statu == '1'">
        <div class="header-title">期望额度</div>
        <group>
          <x-input v-model="maskValue"  placeholder="请输入100-20万之间100整数倍的数字"></x-input>
        </group>
      </div>
      <div class="header-con-other" v-if="statu == '2'||statu == '3'">
        <div class="header-title">可借额度</div>
        <div class="header-use">¥ {{useMoney}}</div>
        <div class="header-all">总额度 <span>{{allMoney}}</span></div>
      </div>
      <div class="overdue-img" v-if="statu == '3'">
        <img src="../assets/img/overdue.png" alt="">
      </div>
    </div>
    <div class="content">
      <div class="con-box" v-if="statu == '1'">
        <div class="con-title">借款期限</div>
        <grid :cols="3" :show-lr-borders="false">
          <grid-item v-for="i in [3,6,12]" :key="i" :class="{active: i==conActive}" @click.native="active(i)">
            <span class="grid-center">{{i}}个月</span>
            <span class="grid-int-active"></span>
          </grid-item>
        </grid>
        <x-button type="primary" class="def-btn" style="border-radius:99px;width: 60%;" link="/IdCard">下一步</x-button>
        <div class="con-info vux-1px-t">
          <img src="../assets/img/home_int_info.png" alt="">
          <span>公告：不向学生提供借款服务</span>
        </div>
      </div>
      <div class="con-box-other" v-if="statu == '2'||statu == '3'">
        <div class="con-info">
          <img src="../assets/img/home_int_info.png" alt="">
          <span>公告：不向学生提供借款服务</span>
        </div>
        <x-button v-if="statu == '2'" type="primary" class="def-btn" style="border-radius:99px;width: 60%;" @click.native="toLoan">去借款</x-button>
        <x-button v-if="statu == '3'" type="primary" class="def-btn" style="border-radius:99px;width: 60%;" link="/homeRepayment">去还款</x-button>
      </div>
    </div>
    <div class="footer">
      <a href="">常见问题?</a>
    </div>
  </div>
</template>

<script>
  import { XButton, Flexbox, FlexboxItem, Divider, XInput, Grid, GridItem, GroupTitle, Group } from 'vux'
  import { mapState } from 'vuex'
  import { queryMyAccount } from '@/api/home'
  export default {
    data() {
      return {
        maskValue: null,
        enterText: '',
        statu: '1', // 1: 未登陆/未授信  2：正常  3：逾期
        conActive: 3,
        allMoney: '',
        useMoney: ''
      }
    },
    components: {
      XButton,
      Flexbox,
      FlexboxItem,
      Divider,
      XInput,
      Grid,
      GridItem,
      GroupTitle,
      Group
    },
    watch: {
      maskValue: {
        handler(val) {
          if (this.maskValue) {
            this.maskValue = (this.maskValue).toFixed(2)
          }
        },
        deep: true
      }
    },
    methods: {
      active(val) {
        this.conActive = val
      },
      runNext() {
        queryMyAccount({
          userId: this.userId,
          productCode: this.productCode, // 产品code
          sign: ''
        }).then(response => {
          this.disabled = true
          if (response) {
            if (response.returnCode === 'SUCCESS') {
              this.allMoney = response.data.allOverdrawBalance // 总额度
              this.useMoney = response.data.freeBalance // 可用额度
              if (response.data.isOverdue == '1') { // 正常
                this.statu = '2'
              } else if (response.data.isOverdue == '2') { // 逾期
                this.statu = '3'
              }
            }
          }
        }).catch(() => {
          this.disabled = false
        })
      },
      toLoan() {
        this.$router.push({ path: '/homeLoan', query: { money: this.useMoney }})
      }
    },
    mounted() {
      if (this.userId) {
        this.runNext()
      } else {
        this.statu = '1'
      }
    },
    computed: {
      ...mapState({
        userId: state => state.user.userId,
        productCode: state => state.user.productCode
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .home-initial{
    .header{
      width:100%;
      overflow: hidden;
      padding-bottom: 2rem;
      .weui-cells{
        border:none;
        background:transparent;
        .vux-x-input.weui-cell{
          border-radius: 2.5rem;
          background: #fff;
          margin: 0 15px;
          margin-bottom: 2rem;
          .weui-cell__hd{
            display: none;
          }
        }
      }
      .weui-cells:before, .weui-cells:after{
        border:none;
      }
      .weui-cell__bd.weui-cell__primary{
        background: #fff;
        border-radius: 2.5rem;
        height: 1.5rem;
        line-height: 1.5rem;
        padding: 0 15px;
        font-size: 1rem;
        input{
          text-align: center;
        }
      }
      /*.weui-cell__ft {*/
        /*position: absolute;*/
        /*right: 20px;*/
        /*bottom: 0.8rem;*/
      /*}*/
      .weui-cell:before{
        border-top:none;
      }
    }
    .content{
      .con-box{
        .weui-grids {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          padding: 15px;
          .weui-grid{
            padding: 5%;
            position: relative;
            width: 28%;
            border-radius: 0.5rem;
            box-shadow: 0px 0px 3px 3px #eee;
            .grid-center{
              color:#333;
              display: block;
              text-align: center;
            }
            .grid-int-active{
              display: none;
            }
          }
          .weui-grid.active{
            .grid-center{
              color:#41a1fd;
              display: block;
              text-align: center;
            }
            .grid-int-active{
              display: block;
              position: absolute;
              top:0;
              left:0;
              width:30px;
              height:30px;
              border-radius:0.5rem 0 0 0;
              background-image: url('../assets/img/home_int_active.png');
              background-size: 100% 100%;
            }
          }
        }
        .weui-grids:before{
          border:none;
        }
        button.weui-btn, input.weui-btn{
          background: #41a1fd;
          margin-top: 1rem;
        }
      }
      .con-box-other{
        .weui-grids {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          padding: 15px;
          font-size: 0.9rem;
          .weui-grid{
            padding: 5%;
            position: relative;
            width: 28%;
            border-radius: 0.5rem;
            box-shadow: 0px 0px 3px 3px #eee;
            .grid-center{
              color:#333;
              display: block;
              text-align: center;
            }
            .grid-int-active{
              display: none;
            }
          }
        }
        .weui-grids:before{
          border:none;
        }
        button.weui-btn, input.weui-btn{
          background: #41a1fd;
          margin-top: 5rem;
        }
      }
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
.home-initial{
  .header{
    background: -webkit-linear-gradient(#41a1fd, #76dbfd); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#41a1fd, #76dbfd); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#41a1fd, #76dbfd); /* Firefox 3.6 - 15 */
    background: linear-gradient(#41a1fd, #76dbfd); /* 标准的语法 */
    .header-title{
      color:#fff;
      font-size:1.2rem;
      padding-top:2.5rem;
      line-height: 1.5rem;
      display: block;
      text-align: center;
    }
    .header-use{
      font-size: 1.8rem;
      color:#fff;
      text-align: center;
      margin-top: 1rem;
    }
    .header-all{
      font-size: 1rem;
      color:#fff;
      text-align: center;
      margin-top: 1.5rem;
    }
    .overdue-img{
      width: 5rem;
      height: 5rem;
      right: -8px;
      position: absolute;
      top: -4px;
      img{
        width:100%;
        height:100%;
      }
    }
  }
  .content{
    margin-bottom:10%;
    .con-box{
      width:100%;
      background-color: #fff;
      margin-top: -2rem;
      border-radius: 1rem 1rem 0 0;
      .con-title{
        color:#41a1fd;
        font-size:1rem;
        padding: 15px 15px 0px 15px;
      }
      .con-info{
        padding: 0 15px;
        margin-top:1.5rem;
        line-height: 2.5rem;
        font-size: 0.9rem;
        img{
          width:1.2rem;
          height:1.2rem;
          vertical-align: middle;
        }
        span{
          color: #ffb400;
        }
      }
    }
    .con-box-other{
      width:100%;
      .con-title{
        color:#41a1fd;
        font-size:1rem;
        padding: 15px 15px 0px 15px;
      }
      .con-info{
        padding: 0 15px;
        line-height: 2.5rem;
        font-size: 0.9rem;
        img{
          width:1.2rem;
          height:1.2rem;
          vertical-align: middle;
        }
        span{
          color: #ffb400;
        }
      }
    }
  }
  .footer{
    margin-bottom: 55px;
    text-align: center;
    a{
      color: #b7b7b7;
      text-decoration:underline;
      font-size: 0.9rem;
    }
  }
}
</style>
