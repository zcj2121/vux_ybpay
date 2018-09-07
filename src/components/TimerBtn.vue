<template>
  <x-button plain type="primary" @click.native="run" :disabled="disabled || time > 0">{{ text }}</x-button>
</template>

<script>
  import { XButton } from 'vux'
  export default{
    components: {
      XButton
    },
    props: {
      second: {
        type: Number,
        default: 60
      }
    },
    data() {
      return {
        time: 0,
        disabled: false
      }
    },
    methods: {
      run: function() {
        this.$emit('run')
      },
      start: function() {
        this.time = this.second
        console.log(this.disabled)
        this.timer()
      },
      timer() {
        if (this.time > 0) {
          this.time--
          setTimeout(this.timer, 1000)
        } else {
          this.disabled = false
        }
      }

    },
    computed: {
      text() {
        return this.time > 0 ? this.time + 's 后重获取' : '获取验证码'
      }
    }
  }
</script>


<style lang="less" scoped rel="stylesheet/less">
  .weui-btn{
    font-size: 0.4rem;
    padding:0;
  }
</style>
