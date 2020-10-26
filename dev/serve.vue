<script>
import Vue from 'vue';
import StepperVue from '@/stepper-vue.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    StepperVue
  }
});
</script>

<template>
  <div id="app">
    <stepper-vue :active-page="2" :totalPage="10" :CustomStyle="{bg:'crimson',height:'6px'}" />
  </div>
</template>
