import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('App', () => {
  it('hands the catalogue to the list and shows the detail of the bike clicked', async () => {
    const wrapper = mount(App)

    expect(wrapper.find('h1').text()).toBe('Spoke & Wheel')
    expect(wrapper.find('[data-testid=detail]').exists()).toBe(false)

    await wrapper.findAll('[data-testid=product]')[1].trigger('click')

    expect(wrapper.find('[data-testid=detail-name]').text()).toBe('City XT 2015')
    expect(wrapper.find('[data-testid=detail-picture]').attributes('src')).toContain('images.unsplash.com')
  })
})
