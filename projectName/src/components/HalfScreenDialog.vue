<template>
<div class="half">
  <div class="half-dialog">
    <div>了了了了了了了了了了了了了了了了了了了了了了了了了了了了了了</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'half-screen-dialog'

}
</script>

<style scoped>
.half{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.half .half-dialog{
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: #fff;
  height: auto;
  border-radius: 12px 12px 0 0;
  text-align: center;
  box-sizing: border-box;
  z-index: 99999;
  overflow: hidden auto;
}
</style>
