<template>
  <div class="loan-detail-see">
    <div class="header">
    </div>
    <div class="content">
      <div class="form-box" v-for="(item,index) in 3" :key="index">
        <div class="form-box-item">
          <div class="item-header">
            <label for="">
              <div>还款金额</div>
              <div>2018年01月29日 22:18:18</div>
            </label>
            <span>¥2400.00</span>
          </div>
          <div class="item-list">
            <div class="item-list-box">
              <label for="">已还本金</label>
              <span>1,000.00</span>
            </div>
            <div class="item-list-box">
              <label for="">已还利息</label>
              <span>8.88</span>
            </div>
            <div class="item-list-box">
              <label for="">平台管理费</label>
              <span>8.88</span>
            </div>
            <div class="item-list-box">
              <label for="">违约金</label>
              <span>8.88</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
  import { XButton, XInput, GroupTitle, Group, Cell, FormPreview } from 'vux'
  export default {
    data() {
      return {
      }
    },
    watch: {
    },
    created() {
    },
    components: {
      XButton,
      XInput,
      GroupTitle,
      Group,
      Cell,
      FormPreview
    },
    methods: {
      back() {
        this.$router.push({ path: '/home' })
      }
    },
    mounted() {
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .loan-detail-see{
    .header{

    }
    .content{
      .form-box{
        .weui-form-preview:before{
          border-top:none;
        }
        .weui-form-preview:after{
          border-bottom:none;
        }
        .weui-form-preview__label{
          text-align: left;
          text-align-last: inherit;
        }
        .weui-form-preview__hd>.weui-form-preview__label{
          color: #333;
        }
        .weui-cells:after{
          border-bottom:none;
        }
        .weui-cells{
          margin-top:0px;
          .weui-cell{
            font-size:0.9rem;
          }
        }

      }
      /*.weui-cell__ft {*/
      /*position: absolute;*/
      /*right: 20px;*/
      /*bottom: 0.8rem;*/
      /*}*/
    }
  }
</style>

<style lang="less" scoped rel="stylesheet/less">
  .loan-detail-see{
    height: 100%;
    .header{
      width:100%;
    }
    .content{
      width:100%;
      margin: auto;
      padding-bottom:15px;
      .form-box{
        margin-bottom: 15px;
        background: #fff;
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
