import StepperVue from '../../src/stepper-vue.vue'
import { shallowMount } from '@vue/test-utils'
describe('test',()=>{
    // restitue le composant
  const wrapper = shallowMount(StepperVue);


  it('Shoul return default height',()=>{
    expect(wrapper.props().CustomStyle.height).toBe('2px');
})
})