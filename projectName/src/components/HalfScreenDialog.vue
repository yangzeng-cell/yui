<template>
    <div class="Dialog__cover" v-if="showDialogCtr" @mousedown.self="closeDialog">
      <div class="Dialog__content animated" :class="`${showCards ? 'animated_up' : 'animated_down'} ${isIphoneX ?'iphoneX_touchbar' : ''}`" :style="`animation-duration: ${animationDuration ? animationDuration + 'ms;': '.2s;'} ${styleCtr}`">
       <slot></slot>
      </div>
    </div>
</template>
<script>
import { isIphonex } from '@/util/util.js'
export default {
  name: 'half-screen-dialog',
  props: {
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    dialogMode: {
      type: Number,
      default: 1 // 模式1：点击蒙层可以直接关闭蒙层；模式2：点击蒙层不能关闭蒙层，必须点击弹层上的关闭按钮才能关闭
    },
    visible: {
      type: Boolean,
      default: false
    },
    animationDuration: { // 蒙层动画时间
      type: Number,
      default: 200
    },
    styleCtr: { // 样式控制字符串
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isIphoneX: false,
      showDialogCtr: false,
      showCards: false
    }
  },
  watch: {
    visible (newVal) {
      if (newVal) {
        this.showDialogCtr = true
        this.showCards = true
      } else {
        this.showCards = false
      }
      this.controlBodyScroll(newVal)
    },
    showCards (newVal) {
      if (newVal === false) {
        setTimeout(() => {
          this.showDialogCtr = false
        }, 200)
      }
    }
  },
  methods: {
    closeDialog () {
      this.$emit('update:visible', false)
      console.log(111111, this.closeOnClickModal)
      if (!this.closeOnClickModal) {
        return
      }
      this.$emit('close')
    },
    // 用于在展示弹窗时禁止主页面滚动，同时允许弹窗内部滚动
    controlBodyScroll (isStop) {
      const bodyEl = document.body
      if (isStop) {
        this.bodyTop = window.pageYOffset || document.documentElement.scrollTop
        bodyEl.style.position = 'fixed'
        bodyEl.style.top = `${-this.bodyTop}px`
      } else {
        bodyEl.style.position = ''
        bodyEl.style.top = ''
        window.scrollTo(0, this.bodyTop)
      }
    }
  },
  created () {
    this.isIphoneX = isIphonex()
  }
}
</script>
<style lang="less">
    // @rem : 2/75rem;
    // @rem: 1px;
   .Dialog__cover{
        width:100vw;
        height: 100vh;
        overflow: hidden;
        position: fixed;
        background:rgba(0,0,0,0.5);
        z-index:99999;
        top:0;
        left:0;
        top:0;
        bottom: 0;
        .Dialog__content{
            position: absolute;
            bottom: 0;
            right:0;
            left:0;
            background-color: #fff;
            height: auto;
            border-radius: 12*@rem 12*@rem 0 0;
            text-align: center;
            box-sizing: border-box;
            z-index:99999;
            max-height: 2/3*100vh;
            overflow: hidden auto;
        }
    }
    .animated {
        animation-duration: .2s;
        animation-fill-mode: both;
        transition-timing-function: ease;
    }
    .animated_up {
        animation-name: up;
    }
    .animated_down {
        animation-name: down;
    }
    @keyframes up {
        from {
            transform: translate3d(0, 100%, 0);
        }
        to {
            transform: translate3d(0, 0, 0);
            visibility: visible;
        }
    }
    @keyframes down {
        from {
            transform: translate3d(0, 0, 0);
            visibility: visible;
        }
        to {
            transform: translate3d(0, 100%, 0);
            display: none;
        }
    }
    .iphoneX_touchbar{
        // padding-bottom:  e("calc(34 * var(--remStyle))");
         padding-bottom:  34*@rem;
    }
</style>
