import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ProductDetail from '../src/components/ProductDetail.vue'
import { products } from './products.js'

describe('detail', () => {
  it('shows every field of the bike, the picture on the right', () => {
    const w = mount(ProductDetail, { props: { product: { ...products[2], imageUrl: 'https://example.test/cobat.jpg' } } })
    expect(w.find('h2').text()).toBe('Cosmic Cobat 2015')
    expect(w.find('h3').text()).toBe('Great bike.')
    expect(w.findAll('p').map((p) => p.text())).toEqual(['Price: 499.90 $', 'Fixed price? No', 'Discontinued? No', 'Modified date: 2015-05-17'])
    const img = w.find('img')
    expect(img.attributes('src')).toBe('https://example.test/cobat.jpg')
    expect(img.attributes('alt')).toBe('Cosmic Cobat 2015')
    expect(img.attributes('width')).toBe('200')
    expect(img.classes()).toContain('float-end')
  })

  it('says Yes in red when the bike is discontinued, and Yes for a fixed price', () => {
    const w = mount(ProductDetail, { props: { product: { ...products[1], fixedPrice: true } } })
    const lines = w.findAll('p')
    expect(lines[1].text()).toBe('Fixed price? Yes')
    expect(lines[2].text()).toBe('Discontinued? Yes')
    expect(lines[2].classes()).toContain('text-danger')
  })
})
