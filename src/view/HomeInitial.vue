<template>
  <div class="home-initial">
    <div class="header">
      <div class="header-title">期望额度</div>
      <group>
        <x-input v-model="maskValue"  placeholder="请输入100-20万之间100整数倍的数字" @on-click-clear-icon="abcd"></x-input>
      </group>
    </div>
    <div class="content">
      <div class="con-box">
        <div class="con-title">借款期限</div>
        <grid :cols="3" :show-lr-borders="false">
          <grid-item v-for="i in 3" :key="i" :class="{active: i==1}">
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
    </div>
    <div class="footer">
      <a href="">常见问题?</a>
    </div>
  </div>
</template>

<script>
  import { XButton, Flexbox, FlexboxItem, Divider, XInput, Grid, GridItem, GroupTitle, Group } from 'vux'
  export default {
    data () {
      return {
        maskValue: null,
        enterText: ''
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
        handler (val) {
          if (this.maskValue) {
            this.maskValue = (this.maskValue).toFixed(2)
          }
        },
        deep: true
      }
    },
    methods: {
      onEnter (val) {
        console.log('click enter!', val)
      },
      abcd () {
        console.log('123123')
      },
      onItemClick () {
        console.log('on item click')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .home-initial{
    .header{
      height:38%;
      width:100%;
      overflow: hidden;
      .weui-cells{
        border:none;
        background:transparent;
        .vux-x-input.weui-cell{
          border-radius: 2.5rem;
          background: #fff;
          margin: 0 15px;
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
  }
  .content{
    position: relative;
    min-height: 42%;
    margin-bottom:10%;
    .con-box{
      width:100%;
      position: absolute;
      background-color: #fff;
      top: -2rem;
      border-radius: 1rem 1rem 0 0;
      .con-title{
        color:#41a1fd;
        font-size:1.2rem;
        padding: 15px 15px 0px 15px;
      }
      .con-info{
        padding: 0 15px;
        margin-top:1.5rem;
        line-height: 3rem;
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
    text-align: center;
    a{
      color: #b7b7b7;
      text-decoration:underline;
    }
  }
}
</style>
