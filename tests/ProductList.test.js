import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ProductList from '../src/components/ProductList.vue'
import { products } from './products.js'

const mountList = (props = {}) => mount(ProductList, { props: { products, selected: null, ...props } })
const names = (w) => w.findAll('.product-list button').map((b) => b.find('span').text())
const button = (w, text) => w.findAll('button').find((b) => b.text().startsWith(text))
const page = (w) => w.find('nav.product-pager span').text()

describe('rows', () => {
  it('shows name, description and price with two decimals', () => {
    const w = mountList({ perPage: 5 })
    const cells = w.findAll('.product-list button')[0].findAll('span').map((s) => s.text())
    expect(cells).toEqual(['Trek SSL 2017', 'Racing bike.', '999.90 $'])
  })

  it('marks the discontinued bike with a class, and the selected one with another', () => {
    const w = mountList({ perPage: 5, selected: products[2] })
    const rows = w.findAll('.product-list button')
    expect(rows[1].classes()).toContain('discontinued')
    expect(rows[2].classes()).toContain('selected')
    expect(rows[2].attributes('aria-pressed')).toBe('true')
    expect(rows.filter((r) => r.classes().includes('selected'))).toHaveLength(1)
  })

  it('emits select with the bike clicked', async () => {
    const w = mountList({ perPage: 5 })
    await w.findAll('.product-list button')[3].trigger('click')
    expect(w.emitted('select')[0]).toEqual([products[3]])
  })
})

describe('search', () => {
  it('keeps the names that match, case-insensitive', async () => {
    const w = mountList({ perPage: 5 })
    await w.find('#filterName').setValue('cO')
    expect(names(w)).toEqual(['Cosmic Cobat 2015'])
    await w.find('#filterName').setValue('2015')
    expect(names(w)).toEqual(['City XT 2015', 'Cosmic Cobat 2015'])
  })

  it('says so when nothing matches', async () => {
    const w = mountList()
    await w.find('#filterName').setValue('zzz')
    expect(names(w)).toEqual([])
    expect(w.text()).toContain('No bike matches that name.')
    expect(page(w)).toBe('Page 1 of 1')
  })
})

describe('sort', () => {
  it('sorts ascending on the first click, descending on the second', async () => {
    const w = mountList({ perPage: 5 })
    await button(w, 'Price').trigger('click')
    expect(names(w)).toEqual(['Cosmic Cobat 2015', 'City XT 2015', 'Hero DTB 2016', 'Trek SSL 2017', 'S-WORKS 2016'])
    expect(button(w, 'Price').text()).toBe('Price ↑')
    expect(button(w, 'Price').attributes('aria-pressed')).toBe('true')
    await button(w, 'Price').trigger('click')
    expect(names(w)[0]).toBe('S-WORKS 2016')
    expect(button(w, 'Price').text()).toBe('Price ↓')
  })

  it('sorts by name and by modification date, and a new button starts ascending again', async () => {
    const w = mountList({ perPage: 5 })
    await button(w, 'Name').trigger('click')
    expect(names(w)[0]).toBe('City XT 2015')
    await button(w, 'Name').trigger('click')
    expect(names(w)[0]).toBe('Trek SSL 2017')
    await button(w, 'Date').trigger('click')
    expect(names(w)).toEqual(['City XT 2015', 'Cosmic Cobat 2015', 'Hero DTB 2016', 'S-WORKS 2016', 'Trek SSL 2017'])
    expect(button(w, 'Name').text()).toBe('Name')
  })

  it('sorts the filtered list, not the whole catalogue', async () => {
    const w = mountList({ perPage: 5 })
    await w.find('#filterName').setValue('2016')
    await button(w, 'Price').trigger('click')
    await button(w, 'Price').trigger('click')
    expect(names(w)).toEqual(['S-WORKS 2016', 'Hero DTB 2016'])
  })
})

describe('pagination', () => {
  it('shows two bikes a page by default and counts the pages', () => {
    const w = mountList()
    expect(names(w)).toEqual(['Trek SSL 2017', 'City XT 2015'])
    expect(page(w)).toBe('Page 1 of 3')
  })

  it('moves with Next and Previous and disables them at the ends', async () => {
    const w = mountList()
    expect(button(w, '< Previous').attributes('disabled')).toBeDefined()
    expect(button(w, 'Next >').attributes('disabled')).toBeUndefined()
    await button(w, 'Next >').trigger('click')
    expect(names(w)).toEqual(['Cosmic Cobat 2015', 'Hero DTB 2016'])
    await button(w, 'Next >').trigger('click')
    expect(names(w)).toEqual(['S-WORKS 2016'])
    expect(page(w)).toBe('Page 3 of 3')
    expect(button(w, 'Next >').attributes('disabled')).toBeDefined()
    await button(w, 'Next >').trigger('click')
    expect(page(w)).toBe('Page 3 of 3')
    await button(w, '< Previous').trigger('click')
    expect(page(w)).toBe('Page 2 of 3')
  })

  it('takes the page size from the parent', () => {
    const w = mountList({ perPage: 3 })
    expect(names(w)).toHaveLength(3)
    expect(page(w)).toBe('Page 1 of 2')
  })

  it('drops the selection when the page changes', async () => {
    const w = mountList({ selected: products[0] })
    await button(w, 'Next >').trigger('click')
    expect(w.emitted('select').at(-1)).toEqual([null])
  })

  it('goes back to page 1 on a new search or a new order', async () => {
    const w = mountList()
    await button(w, 'Next >').trigger('click')
    await button(w, 'Next >').trigger('click')
    await w.find('#filterName').setValue('201')
    expect(page(w)).toBe('Page 1 of 3')
    await button(w, 'Next >').trigger('click')
    await button(w, 'Price').trigger('click')
    expect(page(w)).toBe('Page 1 of 3')
  })
})
