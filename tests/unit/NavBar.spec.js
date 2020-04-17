import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

describe('NavBar.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'List'
    const wrapper = shallowMount(NavBar)
    expect(wrapper.text()).toContains(msg)
  })
})
