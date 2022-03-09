/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import Board from './Board.vue'
import store from './../store'
import FontAwesomeIcon from "./../utilities/icons";

describe('Board', () => {

  it('should display four list', () => {

    const wrapper = mount(Board, { global: { components: { FontAwesomeIcon }, plugins: [store] }})

    expect(wrapper.findAll('.list').length).toEqual(4)

  })

})