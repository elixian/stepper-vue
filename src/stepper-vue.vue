<template>
  <div>
    <div
      id="stepper"
      :style="
        `width: ${percentStage}%; 
        background:${CustomStyle.bg}; 
        height:${CustomStyle.height}; `
      "
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    activePage: {
      type: Number,
      required:true,
      default: 1
    },
    totalPage: {
      type: Number,
      required:true,
      default: 3
    },
    CustomStyle: {
      type: Object,
      default: () => {
        return {
          bg: 'rgb(225, 68, 240)',
          height: '2px'
        }
      }
    }
  },
  computed: {
    percentStage() {
      return (this.activePage * 100) / this.totalPage
    }
  }
}
</script>

<style lang="scss" scoped>
#stepper {
  position: absolute;
  top: 0;
  left: 0;
  transition: width 1s ease-out;
}

@keyframes fluidStep {
  100% {
    width: 100%;
  }
}
</style>
