import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from '../src/App.vue'

describe('app', () => {
  it('hands the catalogue to the list and shows the detail of the bike clicked', async () => {
    const w = mount(App)
    expect(w.find('h1').text()).toBe('Spoke & Wheel')
    expect(w.find('section[aria-live]').exists()).toBe(false)
    await w.findAll('.product-list button')[1].trigger('click')
    expect(w.find('section[aria-live] h2').text()).toBe('City XT 2015')
    expect(w.find('section[aria-live] img').attributes('src')).toContain('images.unsplash.com')
  })
})
