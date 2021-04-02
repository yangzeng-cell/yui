<template>
  <div class="demo-page">
    <pre-button @click="clickbtn">显示蒙层</pre-button>
    <half-screen-dialog
      :visible="showDialog"
      :close-on-click-modal="true"
      :style-ctr="'max-height:66%; border-radius: 8px 8px 0 0;'"
      :animation-duration="300"
      @close="closeDialogFn"
    >
      <div class="dialog__content">
        蒙层slot内容
        <button @click="closeDialogFn">关闭蒙层</button>
      </div>
    </half-screen-dialog>
  </div>
</template>

<script>
import halfScreenDialogDemo from '../components/HalfScreenDialog'
export default {
  name: 'halfScreenDialogDemo',
  components: {
    halfScreenDialogDemo
  },
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    clickbtn () {
      this.showDialog = true
    },
    closeDialogFn () {
      this.showDialog = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.demo-page{
  min-height: 100vh;
}
.dialog__content{
  padding: 30px 24px 24px 24px;
  button{
    margin: 10px auto;
    display: block;
    background-color: #42b983;
    padding: 6px;
    border-radius: 3px;
    color:#fff;
  }
}
</style>
