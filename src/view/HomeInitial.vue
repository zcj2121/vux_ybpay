<template>
  <div class="home-initial">
    <div class="header">
      <div class="header-title">期望额度</div>
      <x-input mask="999 9999 9999" v-model="maskValue" :max="13" placeholder="请输入100-20万之间100整数倍的数字"></x-input>
    </div>
    <div class="content">
      <div class="con-box">
        <div class="con-title">期望额度</div>
        <grid :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item link="/component/cell"  :label="123123">
            <img slot="icon" src="../assets/vux_logo.png">
          </grid-item>
          <grid-item :link="{ path: '/component/cell'}" :label="123123">
            <img slot="icon" src="../assets/vux_logo.png">
          </grid-item>
          <grid-item link="/component/cell" @on-item-click="onItemClick">
            <img slot="icon" src="../assets/vux_logo.png">
            <span slot="label">123123</span>
          </grid-item>
        </grid>
        <x-button type="primary" style="border-radius:99px;width: 60%;">primary</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { XButton, Flexbox, FlexboxItem, Divider, XInput, Grid, GridItem, GroupTitle } from 'vux'
  export default {
    data () {
      return {
        maskValue: ''
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
      GroupTitle
    },
    methods: {
      onItemClick () {
        console.log('on item click')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .home-initial{
    .header{
      .weui-cell__bd.weui-cell__primary{
        background: #fff;
        border-radius: 2.5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        padding: 0 30px;
        font-size: 0.8rem;
        input{
          text-align: center;
        }
      }
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
            width: 25%;
            border-radius: 0.5rem;
            box-shadow: 0px 0px 3px 3px #eee;
          }
        }
        .weui-grids:before{
          border:none;
        }
      }
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
.home-initial{
  .header{
    height:30%;
    width:100%;
    background: -webkit-linear-gradient(#41a1fd, #76dbfd); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#41a1fd, #76dbfd); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#41a1fd, #76dbfd); /* Firefox 3.6 - 15 */
    background: linear-gradient(#41a1fd, #76dbfd); /* 标准的语法 */
    .header-title{
      padding-top:10%;
      line-height: 1.5rem;
      display: block;
      text-align: center;
    }
  }
  .content{
    position: relative;
    .con-box{
      width:100%;
      position: absolute;
      background-color: #fff;
      top: -2rem;
      border-radius: 1rem 1rem 0 0;
      .con-title{
        padding: 15px 15px 0px 15px;
      }
    }
  }
}
</style>
