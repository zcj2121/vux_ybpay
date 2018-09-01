<template>
  <div class="progress-bar">
    <div class="bar-header">
      <div class="step-initial">
        <div class="step-item active">
          <div class="step-circle">
            <div class="step-number">1</div>
          </div>
          <div class="step-line"></div>
          <div class="step-title">身份认证</div>
        </div>
        <div class="step-item">
          <div class="step-circle">
            <div class="step-number">2</div>
          </div>
          <div class="step-line"></div>
          <div class="step-title">授权认证</div>
        </div>
        <div class="step-item">
          <div class="step-circle">
            <div class="step-number">3</div>
          </div>
          <div class="step-line"></div>
          <div class="step-title">完善信息</div>
        </div>
        <div class="step-item">
          <div class="step-circle">
            <div class="step-number">4</div>
          </div>
          <div class="step-line"></div>
          <div class="step-title">获取额度</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Flow, FlowState, FlowLine} from 'vux'
  export default {
    name: 'ProgressBar',
    props: '',
    data () {
      return {
        maskValue: ''
      }
    },
    components: {
      Flow,
      FlowState,
      FlowLine
    },
    methods: {
      onItemClick () {
        console.log('on item click')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .progress-bar{
    .bar-header{
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
  .progress-bar{
    .bar-header{
      background: #fff;
      overflow: hidden;
      padding: 20px 15px;
      .step-initial{
        .step-item{
          float: left;
          width:25%;
          position: relative;
          color: #333;
          font-size:0.8rem;
          .step-circle{
            margin: auto;
            width: 1.5rem;
            height: 1.5rem;
            background: #c7c7c7;
            border-radius: 50%;
            border: 0.3rem solid #e7e7e7;
            color: #fff;
            text-align: center;
            position: relative;
            .step-number{
              position: absolute;
              width:100%;
              text-align: center;
              z-index: 1;
              line-height: 1.5rem;
            }
          }
          .step-line{
            height:0px;
            width:100%;
            position: absolute;
            top: 1rem;
            border-bottom:0.2rem solid #c7c7c7;
          }
          .step-title{
            margin-top: 0.5rem;
            text-align: center;
          }
        }
        .step-item.active{
          color: #41a1fd;
          .step-circle{
            background: #41a1fd;
            border: 0.3rem solid #bddefe;
          }
          .step-line{
            border-bottom:0.2rem solid #41a1fd;
          }
        }
      }
    }
  }
</style>
