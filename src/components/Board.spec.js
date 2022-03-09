/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import Board from './Board.vue'
import test_globals from '../utilities/test_globals.js'

describe('Board', () => {

  it('should display four list', () => {

    const wrapper = mount(Board, { global: test_globals })

    expect(wrapper.findAll('.list').length).toEqual(4)

  })

})