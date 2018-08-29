<template>
  <div style="height:100%;">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <drawer>
      <view-box ref="viewBox">
        <transition
          :name="viewTransition">
          <router-view class="router-view"></router-view>
        </transition>

        <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom">
          <tabbar-item :link="{path:'homeInitial'}" :selected="this.$route.path === '/home/homeInitial'">
            <span class="demo-icon-22" slot="icon">
              <img src="../assets/img/home.png" alt="" v-if="this.$route.path === '/home/homeInitial'">
              <img src="../assets/img/home_no.png" alt="" v-else>
            </span>
            <span class="tabbar-item-title" slot="label">首页</span>
          </tabbar-item>
          <tabbar-item :link="{path:'transaction'}" :selected="this.$route.path === '/home/transaction'">
            <span class="demo-icon-22" slot="icon">
              <img src="../assets/img/transaction.png" alt="" v-if="this.$route.path === '/home/transaction'">
              <img src="../assets/img/transaction_no.png" alt="" v-else>
            </span>
            <span class="tabbar-item-title" slot="label"><span>交易记录</span></span>
          </tabbar-item>
          <tabbar-item :link="{path:'user'}" :selected="this.$route.path === '/home/user'">
            <span class="demo-icon-22" slot="icon">
              <img src="../assets/img/user.png" alt="" v-if="this.$route.path === '/home/user'">
              <img src="../assets/img/user_no.png" alt="" v-else>
            </span>
            <span class="tabbar-item-title" slot="label">我的</span>
          </tabbar-item>
        </tabbar>

      </view-box>
    </drawer>
  </div>
</template>

<script>
  import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
  import { mapState, mapActions } from 'vuex'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Radio,
      Group,
      Cell,
      Badge,
      Drawer,
      ButtonTab,
      ButtonTabItem,
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      Loading,
      Actionsheet
    },
    methods: {
      abc () {
        console.log(this.$route)
      },
      ...mapActions([
        'updateDemoPosition'
      ])
    },
    mounted () {
    },
    beforeDestroy () {
    },

    computed: {
      ...mapState({
        // route: state => state.route,
        deviceready: state => state.app.deviceready,
        demoTop: state => state.vux.demoScrollTop,
        // isLoading: state => state.vux.isLoading,
        direction: state => state.direction
      }),
      leftOptions () {
        return {
          showBack: this.$route.path !== '/home/homeInitial'&&this.$route.path === '/home/transaction'&&this.$route.path === '/home/user'
        }
      },
      isShowNav () {
        if (this.entryUrl.indexOf('hide-nav') > -1) {
          return false
        }
        return true
      },
      rightOptions () {
        return {
          showMore: true
        }
      },
      viewTransition () {
        if (!this.direction) return ''
        return 'vux-pop-in' + (this.direction === 'forward' ? 'in' : 'out')
      }
    },
    data () {
      return {
        entryUrl: document.location.href,
        showMenu: false,
        drawerVisibility: false,
        showMode: 'push',
        showModeValue: 'push',
        showPlacement: 'left',
        showPlacementValue: 'left',
        isLoading: false
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .demo-icon-22 {
    font-size: 22px;
    color: #888;
  }

  .vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
    color: #F70968;
  }
  .vux-demo-tabbar .tabbar-item-title {
    color: #333;
  }
  .vux-demo-tabbar .weui-bar__item_on .tabbar-item-title {
    color: #41a1fd;
  }
  .demo-icon-22:before {
    content: attr(icon);
  }
  .vux-demo-tabbar-component {
    background-color: #F70968;
    color: #fff;
    border-radius: 7px;
    padding: 0 4px;
    line-height: 14px;
  }
  .weui-tabbar__icon + .weui-tabbar__label {
    margin-top: 0!important;
  }
  .vux-demo-header-box {
    z-index: 100;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }


  .demo-icon {
    font-family: 'vux-demo';
    font-size: 20px;
    color: #04BE02;
  }

  .demo-icon-big {
    font-size: 28px;
  }

  .demo-icon:before {
    content: attr(icon);
  }

  .router-view {
    width: 100%;
    height: 100%;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .menu-title {
    color: #888;
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .weui-tabbar{
    background-color: #FFFFFF;
    .vux-demo-tabbar .weui-bar__item_on .tabbar-item-title {
      color: #41a1fd;
    }
  }
</style>
