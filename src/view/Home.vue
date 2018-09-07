<template>
  <div style="height:100%;">
    <drawer>
      <view-box ref="viewBox" :body-padding-bottom="phoneType">
        <transition name="transitionRouter">
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
  import { Drawer, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
  import { mapState, mapActions } from 'vuex'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Drawer,
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      Loading
    },
    methods: {
      ...mapActions({})
    },
    mounted() {
    },
    beforeDestroy() {
    },
    computed: {
      phoneType() {
        var u = navigator.userAgent
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
        if (isiOS) {
          return '110px'
        } else {
          return '55px'
        }
      },
      ...mapState({
        // route: state => state.route,
      })
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

  .vux-demo-tabbar .tabbar-item-title {
    color: #333;
  }
  .vux-demo-tabbar .weui-bar__item_on .tabbar-item-title {
    color: #41a1fd;
  }
  .demo-icon-22:before {
    content: attr(icon);
  }

  .router-view {
    width: 100%;
    height: 100%;
  }
</style>
