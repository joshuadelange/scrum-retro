/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import Card from './Card.vue'
import test_globals from '../utilities/test_globals.js'

describe('Card', () => {

  it('should update on edit', async () => {

    const existing_title = 'API finally pushed to prod'
    const new_title = 'adjusted title'

    // set up a card
    const wrapper = mount(Card, {
      props: { id: 1 },
      global: test_globals
    })

    // check the name at the beginning
    expect(wrapper.find('.name').text()).toBe(existing_title)

    // click the edit button
    await wrapper.find('.edit').trigger('click')

    // make sure we swiched to the form
    expect(wrapper.find('.form').exists()).toBe(true)

    // adjust the name
    await wrapper.find('.form input[type="text"]').setValue(new_title)

    await wrapper.find('.form button').trigger('click')

    // check the name at the beginning
    expect(wrapper.find('.name').text()).toBe(new_title)

  })

  it('should remove on delete', async () => {

    // quick mock for the confirm method
    window.confirm = function () { return true; }

    // set up the first category as a Card
    const wrapper = mount(Card, {
      props: { id: 1 },
      global: test_globals
    })

    // make sure the name comes through
    expect(wrapper.vm.card.name).not.toBe(undefined)

    // delete the card
    await wrapper.find('.delete').trigger('click')

    // make sure the name is gone (vuex has removed the data)
    expect(wrapper.vm.card.name).toBe(undefined)

  })

})