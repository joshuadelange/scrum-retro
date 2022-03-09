/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import Votes from './Votes.vue'
import test_globals from '../utilities/test_globals.js'

describe('Votes', () => {

  it('should show votes', () => {

    // set up votes for a card
    const wrapper = mount(Votes, {
      props: { card_id: 1 },
      global: test_globals
    })

    // make sure it has three votes on this card
    expect(wrapper.findAll('.vote').length).toBe(4)

  })

  it('should add a vote', async () => {

    // set up votes
    const wrapper = mount(Votes, {
      props: { card_id: 1 },
      global: test_globals
    })

    // check it starts right
    expect(wrapper.findAll('.vote').length).toBe(4)

    // add a vote
    await wrapper.find('.vote--add').trigger('click')

    // check it has an extra vote
    expect(wrapper.findAll('.vote').length).toBe(5)

  })

  it('should remove a vote', async () => {

    // set up votes
    const wrapper = mount(Votes, {
      props: { card_id: 1 },
      global: test_globals
    })

    // check it starts right
    expect(wrapper.findAll('.vote').length).toBe(5)

    // remove a vote
    await wrapper.find('.vote:first-child').trigger('click')

    // check it has an extra vote
    expect(wrapper.findAll('.vote').length).toBe(4)

  })

})