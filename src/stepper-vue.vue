<template>
  <div>
    <div id="stepper" :style="{ width: percentStage + '%' }"></div>
  </div>
</template>

<script>
export default {
  props: 
    {
      activePage: {
        type: Number,
        default: 1,

      },
      totalPage: {
        type: Number,
        default:3,
      },
    },
  computed:{
    percentStage(){
      return (this.activePage * 100) / this.totalPage;
    }
  }

};
</script>

<style lang="scss" scoped>
$primary-color: rgb(225, 68, 240);
#stepper {
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  width: 0%;
  background: $primary-color;
  transition: width 1s ease-out;
}

@keyframes fluidStep {
  100% {
    width: 100%;
  }
}
</style>
