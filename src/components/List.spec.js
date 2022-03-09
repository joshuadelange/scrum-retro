/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import List from './List.vue'
import test_globals from '../utilities/test_globals.js'

describe('List', () => {

  it('should display cards', () => {

    // set up the first category as a list
    const wrapper = mount(List, {
      props: { category_id: 1 },
      global: test_globals
    })

    // make sure there are 2 cards present
    expect(wrapper.findAll('.card').length).toEqual(2)

  })

  it('should add a card', async () => {

    // set up a category as list
    const wrapper = mount(List, {
      props: { category_id: 1 },
      global: test_globals
    })

    // check we have two cards
    expect(wrapper.findAll('.card').length).toEqual(2)

    // click the add card button
    await wrapper.find('button').trigger('click');

    // make sure there are now three cards
    expect(wrapper.findAll('.card').length).toEqual(3)

    // make sure the card is in edit mode
    expect(wrapper.find('.form').exists()).toBe(true)

  })

})